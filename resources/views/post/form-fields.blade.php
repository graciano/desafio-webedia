<label for="field-slug">Slug</label>
<input id="field-slug" type="text" name="slug" value="{{ input_value($post, 'slug') }}">
<br><br>
<label for="field-title">Title</label>
<input id="field-title" type="text" data-length="50" name="title" value="{{ input_value($post, 'title') }}">
<br><br>
<label for="field-preview_text">Preview Text</label>
<textarea id="field-preview_text" data-length="200" name="preview_text">{{ input_value($post, 'preview_text') }}</textarea>
<br><br>
<label for="field-excerpt">Excerpt</label>
<textarea id="field-excerpt" data-length="300" name="excerpt">{{ input_value($post, 'excerpt') }}</textarea>
<br><br>
<label for="field-lead">Lead</label>
<input id="field-lead" type="text" data-length="50" name="lead" value="{{ input_value($post, 'lead') }}">
<br><br>
<input type="hidden" name="html_content" value="{{ input_value($post, 'html_content') }}">
<h2>Post content:</h2>
<div id="post-editor">@if(!empty($post)){!! $post->html_content !!}@endif</div>
<br><br>
<button type="submit">Publish</button>