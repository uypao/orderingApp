import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { OrdersSchema } from './schema/orders'

const Orders = new Mongo.Collection('Orders');

Orders.attachSchema(OrdersSchema);