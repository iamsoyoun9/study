class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(){

	}
	create(arr,num,type){
		for(var i = arr.length; i < num; i++){
			arr[i] = new Image();
			arr[i].src = './icon/'+ type +'.png';
			arr[i].alt = type + arr.length;
			arr[i].className = type;
			box.append(arr[i]);
		}
	}
	img(imgName,cName,eName){
		imgName = document.createElement('img');
        imgName.className = cName;
        imgName.src = 'icon/'+cName+'.png';
        eName.appendChild(imgName);

	}
	footer(footerName,eName){
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
};

class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(name,type){
		console.log(name,'생성');
		this.name = name;
		this.type = type;
	}
	// methods
	
};

class Folder extends Desktop {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	
};

class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	
};
