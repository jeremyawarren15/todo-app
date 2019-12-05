const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());

// auto-requires all controllers in controllers folder
require('./controllers/')(app);

// start server
app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening on port ${PORT}`);
});
