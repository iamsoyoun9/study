class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor() {
		this.basic();
	}
	basic() {
		let section = document.querySelector('.desktop'); // desktop 영역
		let box = document.createElement('div');
		box.className = 'box';
		box.id = 'box' + this.tabNum;
		// box.style.backgroundImage = 'url("BackgroundImg/bg3.JPG")';
		section.appendChild(box);

		let boxArea = document.createElement('div');
		boxArea.className = 'boxArea';
		box.appendChild(boxArea);

		let footer = document.createElement('footer'); // footer
		footer.className = 'footer';
		box.appendChild(footer);

		footer.innerHTML += '<div class = "create">'
			+ '<img src = "icon/plus.png" class = "plus">'
			+ '</div>';

		let bubble = document.createElement('div'); // 하단 div
		bubble.className = 'bubble';
		footer.appendChild(bubble);
		bubble.style.display = 'none';

		/** icon */
		let iconDiv = document.createElement('div');
		iconDiv.className = 'inputArea';
		bubble.appendChild(iconDiv);

		let iconInput = document.createElement('input');
		iconInput.type = 'number';
		iconInput.placeholder = '생성할 아이콘의 개수를 입력하세요';
		iconInput.className = 'input';
		iconDiv.appendChild(iconInput);

		let iconSubmit = document.createElement('input');
		iconSubmit.type = 'submit';
		iconSubmit.className = 'submit';
		iconSubmit.value = '아이콘생성';
		iconDiv.appendChild(iconSubmit);

		/** folder */
		let folderDiv = document.createElement('div');
		folderDiv.className = 'inputArea';
		bubble.appendChild(folderDiv);

		let folderInput = document.createElement('input');
		folderInput.type = 'number';
		folderInput.placeholder = '생성할 폴더의 개수를 입력하세요';
		folderInput.className = 'input';
		folderDiv.appendChild(folderInput);

		let folderSubmit = document.createElement('input');
		folderSubmit.type = 'submit';
		folderSubmit.className = 'submit';
		folderSubmit.value = '폴더생성';
		folderDiv.appendChild(folderSubmit);

		let plus = document.querySelector('.plus');
		plus.addEventListener('click', function () {
			console.log('클릭해쑴')
			if (bubble.style.display == 'none') {
				bubble.style.display = 'block';
			} else {
				bubble.style.display = 'none';
			}
		})
	}
};

class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor() {

	}

	// methods
	create(arr, num, type) {
		for (var i = arr.length; i < num; i++) {
			arr[i] = new Image();
			arr[i].src = './icon/' + type + '.png';
			arr[i].alt = type + arr.length;
			arr[i].className = type;
			box.append(arr[i]);
		}
	}
};
class Folder extends Desktop {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	create(arr,num,type){
		for(var i = arr.length; i < num; i++){
			arr[i] = new Image();
			arr[i].src = './icon/'+ type +'.png';
			arr[i].alt = type + arr.length;
			arr[i].className = type;
			box.append(arr[i]);
		}
	}
};

class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	close(){
		closeBtn.addEventListener('click', function () { // 닫기 버튼 누르면 화면 사라짐
			if (modal.className == 'modal show') {
				modal.classList.remove('show');
				console.log('모달창 닫음');
				body.style.overflow = 'auto';
			}
		})
	}
	dblclick(array) {
		let result;
		array.forEach(function (c) { //폴더 더블클릭 시 모달 작동!!!
			c.addEventListener('dblclick', function () {// 더블클릭
				console.log('더블클릭');
				if (this.className == 'folder') {
					modal.classList.add('show');
					body.style.overflow = 'hidden';
				}
			})
			console.log('2',c.alt);
			result = c.alt;
			return result;
		})
		console.log(result);
		return result;
	}
};