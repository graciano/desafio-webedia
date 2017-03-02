@extends('layouts.app')

@section('content')
<header>
    <h1>
        A 
        <a href="{{ route('home') }}">
            <span class="wb-logo">web<span>edia&trade;</span></span>
        </a>
        group site.
    </h1>
    <nav class="nav-menu">
        <ul>
            <li><a href="">category</a></li>
            <li><a href="">category</a></li>
            <li><a href="">category</a></li>
            <li><a href="">category</a></li>
            <li><a href="">category</a></li>
            <li><a href="">category</a></li>
            <li><a href="">category</a></li>
        </ul>
    </nav>
</header>
@yield('subcontent')
@endsection
