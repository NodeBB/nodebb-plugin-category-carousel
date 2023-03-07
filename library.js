'use strict';

const categories = require.main.require('./src/categories');
const meta = require.main.require('./src/meta');

const defaultSettings = {
	enableCarousel: false,
	enableCarouselPagination: false,
	maxSlides: 4,
};

const plugin = module.exports;
let app;

plugin.init = async function (params) {
	app = params.app;
	const { router } = params;
	const routeHelpers = require.main.require('./src/routes/helpers');
	routeHelpers.setupAdminPageRoute(router, '/admin/plugins/categorycarousel', (req, res) => {
		res.render('admin/plugins/categorycarousel', { });
	});
};

plugin.addAdminNavigation = async function (header) {
	header.plugins.push({
		route: '/plugins/categorycarousel',
		icon: 'fa-list',
		name: 'Category Carousel',
	});
	return header;
};

plugin.defineWidgets = async function (widgets) {
	const html = await app.renderAsync('admin/plugins/category-carousel/widget', {});

	widgets.push({
		widget: 'categoryCarousel',
		name: 'Category Carousel',
		description: 'A list of categories displayed as a carousel',
		content: html,
	});
	return widgets;
};

async function getSettings() {
	let settings = await meta.settings.get('categorycarousel');
	settings = {
		...settings,
		enableCarousel: settings.enableCarousel === 'on',
		enableCarouselPagination: settings.enableCarouselPagination === 'on',
	};
	return {
		...defaultSettings,
		...settings,
	};
}

plugin.getConfig = async function (config) {
	config.categoryCarousel = await getSettings();
	return config;
};

plugin.renderWidget = async function (widget) {
	const settings = await getSettings();
	const categories = await getCategories(widget, settings);


	widget.html = await app.renderAsync('partials/nodebb-plugin-category-carousel/carousel', {
		categories: categories,
		config: widget.templateData.config,
		title: widget.data.title || '',
		carouselMode: settings.enableCarousel,
	});
	return widget;
};

async function getCategories(widget, settings) {
	const categoryImages = settings['category-images'] || [];
	let cids = [];
	const widgetCids = getIdsArray(widget.data, 'cid');
	if (widgetCids.length) {
		cids = widgetCids;
	} else if (widget.templateData.template.category) {
		cids = await categories.getCidsByPrivilege(`cid:${widget.templateData.cid}:children`, widget.uid, 'find');
	} else {
		cids = await categories.getCidsByPrivilege(`cid:0:children`, widget.uid, 'find');
	}

	const categoryData = await categories.getCategories(cids, widget.uid);
	categoryData.forEach((category) => {
		const imageData = categoryImages.find(
			item => parseInt(item.cid, 10) === parseInt(category.cid, 10)
		);
		if (imageData) {
			category.carouselImg = imageData.uploadedImage;
		}
	});
	return categoryData;
}

function getIdsArray(data, field) {
	const ids = String(data[field] || '');
	return ids.split(',').map(c => parseInt(c.trim(), 10)).filter(Boolean);
}
