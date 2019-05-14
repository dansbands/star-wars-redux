export const getPerson = person => {
	return dispatch => {
		dispatch(getPersonStarted());
		
		return fetch(person.url, {
			method: 'GET',
		})
		.then(res => res.json())
		.then(data => {
			// console.log('>>>>>>>>getPersonSuccess', data.films);
				dispatch(getFilms(data))
			})
		.catch(err => console.log(err))	
	} 
}

export const getFilms = data => {
	return dispatch => {
		let newFilms = []
		if (data.films) {
			data.films.map(async f => {
				const res = await fetch(f);
				const info = await res.json();
				return newFilms.push(info);
			})
			// console.log('!!!!! getFilms', newFilms);
		}
	
		dispatch({
			type: 'GET_FILMS',
			payload: newFilms
		})
	
		dispatch(getPersonSuccess(data))
	} 
}

export const getPersonStarted = () => dispatch => {
	dispatch({
		type: 'GET_PERSON_STARTED'
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
