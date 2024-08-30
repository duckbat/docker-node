const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema(
    {
    animal_name: { type: String, required: true, unique: true, minlength: 2 },
    species: {
      type: Object,
      ref: 'Species',
      required: true,
    },
    birthdate: {
      type: Date,
      required: true,
      max: Date.now(),
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: Number,
        required: true,
      },
    },
  });

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal; 

