const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://mongo:27017/devopsdb', {
	          useNewUrlParser: true,
	          useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
	          res.send('Hello from Node.js + MongoDB + Kubernetes!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
