@extends('layouts.content')

@section('meta')
<meta name="description" content="{{ $post->preview_text }}">
@endsection

@section('subcontent')
<article>
    <h1>{{ $post->title }}</h1>
    <p>{{ $post->lead }}</p>
    <img src="{{ $post->cover_image }}"/>
    <div class="html-post">
        {!! $post->html_content !!}
    </div>
</article>
@endsection