const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productrou = require('./routes/productrou');
const categoryrou = require('./routes/categoryrou');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://dbuser:2dyRD8l9ymtOdFS6@Assignment2.erzljzi.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB: ' + err);
});



app.get('/', (req, res) => {
  res.send('Welcome to DressStrore Application');
});

app.use('/api', productrou);
app.use('/api', categoryrou);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
