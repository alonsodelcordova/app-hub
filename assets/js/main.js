

var yearHtml = document.getElementById('year');
yearHtml.innerHTML = getYear();


function getYear(){
    let date = new Date()
    return date.getFullYear();
}