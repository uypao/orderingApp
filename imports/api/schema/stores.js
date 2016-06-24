export const StoresSchema = new SimpleSchema({
	store_name: { type: String },
	address: { type: String },
	city: { type: String},
	state: { type: String, optional: true }
});

