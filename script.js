window.addEventListener("keydown",function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    key.classList.add('addBorder');
    setTimeout(function(){
        key.classList.remove('addBorder');
        audio.pause();
    },500);
    audio.play();
});