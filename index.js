const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/serviceRoutes');

const PORT = 6005;

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/healthcare_Service', {
    // useNewUrlParser : true,
    // useUnifiedTopology : true,
    // useFindAndModify : false,
})
.then(() => console.log("Connected to databse"))
.catch((err) => console.error("Database connection error : ", err));


app.use('/api', serviceRoutes);

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})