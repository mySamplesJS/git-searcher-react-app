import 'styles/app.scss';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from 'App.jsx';
import Profile from 'components/Profile';

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Profile}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
