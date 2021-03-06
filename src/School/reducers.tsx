/// <reference path="typings.d.ts" />

function school(state: SchoolState = { schools: [] }, action: Action) {
  switch(action.type) {
    case 'START_SCHOOLS_INDEX':
      return Object.assign({}, state, {
        ifFetching: true
      })

    case 'SUCCESS_SCHOOLS_INDEX':
      return Object.assign({}, state, {
        ifFetching: false,
        schools: action.data
      })

    case 'FAIL_SCHOOLS_INDEX':
      return Object.assign({}, state, {
        ifFetching: false,
        error: true
      })

    default:
      return state;
  }
}
export default school;

