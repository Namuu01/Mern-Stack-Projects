let defaultval="Avenger"

function findmovie(){
    let searchmovie=document.getElementById("searchHere");

    let searchvalue=searchmovie.value;
    defaultval=searchvalue;
    console.log(searchvalue)
    console.log(defaultval)
    getMovie()
}

async function getMovie(){
    let movies=await fetch(`http://www.omdbapi.com/?s=${defaultval}&apikey=f8259575`)
    movies=await movies.json()
    let omdMovies=document.getElementById("Showmoviesdetails");
    omdMovies.innerHTML=""

    movies.Search.map((movie)=>{
        return omdMovies.innerHTML+=`
        <div class ="Moviescard">
        <div><h3>${movie.Title}</h3></div
        <div class ="movieimg"><img src="${movie.Poster}" alt=""></div>
        <div>2010</div>
        `
    })

    
}