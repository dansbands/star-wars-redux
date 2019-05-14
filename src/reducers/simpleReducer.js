export default (state = { loading: false, person: [] }, action) => {
  console.log('SimpleReducer', action);

  let newState;

  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    case 'GET_PERSON_STARTED':
      return {
        loading: action.payload
      }
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