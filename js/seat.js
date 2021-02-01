window.onload = function() {
    var seats = document.getElementsByClassName("seat");

    for (let i = 0; i < seats.length; i++) {
        seats[i].onclick = function() {
            for (let i = 0; i < seats.length; i++) {
                seats[i].style.backgroundColor = "#5895ff";
            }
            seats[i].style.backgroundColor = "green";
        }
    }

}