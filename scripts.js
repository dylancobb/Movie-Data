// data about movies is stored in movieData object
let movieData = {
    "The Darjeeling Limited": {
        plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
        cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
        runtime: 151,
        rating: 7.2,
        year: 2007,
    },
    "The Royal Tenenbaums": {
        plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
        rating: 7.6,
        year: 2001,
        cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
        runtime: 170,
    },
    "Fantastic Mr. Fox": {
        year: 2009,
        plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
        cast: [
            "George Clooney",
            "Meryl Streep",
            "Bill Murray",
            "Jason Schwartzman",
        ],
        runtime: 147,
        rating: 7.9,
    },
    "The Grand Budapest Hotel": {
        rating: 8.1,
        runtime: 159,
        year: 2014,
        plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
        cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
};

// keys is initialised as an array holding the keys to movieData
// keys must be updated after any entries, deleted, or titles are changed
let keys;
updateKeys();
function updateKeys() {
    keys = Object.keys(movieData);
}
// stores the current movie index
let index = 0;
// grab the display panel's fields to populate with data
let movieTitle = document.getElementById("movie-title");
let moviePlot = document.getElementById("movie-plot");
let movieCast = document.getElementById("movie-cast");
let movieRuntime = document.getElementById("movie-runtime");
let movieRating = document.getElementById("movie-rating");
// grab the editor interface
let tinter = document.getElementById("tinter");
let editor = document.getElementById("editor");
// grab the editor form IDs
let title = document.getElementById("title");
let year = document.getElementById("year");
let plot = document.getElementById("plot");
let cast = document.getElementById("cast");
let runtime = document.getElementById("runtime");
let rating = document.getElementById("rating");

// initialise display to show first movie on list
showMovie(index);

// displays movie at entered index
function showMovie(x) {
    if (keys.length === 0) {
        movieTitle.innerHTML = "";
        moviePlot.innerHTML = "Congratulations, you deleted everything. Why did you do it?";
        movieCast.innerHTML = "";
        movieRuntime.innerHTML = "";
        movieRating.innerHTML = "";
        return;
    }
    movieTitle.innerHTML = `${keys[x]} (${movieData[keys[x]].year})`;
    moviePlot.innerHTML = movieData[keys[x]].plot;
    movieRuntime.innerHTML = `<span class="data-heading">Runtime:</span> ${movieData[keys[x]].runtime} minutes`;
    movieRating.innerHTML = `<span class="data-heading">Rating</span>: ${movieData[keys[x]].rating}`;
    movieCast.innerHTML = `<span class="data-heading">Starring:</span> ${castString(x)}`;
}

// converts cast list into a properly formatted string for printing
function castString(x) {
    let str = "";
    for (i = 0; i < movieData[keys[x]].cast.length; i++) {
        if (i !== 0) {
            str += ", ";
        }
        str += movieData[keys[x]].cast[i];
    }
    return str;
}

// goes to previous movie in the list, skips to end of list if past beginning
function lastMovie() {
    if (index === 0) {
        index = keys.length - 1;
    } else {
        index--;
    }
    showMovie(index);
}

// goes to next movie in list, skips to beinning of list if past end
function nextMovie() {
    index++;
    if (index === keys.length) {
        index = 0;
    }
    showMovie(index);
}

// edits the currently displayed movie
function editMovie() {
    // show editor
    tinter.style.display = "block";
    editor.style.display = "block";
    
    // populate form fields with current movie's data
    title.value = keys[index];
    year.value = movieData[keys[index]].year;
    plot.value = movieData[keys[index]].plot;
    cast.value = castString(index);
    runtime.value = movieData[keys[index]].runtime;
    rating.value = movieData[keys[index]].rating;
}

function newMovie() {
    movieData["Enter Movie Title"] = {
        plot: "Enter plot description",
        cast: ["Enter cast names separated by commas"],
        runtime: 150,
        rating: 7.0,
        year: 1999,
    }
    updateKeys();
    index = keys.length - 1;
    showMovie(index);
    editMovie();
}

// deletes current movie, goes to previous movie
function deleteMovie() {
    delete movieData[keys[index]];
    updateKeys();
    lastMovie();
}

// saves the changes and updates display
function saveChanges() {
    if (keys[index] !== title.value) {
        Object.defineProperty(movieData, title.value,
            Object.getOwnPropertyDescriptor(movieData, keys[index]));
        delete movieData[keys[index]];
        updateKeys();
        lastMovie();
    }
    movieData[keys[index]].year = year.value;
    movieData[keys[index]].plot = plot.value;
    let Arr = cast.value.split(',');
    movieData[keys[index]].cast = Arr;
    movieData[keys[index]].runtime = runtime.value;
    movieData[keys[index]].rating = rating.value;

    showMovie(index);
    closeEditor();
}

// close the editor window without saving
function closeEditor() {
    tinter.style.display = "none";
    editor.style.display = "none";
}