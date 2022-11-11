class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(name,type){
		console.log('아이콘 생성')
		this.name = name;
		this.type = type;

	}
	// methods
	create(){
		// console.log(this.type)
		// switch(this.type){
		// 	case 'icon':
		// 		this.name = new Image();
		// 		this.name.src = './icon/hattu.png';

		// 		break;
		// 	case 'folder':
		// 		break;
		// 	default:
		// 		break;
		// }
	}
	modal(){
		modal.className = 'modal';
		modal_body.className = 'modal_body';
		modal_body.textContent ='hello :D';
		close_btn.className = 'close_btn';
		close_btn.textContent = "X";
	}
};

class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};
