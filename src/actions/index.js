import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const START_FETCH = 'START_FETCH';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs = () => (dispatch) => {
	dispatch({ type: START_FETCH });
	axios
		.get('http://localhost:3333/smurfs')
		.then((res) => {
			console.log('res: ', res);
			dispatch({
				type: FETCH_SMURF_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			console.log('err: ', err);
			dispatch({
				type: FETCH_SMURF_FAILURE,
				payload: err.message,
			});
		});
};

export const addSmurf = (smurf) => {
	return {
		type: ADD_SMURF,
		payload: smurf,
	};
};
export const setError = (err) => {
	return {
		type: SET_ERROR,
		payload: err,
	};
};
