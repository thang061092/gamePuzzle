const img1 = "https://bitly.com.vn/Zd4RQ";
const img2 = "https://bitly.com.vn/SLR2x";
const img3 = "https://bitly.com.vn/27DUU";

function changeImg() {
    if (document.getElementById("imagi").src == img1) {
        document.getElementById("imagi").src = img2;
    } else if (document.getElementById("imagi").src == img2) {
        document.getElementById("imagi").src = img3;
    } else {
        document.getElementById("imagi").src = img1;
    }
    if (document.getElementById("imagi").src == document.getElementById("imagi1").src  && document.getElementById("imagi1").src == document.getElementById("imagi2").src){
        alert('You Win');
    }
}

function changeImg1() {
    if (document.getElementById("imagi1").src == img2) {
        document.getElementById("imagi1").src = img3;
    } else if (document.getElementById("imagi1").src == img3) {
        document.getElementById("imagi1").src = img1;
    } else {
        document.getElementById("imagi1").src = img2;
    }
    if (document.getElementById("imagi").src == document.getElementById("imagi1").src  && document.getElementById("imagi1").src == document.getElementById("imagi2").src){
        alert('You Win');
    }
}

function changeImg2() {
    if (document.getElementById("imagi2").src == img3) {
        document.getElementById("imagi2").src = img1;
    } else if (document.getElementById("imagi2").src == img1) {
        document.getElementById("imagi2").src = img2;
    } else {
        document.getElementById("imagi2").src = img3;
    }
    if (document.getElementById("imagi").src == document.getElementById("imagi1").src  && document.getElementById("imagi1").src == document.getElementById("imagi2").src){
        alert('You Win');
    }
}
