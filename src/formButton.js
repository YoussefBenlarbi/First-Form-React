import React, { useState } from 'react';

function Form() {
	const [nom, setNom] = useState('');
	const [prenom, setPrenom] = useState('');
	const [Information, setInformation] = useState('');
	function handleSubmit(e) {
		e.preventDefault();
		// alert(`Bonjour  ${nom}  ${prenom} `);
	}
	const CheckNom = function (event) {
		setNom(event.target.value.toUpperCase());
	};
	const CheckPrenom = function (event) {
		setPrenom(event.target.value);
	};

	const CheckInformation = function () {
		setInformation(`tu t'appelle ? : ${nom}  ${prenom} `);
		alert(Information);
	};

	return (
		<form onSubmit={handleSubmit}>
			<table>
				<tr>
					<td>
						<label htmlFor="nom">Nom :</label>
					</td>
					<td>
						<input
							onChange={(e) => CheckNom(e)}
							type="text"
							name="nom"
							id="nom"
						/>
					</td>
					<td>{nom}</td>
				</tr>

				<tr>
					<td>
						<label htmlFor="prenom">prenom :</label>
					</td>
					<td>
						<input
							onChange={(e) => CheckPrenom(e)}
							type="text"
							name="prenom"
							id="prenom"
						/>
					</td>
					<td>{prenom}</td>
				</tr>
				<tr>
					<td colSpan={3}>
						<button type="submit">Submit</button>
					</td>
				</tr>
				<tr>
					<td colSpan={3}>
						<button onClick={(e) => CheckInformation(e)}>Lancer Infos</button>
						{/* {({nom} === "") ? "" : `tu t'appelle ? : ${nom}  ${prenom}`} */}
					</td>
				</tr>
			</table>
		</form>
	);
}

export default Form;
