let ong_height;
let hole_height;
setInterval(() => {
    ong_height = Math.floor(Math.random() * 10) + 30;
    hole_height = Math.floor(Math.random() * 20) + 20;
    document.getElementById("ong").style.height = ong_height + "%";
    document.getElementById("ong2").style.top = ong_height + hole_height + "%";
    document.getElementById("ong2").style.height = 100  -(ong_height + hole_height) + "%";
}, 4000);
let birdfall = document.getElementById("bird")
setInterval(() => {
    let x = parseInt(window.getComputedStyle(birdfall).getPropertyValue("top"));
    if (x <= 510) {
        birdfall.style.top = (x + 4) + "px";}
    // } else {
    //     alert("You Lost !! Your score is : " + score);
    //     birdfall.style.top = 100 + "px";
    //     window.location.reload();
    // }
},30)

function fly(){
    let fly = parseInt(window.getComputedStyle(birdfall).getPropertyValue("top"));
    if(fly >= 10){
        birdfall.style.top = (fly - 50) + "px"
    }
}

document.addEventListener('keydown',event => {
    if (event.code ==='Space'){
        fly()
    }
})


let score = 0
setInterval(() => {
    score ++
    document.getElementById("scr").innerHTML= score;
},1000 )


function check(ongtren,ongduoi){
    let ongtrenRect = ongtren.getBoundingClientRect();
    let ongduoiRect = ongduoi.getBoundingClientRect();

    return(ongtrenRect.right >= ongduoiRect.left && ongduoiRect.left <= ongtrenRect.right)
        && (ongtrenRect.bottom >= ongduoiRect.top && ongtrenRect.top <= ongduoiRect.bottom );
}


setInterval(() => {
    if(check(document.getElementById("bird") , document.getElementById("ong") )){
        birdfall.style.top = 510 + "px"
        setTimeout(() => {
            alert("You Lost !! Your score is : " + score );
            return;
        },1 );
        window.location.reload();
    }
    else if(check(document.getElementById("bird"),document.getElementById("ong2"))){
        birdfall.style.bottom = 510 + "px";
        setTimeout(() => {
            alert("You Lost !! Your Score is : " + score );
            return;
        },10 );
        window.location.reload()
    }
},100)