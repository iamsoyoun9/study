/** 기존 요소 */
let tabA;
let closeBtn;
let plusBtn;
let boxArea;
let iconArea;
let footer;
let inputArea;
let submitBtn;
let plus;
let bubble;
let iconDiv;
let iconNum = 0;
let folderNum = 0;
let icons = [];
let folders = [];
let iconAlt = [];
let folderAlt = [];
let moveIcon;
let imgArr;

let modal;
let modalBody;
let modalClose;

class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(tabNum) {
		this.tabNum = tabNum;
		this.basic();


	}
	/** 처음 실행 시 */
	basic() {
		/** 생성 */
		this.tab();
		this.box();
		this.footer();
		/** 실행 */
		this.start();
	}
	/** 탭 영역 */
	tab() {
		tabA = document.createElement('div');
		tabA.className = `tabA tab${tabNum}`;
		/*tabBtn.id = 'tab' + this.tabNum;*/
		tabA.innerText = `${this.tabNum}. 쏘 💻`;
		$('.tab').append(tabA);
		closeBtn = document.createElement('button');
		closeBtn.className = 'closeBtn';
		closeBtn.innerText = 'X';
		$('.tabA').append(closeBtn);
		plusBtn = document.createElement('button');
		plusBtn.className = 'plusBtn';
		plusBtn.innerText = '+';
		$('.tab').append(plusBtn);
		let tabPlus = document.querySelector('.plusBtn');
		tabPlus.addEventListener('click', function () {
			icons = [];
			folders = [];
			iconNum = 0;
			folderNum = 0;
			tabNum++;
			console.log(`#tab${tabNum}`)
			$('.plusBtn').before(
				`<div class="tabA tab${tabNum}">${tabNum}. 쏘 💻<button class = "closeBtn">X</button></div>`
			);
			myDesktop.box();
			console.log('클릭');

			let tabList = document.querySelectorAll('.tabA');
			console.log(tabList)
			// tabList.forEach(function (c) {
			// 	c.addEventListener('click', function () {
			// 		console.log(c.className)[1]
					
			// 	})
			// })
		});

	}

	/** 아이콘 영역 */
	box() {
		boxArea = document.createElement('div');
		boxArea.id = `tab${tabNum}`;
		boxArea.className = 'box';
		$('.desktop').append(boxArea);
		iconArea = document.createElement('div');
		iconArea.className = 'iconArea';
		$('.box').append(iconArea)
	}
	footer() {
		footer = document.createElement('footer');
		footer.className = 'footer';
		$('body').append(footer);
		plus = document.createElement('img');
		plus.className = 'plus';
		plus.src = './icon/plus.png';
		$('.footer').append(plus);
		bubble = document.createElement('div'); // 하단 div
		bubble.className = 'bubble';
		$('.footer').append(bubble);
		bubble.style.display = 'none';
		this.create('icon');
		this.create('folder');
	}
	create(type) {
		inputArea = document.createElement('input');
		inputArea.type = 'number';
		inputArea.className = `${type}Input`;
		inputArea.placeholder = (type == 'icon') ? '생성할 아이콘의 개수를 입력하세요' : '생성할 폴더의 개수를 입력하세요';
		submitBtn = document.createElement('input');
		submitBtn.type = 'submit';
		submitBtn.value = type == 'icon' ? '아이콘생성' : '폴더생성';
		submitBtn.className = `${type}Submit`;
		$('.bubble').append(inputArea);
		$('.bubble').append(submitBtn);

	}
	start() {
		plus.addEventListener('click', function () {
			console.log('클릭해쑴');
			if (bubble.style.display == 'none') {
				bubble.style.display = 'block';
			} else {
				bubble.style.display = 'none';
			}
		});
	}
}
class drag {
	constructor() {
		this.click();
	}
	click() {
		let imgArr = document.querySelector('.box');
		// let imgArr = document.querySelector(`#tab1 > .iconDiv > img`);
		console.log(imgArr);

		let pick = null;
		let pickIndex = null;
		imgArr.addEventListener('click', function () {
			bubble.style.display = 'none';
		})
		imgArr.addEventListener('dragstart', function (e) {
			console.log(e)
			const obj = e.target;
			pick = obj
			pickIndex = [...obj.parentNode.children].indexOf(obj)
		})
		imgArr.addEventListener('dragover', function (e) {
			e.preventDefault();
		})
		imgArr.addEventListener('drop', function (e) {
			const obj = e.target;
			const index = [...obj.parentNode.children].indexOf(obj)
			if (index > pickIndex) {
				obj.after(pick);
			} else {
				obj.before(pick)
			}
		})
	}

}

class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(iconNum, tabNum) {
		this.iconNum = iconNum;
		this.tabNum = tabNum;
		icons = [];
		this.create();
		new drag();
		// this.move();
	}
	create() {
		// $(`#tab${this.tabNum}`).append(iconDiv);

		for (let i = icons.length; i < this.iconNum; i++) {
			let num = Math.floor(Math.random() * 5 + 1)
			icons[i] = document.createElement('img');
			icons[i].src = `./icon/icon${num}.png`;
			icons[i].alt = `icon${icons.length}`;
			icons[i].className = 'icon';
			icons[i].draggable = 'true';

			// iconDiv.append(icons[i]);
			$(`#tab${tabNum} > .iconArea`).append(icons[i])
		}
		for (let i = 0; i < icons.length; i++) {
			iconAlt.push(icons[i].alt);
		}
	}
}

