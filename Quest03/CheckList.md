## ✔ Checklist

<details>
<summary>📄 목차(Click)</summary>

　　⭐ [자바스크립트 버전별 변화](#1-자바스크립트는-버전별로-어떻게-변화하고-발전해-왔을까요)<br>
　　　　　▫ [자바스크립트 버전](#자바스크립트의-버전들을-가리키는-es5-es6-es2016-es2017-등은-무엇을-이야기할까요)<br>
　　　　　▫ [자바스크립트 표준](#자바스크립트의-표준은-어떻게-제정될까요)<br>
　　⭐ [자바스크립트 문법](#2-자바스크립트의-문법은-다른-언어들과-비교해-어떤-특징이-있을까요)<br>
　　　　　▫ [자바스크립트 반복문](#자바스크립트에서-반복문을-돌리는-방법은-어떤-것들이-있을까요)<br>
　　⭐ [자바스크립트 DOM객체 CSS Class](#3-자바스크립트를-통해-dom-객체에-css-class를-주거나-없애려면-어떻게-해야-하나요)<br>
　　　　　▫ [옛날 브라우저](#ie9나-그-이전의-옛날-브라우저들에서는-어떻게-해야-하나요)<br>
　　⭐ [자바스크립트 변수의 유효범위](#4-자바스크립트의-변수가-유효한-범위는-어떻게-결정되나요)<br>
　　　　　▫ [자바스크립트 변수 정의](#var과-let으로-변수를-정의하는-방법들은-어떻게-다르게-동작하나요)<br>
　　⭐ [자바스크립트의 익명함수](#5-자바스크립트의-익명-함수는-무엇인가요)<br>
　　　　　▫ [Qrrow function](#자바스크립트의-arrow-function은-무엇일까요)<br>
</details>

****
### **1. 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?**
> #### **자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?**
> - ES = Ecma Script
> - ECMA = ECMA International
> - ECMA = European Computer Manufacturers Association
> 
> ---
> 
> |공개일|버전명|특징|
> |:-:|:-:|:--|
> |1997.06|ECMAScript 1 (ES1)|
> |1998.06|ECMAScript 2 (ES2)|
> |1999.12|ECMAScript 3 (ES3)|- 우리가 흔히 말하는 자바스크립트
> |0000.00|ECMAScript 4 (ES4)|- 버려짐
> |2009.12|**ECMAScript 5 (ES5)**|- 배열에 forEach, map, filter, reduce, some, every 메소드 지원<br>- Object에 대한 getter / setter 지원<br>- 자바스크립트 strict 모드 지원<br>- JSON 지원 
> |2011.06|ECMAScript 5.1 (ES5.1)|
> |2015.06|**ECMAScript 2015 (ES2015, ES6)**|- Default Parameters<br>- Template Literals (문자열을 합칠 때, + 사용하지 않아도 됨)<br>- Multi-line Strings<br>- Destructuring Assignment<br>- Enhanced Object Literals<br>- Arrow Functions<br>- Promises<br>- Block-Scoped Constructs (Let,Const)<br>- Classes<br>- Modules(import / export)
> |2016.06|ECMAScript 2016 (ES2016, ES7)|- Array.protorype.includes()<br>- Exponentiation oprator|
> |2017.06|ECMAScript 2017 (ES2017, ES8)|- String padding<br>- Object.values and Object.entries<br>- Object.getOwnPropertyDescriptors<br>- Trailing commas in function parameter lists and calls<br>- Async functions
> |2018.06|ECMAScript 2018 (ES2018, ES9)|- Object Rest/Spread<br>- Promise finally<br>- Async iteration<br>- 정규표현식
> |2019.06|ECMAScript 2019 (ES2019, ES10)|
> |2020.06|ECMAScript 2020 (ES2020, ES11)|
> |2021.06|ECMAScript 2021 (ES2021, ES12)|
> 
> ---


> #### **자바스크립트의 표준은 어떻게 제정될까요?**
> - ECMA International 기술 위원회39(TC39)가 Ecma Script표준에 대한 업데이트된 사양을 만들고 배포하는 것을 담당
> - 위원회 : 자바스크립트 개발자, 프레임워크 작성자, 대규모 웹사이트 작성자/관리자, 프로그래밍 언어 연구원, 모든 주요 자바스크립트 엔진 대표, 영향력 있는 자바스크립트 작성자, 기타 자바스크립트의 성공과 미래에 대한 이해관계자로 구성
> - 정기적으로 **매년 6회씩 3일 동안 회의**
> - 표준이 제정되는 과정
> 
> |순서|내용|
> |:-:|:--|
> |0단계|누구라도 고려할 가치가 있다고 생각하는 아이디어가 생기면 구체화하고 간단하게 작성하여 **제출**할 수 있음|
> |1단계<br>**(제안)**|제안이 위원회에 **제출**되고 더 연구하기로 **합의**가 이루어지면<br>토론하고 추가로 개발하며 다른 언어나 환경의 유사한 기술을 연구하고 범위를 다듬으면<br> 일반적으로 어떻게 해결하는지 알아내고 아이디어를 **구체화**|
> |2단계<br>**(초안)**|제안이 진행되어야 한다는 **합의**를 구하고<br>정확한 구문, 의미 체계, API 등을 구체화하고 공식 사양 언어를 사용하여 해결 방법을 자세히 **설명**|
> |3단계<br>**(후보)**|최종 초안이 완성되면 제출<br>제출한다는 것은 제안이 자바스크립트 엔진에서 **구현될 준비**가 되어있다는 합의가 이루어졌다는 의미<br>구현 중 발견된 코너 케이스(corner case), 웹 호환성 문제 또는 구현의 어려움 같은 구현 중에서 나온 **피드백**에 의해서만 변경|
> |4단계<br>**(완료)**|**기능이 완료**된 상태<br>두 개 이상의 별개의 호환 구현에서 TC39의 test262 테스트 목록에 있는 **인수 테스트**를 통과해야 함<br>ECMAScript 편집자 그룹이 수락하면 완료|

---

### **2. 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?**
- **특징**
  - 객체 기반의 스크립트 언어
  - 동적, 타입을 명시할 필요가 없는 **인터프리터** 언어
  - 객체 지향형 프로그래밍과 함수형 프로그래밍을 모두 표현할 수 있음
  - **프로토타입** 기반의 객체 지향 언어
> #### **자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?**
- **for** : 고전적인 for문<br>
```js
for (let i = 0; i < 10; i++){
  console.log(i);
}
```
▸ 결과 : `0 1 2 3 4 5 6 7 8 9`

---

- **for in** : 객체의 프로퍼티 키 열거 전용<br>
```js
let obj = {
  name : '밤이',
  type : '말티푸'
}
for (let key in obj){
  console.log('${key} : ${obj[key]}');
}
```
▸ 결과 : `name : 밤이 , type : 말티푸`

---

- **for of** : 이터러블 순회 전용<br>* 이러터블 ▸ **String, Array, Map, Set, DOM컬렉션(HTMLColletion, NodeList)** 등
```js
let arr = [10,20,30];
for (let item of arr){
  console.log(item);
}
```
▸ 결과 : `10 20 30`

---

- **forEach()** : 배열 순회 전용 메서드
```js
[10,20,30].forEach((value, index, array)=>{
  console.log(${'index} : ${value}')
})
```
▸ 결과 : `0 : 10, 1 : 20, 2 : 30`

---

- **while** : 고전적인 while문
```js
let num = 0;
while(num<3>{
  console.log(num);
  num++;
})
```
▸ 결과 : `0 1 2`

---

- **do while** : 고전적인 do...while문
```js
do{
  console.log('실행 테스트'); // 반복 수행코드(조건이 참이 아니여도 1번은 무조건 실행)
} while(false); // 조건식
```
▸ 결과 : `실행 테스트`

---

- **Object 객체 메서드** : 객체 순회 전용
1. **Object.keys(객체)** : 객체의 프로퍼티 '**키**'를 배열로 반환
    ```js
    Object.keys({name:'밤이', type:'말티푸'});
    ```
    ▸ 결과 : `['name','type']`
<br>

2. **Object.value(객체)** : 객체의 프로퍼티 '**값**'을 배열로 반환
    ```js
    Object.values({name:'밤이', type:'말티푸'})
    ```
    ▸ 결과 : `['밤이','말티푸']`
<br>

3. **Object.entries(객체)** : 객체의 프로퍼티 [**키,값**]을 배열로 반환
    ```js
    Object.entries({name:'밤이', type:'말티푸'})
    ```
    ▸ 결과 : `[['name','밤이'],['type','말티푸']]`

---

- **Array.prototye 메서드** : 배열 전용
1. **배열.forEach**
    ```js
    [1,2,3,4].forEach((value, index, array)=>{
      console.log(value);
    })
    ```
    ▸ 결과 : `1 2 3 4`

2. **배열.map**
    ```js
    let map_result = [1,2,3,4].map((value, index, array) =>{
      console.log(value);
      return value*10;
    })
    console.log(map_result);
    ```
    ▸ 결과 : `1 2 3 4` <br>　　　 `[10, 20, 30, 40]`

3. **배열.filter**
    ```js
    let filter_result = [1,2,3,4].filter((value, index, array)=>{
      console.log(value);
      return value%2 == 0;
    })
    console.log(filter_result);
    ```
    ▸ 결과 : `1 2 3 4` <br>　　　 `[2, 4]`

4. **배열.reduce**
    ```js
    let reduce_result = [1,2,3,4].reduce((pv, cv, idx, arr)=>{
      return pv + cv;
    }, 100)
    console.log(reduce_result); // 100 + 1 + 2 + 3 + 4
    ```
    ▸ 결과 : `110` 
---

#### ⭐ 결론 (추천)
- **배열**인 경우 : **배열.forEach()**
- **객체**인 경우 : **Object.keys(객체)**

---


### **3. 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?**
- `querySelector()` 또는 `getElementById()` 메소드를 이용하여 제어하고자 하는 요소를 특정<br>예 : `var element = document.querySelector('h1');;`
- **클래스 추가**
  - `.classList.add()` : HTML 요소가 가진 기존 class 속성을 유지한 채, **새로운 클래스 값을 추가**<br>예 : `element.classList.add('h1');` / `element.classList.add('h2');`
- **클래스 삭제**
  - `.classList.remove()` : HTML 요소의 class 속성 중에서 인자로 사용된 **클래스 값을 삭제**<br> 인자로 사용된 클래스 값 이외에 **다른 class 속성들은 그대로 유지**, **존재하지 않는 클래스를 제거해도 에러가 발생하지 않음**<br>예 : `element.classList.remove('h2');`
- **클래스 변경**
  - `.className` : HTML 요소의 class 속성을 인자로 사용된 **클래스 값으로 변경**<br>**기존  class 속성은 초기화**<br>예 : `element.className= 'h_tag';`
> #### **IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?**
\- `element.classList`는 IE9이하 브라우저에 지원 X<br>
\- `element.className += "add"`<br>
\- **Polyfill classList** 사용<br>
　　* 폴리필 : 브라우저에서 지원하지 않는 코드를 사용가능한 코드 조각이나 프러그인으로 변환한 코드를 의미


---

### **4. 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?**
- 자바스크립트에서 객체나 함수는 모두 **변수**
- 변수의 유효범위(scope) : 해당 변수가 접근할 수 있는 변수, 객체 그리고 함수의 집합을 의미
1. 지역 변수
      ```js
      function local(){
        let num = 10;
        document.write("함수 내부에서 변수 num의 타입은 " + typeof num + "입니다.");
      }
      local(); // number
      document.write("함수 호출이 끝난 뒤 변수 num의 타입은" + typeof num + "입니다") // undefined
      ```
2. 전역 변수
      ```js
      let num = 10; // 전역변수
      function global(){
        document.write("함수 내부에서 변수 num의 값은" + num + "입니다");
        num = 20; // 전역변수 num의 값을 내부에서 변경
      }
      global(); // 10
      document.write("함수 호출이 끝난 뒤 변수 num의 값은" + num + "입니다"); // 20
      ```
> #### **`var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?**
- 자바스크립트에서 변수 선언은 `선언 ▸ 초기화` 단계를 거쳐 수행
  - 선언 : 변수명을 등록하여 자바스크립트 엔진에 변수의 존재를 알림
  - 초기화 : 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undefined를 할당(=)해 초기화
  - 할당
  - 함수의 호이스팅
  - 스코프(scope) : 식별자(변수명, 함수명, 클래스명 등)의 유효범위<br>
<br>

|변수|재선언|재할당|
|:-:|:-:|:-:|
|**var**|⭕|⭕|
|**let**|❌|⭕|
|**const**|❌|❌|

- **var** : 유연한 변수 선언으로 편함, 코드량이 많아질 경우 값이 바뀔 우려가 있음<br>

⭐ 결론 : 재할당이 필요한 경우 `let`사용 / 재할당이 필요 없는 상수와 객체에는 `const`

---

### **5. 자바스크립트의 익명 함수는 무엇인가요?**
- 익명함수(Anonymous function) : 함수명 대신 변수명에 함수 코드를 저장하는 구현 방식, 익명함수의 소스코드는 변수 값이므로 끝에 세미콜론을 대입
- 호출 : 변수명을 함수명처럼 사용하면 됨
```js
var 변수명 = function (매개변수)
{
    실행문;
};
```
---
```js
var hello = function(){
  document.write("안녕하소영");
};
hello();
```
- 단점 : 호이스팅이 적용되지 않는다.<br>* 호이스팅 : 함수 선언보다 함수 호출이 윗 줄에 위치해도 실행되는 기능


> #### **자바스크립트의 Arrow function은 무엇일까요?**
> - 함수 표현식보다 간결한 문법
> - **화살표 함수** 이름 : 문법의 생김새를 차용
> ```js
> function add(a,b){
>   return a+b;
> }
>       ⬇
> const add = (a,b) => ({a+b});
> ```
> - 화살표 함수가 기존 함수를 대체하지 못하는 이유
>   - 일반 함수에서는 자체적인 **this**를 가지는데, 화살표함수는 부모의 **this**를 따름
> - 추천하는 함수 사용법
>   - this를 쓸 꺼면 일반 함수
>   - this를 안 쓸 거면 화살표 함수
>   - react에서는 this를 엄청 많이 사용함