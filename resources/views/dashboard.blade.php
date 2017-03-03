@extends('layouts.app')

@section('content')
<div class="component">
    <header>
        <h1>Welcome, {{ Auth::user()->name }}</h1>
        <p>
            <img src="{{Auth::user()->avatar }}" alt="Your photo" class="avatar"/>
            <br>
            <a href="{{ url('/logout') }}">Logout</a>
        </p>
    </header>
    <a href="{{ route('home') }}">See site</a>
    <br>
    <a href="{{-- route('post.new') --}}">New post</a>
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
</div>
@endsection
