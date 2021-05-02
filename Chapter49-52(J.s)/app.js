//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
// CHAPTER 49 to 52.....//
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

// Q no 1.
// Create a signup form and display form data in your web
// page on submission.

function formSubmitHandler(event) {
    // alert(event);
    event.preventDefault();
    console.log(event);
    var firstName = document.querySelector("#f-name").value;
    var lastName = document.querySelector("#l-name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    alert(
        "First name: " +
        firstName +
        " Last name: " +
        lastName +
        " Email: " +
        email +
        " Password: " +
        password
    );
}


// Q no 2.
// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

function readMore() {
    document.getElementById("more-content").style.display = "block";
}


// Q no 3.
// In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

var deleteButtons = document.querySelectorAll("table .delete");
var editButtons = document.querySelectorAll("table .edit");
for (var deleteButton of deleteButtons) {
    deleteButton.addEventListener("click", function() {
        var respectiveRow = this.parentNode.parentNode;
        respectiveRow.remove();
    });
}
for (var editButton of editButtons) {
    editButton.addEventListener("click", function() {
        var secretForm = document.querySelector(".secret-form");
        secretForm.style.display = "block";
        secretForm.children[1].value = this.parentNode.parentNode.children[1].innerHTML;
        secretForm.children[3].value = this.parentNode.parentNode.children[2].innerHTML;
        console.log(this.parentNode.parentNode.children[1].innerHTML);
        console.log(this.parentNode.parentNode.children[2].innerHTML);
    });
}

// _________________________________________________________________________________________________