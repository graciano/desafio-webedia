@extends('layouts.app')

@section('content')
    <div class="component">
        <h1>Edit Post</h1>
        <a href="{{ url($post->slug) }}" target="_blank">See post</a>
        <form id="form-post" action="{{ route('post.update', $post->id) }}" method="POST">
            {!! csrf_field() !!}
            {!! method_field('PUT') !!}
            <label>Slug</label>
            <input type="text" name="slug" value="{{ input_value($post, 'slug') }}">
            <br>
            <label>Title</label>
            <input type="text" name="title" value="{{ input_value($post, 'title') }}">
            <br>
            <label>Preview Text</label>
            <textarea name="preview_text">{{ input_value($post, 'preview_text') }}</textarea>
            <br>
            <label>Excerpt</label>
            <textarea name="excerpt">{{ input_value($post, 'excerpt') }}</textarea>
            <br>
            <label>Lead</label>
            <input type="text" name="lead" value="{{ input_value($post, 'lead') }}">
            <br>
            <input type="hidden" name="html_content" value="{{ input_value($post, 'html_content') }}">

            <div id="post-editor">{!! $post->html_content !!}</div>
            <button type="submit">Publish</button>
        </form>
    </div>
@endsection
