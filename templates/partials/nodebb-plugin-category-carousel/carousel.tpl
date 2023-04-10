{{{ if categories.length }}}
<div class="category-carousel-plugin preventSlideout">
	{{{ if title }}}
	<h5>{title}</h5>
	{{{ end }}}

	<ul class="{{{ if !carouselMode }}}row{{{ else }}}carousel-mode{{{ end }}} category-carousel list-unstyled p-0 overflow-hidden position-relative" itemscope itemtype="http://www.schema.org/ItemList">
		{{{ each categories }}}
		<li class="{{{ if !carouselMode }}}col-md-3 col-sm-6 col-12{{{ end }}} category-carousel-container" data-cid="{./cid}">
			<a style="display:block; width:312px;" class="position-relative category-card" href="{config.relative_path}/category/{./slug}">
				<div class="category-carousel-img" style="{{{ if ./carouselImg}}}background-image: url({config.relative_path}{./carouselImg}); background-position: center; background-size: cover;{{{ else }}}background-color: {./bgColor};{{{ end }}}"></div>

				<div class="category-carousel-card position-absolute top-0 w-100">
					<div class="d-flex justify-content-center align-items-center footer w-100 position-absolute bottom-0" style="height:60px;">
						<h3 class="m-0 py-0 px-2 text-truncate">{./name}</h3>
					</div>
				</div>
			</a>
		</li>
		{{{end}}}
	</ul>
</div>
{{{end}}}
