@extends('layouts.app')

@section('content')
<header>
    <h2>
        A site from
        <a href="{{ route('home') }}" class="wb-logo">
            web<span class="regular">edia</span><span class="trade">&trade;</span>
        </a>
        group
    </h2>
    <nav class="nav-menu">
        <ul>
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
