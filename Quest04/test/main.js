let tab; // tab 생성
let boxArea; // box 영역
let bubble; // 하단 플러스 클릭시 생성되는 부분
let boxNum;
let icons = []; // 아이콘 배열
let folders = [];
let iconNum = 0;
let folderNum = 0;

class Desktop {
    constructor() {
        this.start();
    }
    start() {
        this.createTag();
        this.tab();
        this.box();
        this.footer();
        this.createIconFolder();
        boxNum = 1;
    }
    createTag() {
        let desktop = document.getElementsByClassName('desktop')[0];
        /** header */
        let header = document.createElement('header');
        desktop.before(header);
        /** tab */
        tab = document.createElement('div');
        tab.className = 'tab';
        header.append(tab);
        /** box */
        boxArea = document.createElement('div');
        boxArea.className = 'boxArea';
        desktop.append(boxArea);
        /** footer */
    }
    tab() {
        /** 초기 tab 1 */
        let tab1 = document.createElement('div');
        tab1.className = 'tabName is_on';
        tab.append(tab1);
        let tab1A = document.createElement('a');
        tab1A.href = '#tab1';
        tab1A.className = 'btn';
        tab1A.innerText = '1. Page🍍';
        tab1.append(tab1A);
        let tabClose = document.createElement('button');
        tabClose.className = 'tabClose';
        tabClose.innerText = 'X';
        tab1A.append(tabClose);
        /** tab plus */
        let tabPlusArea = document.createElement('div');
        tabPlusArea.className = 'tabPlusArea';
        tab.append(tabPlusArea);
        let tabPlus = document.createElement('button');
        tabPlus.className = 'tabPlus';
        tabPlus.innerText = '+';
        tabPlusArea.append(tabPlus)

        /** tab Plus 클릭시 */
        let tabNum = 1;
        tabPlus.addEventListener('click', function () {
            bubble.style.display = 'none';
            tabNum++;

            iconNum = 0;
            folderNum = 0;
            $('.tabPlusArea').before(`<div class = "tabName"><a href = "#tab${tabNum}" class = "btn">${tabNum}. Page🍍<button class="tabClose">X</button></a></div>`);
            $('.boxArea').append(`<div id = "tab${tabNum}" class = "cont"><div class="iconArea"></div></div>`);
            /** tab 클릭시 화면 전환*/
            const tabList = document.querySelectorAll('.tab > .tabName');
            const contents = document.querySelectorAll('.boxArea > div');
            let activeCont = ''; // 활성화 컨텐츠

            /** 추가한 tab 화면으로 전환 */
            for (var i = 0; i < tabList.length; i++) {
                tabList[i].classList.remove('is_on');
                contents[i].style.display = 'none';
            }
            let createTab = tabList[tabList.length - 1]; // 마지막으로 생성된 tab
            createTab.classList.add('is_on');
            activeCont = createTab.children[0].getAttribute('href');
            const num = /[^0-9]/g;
            boxNum = activeCont.replace(num, '');
            document.querySelector(activeCont).style.display = 'block';

            /** tab 클릭시 화면 전환*/
            for (var i = 0; i < tabList.length; i++) {
                tabList[i].querySelector('.btn').addEventListener('click', function (e) {
                    e.preventDefault();
                    bubble.style.display = 'none';
                    for (var j = 0; j < tabList.length; j++) {
                        // 나머지 버튼 클래스 제거
                        tabList[j].classList.remove('is_on');

                        // 나머지 컨텐츠 display:none 처리
                        contents[j].style.display = 'none';
                    }

                    // 버튼 관련 이벤트
                    this.parentNode.classList.add('is_on');

                    // 버튼 클릭시 컨텐츠 전환
                    activeCont = this.getAttribute('href');
                    document.querySelector(activeCont).style.display = 'block';

                    /** 클릭한 탭의 숫자 추출 */
                    boxNum = activeCont.replace(num, '');
                });

            }
            /** x 클릭시 */
            let closeList = document.querySelectorAll('.tabClose');
            closeList.forEach(function (c) {
                c.addEventListener('click', function () {
                    console.log('클릭')
                    console.log(this.parentNode.getAttribute('href'))
                    let checkDiv = this.parentNode.getAttribute('href');
                    $(checkDiv).remove();
                    let checkTab = this.parentNode.parentNode;
                    $(checkTab).remove();

                    /** 삭제 후 tab 마지막 화면으로 전환 */
                })
            })
        })


    }
    box() {
        /** 초기 박스 */
        let box1 = document.createElement('div');
        box1.id = 'tab1';
        box1.className = 'cont';
        boxArea.append(box1);

        /** 아이콘 영역 */
        let iconArea = document.createElement('div');
        iconArea.className = 'iconArea';
        box1.append(iconArea);
    }
    footer() {
        let footer = document.createElement('footer');
        footer.className = 'footer';
        $('body').append(footer);
        let plus = document.createElement('img');
        plus.className = 'plus';
        plus.src = './icon/plus.png';
        $('.footer').append(plus);
        bubble = document.createElement('div');
        bubble.className = 'bubble';
        $('.footer').append(bubble);
        bubble.style.display = 'none';
        plus.addEventListener('click', function () {
            console.log('클릭해쑴');
            if (bubble.style.display == 'none') {
                bubble.style.display = 'block';
            } else {
                bubble.style.display = 'none';
            }
        });

        this.createType('icon');
        this.createType('folder');
    }
    createType(type) {
        let inputArea = document.createElement('input');
        inputArea.type = 'number';
        inputArea.className = `${type}Input`;
        inputArea.placeholder = (type == 'icon') ? '생성할 아이콘의 개수를 입력하세요' : '생성할 폴더의 개수를 입력하세요';
        bubble.append(inputArea);
        let submitBtn = document.createElement('input');
        submitBtn.type = 'submit';
        submitBtn.value = type == 'icon' ? '아이콘생성' : '폴더생성';
        submitBtn.className = `${type}Submit`;
        bubble.append(submitBtn);
    }
    createIconFolder() {
        /** 아이콘 생성 */
        let iconInput = document.querySelector('.iconInput');
        let iconSubmit = document.querySelector('.iconSubmit');
        let iconNum = 0;
        iconSubmit.addEventListener('click', function () {
            console.log('입력한 input icon >> ', iconInput.value)
            iconNum += Number(iconInput.value);
            iconInput.value = '';
            new Icon(iconNum, boxNum);
            console.log(boxNum)
        })

        /** 폴더 생성 */
        let folderInput = document.querySelector('.folderInput');
        let folderSubmit = document.querySelector('.folderSubmit');
        let folderNum = 0;
        folderSubmit.addEventListener('click', function () {
            console.log('입력한 input folder >> ', folderInput.value)
            folderNum += Number(folderInput.value);
            folderInput.value = '';
            new Folder(folderNum, boxNum);
            console.log(boxNum)
        })
    }
}


class drag {

}

class Icon {
    constructor(num, boxNum) {
        this.num = num;
        this.boxNum = boxNum;
        this.create();
    }
    create() {
        for (var i = icons.length; i < this.num; i++) {
            let rdNum = Math.floor(Math.random() * 5 + 1)
            icons[i] = document.createElement('img');
            icons[i].src = `./icon/icon${rdNum}.png`;
            icons[i].alt = `icon${icons.length}`;
            icons[i].className = 'icon';
            icons[i].draggable = 'true';
            $(`#tab${this.boxNum} > .iconArea`).append(icons[i])
        }
    }
}

class Folder {
    constructor(num, boxNum) {
        this.num = num;
        this.boxNum = boxNum;
        this.create();
    }
    create() {
        for (var i = folders.length; i < this.num; i++) {
            folders[i] = document.createElement('img');
            folders[i].src = `./icon/folder.png`;
            folders[i].alt = `folder${folders.length}`;
            folders[i].className = 'folder';
            folders[i].draggable = 'true';
            $(`#tab${this.boxNum} > .iconArea`).append(folders[i])
        }
    }
}

class Window {

}