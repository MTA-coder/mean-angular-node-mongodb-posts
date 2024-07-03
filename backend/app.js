const express = require('express');
const responseHelpers = require('./response');
const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const fakePosts = require('./fake/post.json');

//#region Fetch Posts
app.use('/api/post/get', (request, response, next) => {
  response.status(200).json(responseHelpers(fakePosts));
  next();
});
//#endregion

//#region Create Posts
app.post('/api/post/create', (request, response, next) => {
  console.log(request.body);
  response.status(200).json(responseHelpers(request.body));
  next();
});
//#endregion

module.exports = app;
