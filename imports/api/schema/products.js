import { CategoriesSchema } from './categories';

export const ProductsSchema = new SimpleSchema({
	product_name: { type: String },
	price: { type: Number, defaultValue: 0 },
	categories: {  type: CategoriesSchema }
});
