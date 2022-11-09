import { ListeFruitLegume } from './../data/listeLegumeFruits';
function ResultatList(props) {
	const StyleListe = {
		backgroundColor: ' #FCE77D',
		border: '1px solid ',
		borderRadius: '4px',
		height: '200px',
		width: '400px',
		marginLeft: '20px',
		marginTop: '20px',
		paddingLeft: '10px',
		paddingBottom: '10px',
	};
	const Resultat = ListeFruitLegume.filter(
		(element) => element.type === props.type
	);

	return (
		<div style={StyleListe}>
			<h3>{props.type === 'rien' ? ' ' : `Liste de ${props.type} :`}</h3>
			<div>
				{Resultat.length === 0 ? (
					'Pas de Resultat !'
				) : (
					<ul style={{ listStyleType: 'none' }}>
						{Resultat.map((element) => (
							<li key={element.nom}> {element.nom}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default ResultatList;
