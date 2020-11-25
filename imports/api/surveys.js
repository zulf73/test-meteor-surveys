import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Surveys = new Mongo.Collection('surveys0');

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish('surveys0', function tasksPublication() {
      return Surveys.find({
      });
    });
  }

Meteor.methods({

    'surveys.setQuestion'(taskId, questionNumber, newQuestion ) {
	check(taskId, String);
        check(setToPrivate, Boolean);
    
        const csurvey = Surveys.findOne(taskId);

	var newValue = csurvey["value"];
	newValue[ questionNumber - 1 ]["question"] = newQuestion;
        Surveys.update(taskId, { $set: { value: newValue } });
      },
});

