## ✔ Checklist

<details>
<summary>📄 목차(Click)</summary>

　　⭐ [객체지향프로그래밍](#1-객체지향-프로그래밍은-무엇일까요)<br>
　　　　　▫ [프라이빗 필드](#로-시작하는-프라이빗-필드는-왜-필요한-것일까요-정보를-은폐encapsulation하면-어떤-장점이-있을까요)<br>
　　　　　▫ [다형성](#다형성이란-무엇인가요-다형성은-어떻게-코드-구조의-정리를-도와주나요)<br>
　　　　　▫ [상속](#상속이란-무엇인가요?-상속을-할-때의-장점과-단점은-무엇인가요)<br>
　　　　　▫ [OOP의 합성](#OOP의-합성(Composition)이란-무엇인가요?-합성이-상속에-비해-가지는-장점은-무엇일까요)<br>
　　⭐ [자바스크립트 클래스](#2자바스크립트의-클래스는-어떻게-정의할까요)<br>
　　　　　▫ [프로토타입 기반의 객체지향프로그래밍](#프로토타입-기반의-객체지향-프로그래밍은-무엇일까요)<br>
　　　　　▫ [자바스크립트의 클래스와 객체지향구현과의 관계](#자바스크립트의-클래스는-이전의-프로토타입-기반의-객체지향-구현과-어떤-관계를-가지고-있나요)<br>
</details>

### **1. 객체지향 프로그래밍은 무엇일까요?**
> **🗨 객체란?** <br>- 프로그램에서 사용되는 데이터 또는 식별자에 의해 참조되는 공간을 의미<br>- 값을 저장할 `변수`와 작업을 수행할 `메소드`를 서로 연관된 것들끼리 묶어서 만든 것
> 
> **🗨 객체지향 프로그래밍이란?**<br>- 프로그래밍에서 필요한 데이터를 추상화시켜 상태와 행위를 가진 객체를 만들고 그 객체들 간의 유기적인 상호작용을 통해 로직을 구성하는 프로그래밍 방법
> 
> **🗨 객체지향 프로그래밍 언어**<br>- `C++`, `C#`, `Java`, `Python`, `JavaScript`, `Ruby`, `Swift` 등
> 
> **🗨 객체지향 프로그래밍의 특징**<br>- `추상화`, `캡슐화`, `상속`, `다형성`
> 
> **🗨 객체지향 프로그래밍의 장단점**
> |장점|단점|
> |:--|:--|
> |▪ 클래스 단위로 모듈화시켜서 개발하기 때문에 업무 분담이 편리하고 대규모 소프트웨어 개발에 적합<br>▪ 클래스 단위로 수정이 가능하기 때문에 유지 보수가 편리<br>▪ 클래스를 재사용하고나 상속을 통해 확장함으로써 코드 재사용이 용이|▪처리속도가 상대적으로 느림<br>▪ 객체의 수가 많아짐에 따라 용량이 커질 수 있음<br>▪ 설계시 많은 시간과 노력이 필요하게 될 수 있음|
> 
> <hr>
> 
> #### **🔸 `#`로 시작하는 프라이빗 필드는 왜 필요한 것일까요? 정보를 은폐(encapsulation)하면 어떤 장점이 있을까요?**
> 
> \- **protected**
> ```js
> class Student{
>   constructor(name,id){
>       this._name = name;
>       this._id = id;
>   } // 생성자
>   getName(){
>       return this._name;
>   } // public 메소드
>   _setName(name){
>       this._name = name;
>   } // protected 메소드
> }
> ```
> - 상속받은 객체에서만 멤버에 접근할 수 있게 만들어주는 접근 지정자
> - **`언더바(_)`** 를 붙여서 이용
> - 외부에서 접근할 때 → **get** / **set**
> - 읽기전용으로 만들고 싶다면 **set**메소드를 제외하고 **get**만 만들어서 이용
> ```js
> let s1 = new Student('소영','iamsoyoun9');
> console.log(s1.getName()); // 소영
> console.log(s1._name); // 소영
> s1._setName('나소영');
> console.log(s1.getName()); // 나소영
> console.log(s1._name); // 나소영
> console.log(s1._id); // iamsoyoun9
> ```
> 
> <hr>
> 
> \- **private**
> ```js
> class Student{
>   #name;
>   #id;
>   constructor(name,id){
>       this.#name = name;
>       this.#id = id;
>   } // 생성자
>   getName(){
>       return this.#name;
>   } // public 메소드
>   #setName(name){
>       this.#name = name;
>   } // private 메소드
> }
> ```
> - 클래스, 객체 내부에서만 접근할 수 있고 외부나 상속받은 객체에서는 접근을 불가능하게 만들어주는 요소
> **`샾(#)`** 을 붙여서 이용
> - 메서드 선언으로 사용할 수 없음
> - 모든 private 필드는 소속된 클래스에 고유한 스코프를 가지고 있음
> ```js
> let s1 = new Student1('소영', 'iamsoyoun9');
> console.log(s1.getName()); // 소영
> console.log(s1.#name); // error
> s1.#setName('나소영'); // error
> console.log(s1.#id); //error
> ```
> 
> <hr>
> 
> **🗨 정보은닉이란?**<br>- 직접적으로 변경되면 안되는 변수에 대한 접근을 별도의 함수로 접근하도록 유도하는 것<br>- 다른 객체에게 자신의 정보를 숨기고 자신의 연산만을 통해 접근을 허용<br>- 외부 객체가 특정 객체의 데이터와 함수를 직접 접근하여 사용 및 변경이 불가하므로 유지 보수가 용이하며 오류를 최소화하는 것이 가능
> 
> \- **🔸 정보은닉**을 하는 이유<br>1. 객체의 상태를 안정적으로 관리(예상하지 못한 변화를 예방)<br>2. 객체 간의 결합도를 낮춤
> 
> <hr>
> 
> **🗨 public vs protected vs default vs private**<br>- public : 어디서든 접근 가능<br>- default : 접근 제어자를 선언하지 않은 경우, 동일 패키지 내에서만 접근 가능<br>- protected : 같은 패키지나 상속받은 클래스에서만 접근 가능<br>- private : 같은 클래스 내부에서만 접근 가능
> 
> ||public|protected|default|private|
> |:--|:-:|:-:|:-:|:-:|
> |클래스 내부|O|O|O|O|
> |동일 패키지|O|O|O|X|
> |상속받은 클래스|O|O|X|X|
> |이외의 영역|O|X|X|X|
> 
> <hr>
> 
> #### **🔸 다형성이란 무엇인가요? 다형성은 어떻게 코드 구조의 정리를 도와주나요?**
> **🗨 다형성이란?**<br>- 특정 기능을 선언(설계)부분과 구현(동작)부분으로 분리한 후 구현부분을 다양한 방법으로 만들어 선택해서 사용할 수 있게하는 기능<br>　　　　▸ 선언(설계)부분 : 인터페이스<br>　　　　▸ 구현(동작)부분 : 클래스<br> - 하나의 객체가 여러가지 타입을 가질 수 있는 것<br>- 메서드와 데이터의 의미에서 공통 기능을 가진 클래스를 대체하는 기능
> ```js
> class User{
>   constructor(id, birthday){
>       this.id = id;
>       this.birthday = birthday;
>   }
>   buy(item){
>       console.log(`${this.id} buys ${item.name} ▸ price = ${item.price}`);
>   }
> }
> 
> class PremiumUser extends User{
>   constructor(id,birthday,level){
>       super(id,birthday);
>       this.level = level;
>   }
>   buy(item){
>       console.log(`${this.id} buys ${item.name} with a 5% discount ▸ price = ${item.price*0.95}`);
>   }
> }
> 
> let item = {name:'MacBook',price:'1790000'};
> let user1 = new User('hssuu', '0824');
> let user2 = new PremiumUser('iamsoyoun9','0915',3);
> let user3 = new PremiumUser('hellosoyoun9','0725',5);
> 
> let users = [user1,user2,user3];
> 
> users.forEach(function(user){
>   user.buy(item);
> })
> ```
> 👇🏻 **출력결과** 👇🏻<br>
> ![Quest04/console1.png](https://github.com/iamsoyoun9/study/blob/main/Quest04/console1.png?raw=true)<br>
> 
> **🗨 다형성을 구현하는 방법**<br>
> 1. **오버로딩**
>       - 메소드의 이름이 같아야 함
>       - 매개변수의 개수 또는 타입이 달라야 함
>       - 매개변수는 같고, 리턴 타입이 다를 때는 성립하지 않음
>       - 오버로딩된 메소드들은 매개 변수로만 구분될 수 있음
>       - 자바스크립트에서는 오버로딩 함수를 지원하지 않음 (arguments 객체를 사용하여 구현할 수는 있음)
> ```js
> let val = 'happy :D';
> function view(){
>   console.log(val);
> }
> view(); // happy :D
> ```
> ```js
> let val = 'happy :D';
> function view(){
>   console.log(val);
> }
> function view(v){
>   console.log(v);
> }
> view(); // undefined
> view('hello 🖐🏻'); // hello 🖐🏻
> 
> // 결론 : 첫번째 view 무시 view(v)로 인식
> ```
> <hr>
> 
>   2. **오버라이딩**
>       - 상위클래스의 메서드를 재정의
>       - 종류 ( 메서드 오버라이딩 /생성자 오버라이딩 )<br>
> 
> ▸ **메서드 오버라이딩**
> ```js
> class Animal{
>   constructor(name){
>       this.speed = 0;
>       this.name = name;
>   }
>   run(speed){
>       this.speed += speed;
>       console.log(`${this.name}는 속도 ${this.speed}로 달립니다.`);
>   }
>   stop(){
>       this.speed = 0;
>       console.log(`${this.name}가 멈췄습니다.`);
>   }
> }
> 
> class Rabbit extends Animal{
>   hide(){
>       console.log(`${this.name}가 숨었습니다.`);
>   }
>   stop(){
>       super.stop(); // 부모의 stop 호출
>       this.hide();
>   }
> }
> 
> let rabbit = new Rabbit('🐇흰토끼🐇');
> rabbit.run(5); // 🐇흰토끼🐇는 속도 5로 달립니다.
> rabbit.stop(); // 🐇흰토끼🐇가 멈췄습니다. 🐇흰토끼🐇가 숨었습니다.
> ```
> <br>
> 
> ▸ **생성자 오버라이딩**
> ```js
> class Animal{
>   constructor(name){
>       this.speed = 0;
>       this.name = name;
>   }
> }
> class Rabbit extends Animal{
>   constructor(name,earLength){
>       super(name);
>       this.earLength = earLength;
>   }
> }
> 
> let rabbit = new Rabbit('🐇흰토끼🐇',10);
> console.log(rabbit.name); // 🐇흰토끼🐇
> console.log(rabbit.earLength); // 10
> ```
>   3. **함수형 인터페이스**
>       - 한 개의 추상 메서드를 가지고 있는 인터페이스
> <br>
> - 다형성의 장점 : 반복된 코드를 줄이며 꼭 필요한 코드만 수정

> #### **🔸 상속이란 무엇인가요? 상속을 할 때의 장점과 단점은 무엇인가요?**
> - 상속이란?
>   - 다른 클래스가 가지고 있는 필드와 메소드등을 새로 작성할 필요 없이 클래스에 직접 만들지 않고 가져와서 사용
>   - 부모 클래스가 가진 필드와 메소드 그리고 타입을 물려줌
>   - 자식 클래스는 그것을 받아서 자신의 것처럼 사용할 수 있음
> - 작성방법
>   - `extends` 키워드를 사용
> - 상속의 목적
>   - 코드의 재사용
>   - 더 빠르고 유지보수가 쉬움
>   - 중복이 적고 통일성이 있는 코드를 작성
> - 상속의 장점
>   1. 적은 양의 코드로 새로운 클래스를 작성 가능
>       - 기존에 작성된 클래스의 코드를 재사용할 수 있음
>       - 중복을 줄일 수 있음
>   2. 코드를 공통적으로 관리하기 때문에 여러 코드의 추가 및 변경이 용이
>   3. 중복을 제거해서 생산성과 쉬운 유지보수성에 크게 기여
>       - 변화에 대한 유연성 및 확장성이 증가
> - 상속의 단점
>   1. **캡슐화가 깨지고 결함도가 높아짐** (객체지향 프로그래밍에서는 결합도는 낮을수록, 응집도는 높을수록 좋음)
>       - 부모 클래스와 자식 클래스의 관계가 컴파일 시점에 결정되어 구현에 의존하기 때문
>   2. **유연성 및 확장성이 떨어짐**
>       - 부모 클래스와 자식 클래스가 강하게 결합되므로 유연성과 확장성이 상당히 떨어짐
>   3. **다중상속에 의한 문제가 발생할 수 있음**
>       - 자바에서는 다중 상속을 허용하지 않음
>   4. **클래스 폭발 문제가 발생할 수 있음**
>       - 상속을 남용하면 필요 이상으로 많은 수의 클래스를 추가해야하는 클래스 폭발 문제가 발생 할 수 있음
>       - 자식 클래스가 부모 클래스의 구현과 강하게 결합되도록 강요하는 상속의 근본적인 한계 때문에 발생

> #### **🔸 OOP의 합성(Composition)이란 무엇인가요? 합성이 상속에 비해 가지는 장점은 무엇일까요?**
> - OOP : Object Oriented Programming, 객체지향 프로그래밍
> - 합성이란?
>   - 중복되는 로직들을 갖는 객체를 구현하고, 이 객체를 주입받아 중복 로직을 호출, 인터페이스를 재사용하는 방법
>   - 기존 클래스가 새로운 클래스의 구성요소로 쓰임
>   - 새로운 클래스를 만들고 `private` 필드로 기존 클래스의 인스턴스를 참조
> - 합성이 상속에 비해 가지는 장점
>   - 합성의 장점
>   1. 구현을 효과적으로 캡슐화 가능
>       - 메서드를 호출하는 방식으로 동작하기 대문에 캡슐화를 깨뜨리지 않음
>   2. 의존하는 객체를 교체하는 것이 비교적 쉬우므로 설계가 유연해짐
>       - 상속은 클래스를 통해 강하게 결합되지만, 합성은 메시지를 통해 느슨하게 결합되기 때문
> 
> |상속|합성|
> |:--|:--|
> |부모 클래스와 자식 클래스 사이의 의존성은 **컴파일 타임에 해결**|두 객체 사이의 의존성은 **런타임에 해결**|
> |is-a 관계|has-a 관계|부모클래스의 구현에 의존 결합도가 높음|구현에 의존하지 않음<br>내부에 포함되는 객체의 구현이 아닌 인터페이스에 의존|
> |클래스 사이의 정적인 관계|객체 사이의 동적인 관계|
> |부모 클래스 안에 구현된 코드 자체를 물려 받아 재사용|포함되는 객체의 퍼블릭 인터페이스를 재사용|

---

### **2. 자바스크립트의 클래스는 어떻게 정의할까요?**
> Class
> -
> - 객체를 생성하기 위한 템플릿
> - ES6부터 지원
> - IE 사용 X
> - 사용하는 이유 : 재사용성
> <br>
> 
> - Class 생성
> ```js
> class Person {
> }
> let Na = new Person();
> console.log(Na); // Person {}
> ```
> <br>
> 
> - Class 초기값 설정
> ```js
> class Person {
>   constructor(name,age){
>       this.name = name;
>       this.age = age;
>   }
> }
> let Na = new Person('Na','25');
> console.log(Na); // Person { name : 'Na', age : '25' }
> ```
> <br>
> 
> - Class 메서드 사용
> ```js
> class Person {
>   constructor(name,age){
>       this.name = name;
>       this.age = age;
>   }
>   nextYearAge(){
>       return Number(this.age)+1;
>   }
> }
> let Na = new Person('Na','25');
> console.log(Na.nextYearAge()); // 25
> ```

> #### **🔸 프로토타입 기반의 객체지향 프로그래밍은 무엇일까요?**
> - 객체지향 프로그래밍
>   - 프로그램 구현에 필요한 객체를 파악하고 각각의 객체의 역할이 무엇인지를 정의하여 객체들 간의 상호작용을 통해 프로그램을 만드는 것
>   - 객체와 객체 간의 연결로 되어 있으며, 각각의 객체 안에 자료구조와 알고리즘이 들어있는 것
>   - 특징<br>1. 추상화 : 객체들의 공통적인 특징(기능,속성)을 도출하는 것<br>2. 캡슐화 : 객체가 독립적으로 역할을 할 수 있도록 데이터와 기능을 하나로 묶어 관리하는 것<br>3. 상속성 : 하나의 클래스가 가진 특징(함수,데이터)을 다른 클래스가 그대로 물려받는 것<br>4. 다형성 : 약간 다른 방법으로 동작하는 함수를 동일한 이름으로 호출하는 것<br>5. 동적바인딩 : 가상 함수를 호출하는 코드를 컴파일할 때, 바인딩을 실행시간에 결정하는 것
>   - 장점
>       1. 소프트웨어의 생산성 향상
>           - 신뢰성 있는 소프트 웨어를 손쉽게 작성할 수 있음
>           - 코드를 재사용하기 쉬움
>           - 업그레이드가 쉬움
>           - 디버깅이 쉬움
>       2. 실세계에 대한 쉬운 모델링
>       3. 보안성 향상
>           - 캡슐화, 데이터 은닉, 다형성 등으로 인해 필요한 정보를 재정의하거나 getter,setter를 이용하기 때문
>   - 단점
>       - 느린 실행 속도 : 절차지향 프로그래밍에 비해 느린 실행 속도, 필요한 메모리양의 증가
> - 클래스 기반 vs 프로토타입 기반
>   - 클래스 기반<br>- 클래스로 객체의 자료구조와 기능을 정의하고 생성자를 통해 인스턴스를 생성<br>- 클래스 : 같은 종류의 집단에 속하는 속성과 행위를 정의한 것<br>- Java, C++, C#, Python, PHP, Ruby, Object-C
>   - 프로토타입 기반<br>- 자바스크립트의 모든 객체는 최소한 하나 이상의 다른 객체로부터 상속을 받으며, 이때 상속되는 정보를 제공하는 객체를 프로토타입이라고 함<br>- 자바스크립트의 모든 객체는 프로토타입이라는 객체를 가지고 있음<br>- 모든 객체는 프로토타입으로부터 프로퍼티와 메소드를 상속 받음

> #### **🔸 자바스크립트의 클래스는 이전의 프로토타입 기반의 객체지향 구현과 어떤 관계를 가지고 있나요?**
> - class는 객체지향언어에 빠질수 없는 개념, 자바스크립트 = 개체지향언어
> - but, 자바스크립트에는 class개념대신 prototype이 존재
> - class가 없으니깐 상속기능도 없음 (prototype으로 상속 흉내)
> - ECMA6 에서 Class 문법 추가 => 문법이 추가되었다는 것, 클래스 기반으로 바뀌었다는 것 X
> - 자바스크립트의 생성자는 객체
> - 모든 객체는 자신의 부모역할을 담당하는 객체와 연결되어 있음 (상속 개념처럼)
> - 이때 부모 객체를 prototype 객체 = prototype
> - prototype 객체 : 생성자 함수에 의해 성생된 각각의 객체에 공유 프로퍼티를 제공하기 위해 사용
> ```js
> function Person(){
>   this.eyes = 2;
>   this.nose = 1;
> }
> var Na = new Person();
> console.log(Na.eyes); // 2
> console.log(Na.nose); // 1
> ```
> ```js
> function Person(){}
> Person.prototype.eyes = 2;
> Person.prototype.nose = 1;
> var Na = new Person();
> console.log(Na.eyes); // 2
> console.log(Na.nose); // 1
> ```
> ```js
> class Person(){
>   constructor(){
>       this.eyes = 2;
>       this.nose = 1;
>       console.log(this.eyes)
>       console.log(this.nose)
>   }
>}
> let Na = new Person();
>  // 2
>  // 1
> ```