@extends('layouts.app')

@section('content')
    <h1>Escolha uma opção de login</h1>
    <ul>
    @foreach($drivers as $driver)
            <li><a href="{{ route('social.login', $driver) }}">{{ $driver }}</a></li>
    @endforeach
    </ul>
@endsection
