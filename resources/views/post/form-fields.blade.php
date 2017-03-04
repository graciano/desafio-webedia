<label>Slug</label>
<input type="text" name="slug" value="{{ input_value($post, 'slug') }}">
<br><br>
<label>Title</label>
<input type="text" name="title" value="{{ input_value($post, 'title') }}">
<br><br>
<label>Preview Text</label>
<textarea name="preview_text">{{ input_value($post, 'preview_text') }}</textarea>
<br><br>
<label>Excerpt</label>
<textarea name="excerpt">{{ input_value($post, 'excerpt') }}</textarea>
<br><br>
<label>Lead</label>
<input type="text" name="lead" value="{{ input_value($post, 'lead') }}">
<br><br>
<input type="hidden" name="html_content" value="{{ input_value($post, 'html_content') }}">
<h2>Conteúdo:</h2>
<div id="post-editor">{!! $post->html_content !!}</div>
<br><br>
<button type="submit">Publish</button>