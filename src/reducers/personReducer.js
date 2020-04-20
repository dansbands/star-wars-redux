import {
  GET_PERSON_START,
  GET_PERSON_SUCCESS,
  GET_PERSON_FAILURE,
  GET_FILMS_START,
  GET_FILMS_SUCCESS,
  GET_FILMS_FAILURE
} from "../constants";

export default (state = { loading: false, person: false }, action) => {
  // console.log('PersonReducer', action);

  let newState;
  console.log("reducer", action);

  switch (action.type) {
    case GET_PERSON_SUCCESS:
      newState = {
        ...state,
        loading: false,
        person: action.payload
      };
      return newState;
    case GET_FILMS_SUCCESS:
      newState = {
        ...state,
        films: action.payload
      };
      return newState;
    default:
      return state;
  }
};
