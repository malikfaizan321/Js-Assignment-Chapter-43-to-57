//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
// CHAPTER 43 to 48.....//
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//


// Q no 1. 
// Show an alert box on click on a link.

function alertOpener() {
    alert("Thank You For Clicked Me!");
}

var alertLink = document.getElementById("show-alert");
alertLink.addEventListener("click", alertOpener);


// Q no 2. 
// Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

var images = document.querySelectorAll(".mobile-container > img");
for (var image of images) {
    image.addEventListener("click", function() {
        alert("Thanks for purchasing an item from us");
    });
}


// Q no 3. 
// Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

var tableButtons = document.querySelectorAll("table button");
for (var button of tableButtons) {
    button.addEventListener("click", function() {
        var respectiveRow = this.parentNode.parentNode;
        respectiveRow.remove();
    });
}


// Q no 4.
// Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

document
    .querySelector(".dynamic-bulb")
    .addEventListener("mouseover", function() {
        this.setAttribute("src", "assets/buld-on.jpg");
    });

document
    .querySelector(".dynamic-bulb")
    .addEventListener("mouseout", function() {
        this.setAttribute("src", "assets/buld-off.jpg");
    });


// Q no 5.
// Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

document
    .getElementById("counter-decrement")
    .addEventListener("click", function() {
        var count = +document.querySelector(".counter-holder").innerHTML;
        document.querySelector(".counter-holder").innerHTML = count - 1;
    });

document
    .getElementById("counter-increment")
    .addEventListener("click", function() {
        var count = +document.querySelector(".counter-holder").innerHTML;
        document.querySelector(".counter-holder").innerHTML = count + 1;
    });