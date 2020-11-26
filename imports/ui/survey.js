import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import './survey.html';


Template.survey.events({
    // add a function that stores the underlying survey document
    // in a Session variable that can be used in survey deployment
});
