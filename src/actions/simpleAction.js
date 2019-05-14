export const simpleAction = () => dispatch => {
	dispatch({
		type: 'SIMPLE_ACTION',
		payload: 'result_of_simple_action'
	})
}

export const getPerson = person => dispatch => {
	
	dispatch(getPersonStarted())
	
	return fetch(person.url, {
		method: 'GET',
	})
	.then(res => res.json())
	.then(data => {
		console.log('>>>>>>>>getPersonSuccess', data.films);
			dispatch(getPersonSuccess(data))
		})
	// 	.catch(err => ({
	// 		dispatch(getPersonFailure(err.message))
	// 	})	
}

export const getFilms = () => dispatch => {
	dispatch({
		type: 'GET_FILM',
		payload: 'film'
	})
}

export const getPersonStarted = () => dispatch => {
	dispatch({
		type: 'GET_PERSON_STARTED',
		payload: true
	})
}

export const getPersonSuccess = (data) => dispatch => {
	dispatch({
		type: 'GET_PERSON_SUCCESS',
		payload: data
	})
}

export const getPersonFailure = () => dispatch => {
	dispatch({
		type: 'GET_PERSON_FAILURE',
		payload: false
	})
}
