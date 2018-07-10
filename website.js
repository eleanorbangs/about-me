

//waits until everything loaded and then runs all javascript for website.
//put all code in braces below
document.addEventListener("DOMContentLoaded", function() {

    console.log("HEYYY");

    let myPhoto = document.getElementById("rgb-cat");

    myPhoto.addEventListener("click", changeImage);

    function changeImage(){
        console.log(myPhoto.src);
        if (myPhoto.src == "file:///Users/girlswhocode2018/development/about-me/rnbw_cat.jpg"){
            myPhoto.src = "fonzie.JPG"
        } else {
            myPhoto.src = "rnbw_cat.jpg"
        }
    }

})
//end of DOM content loaded
