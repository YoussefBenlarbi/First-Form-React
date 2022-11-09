import ChercherBar from './composent/ChercherBar';
import ResultatList from './composent/ResultatList';
import { useState } from 'react';
function AppListe() {
	const StyleAppComponent = {
		backgroundColor: '#FBEAEB',
		border: '1px solid ',
		borderRadius: '4px',
		height: '550px',
		width: '500px',
		paddingLeft: '10px'
	};
	const [type, setType] = useState('rien');
	return (
		<div style={StyleAppComponent}>
			<h2>Composant App :</h2>
			<ChercherBar PassType={setType} type={type} />
			<ResultatList type={type} />
		</div>
	);
}

export default AppListe;
