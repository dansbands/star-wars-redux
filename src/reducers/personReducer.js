export default (state = { loading: false, person: false }, action) => {
  // console.log('PersonReducer', action);

  let newState;

  switch (action.type) {
    case 'GET_PERSON_STARTED':
      newState = {
        ...state,
        loading: true
      } 
      return newState
    case 'GET_FILMS':
      newState = {
        ...state,
        films: action.payload
      }
      return newState
    case 'GET_PERSON_SUCCESS':
      newState = {
        ...state,
        loading: false,
        person: action.payload
      }
      return newState
    default:
      return state
  }
}