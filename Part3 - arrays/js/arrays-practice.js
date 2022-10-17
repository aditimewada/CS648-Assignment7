//STEP 1
var favMovies = ["Zindagi na milegi Dobara", "Golmaal", "Shawsank Redemption", "Fast and Furious", "Stuart Little"];
window.console.log(favMovies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Zindagi na milegi Dobara";
movies[1] = "Golmaal";
movies[2] = "Shawsank Redemption";
movies[3] = "Fast and Furious";
movies[4] = "Stuart Little";
window.console.log(movies[0]);

//STEP 3
var movies2 = new Array(5);
movies2[0] = "Zindagi na milegi Dobara";
movies2[1] = "Golmaal";
movies2[2] = "Shawsank Redemption";
movies2[3] = "Fast and Furious";
movies2[4] = "Stuart Little";

movies2.splice(2, 0, "Welcome");
window.console.log(movies2.length);

//STEP 4
var favMovies2 = [];
favMovies2[0] = "Zindagi na milegi Dobara";
favMovies2[1] = "Golmaal";
favMovies2[2] = "Shawsank Redemption";
favMovies2[3] = "Fast and Furious";
favMovies2[4] = "Stuart Little";

delete favMovies2[0];
window.console.log(favMovies2);

//STEP 5
var favMovies3 = [];
favMovies3[0] = "Zindagi na milegi Dobara";
favMovies3[1] = "Golmaal";
favMovies3[2] = "Shawsank Redemption";
favMovies3[3] = "Fast and Furious";
favMovies3[4] = "Stuart Little";
favMovies3[5] = "Dhamaal";
favMovies3[6] = "Baby's Day Out";

for (let index = 0; index < favMovies3.length; index++) {
    window.console.log(favMovies3[index]);
}

//STEP 6
var favMovies4 = [];
favMovies4[0] = "Zindagi na milegi Dobara";
favMovies4[1] = "Golmaal";
favMovies4[2] = "Shawsank Redemption";
favMovies4[3] = "Fast and Furious";
favMovies4[4] = "Stuart Little";
favMovies4[5] = "Dhamaal";
favMovies4[6] = "Baby's Day Out";

for (index in favMovies4) {
    if (favMovies4.hasOwnProperty(index)) {
        window.console.log(favMovies4[index]);
    }
}

//STEP 7
var favMovies5 = [];
favMovies5[0] = "Zindagi na milegi Dobara";
favMovies5[1] = "Golmaal";
favMovies5[2] = "Shawsank Redemption";
favMovies5[3] = "Fast and Furious";
favMovies5[4] = "Stuart Little";
favMovies5[5] = "Dhamaal";
favMovies5[6] = "Baby's Day Out";

favMovies5.sort();
for (index in favMovies5) {
    if (favMovies5.hasOwnProperty(index)) {
        window.console.log(favMovies5[index]);
    }
}

//STEP 8
var favMovies6 = [];
favMovies6[0] = "Zindagi na milegi Dobara";
favMovies6[1] = "Golmaal";
favMovies6[2] = "Shawsank Redemption";
favMovies6[3] = "Fast and Furious";
favMovies6[4] = "Stuart Little";
favMovies6[5] = "Dhamaal";
favMovies6[6] = "Baby's Day Out";

var leastFavMovies = [];
leastFavMovies[0] = "Welcome back";
leastFavMovies[1] = "Golmaal returns";
leastFavMovies[2] = "Time pass";

window.console.log("Movies I like:\n\n");
for (let index = 0; index < favMovies6.length; index++) {
    window.console.log(favMovies6[index]);
}
window.console.log("\n");

window.console.log("Movies I regret watching:\n\n");
for (let index = 0; index < leastFavMovies.length; index++) {
    window.console.log(leastFavMovies[index]);
}
window.console.log("\n");

//STEP 9
var movies = favMovies6.concat(leastFavMovies);
movies.reverse();
for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]);
}
window.console.log("\n");

//STEP 10
var movies2 = favMovies6.concat(leastFavMovies);
window.console.log(movies.pop());