@extends('layouts.dashboard')

@section('title', 'Write post - ')

@section('subcontent')
        <h2 id="header-new-post">New Post</h2>
        <a id="link-see-post" href="" target="_blank"></a>
        <form id="form-post" action="{{ route('post.store') }}" method="POST">
            {!! csrf_field() !!}
            @include('post.form-fields', ['post'=>null])
        </form>
        <script type="text/javascript">
            window.Laravel.newPost = true;
        </script>
@endsection
