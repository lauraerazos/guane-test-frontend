const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname +'/dist/guane-test-frontend'));
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname +'/dist/guane-test-frontend/index.html'));
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('/dist/guane-test-frontend'));
}
var port = process.env.PORT || 8080;

app.listen(port);
console.log('server started '+ port);