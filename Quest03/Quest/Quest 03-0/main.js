// 객체
var full_img = document.getElementsByClassName('full-img')[0]
var displayed_img = document.getElementsByClassName('displayed-img')[0]; // 큰이미지
var thumb_bar = document.getElementsByClassName('thumb-bar')[0]; // 작은 이미지를 감싸는 div
var btn = document.getElementsByClassName('dark')[0];
var overlay = document.getElementsByClassName('overlay')[0];

/* Declaring the array of image filenames 이미지 파일 이름 배열 선언 */
var img_arr = [];

/* Looping through images 이미지 반복 */
// 배열에 이미지 담기
for(var i = 0; i < 5; i++){
    img_arr[i] = new Image();
    img_arr[i].src = 'images/pic'+(i+1)+'.jpg';
    img_arr[i].alt = 'pic'+(i+1);
    thumb_bar.appendChild(img_arr[i]) /* Declaring the alternative text for each image file 각 이미지 파일의 대체 텍스트 선언 */
}

// 이미지 클릭시 display_img src 교체
img_arr.forEach(function(pick,index){
    pick.onclick = function(){
        displayed_img.src = pick.src;
    }
})

/* Wiring up the Darken/Lighten button 다크&라이트 토글 버튼*/
// 버튼 클릭시 어두어지는 효과
btn.addEventListener('click',function(){
    if(btn.className == 'dark'){
        btn.setAttribute('class','light'); // btn.className = 'light'
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class','dark'); // btn.className = 'dark'
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})


// var img1 = document.createElement('img');
// img1.setAttribute('src', 'images/pic1.jpg');
// img1.setAttribute('alt', '');
// thumbBar.appendChild(img1);

// var img2 = document.createElement('img');
// img2.setAttribute('src', 'images/pic2.jpg');
// img2.setAttribute('alt', '');
// thumbBar.appendChild(img2);

// var img3 = document.createElement('img');
// img3.setAttribute('src', 'images/pic3.jpg');
// img3.setAttribute('alt', '');
// thumbBar.appendChild(img3);

// var img4 = document.createElement('img');
// img4.setAttribute('src', 'images/pic4.jpg');
// img4.setAttribute('alt', '');
// thumbBar.appendChild(img4);

// var img5 = document.createElement('img');
// img5.setAttribute('src', 'images/pic5.jpg');
// img5.setAttribute('alt', '');
// thumbBar.appendChild(img5);
