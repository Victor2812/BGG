@extends('layouts.app')

@section('title', 'Reservations')

@section('main')
    <div class="row">
        <div class="col-12">
            <h1>Reservas</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <input type="text" id="boardgame" placeholder="Boardgame">
            <button id="buscar">Buscar</button>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <ul class="list-group list-group-flush" id="searchbox">             
            </ul>
        </div>
    </div>
@endsection