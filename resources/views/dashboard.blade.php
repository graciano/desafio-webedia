@extends('layouts.dashboard')

@section('subcontent') 
    <h2>Posts</h2>
    <ul>
        @forelse($posts as $post)
            <li>
                <a href="{{ route('post.edit', $post->id) }}">
                    {{ $post->title }}
                </a>
            </li>
        @empty
            <li>No posts to show yet :(</li>
        @endforelse
    </ul>
    {!! $posts->links() !!}
@endsection
