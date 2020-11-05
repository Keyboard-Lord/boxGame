const classes = ['pink','yellow','blue','black']
$("#button").click(function(){
    window.location.reload(1);
});


for (let i =0; i<16;i++) {
    let random = Math.floor(Math.random() * classes.length);
    $('#container').append('<div class="box '+classes[random]+'"+></div>');
}
let index = -1;

$('.box').on('click',function(){
        index = 1+index;
            $(this).toggleClass(classes[index]);
        if (index === 3) {
            index = 0;
        }
        console.log(index);
});
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var oneMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinutes, display);
};
setTimeout(function(){
    window.location.reload(1);
 }, 72000);