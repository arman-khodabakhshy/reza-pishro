const btn = document.querySelector('button');
const vc = new Audio('./music/zahmat.mp3');
const arman = document.querySelector('.arman');

btn.addEventListener(`mouseenter`, function () {
    btn.style = `width: 65%;
    height:70% ;
    background-repeat:no-repeat;
    background-size:cover ;
    margin: auto;
    background: url(../img/reza-pishro-moshkel-dari-nft-659a605d494c1ffd7082d408.svg);
    cursor: pointer;
    border: none;` , vc.play();
})


btn.addEventListener(`mouseleave`, function () {
    btn.style = `width: 40%;
    height:48% ;
    background-repeat:no-repeat;
    background-size:cover ;
    margin: auto;
    background: url(../img/pishro-ramzarz-min.svg);
    cursor: pointer;
    border: none;
}` , vc.paused();
})
