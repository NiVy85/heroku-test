const express = require('express');

const app = express();

app.use(express.static('./dist/ang-testapp'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ang-testapp/'}),
);

app.listen(process.env.PORT || 8080);