const express = require('express');
const responseHelpers = require('./response');
const fakePosts = require('./fake/post.json');
const app = express();

//#region CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
//#endregion

//#region Fetch Posts
app.use('/api/posts', (request, response, next) => {
  response.status(200).json(responseHelpers(fakePosts));
  next();
});
//#endregion

module.exports = app;
