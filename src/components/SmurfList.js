import React from 'react';
import { useSelector } from 'react-redux';
import Smurf from './Smurf';

const SmurfList = () => {
	const isLoading = useSelector((state) => state.isLoading);
	const smurfList = useSelector((state) => state.smurfsArray);

	const renderSmurfs = () => {
		return smurfList.map((smurf) => <Smurf key={smurf.id} smurf={smurf} />);
	};

	return (
		<div className='listContainer'>
			{isLoading ? <h1>Loading smurfs...</h1> : null}
			{renderSmurfs()}
		</div>
	);
};

export default SmurfList;

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
