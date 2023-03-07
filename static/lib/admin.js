'use strict';

define('admin/plugins/categorycarousel', ['settings', 'hooks', 'uploader'], function (settings, hooks, uploader) {
	const admin = {};
	admin.init = function () {
		settings.load('categorycarousel', $('#categorycarousel'));

		$('#save').on('click', function () {
			settings.save('categorycarousel', $('#categorycarousel'));
		});
		hooks.on('action:settings.sorted-list.modal', function ({ modal }) {
			const uploadBtn = modal.find('input[data-action="upload"]');
			uploadBtn.off('click').on('click', function () {
				uploader.show({
					title: uploadBtn.attr('data-title'),
					description: uploadBtn.attr('data-description'),
					route: uploadBtn.attr('data-route'),
					params: {},
					showHelp: undefined,
					accept: uploadBtn.attr('data-accept'),
				}, function (image) {
					modal.find('#' + uploadBtn.attr('data-target')).val(image);
				});
			});
		});
	};
	return admin;
});
