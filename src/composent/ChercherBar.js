
function ChercherBar(props) {
	const StyleCherchceBar = {
		backgroundColor: '#eee',
		border: '1px solid ',
		borderRadius: '4px',
		height: '200px',
		width: '400px',
		marginLeft: '20px',
        paddingLeft:"10px",
        paddingTop:"10px"   
	};
	
	
function ChangerType(e){
    props.PassType(e.target.value)
}
	return (
		<div style={StyleCherchceBar}>
			<form>
				<b> Type :{' '}</b>
				<select onChange={(e) => ChangerType(e)}>
					<option value="rien">Choisir le type</option>
					<option value="legume">Legume</option>
					<option value="fruit">Fruit</option>
				</select>
				<div style={{paddingTop:'7px'}} > Type Choisie est : {props.type}</div>
			</form>
		</div>
	);
}

export default ChercherBar;
