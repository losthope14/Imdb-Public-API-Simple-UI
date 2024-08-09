function searchMovie() {
    $('#movie-list').html('')
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'cc49cbb0',
            's' : $('#search-input').val()
        },
        success: function(result) {
            if (result.Response == 'True') {
                let movies = result.Search
                console.log(result)
                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                    <div class = "col-md-4">
                        <div class="card">
                            <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">`+ data.Title +`</h5>
                            <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
                            <a href="#" class="see-detail card-link text-decoration-none" data-id="`+ data.imdbID +`" data-bs-toggle = "modal" data-bs-target="#exampleModal" style="color: #ff4584;">See Detail</a>
                            </div>
                        </div>
                    </div>
                    `)
                })

                $('#search-input').val('')

            } else {
                $('#movie-list').html(`
                    <div class = "col">
                        <h1 class = "text-center">` + result.Error +`</h1>
                    </div>
                `)
            }
        }
    })
}

$('#search-button').on('click', function() {
    searchMovie();
})

$('#search-input').on('keyup', function(e){
    if (e.keyCode === 13){
        searchMovie();
    }
})

$('#movie-list').on('click', '.see-detail', function(){
    console.log($(this).data('id'));
    $.ajax({
        url: 'http://omdbapi.com',
        dataType: 'json',
        type: 'get',
        data: {
            'apikey' : 'cc49cbb0',
            'i' : $(this).data('id')
        },

        success: function (movie) {
            if(movie.Response === "True"){
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src=`+ movie.Poster +`>
                            </div>

                            <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item">Title : `+ movie.Title +`</li>
                                <li class="list-group-item">Year : `+ movie.Year +`</li>
                                <li class="list-group-item">Rated : `+ movie.Rated +`</li>
                                <li class="list-group-item"> Released : `+ movie.Released +`</li>
                                <li class="list-group-item">Runtime : `+ movie.Runtime +`</li>
                                <li class="list-group-item">Genre : `+ movie.Genre +`</li>
                                <li class="list-group-item">Director : `+ movie.Director +`</li>
                                <li class="list-group-item">Writer : `+ movie.Writer +`</li>
                                <li class="list-group-item">Actors : `+ movie.Actors +`</li>
                                <li class="list-group-item">Plot : `+ movie.Plot +`</li>
                                <li class="list-group-item">Language : `+ movie.Language +`</li>
                                <li class="list-group-item">Country : `+ movie.Country +`</li>
                                <li class="list-group-item">Awards : `+ movie.Awards +`</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                `)

            }
        }
    })

})