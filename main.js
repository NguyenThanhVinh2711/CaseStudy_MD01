//Ống di chuyển và ramdom vị trí của ống


var pipe1_height;
var hole1_height;
var score = 0
setInterval(() => {
    pipe1_height = Math.floor(Math.random() * 10) + 30;
    hole1_height = Math.floor(Math.random() * 20) + 10;
    document.getElementById("pipe1").style.height = pipe1_height + "%";
    document.getElementById("pipe2").style.top = pipe1_height + hole1_height + "%";
    document.getElementById("pipe2").style.height = 100 - (pipe1_height + hole1_height) + "%";
}, 4500);

//lấy vị trí,css của bird rồi gán cho x, tốc độ rơi của bird , tạo "điều kiện thua"

var bird = document.getElementById("bird")

//Hàm điều kiện thua và cho con chim rơi xuống
function run() {
    setInterval(() => {
        var x = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if (x <= 555) {
            bird.style.top = (x + 4) + "px";
        } else {
            alert("You Lost !! Your score is : " + score);
            bird.style.top = 100 + "px";
            window.location.reload();
        }
    }, 30);

//tăng điểm
    setInterval(() => {
        score++
        document.getElementById("scr").innerHTML = score;
    }, 500)
}


//Cho con chim bay lên

function jump() {
    var fly = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if (fly >= 14) {
        speed = bird.style.top = (fly - 60) + "px"
    }
}

//khởi động bắt đầu trò chơi
document.addEventListener('mousedown', event => {

    var bg = document.getElementById("bg")
    var pipestart1 = document.getElementById("pipe1")
    var pipestart2 = document.getElementById("pipe2")
    bg.style.display = "none"
    pipestart1.classList.remove("obs_start")
    pipestart2.classList.remove("obs_start")
    pipestart1.classList.add("obs")
    pipestart2.classList.add("obs")
    run();

})

document.addEventListener('keydown', event => {
        if (event.code === 'Space') {
            jump();
        }
    }
)


//conditon loss( điều kiện thua)

function check(elm1, elm2) {
    var elm1Rect = elm1.getBoundingClientRect();
    var elm2Rect = elm2.getBoundingClientRect();
    return ((elm1Rect.right >= elm2Rect.left && elm1Rect.left <= elm2Rect.right)
        && (elm1Rect.bottom >= elm2Rect.top && elm1Rect.top <= elm2Rect.bottom));
}

//check loss ( kiểm tra xem đã thua chưa)

setInterval(() => {
    if (check(document.getElementById("bird"), document.getElementById("pipe1"))) {
        bird.style.top = document.getElementById("bird").getBoundingClientRect() + "px"
        setTimeout(() => {
            alert("You Lost !! Your score is : " + score);
            return;
        }, 1);
        window.location.reload();
    } else if (check(document.getElementById("bird"), document.getElementById("pipe2"))) {
        bird.style.bottom = document.getElementById("bird").getBoundingClientRect() + "px";
        setTimeout(() => {
            alert("You Lost !! Your Score is : " + score);
            return;
        }, 1);
        window.location.reload()
    }
}, 1)