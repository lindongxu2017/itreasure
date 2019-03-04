Component({
	properties: {
		list: {
			type: Array,
			value: [
				{
					cover: '/images/icons/templet.png',
					title: 'Python开发入门与爬虫项目实战',
					people: 4,
					price: '199.00',
				},
				{
					cover: '/images/icons/templet.png',
					title: 'Python开发入门与爬虫项目实战',
					people: 4,
					price: '199.00',
				},
			],
			observer: (newVal, oldVal, changedPath) => { },
		},
	},
	methods: {

	}
});