const express = require('express');
const mongoose = require('mongoose');

const RestaurantModel = require('../models/restaurantModel');

const app = express();
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/test').then(
  () => { console.log('*** Mongoose has connected to Mongodb runnon on port 27017 ***'); },
  err => { console.log('*** There was an error connecting Mongoose to Mongodb ***'); }
);

app.listen(8080, () => { console.log('*** Express is listening to traffic on port 8080 (port express app is running on) ***'); } );

app.get('/test', function (req, res) {
  console.log('*** Express responding to Axios request from front end on /test endpoint ***');
  RestaurantModel.find(function (err, restaurants) {
    if (err) return handleError(err);
    // 'restaurants' contains the list of athletes that match the criteria.
    res.send(restaurants);
  });
});
