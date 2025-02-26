let colors = ["white", "skyblue", "crimson" ];
var i = 0;
document.querySelector('.hero-section').innerHTML = `<h2 style="color: ${colors[1]};">Where Brain Enhances its Creativity.</h2>`

function change() {
    i = i + 1;
    document.querySelector('.hero-section').innerHTML = `<h2 style="color: ${colors[i]};">Where Brain Enhances its Creativity.</h2>`
}