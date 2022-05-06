require('dotenv').config();
const express = require('express');
const router = require('./src/routes');
const bp = require('body-parser');

const app = express();
const port = 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use('/api/v1/', router);

app.listen(port, () => console.log(`Listening on port ${port}!`));
