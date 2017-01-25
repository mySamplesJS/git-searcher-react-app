import React from 'react';
import gitAPI from 'services/gitAPI.js';
import {debounce} from 'underscore';

const Searcher = React.createClass({
	propTypes: {
		onUserFetched: React.PropTypes.func.isRequired
	},
	getGitUser: function() {
		let username = this.refs.username.value;

		if (!username.length) {
			this.props.onUserFetched(null);
			return;
		}

		gitAPI.getUser(username).then((user) => {
			gitAPI.getRepos(username).then((repos) => {
				user.repos = repos;
				this.props.onUserFetched(user);
			}, () => {
				this.props.onUserFetched(null);
			});
		}, () => {
			this.props.onUserFetched(null);
		});
	},
	render: function() {
		return(
			<section className='searcherComponent'>
				<input
					type="search"
					className="form-control"
					placeholder="Enter a username"
					ref="username"
					onKeyUp={debounce(this.getGitUser, 350)}
				/>
			</section>
		);
	}
});

module.exports = Searcher;
