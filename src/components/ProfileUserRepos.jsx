import React from 'react';
import shortid from 'shortid';

const ProfileUserRepos = (props) => {
	let repos = props.repos.map((repo) => {
		return (
			<div className="row"  key={shortid.generate()}>
				<div className="col-md-9">
					<h4><a href={repo.html_url}>{repo.name}</a></h4>
					<p>{repo.description}</p>
				</div>
				<div className="col-md-3 text-right">
					<span className="badge badge-default ">{repo.watchers} Watchers</span>&nbsp;
					<span className="badge badge-primary">{repo.forks} Forks</span>
				</div>
			</div>
		);
	});

	return(
		<div>
			{repos}
		</div>
	);
};

ProfileUserRepos.propTypes = {
	repos: React.PropTypes.array.isRequired
}

export default ProfileUserRepos;
