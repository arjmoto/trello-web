import React, { useState, useEffect } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { isEmpty } from 'lodash'
import './BoardContent.scss'
import './BoardContent.scss'
import Column from 'components/Column/Column'
import { mapOrder } from 'utilities/sorts'
import { applyDrag } from 'utilities/dragDrop'
import { initialData } from 'actions/initialData'

function BoardContent() {
  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState([])
  useEffect(() => {
    const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
    if (boardFromDB) {
      setBoard(boardFromDB)
      // sort column
      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
    }
  }, [])
  if (isEmpty(board)) {
    return <div className="not-found" style = {{ 'padding': '10px', 'color': 'white' }}>Board not found</div>
  }
  const onColumnDrop = (dropResult) => {
    // eslint-disable-next-line no-console
    // console.log(dropResult)
    let newColumns = [...columns]
    newColumns = applyDrag(newColumns, dropResult)
    let newBoard = { ...board }
    newBoard.columnOrder = newColumns.map(c => c.id)
    newBoard.columns = newColumns
    // console.log(newBoard)
    setColumns( newColumns )
    setBoard(newBoard)
    // console.log(newColumns)
    // console.log(columns)
  }
  const onCardDrop = (columnid, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null ) {
      let newColumns = [...columns]
      let currentColumn = newColumns.find(c => c.id === columnid)
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult)
      currentColumn.cardOrder = currentColumn.cards.map(i => i.id)
      // console.log(newColumns)
      setColumns(newColumns)
      // console.log(currentColumn)
      // console.log(columnid)
    }

  }
  return (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={index => columns[index]}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'column-drop-preview'
        }}
      >
        {columns.map((column, index) => (
          <Draggable key = {index}>
            <Column column = {column} onCardDrop = {onCardDrop}/>
          </Draggable>
        ) )}
      </Container>

    </div>
  )
}

export default BoardContent