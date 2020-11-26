import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Surveys } from '../api/surveys.js';
import { Session } from 'meteor/session';
import './survey.js';
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('surveys0');
  });

Template.body.helpers({
    surveys() {
        const instance = Template.instance();
        // Otherwise, return all of the tasks
        var s = Surveys.find({}, { sort: { createdAt: -1 } });
	console.log(s);
	return s;
    },
});

Template.body.events({
    'submit .new-task'(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
  
      // Insert a task into the collection
      Meteor.call('survey.insert', text);
  
      // Clear form
      target.text.value = '';
    },
  });
