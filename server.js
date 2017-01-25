const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

app.use(express.static(path.join(__dirname, 'dist'), {
	dotfiles: 'ignore',
	index: false
}));

app.get('*', function(req, res, next) {
	console.log('Request: [GET]', req.originalUrl)
	res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, function() {
	console.log('Express server is up on port ' + port);
});
