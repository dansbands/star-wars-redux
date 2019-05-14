export default (state = { loading: false, person: [] }, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    case 'GET_PERSON_STARTED':
      return {
        loading: action.payload
      }
    case 'GET_PERSON_SUCCESS':
      console.log('getPersonSuccessReducer');
      return {
        loading: false,
        person: action.payload
      }
    default:
      return state
  }
}