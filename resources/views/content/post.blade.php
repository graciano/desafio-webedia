@extends('layouts.content')

@section('meta')
    <meta name="description" content="{{ $post->preview_text }}">

    {{-- open graph --}}
    <meta property="og:url" content="{{ url($post->slug) }}" />
    <meta property="og:title" content="{{ $post->title }}" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="{{ $post->preview_text }}" />
    <meta property="og:image" content="{{ $post->cover_image }}" />
    
    {{-- open graph article --}}
    <meta property="article:author" content="{{ $post->author->name }}" />
    <meta property="article:published_time" content="{{ $post->created_at->format('c') }}">
    @if($post->updated_at)
        <meta property="article:modified_time" content="{{ $post->updated_at->format('c') }}">
    @endif

    {{-- schema.org tags --}}
    <meta itemprop="author" content="{{ $post->author->name }}">
    <meta itemprop="description" content="{{ $post->preview_text }}">
    <meta itemprop="image" content="{{ $post->cover_image }}" />
@endsection

@section('title', "$post->title | ")

@section('subcontent')
<article class="post-content">
    <h1>{{ $post->title }}</h1>
    <p>{{ $post->lead }}</p>
    <img src="{{ $post->cover_image }}" class="cover-image"/>
    <div class="html-post">
        {!! $post->html_content !!}
    </div>
</article>
@endsection
