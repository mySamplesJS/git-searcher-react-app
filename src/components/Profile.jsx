import React from 'react';
import Searcher from 'components/Searcher';
import ProfileUserData from 'components/ProfileUserData';
import ProfileUserRepos from 'components/ProfileUserRepos';

const Profile = React.createClass({
	getInitialState: function() {
		return {
			user: null
		}
	},
	onUserFetched: function(user) {
		this.setState({
			user: user
		});
	},
	getUserCardHTML: function() {
		if (!this.state.user) return;

		return(
			<section className="card">
				<div className="card-header">
					<h3 className="card-title">{this.state.user.login}</h3>
				</div>
				<div className="card-block">
					<ProfileUserData {...this.state.user}/>
				</div>
				<div className="card-block">
					<section className="card">
						<div className="card-header">
							<h3 className="card-title">Repos</h3>
						</div>
						<div className="card-block">
							<ProfileUserRepos {...this.state.user}/>
						</div>
					</section>
				</div>
			</section>
		);
	},
	render: function() {
		return(
			<main className="container">
				<Searcher onUserFetched={this.onUserFetched}/>
				{this.getUserCardHTML()}
			</main>
		);
	}
});

module.exports = Profile;
