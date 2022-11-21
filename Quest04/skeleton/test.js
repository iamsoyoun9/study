class Desktop { // 전체적인 화면
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(num){
		this.num = num;
	}
    // 탭 생성 + 배경화면 + footer + input
    tag(num){
		body.innerHTML += `<section class = "desktop" id = "desktop${num}">
		<div class = "box"></div>
		<footer class = "footer">
			<div class = "nav">
				<img class = "plus" src = "icon/plus.png">
			</div>
			<div class = "bubble" style = "display: none;">
				<div class = "inputArea">
					<input type="number" placeholder="생성할 아이콘의 개수를 입력하세요" class="input">
					<input type="submit" class="iconSubmit" value="아이콘생성">
				</div>
				<div class = "inputArea">
					<input type="number" placeholder="생성할 폴더의 개수를 입력하세요" class="input">
					<input type="submit" class="folderSubmit" value="폴더생성">
				</div>
			</div>
		</footer>
		</section>`;
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
	create(){

	}
	
};

class Icon extends Desktop { // 아이콘
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */

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

class Folder extends Desktop { // 폴더
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	create(arr, num, type) {
		for (var i = arr.length; i < num; i++) {
			arr[i] = new Image();
			arr[i].src = './icon/' + type + '.png';
			arr[i].alt = arr.length;
			arr[i].className = type;
			arr[i].draggable = 'true';
			box.append(arr[i]);
		}
	}
};

class Window { // 폴더 더블클릭시 생성되는 모달창
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	close(){
		closeBtn.addEventListener('click', function () { // 닫기 버튼 누르면 화면 사라짐
			if (modal.className ==`modal show`) {
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
				result = ` 이거슨 👉🏻 ${c.alt}번 폴더`;
				console.log('1',result)
				return result;
			})
			result = ` 이거슨 👉🏻 ${c.alt}번 폴더`;
			console.log('2',result)
			return result;
		})
		console.log(result);
		return result;
	}
};
