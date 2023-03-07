<form>
    <div class="form-group">
        <label for="cid">Category ID</label>
        <input type="text" id="cid" name="cid" title="cid" class="form-control" placeholder="Fajita" required>
    </div>
	<div class="form-group">
		<label class="form-label" for="uploadedImage">Upload Image</label>
		<div class="input-group">
			<input id="uploadedImage" name="uploadedImage" type="text" class="form-control" />
			<input value="Upload" data-action="upload" data-target="uploadedImage" data-route="/api/post/upload" type="button" class="btn btn-default" />
		</div>
	</div>
</form>