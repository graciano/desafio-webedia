@extends('layouts.dashboard')

@section('title', 'Write post - ')

@section('subcontent')
        <h2>Edit Post</h2>
        <a href="{{ url($post->slug) }}" target="_blank">See post</a>
        <form id="form-post" action="{{ route('post.update', $post->id) }}" method="POST">
            {!! csrf_field() !!}
            {!! method_field('PUT') !!}
            @include('post.form-fields')
        </form>
@endsection
