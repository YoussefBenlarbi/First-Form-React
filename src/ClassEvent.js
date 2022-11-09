import React from 'react';
class ClassEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nom: '',
			prenom: '',
			password: '',
			information: '',
		};
		this.CheckForm = this.CheckForm.bind(this);
	}
	CheckForm(Event) {
		Event.preventDefault();
		// alert('test');
		if (
			this.state.nom.trim() !== '' &&
			this.state.prenom.trim() !== '' &&
			this.state.password.length >= 4
		) {
			this.setState({
				information: `FullName : ${this.state.nom}  ${this.state.prenom}  / Password est : ${this.state.password}`,
			});

			// this.setState({ information: 'Okaaaay' });
		} else {
			// alert('noooooo2')
			this.setState({ information: '' });
		}
	}
	render() {
		return (
			<form>
				<table>
					<tbody>
						<tr>
							<td>
								<label htmlFor="nom">Nom :</label>
							</td>
							<td>
								<input
									onChange={(e) => this.setState({ nom: e.target.value })}
									type="text"
									name="nom"
									id="nom"
									placeholder="Saisir le Nom ..."
								/>
							</td>
							<td>
								{/* {this.state.nom === '' ? 'Nom est obligatoire' : this.state.nom} */}
							</td>
						</tr>

						<tr>
							<td>
								<label htmlFor="prenom">prenom :</label>
							</td>
							<td>
								<input
									onChange={(e) => this.setState({ prenom: e.target.value })}
									type="text"
									name="prenom"
									id="prenom"
									placeholder="Saisir le Prenom ..."
								/>
							</td>
							<td>
								{/* {this.state.prenom === ''
									? 'Prenom est obligatoire'
									: this.state.prenom} */}
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="Password">Password :</label>
							</td>
							<td>
								<input
									onChange={(e) => this.setState({ password: e.target.value })}
									type="password"
									name="Password"
									id="Password"
									placeholder="Saisir le Password ..."
								/>
							</td>
							<td>
								{/* {this.state.password.length < 4
									? 'Password est obligatoire'
									: this.state.password} */}
							</td>
						</tr>
						<tr>
							<td colSpan={3}></td>
						</tr>
						<tr>
							<td colSpan={3}>
								<button type="submit" onClick={this.CheckForm}>
									Submit
								</button>
							</td>
						</tr>

						<tr>
							<td colSpan={3}>{this.state.information}</td>
						</tr>
					</tbody>
				</table>
			</form>
		);
	}
}
export default ClassEvent;
