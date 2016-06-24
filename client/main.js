import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/ui/body/body.js';

Template.main.onCreated(function () {
  console.log('main.js')
});
