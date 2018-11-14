$(document).on("click", ".addBurgerBtn", function (event) {

    event.preventDefault();

    var newBurger = {
        burger_name: $("#addBurger").val().trim(),
        devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            location.reload();
        }
    );
});

$(document).on("click", ".devourBtn", function (event) {

    var id = $(this).data("planid");
    var newDevoured = 1;

    var newDevouredValue = {
        devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevouredValue
    }).then(function (result) {
        location.reload();
    })
});

//send delete request
$(document).on("click", ".delete", function (event) {
    var id = $(this).data("planid");

    $.ajax("/api/burger/" + id, {
        type: "DELETE"
    }).then(function (result) {
        location.reload();
    }).catch(error => console.log(error));
})