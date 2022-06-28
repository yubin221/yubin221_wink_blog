//const contentTarget = document.querySelectorAll('.content');
let checkImg = 1;

/*contentTarget.forEach(item => {
    item.addEventListener("mouseover", e => {
        item.style.backgroundColor = "#CFD0D2";
      });
})

contentTarget.forEach(item => {
    item.addEventListener("mouseout", e => {
        item.style.backgroundColor = "#F2F3F5";
      });
})*/

function left(){
    if(checkImg == 1){
        document.getElementById('img').src = '그림3.jpg';
        checkImg = 3;
    }
    else if(checkImg == 2){
        document.getElementById('img').src = '그림1.png';
        checkImg = 1;
    }
    else if(checkImg == 3){
        document.getElementById('img').src = '그림2.jpg';
        checkImg = 2;
    }
}

function right(){
    if(checkImg == 1){
        document.getElementById('img').src = '그림2.jpg';
        checkImg = 2;
    }
    else if(checkImg == 2){
        document.getElementById('img').src = '그림3.jpg';
        checkImg = 3;
    }
    else if(checkImg == 3){
        document.getElementById('img').src = '그림1.png';
        checkImg = 1;
    }
}

function home(){
    let checkHome = confirm('홈으로 이동하시겠습니까?');
    if(checkHome){
        location.href = "index.html"
    }
}

