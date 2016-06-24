import { StoresSchema } from './stores';

export const OrdersSchema = new SimpleSchema({
	order_date: { type: Date, defaultValue: new Date() },
	total_ordered: { type: Number, defaultValue: 0 },
	total_actuals: { type: Number, defaultValue: 0 },
	total_sold: { type: Number, defaultValue: 0 },
	total_rrp: { type: Number, defaultValue: 0 },
	total_amount: { type: Number, defaultValue: 0 },
	shipping: { type: StoresSchema },
	"order_item.$.product_name": { type: String },
	"order_item.$.ordered": { type: Number, defaultValue: 0 },
	"order_item.$.actuals": { type: Number, defaultValue: 0 },
	"order_item.$.sold": { type: Number, defaultValue: 0 },
	"order_item.$.rrp": { type: Number, defaultValue: 0 },
	"order_item.$.price": { type: Number, defaultValue: 0 }
});
