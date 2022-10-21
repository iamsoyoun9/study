## ✔ Checklist

<details>
<summary>📄 목차(Click)</summary>

　　⭐ [CSS 적용 방법](#1-css를-html에-적용하는-세-가지-방법은-무엇일까요)<br>
　　　　　▫ [적용 방법별 장단점](#세-가지-방법-각각의-장단점은-무엇일까요)<br>
　　⭐ [CSS 우선순위](#2-css-규칙의-우선순위는-어떻게-결정될까요)<br>
　　⭐ [CSS 박스모델](#3-css의-박스모델은-무엇일까요-박스가-화면에서-차지하는-크기는-어떻게-결정될까요)<br>
　　⭐ [`float` 속성](#4-float-속성은-왜-좋지-않을까요)<br>
　　⭐ [Flexbox VS CSS Grid](#5-flexboxflexible-box와-css-grid의-차이와-장단점은-무엇일까요)<br>
　　⭐ [CSS 요소](#6-css의-비슷한-요소들을-어떤-식으로-정리할-수-있을까요)<br>
</details>

---



|**CSS**(Cascading Style Sheets)|HTML이나 XML로 작성된 문서의 표시방법을 기술하기 위한 `스타일시트`언어|

---

### **1. CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?**
**#1. 인라인 방식**<br>▸ html 문서의 `<body>` 태그 영역에 해당 태그의 `style` 속성을 넣는 방식<br>
> **html**<br>

    <span style="color:#FF884B;"> 안녕하세요 </span>

결과 >> <span style="color:#FF884B;"> 안녕하세요 </span>

---

**#2. 내부 스타일 시트**<br>▸ html 문서의 `<head>` 태그 영역에 `<style>` 태그 내부에 기입하는 방식<br>
> **html**<br>
 
    <head>
        <style>
        #hello {
            color:#FF577F;
        }
        </style>
    </head>

    <body>
        <span id="hello"> 안녕하세요 </span>
    </body>

결과 >> <span style="color:#FF577F;"> 안녕하세요 </span>

---

**#3. 외부 스타일 시트**<br>▸ html 문서의 `<head>` 태그 영역에 `<link>` 태그를 사용하여 별도의 CSS파일을 연결하는 방식<br>
> **CSS**<br>▸ 파일명 : **main.css**<br>

    #hello{
        color:#36AE7C;
    }

> **HTML**<br>▸ 파일명 : **main.html**<br>

    <head>
        <link rel="stylesheet" href="main.css">
    </head>
    
    <body>
        <span id="hello"> 안녕하세요 </span>
    </body>

결과 >> <span style="color:#36AE7C;"> 안녕하세요 </span>

> #### **세 가지 방법 각각의 장단점은 무엇일까요?**
|방법|장점|단점|
|:-:|:--|:--|
|**인라인방식<br>(Inline CSS)**|- 쉽고 빠르게 삽입 가능<br>- 별도의 문서로 외부스타일을 만들거나 업로드 필요 X|- 시간 낭<br>- HTML 구조 복잡하게 만듦<br>- 웹페이지 사이즈와 다운로드 시간에 영향을 줌|
|**내부 스타일 시트<br>(Internal CSS)**|- 클래스와 아이디, 선택자 사용 O<br>- HTML내에서 코드를 추가하므로 여러 파일을 업로드 필요 X|- HTML에 코드를 추가하기에 페이지의 사이즈, 로딩 시간 증가|
|**외부 스타일 시트<br>(External CSS)**|- CSS코드가 별도의 문서에 있기에 HTML 파일 구조 깔끔, 사이즈 작아짐<br>- 여러 페이지들에 같은 CSS파일 사용 O|- 외부 CSS파일이 로드되기 전까지 페이지가 올바르게 표시 X<br>- 여러 CSS파일을 업로드하거나 연결하면 다운로드 시간 증가|

---

### **2. CSS 규칙의 우선순위는 어떻게 결정될까요?**
> **CSS(Cascading Style Sheet)**<br>▸ Cascading은 '떨어지는 폭포'라는 뜻<br>▸ 즉, 위에서 아래로 우선 순위가 정해진다는 의미<br>
> **우선순위를 결정하는 요소**
> <br>　① 중요도 ( 사용자 > 제작자 > 브라우저 )
> <br>　② 명시도 ( 인라인 > 아이디 > 클래스 > 태그 )
> <br>　③ 코드 순서

|우선순위|설명|사용방법|결과|
|:-:|:-:|:-:|:-:|
|**`!important`**|우선순위를 무시하고 `최상위`|`#hello { background-color : #96CEB4; !important }`|<span style="background-color:#96CEB4;">　hello　</span> |
|**inline**|html에서 `style`을 직접 지정|`<span style = "color : #FFAD60;"> hello </span>`|<span style = "color : #FFAD60"> hello </span>|
|**id**|`#id`로 지정한 속성|`#hello { background-color : #FFED99; }`|<span style="background-color:#FFED99;">　hello　</span>|
|**class**|`.클래스` , `:추상클래스`로 지정한 속성|`.hello { color : #6F69AC; }`|<span style="color:#6F69AC;">　hello　</span>|
|**tag**|`태그이름`으로 지정한 속성|`span { background-color : #EE9595; }`|<span style="background-color:#EE9595;">　hello　</span>|
|**상속**|상위 객체에 의해 `상속`된 속성|`div > span { color : #05DFD7; }`|<span style="color:#05DFD7;">　hello　</span>|
---

### **3. CSS의 [박스모델](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?**
![박스모델](https://dasima.xyz/wp-content/uploads/2019/12/css-box-model-box-sizing.png)

|영역|설명|크기|
|:-:|:--|:-:|
|**콘텐츠<br>(content)**|- 글이나 이미지, 비디오 등 요소의 실제 내용||
|**안쪽여백<br>(padding)**|- ||
|**테두리<br>(border)**|-||
|**바깥여백<br>(margin)**|- ||
---

### **4. `float` 속성은 왜 좋지 않을까요?**

---

### **5. Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?**

---

### **6. CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?**