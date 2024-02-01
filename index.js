
const server = require('./src/app.js');
const port = process.env.PORT || 3001

server.listen(port, "0.0.0.0" ,() => {console.log('%s listening at 3001')});