class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(folderNum, tabNum) {
		this.folderNum = folderNum;
		this.tabNum = tabNum;
		this.create();
		new drag();
	}
	create() {
		// $(`#tab${this.tabNum}`).append(iconDiv);
		// for (let i = folders.length; i < this.folderNum; i++) {
		// 	let num = Math.floor(Math.random() * 3 +1)
		// 	folders[i] = document.createElement('img');
		// 	folders[i].src = `./icon/folder${num}.png`;
		// 	folders[i].alt = `folder${folders.length}`;
		// 	folders[i].className = 'folder';
		// 	folders[i].draggable = 'true';
		// 	$(`#tab${tabNum}`).append(folders[i])
		// 	modal = document.createElement('div');
		// 	modal.className = 'modal';
		// 	modal.id = 'folder' + (i + 1);
		// 	$(`#tab${tabNum}`).append(modal);
		// 	modalBody = document.createElement('div');
		// 	modalBody.className = 'modalBody';
		// 	modal.append(modalBody);
		// 	modalClose = document.createElement('button');
		// 	modalClose.className = 'modalClose';
		// 	modalClose.textContent = 'X';
		// 	modalBody.append(modalClose);
		// }
		for (let i = folders.length; i < this.folderNum; i++) {
			let num = Math.floor(Math.random() * 3 + 1)
			folders[i] = document.createElement('img');
			folders[i].src = `./icon/folder${num}.png`;
			folders[i].alt = `folder${folders.length}`;
			folders[i].className = 'folder';
			folders[i].draggable = 'true';
			$(`#tab${tabNum} > .iconArea`).append(folders[i])
		}
		for (let i = folders.length - this.folderNum; i < this.folderNum; i++) {
			modal = document.createElement('div');
			modal.className = 'modal';
			modal.id = 'folder' + (i + 1);
			$(`#tab${tabNum}`).append(modal);
			modalBody = document.createElement('div');
			modalBody.className = 'modalBody';
			modal.append(modalBody);
			modalClose = document.createElement('button');
			modalClose.className = 'modalClose';
			modalClose.textContent = 'X';
			modalBody.append(modalClose);
		}
		// for (let i = 0; i < folders.length; i++) {
		// 	folderAlt.push(folders[i].alt);
		// }
	}

}

class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor() {
		this.click();
		this.show();
		new drag();
	}
	click() {
		let boxIcon = document.querySelectorAll('.box>img');
		boxIcon.forEach(function (c) {
			c.addEventListener('click', function () {
				bubble.style.display = 'none';
			})
		})

	}
	show() {
		folders.forEach(function (e) {
			e.addEventListener('dblclick', function () {
				let clickFolder = $(`#${e.alt}`)[0]; // 선택된 폴더의 alt와 아이디가 같은 모달
				if (clickFolder.className == 'modal') {
					clickFolder.classList.add('show');
				} else {
					clickFolder.classList.remove('show')
				}
				let openModal = clickFolder.children[0]; // 현재 열려있는 모달
				openModal.innerHTML += `<h3>이거슨 👉🏻 ${e.alt} 열어돠아아아</h3>`;
				openModal.innerHTML += `<h2>폴더 열었다...o(*￣▽￣*)ブ</h2>`;
				// console.log(openModalCon.children[0]); // 현재 열려있는 모달을 닫는 버튼
				let closeModal = openModal.children[0];
				closeModal.addEventListener('click', function () {
					openModal.innerHTML = "";
					clickFolder.classList.toggle('show');
					openModal.innerHTML = '<button class="modalClose">X</button>'; // 중첩방지 초기화
				})
				console.log(modalBody)
				const container = document.querySelector('.show');
				const item = container.querySelector('.modalBody');
				const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
				const { width: itemWidth, height: itemHeight } = item.getBoundingClientRect();
				/** 드래그 */
				let isDragging = null;
				let originLeft = null;
				let originTop = null;
				let originX = null;
				let originY = null;
				item.addEventListener('mousedown', function (e) {
					isDragging = true;
					originX = e.clientX;
					originY = e.clientY;
					originLeft = item.offsetLeft;
					originTop = item.offsetTop;
					item.parentElement.classList.remove('click');
				});
				document.addEventListener('mouseup', function (e) {
					item.parentElement.classList.remove('click');
					isDragging = false;
				});
				document.addEventListener('mousemove', function (e) {
					if (isDragging) {
						const diffX = e.clientX - originX;
						const diffY = e.clientY - originY;
						const endOfXPoint = containerWidth - itemWidth / 2;
						const endOfYPoint = containerHeight - itemHeight / 2;
						item.style.left = `${Math.min(Math.max(240, originLeft + diffX), endOfXPoint)}px`;
						item.style.top = `${Math.min(Math.max(240, originTop + diffY), endOfYPoint)}px`;

					}
				});
			})
		})
	}
}