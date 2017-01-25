import axios from 'axios';

const clientId = '195bb55e993299341ae5';
const clientSecret = '3c984e69a52bf0fb1093954944c37586169b5c77';
const gitSecrets = `?client_id=${clientId}&client_secret=${clientSecret}`;

module.exports = {
	getUser: (username) => {
		return axios.get(`http://api.github.com/users/${username}${gitSecrets}`).then(function(res) {
			return res.data;
		}, function(res) {
			throw new Error(res);
		});
	},
	getRepos: (username) => {
		return axios.get(`http://api.github.com/users/${username}/repos${gitSecrets}`).then(function(res) {
			return res.data;
		}, function(res) {
			throw new Error(res);
		});
	}
}
