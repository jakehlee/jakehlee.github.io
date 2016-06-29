$(document).ready(function() {
    $("#sidebar-toggle").click(function(event) {
        event.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});