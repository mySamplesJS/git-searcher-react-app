import React from 'react';

const ProfileUserData = (props) => {
	return(
		<div className="row">
			<div className="col-md-4">
				<img className="img-thumbnail" src={props.avatar_url} />
				<a className="btn btn-default btn-block" href={props.html_url} target="_blank">View Profile</a>
			</div>
			<div className="col-md-8">
				<p className="text-right">
					<span className="badge badge-default">{props.public_repos} Public repos</span>&nbsp;
					<span className="badge badge-primary">{props.public_gists} Public Gist</span>&nbsp;
					<span className="badge badge-success">{props.followers} Followers</span>&nbsp;
					<span className="badge badge-info">{props.following} Following</span>
				</p>
				<ul className="list-unstyled">
					<li className="list-group-item"><strong>Username:&nbsp;</strong>{props.login}</li>

					{props.location ?
						<li className="list-group-item"><strong>Location:&nbsp;</strong>{props.location}</li>
					: null}

					{props.email ?
						<li className="list-group-item"><strong>Email:&nbsp;</strong>{props.email}</li>
					: null}

					{props.blog ?
						<li className="list-group-item"><strong>Blog:&nbsp;</strong>
							<a href={props.blog} target="_blank">{props.blog}</a>
						</li>
					: null}

					<li className="list-group-item"><strong>Member since:&nbsp;</strong>{props.created_at}</li>
				</ul>
			</div>
		</div>
	);
};

ProfileUserData.propTypes = {
	avatar_url: React.PropTypes.string,
	blog: React.PropTypes.string,
	created_at: React.PropTypes.string.isRequired,
	email: React.PropTypes.string,
	followers: React.PropTypes.number.isRequired,
	following: React.PropTypes.number.isRequired,
	html_url: React.PropTypes.string.isRequired,
	location: React.PropTypes.string,
	login: React.PropTypes.string.isRequired,
	public_repos: React.PropTypes.number.isRequired,
	public_gists: React.PropTypes.number.isRequired
};

export default ProfileUserData;
