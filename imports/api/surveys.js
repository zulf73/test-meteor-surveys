import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Surveys = new Mongo.Collection('surveys0');

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish('surveys0', () => {
      var ans = Surveys.find({
      });
      
      ans.map( (x)=>{
        console.log(x['name']);
      });
      return ans;
    });
  }

Meteor.methods({

});

