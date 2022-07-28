//B1 tạo các biến id
let canvas = document.getElementById('gamezone')
let context = canvas.getContext('2d')
let scoreshow = document.getElementById('score')
// B2 tạo hình ảnh
let birdimg = new Image();
let background = new Image();
let uptube = new Image();
let downtube = new Image();
birdimg.src ="CaseStudy_Module1_images/bird.png"
background.src ="CaseStudy_Module1_images/nenchinh.png"
uptube.src ="CaseStudy_Module1_images/ongtren.png"
downtube.src ="CaseStudy_Module1_images/ongduoi.png"
//B3 tạo biến khoảng cách giữa các img
