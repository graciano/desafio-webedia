@extends('layouts.content')

@section('subcontent')
<ul class="post-list">
    @forelse($posts as $post)
    <li>
        <a href="{{ url($post->slug) }}" title="{{ $post->title }}" class="post-card">
            <section>
                <h2 class="title">{{ $post->title }}</h2>
                <p class="preview">{{ $post->preview_text }}</p>
                <img src="{{ $post->cover_image }}" alt="Cover of {{ $post->title }}">
                <hr>
                <h3 class="lead">{{ $post->lead }}</h3>
                <p class="excerpt">{{ $post->excerpt }}</p>
            </section>
        </a>
    </li>
    @empty
    <li>No posts found.</li>
    @endforelse
</ul>
@endsection
