

//waits until everything loaded and then runs all javascript for website.
//put all code in braces below
document.addEventListener("DOMContentLoaded", function() {

    console.log("HEYYY");

    let myPhoto = document.getElementById("rgb-cat");

    myPhoto.addEventListener("click", changeImage);

    function changeImage(){
        console.log(myPhoto.src);
        if (myPhoto.src == "https://eleanorbangs.github.io/about-me/rnbw_cat.jpg"){
            console.log('IN THE YES PHOTO')
            myPhoto.src = "fonzie.jpg"
        } else {
            myPhoto.src = "rnbw_cat.jpg"
        }
    }

})
//end of DOM content loaded
