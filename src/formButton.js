import React, { useState } from 'react';

function Form() {
	const [nom, setNom] = useState('');
	const [prenom, setPrenom] = useState('');
	const [password, setPassword] = useState('');
	const [Information, setInformation] = useState('');
	const styleLabel = { fontWeight: 'bold', fontSize: '20px' };
	const styleInput  = { color:"green", fontSize: '20px' };
	function handleSubmit(e) {
		e.preventDefault();
		if (nom.trim() !== '' && prenom.trim() !== '' && password.length >= 4) {
      
			setInformation(`Tu t'appelle  : ${nom}  ${prenom} `);
		} else {
			setInformation('');
		}
		// alert(`Bonjour  ${nom}  ${prenom} `);
	}
	const CheckNom = function (event) {
		setNom(event.target.value.toUpperCase());
	};
	const CheckPrenom = function (event) {
		setPrenom(event.target.value);
	};
	const CheckPassword = function (event) {
		setPassword(event.target.value);
	};

	// const CheckInformation = function () {
	// 	// if (nom.trim() !== '' && prenom.trim() !== '') {
	// 	// 	setInformation(`tu t'appelle  : ${nom}  ${prenom} `);
	// 	// } else {
	// 	// 	setInformation('');
	// 	// }
	// 	// alert(Information);
	// };

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<table>
				<tr>
					<td>
						<label style={styleLabel} htmlFor="nom">
							Nom :
						</label>
					</td>
					<td>
						<input
							onChange={(e) => CheckNom(e)}
							type="text"
							name="nom"
							id="nom"
							placeholder="Saisir le Nom ..."
						/>
					</td>
					<td></td>
				</tr>

				<tr>
					<td>
						<label style={styleLabel} htmlFor="prenom">
							prenom :
						</label>
					</td>
					<td>
						<input
							onChange={(e) => CheckPrenom(e)}
							type="text"
							name="prenom"
							id="prenom"
							placeholder="Saisir le Prenom ..."
						/>
					</td>
					<td></td>
				</tr>
				<tr>
					<td>
						<label style={styleLabel} htmlFor="Password">
							Password :
						</label>
					</td>
					<td>
						<input
							onChange={(e) => CheckPassword(e)}
							type="password"
							name="Password"
							id="Password"
							placeholder="Saisir le Password ..."
						/>
					</td>
					<td></td>
				</tr>
				<tr>
					<td colSpan={3} style={{ color: 'red', fontSize: '16px' }}>
						{password.length < 4
							? 'Password doit contenir au mois 4 caracteres '
							: ''}
					</td>
				</tr>
				<tr>
					<td colSpan={3}>
						<button type="submit">Submit</button>
					</td>
				</tr>

				<tr>
					<td colSpan={3} style={styleInput}>{Information}</td>
				</tr>
			</table>
		</form>
	);
}

export default Form;
