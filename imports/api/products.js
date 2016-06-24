import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { ProductsSchema } from './schema/products';

Products = new Mongo.Collection('Products');

Products.attachSchema(ProductsSchema);