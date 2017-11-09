function getPage(file, element) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(element).innerHTML =
            this.responseText;
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}
function postPage(file, element) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(element).innerHTML =
            this.responseText;
        }
    };
    xhttp.open("POST", file, true);
    xhttp.send();
}