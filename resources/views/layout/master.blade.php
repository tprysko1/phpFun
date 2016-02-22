<!DOCTYPE html>
<html>
    <head>
        <title>Research Matters</title>

        {!! Html::style('css/app.css') !!}

        {!! Html::script('js/jquery.min.js') !!}
        {!! Html::script('js/bootstrap.min.js') !!}

    </head>
    


    <body>
        @include('includes.header')
        
        
        @yield('content')
    </body>
</html>