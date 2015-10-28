define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var FeatureModel = require('./FeatureModel');

  var FeatureCollection = Backbone.Collection.extend({

    model: FeatureModel,

    initialize: function(){
      this.createDummyData();
    },

    createDummyData: function(){
      this.reset([
        { id: 1, name: 'Iron Man', description: 'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.'},
        { id: 2, name: 'Hulk', description: 'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.'},
        { id: 3, name: 'Captain America', description: 'Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America\'s one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.'},
        { id: 4, name: 'Thor', description: 'As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he\'s quite smart and compassionate. He\'s self-assured, and he would never, ever stop fighting for a worthwhile cause.'},
        { id: 5, name: 'Black Widow', description: 'Natasha Romanova, known by many aliases, is an expert spy, athlete, and assassin. Trained at a young age by the KGB\'s infamous Red Room Academy, the Black Widow was formerly an enemy to the Avengers. She later became their ally after breaking out of the U.S.S.R.\'s grasp, and also serves as a top S.H.I.E.L.D. agent.'},
        { id: 6, name: 'The Archer Guy', description: 'Has a bow and arrow - he uses it from time to time.'}
      ]);
    }

  });

  return FeatureCollection;

});