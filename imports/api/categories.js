import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { CategoriesSchema } from './schema/categories';

Categories = new Mongo.Collection('Categories');

Categories.attachSchema(CategoriesSchema);

if (Meteor.isServer){
	Meteor.publish('categories', function(){
		return Categories.find({});
	});
}

Meteor.methods({	
	'category.insert'(category_name){

		Categories.insert({
			category_name
		});
	},
	'category.remove'(category_id){

		Categories.remove(category_id);
	},
});