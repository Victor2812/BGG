@extends('layouts.base')

@section('body')
    <div class="wrapper">
        <div class="container-wrapper d-flex flex-column col-12">
            <!-- Header -->
            <header class="bg-dark mb-3 static-top p-4 d-flex justify-content-around">
                @include('partials.header')
            </header>
            <!-- End Header -->

            <!-- Callapse User Options -->
            <div class="row container bg-lightgrey">
                <div class="col-12 d-flex justify-content-end">
                    <div class="collapse" id="collapseElement">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Info</li>
                            <li class="list-group-item">Cerrar sesion</li>
                        </ul>                        
                    </div>
                </div>
            </div>
            <!-- End Callapse User Options -->

            <!-- Main -->
            <div class="content p-4">
                @yield('main')
            </div>
            <!-- End Main -->

            <!-- Footer -->
            <footer class="bg-dark fixed-bottom my-auto p-4 d-flex justify-content-between flex-column flex-xs-row">
                @include('partials.footer')
            </footer>
            <!-- End Footer -->
        </div>
    </div>
@endsection