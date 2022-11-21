class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor() {}
	create(arr, num, type) {
		for (var i = arr.length; i < num; i++) {
			arr[i] = new Image();
			arr[i].src = './icon/' + type + '.png';
			arr[i].alt = type + arr.length;
			arr[i].className = type;
			box.append(arr[i]);
		}
	}
	img(imgName, cName, eName) {
		imgName = document.createElement('img');
		imgName.className = cName;
		imgName.src = 'icon/' + cName + '.png';
		eName.appendChild(imgName);
		return imgName;
	}
	footer(footerName, eName) {
		footerName = document.createElement('footer');
		footerName.className = 'footer';
		eName.append(footerName);
		return footerName;
	}
	div(divName, cName, eName) {
		divName = document.createElement('div');
		divName.className = cName;
		eName.appendChild(divName);
		return divName;
	}
	inputText(divName, inputName, name) {
		inputName = document.createElement('input');
		inputName.type = 'number';
		inputName.placeholder = '생성할 ' + name + '의 개수를 입력하세요';
		inputName.className = 'input';
		divName.appendChild(inputName);
		return inputName;
	}
	inputSubmit(divName, submitName, cName, name) {
		submitName = document.createElement('input');
		submitName.type = 'submit';
		submitName.className = cName + 'Submit';
		submitName.value = name + '생성';
		divName.appendChild(submitName);
		return submitName;
	}
	button(divName, buttonName, cName, name) {
		buttonName = document.createElement('button');
		buttonName.className = cName + 'Btn';
		buttonName.value = name;
		divName.appendChild(buttonName);
		return buttonName
	}
	drag(array) {
		array.addEventListener('click', function () {
			bubble.style.display = 'none';
		})
		array.addEventListener('dragstart', function (e) {
			bubble.style.display = 'none';
			const obj = e.target;
			pick = obj
			pickIndex = [...obj.parentElement.children].indexOf(obj)
		})
		array.addEventListener('dragover', function (e) {
			e.preventDefault()
		})
		array.addEventListener('drop', function (e) {
			const obj = e.target;
			const index = [...obj.parentElement.children].indexOf(obj)
			if (index > pickIndex) {
				obj.after(pick)
			} else {
				obj.before(pick)
			}

		})
	}
};

class Icon extends Desktop {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(name, type) {
		super();
		this.name = name;
		this.type = type;
	}
	// methods
	create(arr, num, type) {
		for (var i = arr.length; i < num; i++) {
			arr[i] = new Image();
			arr[i].src = './icon/' + type + '.png';
			arr[i].alt = type + arr.length;
			arr[i].className = type;
			arr[i].draggable = 'true';
			box.append(arr[i]);
		}
	}


};

class Folder extends Desktop {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	create(arr, num, type) {
		for (var i = arr.length; i < num; i++) {
			arr[i] = new Image();
			arr[i].src = './icon/' + type + '.png';
			arr[i].alt = arr.length + '번째 폴더 열었돱';
			arr[i].className = type;
			arr[i].draggable = 'true';
			box.append(arr[i]);
		}
	}
	create(arr, num, type,c) {
		for (var i = arr.length; i < num; i++) {
			arr[i] = new Image();
			arr[i].src = './icon/' + type + '.png';
			arr[i].alt = arr.length + '번째 폴더 열었돱';
			arr[i].className = type;
			arr[i].draggable = 'true';
			box.append(arr[i]);
		}
	}
	
};

class Window extends Folder {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor() {
		super()
	}
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
