@extends('layouts.app')

@section('content')
<header>
    <button id="button-menu" class="push-button" alt="Show menu">
        <span class="strip"></span>
        <span class="strip"></span>
        <span class="strip"></span>
    </button>
    <h2>
        A site from
        <a href="{{ route('home') }}" class="wb-logo">
            web<span class="regular">edia</span><span class="trade">&trade;</span>
        </a>
        group
    </h2>
    <nav class="nav-menu pushmenu pushmenu-left">
        <ul class="nav-list">
            <li><a href="">category</a></li>
            <li><a href="">category</a></li>
            <li><a href="">category</a></li>
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
