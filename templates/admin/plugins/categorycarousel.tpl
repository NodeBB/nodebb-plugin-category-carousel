<div class="row">
	<div class="col-lg-9">
		<div class="panel panel-default">
			<div class="panel-heading">Category Carousel</div>
			<div class="panel-body">
				<form role="form" id="categorycarousel">
					<div class="form-group">
						<div class="checkbox">
							<label for="enableCarousel">
								<input type="checkbox" data-key="enableCarousel" id="enableCarousel" name="enableCarousel" />
								Enable Carousel Mode
							</label>
						</div>

						<div class="checkbox">
							<label for="enableCarouselPagination">
								<input type="checkbox" data-key="enableCarouselPagination" id="enableCarouselPagination" name="enableCarouselPagination" />
								Turn on paginator for carousel
							</label>
						</div>

						<div class="form-group">
							<label for="maxSlides">Max slides to show for carousel</label>
							<input id="maxSlides" type="text" class="form-control" placeholder="4" name="maxSlides" data-key="maxSlides">
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-2 col-12">Images</div>
						<div class="col-sm-10 col-12">
							<div class="mb-3" data-type="sorted-list" data-sorted-list="category-images" data-item-template="admin/plugins/category-carousel/partials/sorted-list/item" data-form-template="admin/plugins/category-carousel/partials/sorted-list/form">
								<ul data-type="list" class="list-group"></ul>
								<button type="button" data-type="add" class="btn btn-info">Add Item</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="col-lg-3">
		<div class="panel panel-default">
			<div class="panel-heading">Control Panel</div>
			<div class="panel-body">
				<button class="btn btn-primary" id="save">Save Settings</button>
			</div>
		</div>
	</div>
</div>
