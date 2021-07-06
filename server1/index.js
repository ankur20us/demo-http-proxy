const express = require('express');
const app = express();

const port = 3000;

app.get('/', (_, res) => res.send('Hello World I am server of ' + port));

app.listen(port, () => console.log('Example app listening on port ' + port));