@extends('layouts.dashboard')

@section('subcontent') 
    <h2>Posts</h2>
    <ul>
        @forelse($posts as $post)
            <li>
                <a href="{{ route('post.edit', $post->id) }}">
                    {{ $post->title }}
                </a>
                <span> - from {{ $post->created_at->format('d/m/Y') }}</span>
                <form action="{{ route('post.destroy', $post->id) }}" method="POST" class="delete-post">
                    {!! csrf_field() !!}
                    {!! method_field('DELETE') !!}
                    <button type="submit">Delete post</button>
                </form>
            </li>
        @empty
            <li>No posts to show yet :(</li>
        @endforelse
    </ul>
    {!! $posts->links() !!}
@endsection
