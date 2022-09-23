export default {
	name: "product",
	title: "Product",
	type: "document",
	fields: [
		{
			name: "image",
			title: "Image",
			type: "array",
			of: [{ type: "images" }],
			options: {
				hotspot: true,
			},
		},
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			slug: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 90,
			},
		},

		{
			name: "price",
			title: "Price",
			type: "number",
		},
		{
			name: "details",
			title: "Details",
			type: "string",
		},
	],
};
