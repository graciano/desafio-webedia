@extends('layouts.app')

@section('content')
    <div class="component">
        <h1>Choose a login option</h1>
        <ul>
        @foreach($drivers as $driver)
                <li><a href="{{ route('social.login', $driver) }}">{{ $driver }}</a></li>
        @endforeach
        </ul>
    </div>
@endsection
