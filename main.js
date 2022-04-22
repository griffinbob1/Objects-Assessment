const movies = [ 
    {
    name: "Everything Wherewhere All at Once",
    year: 2022,
    director: "Dan Kwan & Daniel Scheinert",
    picture: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg"
    },
    {
    name: "The Spongebob Squarepants Movie",
    year: 2004,
    director: "Stephen Hillenburg",
    picture: "https://upload.wikimedia.org/wikipedia/en/3/31/The_SpongeBob_SquarePants_Movie_poster.jpg"
    },
    {
    name: "Ghostbusters",
    year: 1984,
    director: "Ivan Reitman",
    picture: "https://m.media-amazon.com/images/I/81Pz44xom+L._AC_SL1500_.jpg"
    }

]

const orderedList = document.querySelector("ol");

const template = movies.map(movie =>
`
<li>
    <p>Name: ${movie.name}</p>
    <p>Year: ${movie.year}</p>
    <p>Director: ${movie.director}</p>
    <img width="400" src=${movie.picture}>
</li>
`
);

orderedList.innerHTML = template.join("");