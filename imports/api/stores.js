import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { StoresSchema } from './schema/stores';

const Stores = new Mongo.Collection('Stores');

Stores.attachSchema(StoresSchema);