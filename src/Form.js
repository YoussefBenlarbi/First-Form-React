import { useState } from 'react';

function Form() {
	const [nom, setNom] = useState('');
	const [prenom, setPrenom] = useState('');
	const [description, setDescription] = useState('');
	const [nationalite, setNationalite] = useState('rien');
	const [sexe, setSexe] = useState('R');
	const [lang, setLang] = useState([]);
	const [information, setInformation] = useState('');
    const StyleEtoile = {color:'red'};
	function HandleNom(e) {
		setNom(e.target.value);
	}
	function HandlePrenom(e) {
		setPrenom(e.target.value);
	}
	function HandleDescription(e) {
		setDescription(e.target.value);
	}
	function HandleNationalite(e) {
		setNationalite(e.target.value);
	}
	function HandleSexe(e) {
		setSexe(e.target.value);
	}
	function HandleLang(e) {
		if (e.target.checked) {
			setLang([...lang, e.target.value]);
		} else {
			setLang(lang.filter((element) => element !== e.target.value));
		}
	}
	function HandleButton(e) {
		e.preventDefault();
		setInformation(
			`Nom : ${nom.toUpperCase()}
            Prenom : ${prenom}
            description : ${description}
            Nationalité : ${nationalite} 
            Sexe : ${sexe} 
            langue :  ${lang}`
		);
	}

	return (
		<div >
			<form onSubmit={(e) => HandleButton(e)}>
				<table>
					<tr>
						<td>
							<label htmlFor="nom">Nom :</label>
						</td>
						<td>
							<input
								type="text"
								placeholder="Saisir le Nom ...."
								onChange={(e) => HandleNom(e)}
							/>
						</td>
						<td style={StyleEtoile} >{nom.trim() === '' ? '(*)' : ''}</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="prenom">Prenom :</label>
						</td>
						<td>
							<input
								type="text"
								placeholder="Saisir le prenom ...."
								onChange={(e) => HandlePrenom(e)}
							/>
						</td>
						<td style={StyleEtoile} >{prenom.trim() === '' ? '(*)' : ''}</td>
					</tr>

					<tr>
						<td>
							<label htmlFor="description">Description :</label>
						</td>
						<td>
							<textarea
								name=""
								id=""
								cols="20"
								rows="5"
								placeholder="Saisir le description ...."
								onChange={(e) => HandleDescription(e)}
							></textarea>
						</td>
						<td style={StyleEtoile} >{description.trim() === '' ? '(*)' : ''}</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="Nationalite">Nationalite :</label>
						</td>
						<td>
							<select
								name="SelectV"
								id="SelectV"
								onChange={(e) => HandleNationalite(e)}
							>
								<option value="rien">Choisir Nationalite</option>
								<option value="Marocain">Marocain</option>
								<option value="Japan">Japan</option>
								<option value="Tongo">Tongo</option>
							</select>
						</td>
						<td style={StyleEtoile} >{nationalite === 'rien' ? '(*)' : ''}</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="sexe">Sexe :</label>
						</td>
						<td>
							M
							<input
								type="radio"
								name="sexe"
								onChange={(e) => HandleSexe(e)}
								value="M"
							/>
							F
							<input
								type="radio"
								name="sexe"
								onChange={(e) => HandleSexe(e)}
								value="F"
							/>
						</td>
						<td style={StyleEtoile} >{sexe === 'R' ? '(*)' : ''}</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="lang">Langues :</label>
						</td>
						<td>
							Francais :
							<input
								type="checkbox"
								name="Fr"
								onClick={(e) => HandleLang(e)}
								id="Fr"
								value="Francais"
							/>
							Arabe :
							<input
								type="checkbox"
								name="Ang"
								onClick={(e) => HandleLang(e)}
								id="Ang"
								value="Anglais"
							/>
							Anglais :
							<input
								type="checkbox"
								name="Ar"
								onClick={(e) => HandleLang(e)}
								id="Ar"
								value="Arabe"
							/>
						</td>
						<td style={StyleEtoile} >{lang.length === 0 ? '(*)' : ''}</td>
					</tr>
					<tr>
						<td colSpan={3}>
							<button>envoyer</button>
						</td>
					</tr>
					<tr>
						<td colSpan={3}>{information}</td>
					</tr>
				</table>
			</form>
		</div>
	);
}
export default Form;
