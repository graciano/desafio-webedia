@extends('layouts.app')

@section('content')
    <div class="component">
        <header>
            <h1>Welcome, {{ Auth::user()->name }}</h1>
            <form action="{{ url('/logout') }}" method="POST" class="logout">
                <img src="{{Auth::user()->avatar }}" alt="Your photo" class="avatar"/>
                <br>
                {!! csrf_field() !!}
                <button  type="submit">Logout</button>
            </form>
        </header>
        <a href="{{ route('home') }}">See site</a>
        <br>
        <a href="{{ route('dashboard') }}">Dashboard</a>
        <br>
        <a href="{{ route('post.create') }}">New post</a>
        @yield('subcontent')
    </div>
@endsection
