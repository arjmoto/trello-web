/**
 * Created by sonquachdev's author on 12/07/2021
 */
// onKeyDown
export const saveContentAfterPressEnter = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    e.target.blur()
  }
}
// Select all input values when click
export const selectAllInLineText = (e) => {
  e.target.focus()
  e.target.select()
  //document.exeComand('selectAll', false, null)
}
