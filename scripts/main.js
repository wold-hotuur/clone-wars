var myImage = document.querySelector('img')

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src')
    if(mySrc === '') {
        myImage.setAttribute ('src','');
    } else {
        myImage.setAttribute ('src','');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1')
function setAttribute() {
    var myName = prompt('Введите свое имя');
}