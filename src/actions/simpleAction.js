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
			dispatch(getFilms(data))
		})
	// 	.catch(err => ({
	// 		dispatch(getPersonFailure(err.message))
	// 	})	
}

export const getFilms = data => dispatch => {
	
	let newFilms = []
	if (data.films) {
		data.films.map(f => {
			return fetch(f)
			.then(res => res.json())
			.then(info => newFilms.push(info))
		})
		console.log('!!!!! getFilms', newFilms);
	}

	dispatch({
		type: 'GET_FILMS',
		payload: newFilms
	})

	dispatch(getPersonSuccess(data))
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
