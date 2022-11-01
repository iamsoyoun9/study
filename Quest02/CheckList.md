****## ✔ Checklist

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
|:-:|:-:|

---

### **1. CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?**
**#1. 인라인 방식**<br>▸ html 문서의 `<body>` 태그 영역에 해당 태그의 `style` 속성을 넣는 방식<br>
```css
<span style="color:#FF884B;"> 안녕하세요 </span>
```
결과 >> <span style="color:#FF884B;"> 안녕하세요 </span>


---

**#2. 내부 스타일 시트**<br>▸ html 문서의 `<head>` 태그 영역에 `<style>` 태그 내부에 기입하는 방식<br>
```html
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
```
결과 >> <span style="color:#FF577F;"> 안녕하세요 </span>

---

**#3. 외부 스타일 시트**<br>▸ html 문서의 `<head>` 태그 영역에 `<link>` 태그를 사용하여 별도의 CSS파일을 연결하는 방식<br>
> **CSS**<br>▸ 파일명 : **main.css**<br>

    #hello{
        color:#36AE7C;
    }

> **HTML**<br>▸ 파일명 : **main.html**<br>
```html
<head>
    <link rel="stylesheet" href="main.css">
</head>

<body>
    <span id="hello"> 안녕하세요 </span>
</body>
```
결과 >> <span style="color:#36AE7C;"> 안녕하세요 </span>

> #### **세 가지 방법 각각의 장단점은 무엇일까요?**
|방법|장점|단점|
|:-:|:--|:--|
|**인라인<br>(Inline CSS)**|- 쉽고 빠르게 삽입 가능<br>- 별도의 문서로 외부스타일을 만들거나 업로드 필요 X<br>- 특정 태그에 어떤 스타일을 적용시켰는지 직관적으로 알기 쉬움|- HTML 구조 복잡하게 만듦<br>- 웹페이지 사이즈와 다운로드 시간에 영향을 줌<br>- 스타일 일괄 적용이나 일괄 변경 등의 작업을 할 때 매우 비효율적|
|**내부 스타일<br>(Internal CSS)**|- 클래스와 아이디, 선택자 사용 O<br>- HTML내에서 코드를 추가하므로 여러 파일을 업로드 필요 X<br>- 재사용이 가능하고 일괄 변경,적용 등이 가능|- HTML에 코드를 추가하기에 페이지의 사이즈, 로딩 시간 증가<br>- 한개의 HTML 문서 안에서는 재사용이 가능하지만 다른 HTML 문서에 적용시킬 수 없음|
|**외부 스타일<br>(External CSS)**|- CSS코드가 별도의 문서에 있기에 HTML 파일 구조 깔끔, 사이즈 작아짐<br>- 여러 페이지들에 같은 CSS파일 사용 O|- 외부 CSS파일이 로드되기 전까지 페이지가 올바르게 표시 X<br>- 여러 CSS파일을 업로드하거나 연결하면 다운로드 시간 증가<br>- 독립적인 스타일 시트 파일이기 때문에 작업을 계속하면서 지속적으로 유지, 보수를 해야 하며 규모가 커질수록 복잡해질 가능성이 있음|

---

### **2. CSS 규칙의 우선순위는 어떻게 결정될까요?**
> **CSS(Cascading Style Sheet)**<br>▸ Cascading은 '떨어지는 폭포'라는 뜻<br>▸ 즉, 위에서 아래로 우선 순위가 정해진다는 의미<br>
> **우선순위를 결정하는 요소**
> <br>　① 중요도 ( 사용자 > 제작자 > 브라우저 )
> <br>　② 명시도 ( 인라인 > 아이디 > 클래스 > 태그 )
> <br>　③ 코드 순서

|우선순위|설명|사용방법|결과|
|:-:|:-:|:-:|:-:|
|**`!important`**|우선순위를 무시하고 `최상위`|`#hello { background-color : #96CEB4; !important }`|<span style="background-color:#96CEB4;">　hello 　</span> |
|**inline**|html에서 `style`을 직접 지정|`<span style = "color : #FFAD60;"> hello </span>`|<span style = "color : #FFAD60"> hello </span>|
|**id**|`#id`로 지정한 속성|`#hello { background-color : #FFED99; }`|<span style="background-color:#FFED99;">　hello　</span>|
|**class**|`.클래스` , `:추상클래스`로 지정한 속성|`.hello { color : #6F69AC; }`|<span style="color:#6F69AC;">　hello　</span>|
|**tag**|`태그이름`으로 지정한 속성|`span { background-color : #EE9595; }`|<span style="background-color:#EE9595;">　hello　</span>|
|**상속**|상위 객체에 의해 `상속`된 속성|`div > span { color : #05DFD7; }`|<span style="color:#05DFD7;">　hello　</span>|
---

### **3. CSS의 [박스모델](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?**
<img src="https://dasima.xyz/wp-content/uploads/2019/12/css-box-model-box-sizing.png" style="width:400px;"><br>
\- HTML element가 웹 페이지에서 차지하는 공간을 정의한 모델

|영역|설명|
|:-:|:--|
|**콘텐츠<br>(content)**|- 글이나 이미지, 비디오 등 요소의 실제 내용 부분|
|**안쪽여백<br>(padding)**|- 내용과 테두리 사이의 간격, 눈에 보이지 않음|
|**테두리<br>(border)**|- 내용과 패딩 주변을 감싸는 테두리|
|**바깥여백<br>(margin)**|- 테두리와 이웃하는 요소 사이의 간격, 눈에 보이지 않음|
---

### **4. `float` 속성은 왜 좋지 않을까요?**
> **float** : 요소의 배치를 제어할 때 사용하는 속성<br>
> \- `float: lef;` : 태그를 **왼쪽**에 붙임<br>
> \- `float: right;` : 태그를 **오른쪽**에 붙임<br>
> \- `float: none;` : 레이아웃을 정렬하지 않음<br>
> \- `float: initial;` : 기본값으로 초기화 상태<br>
> \- `float: inherit;` : 상위 태그의 정렬 속성을 **상속**받아서 정렬시킴<br>
> - 문제점 : 모든 자식 요소에 float 속성을 적용하면, 부모 요소는 **해당 자식 요소가 존재하지 않는 것으로 판단**하여, (부모가)**높이를 인식하지 못하는 문제**가 발생<br>
> - 해결방법<br>
> 　1) `float`을 적용한 자식의 부모에게 "`overflow:hidden;`"을 적용<br>
> 　2) 맨 뒤에 `float`가 해지된 (내용이 없는)빈 자식을 만든 후, 부모(태그)에게 적용<br>
> 　3) `float`를 적용한 요소들 다음에 오는 요소(빈 자식이 아니어도 됨)에 직접 "`clear: both;`"속성을 적용<br>
> 　1,2번 같은 경우 ▸ 부모가 float을 적용하지 않은 다른 자식들을 포함한 경우는 적용되지 않음(= 모든 자식이 float 속성을 자고 있어야 함)<br>
> \- 1번이 가장 간단 / 2번이 많이 쓰임
> 

---

### **5. Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?**
<br>

**Flexbox 레이아웃**<br>
![Flexbox](https://968663149-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LH1dN99ZXtZTFG_0JKV%2F-LH5jUEzOmxZUnS9Icq1%2F-LH5kFFAK9tf4zwc1v5P%2Fimage.png?alt=media&token=0ce914a6-f77e-472c-a1a1-0d50e4cee8d4)<br>

**Grid 레이아웃**<br>
![Grid](https://968663149-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LH1dN99ZXtZTFG_0JKV%2F-LH5jUEzOmxZUnS9Icq1%2F-LH5kJM_kwTZRUbeGDb_%2Fimage.png?alt=media&token=7b65e84c-0a30-479c-8804-bb8ecec4035c)

---

<br>

> **Flexbox**<br>
> 　\- `display: flex;`<br>
> 　\- 부모요소 : **flex container**<br>
> 　\- 복수의 자식요소 : **flex item**<br>

<br><img src = "https://d2.naver.com/content/images/2018/12/helloworld-201811-flex_01.png" style="width:500px"><br>

> **flex container** 속성<br>
> \- flex-direction, flex-wrap, justify-content, align-items, align-content<br>
> **flex item** 속성<br>
> \- flex, flex-grow, flex-shrink, flex-basis, order<br>

<br><img src = "https://d2.naver.com/content/images/2018/12/helloworld-201811-flex_02.png" style="width:500px"><br>

> **flex-direction**<br>
> \- 수직 방향 정렬 설정
> flexbox 레이아웃에서 왼쪽에서 오른쪽으로 향하는 **수평**방향이 기본<br>
> <br><img src = "https://d2.naver.com/content/images/2018/12/helloworld-201811-flex_05.png"><br>
> `flex-direction: row` ▸ 왼쪽에서 오른쪽 →<br>
> `flex-direction: column` ▸ 위에서 아래 ↓<br>
> `flex-direction: row-reverse` ▸ 오른쪽에서 왼쪽 ←<br>
> `flex-direction: column-reverse` ▸ 아래에서 위 ↑<br>

> **flex-wrap**<br>
> \- flex item이 flex container를 벗어났을 때 **줄을 바꾸는** 속성<br>
> <br> <img src = "https://d2.naver.com/content/images/2018/12/helloworld-201811-flex_31.png"><br>
> `flex-wrap: nowrap`<br>
> `flex-wrap: wrap`<br>
> 
> 응용 ver.<br>
> `{display: flex; flex-direction: column; flex-wrap: wrap;}` = `{display: flex; flex-flow: column wrap;}`

> **align-content**<br>
> \- 자식요소를 **균등한 간격** 정렬<br>
> <br><img src = "https://d2.naver.com/content/images/2018/12/helloworld-201811-flex_32.png"><br>
> `align-content: stretch`<br>
> `align-content: flex-start`<br>
> `align-content: flex-end`<br>
> `align-content: center`<br>
> `align-content: space-between`<br>
> `align-content: space-around`<br>


> **align-items**<br>
> \- 자식요소를 **수직** 정렬<br>
> <br><img src = "https://d2.naver.com/content/images/2018/12/helloworld-201811-flex_21.png"><br>
> `align-items: stretch`<br>
> `align-items: flex-start`<br>
> `align-items: center`<br>
> `align-items: baseline`<br>
> `align-items: flex-end`<br>

> **justify-content**<br>
> \- 자식요소를 **수평** 정렬<br>
> <br><img src = "https://d2.naver.com/content/images/2018/12/helloworld-201811-flex_19.png"><br>
> `justify-content: flex-start`<br>
> `justify-content: center`<br>
> `justify-content: flex-end`<br>
> `justify-content: space-around`<br>
> `justify-content: space-between`<br>
> `justify-content: space-evenly`<br>

---

<br>

> **Grid**<br>
> 　\- `display: grid;`<br>
> 　\- 부모요소 : **grid container**<br>
> 　\- 복수의 자식요소 : **grid item**<br>


>**grid container**속성<br>
>　\- grid-template-columns, grid-template-rows, grid-template-areas, grid-gap<br>
>**grid item**속성<br>
>　\- grid-column-start, grid-column-end, grid-row-start, grid-row-end,<br>

> **grid container**<br>
> `display: grid;`<br>
> `display: inline-grid;`<br>
> <img src="https://css-tricks.com/wp-content/uploads/2018/11/template-columns-rows-01.svg" alt="그리드 행열" style="width:400px"><br>
> **grid-template-columns**<br>
> \- 그리트 템플릿 열<br>
> **grid-template-rows**<br>
> \- 그리트 템플릿 행<br>

> **track-size**<br>
> \- 그리드의 여유 공간의 일부<br>
> ```css
> .container {
> grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
> grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
> }
> ```
> <br>
> <img src="https://css-tricks.com/wp-content/uploads/2018/11/template-column-rows-02.svg" alt="라인이름" style="width:400px">
<br>

> **grid-template-areas** : 그리드 템플릿 영역<br>
> **grid-area-name**<br>
> \- grid-area로 지정된 그리드 영역의 이름<br>
> **.(마침표)**<br>
> \- 빈 그리드 셀<br>
> **none**<br>
> \- 그리드 영역이 정의되지 않음<br>
> ```css
> .item-a {
>   grid-area: header;
> }
> .item-b {
>   grid-area: main;
> }
> .item-c {
>   grid-area: sidebar;
> }
> .item-d {
>   grid-area: footer;
> }
> .container {
>   display: grid;
>   grid-template-columns: 50px 50px 50px 50px;
>   grid-template-rows: auto;
>   grid-template-areas: 
>     "header header header header"
>     "main main . sidebar"
>     "footer footer footer footer";
> }
> ```
> <br><img src = "https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-template-areas.svg" alt = "그리드 영영 설정" style="width:400px"><br>

> **grid-gap**<br>
> \- 그리드 선의 크기 / 거터 너비 설정, 열&행 간격<br>
> ```css
> .container {
>   grid-template-columns: 100px 50px 100px;
>   grid-template-rows: 80px auto 80px; 
>   column-gap: 10px;
>   row-gap: 15px;
> }
> ```
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-gap.svg" alt="그리드간격" style="width:400px"><br>
> 

>**justify-items**<br>
>\- 행에 따른 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-items-start.svg" alt="start" style="width:400px"><br>
> \- `justify-items: start` : 셀의 시작 가장자리와 같은 높이로 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-items-end.svg" alt="end" style="width:400px"><br>
> \- `justify-items: end` : 셀의 끝 가장자리와 같은 높이로 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-items-center.svg" alt="center" style="width:400px"><br>
> \- `justify-items: center` : 셀의 중앙에 항목을 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-items-stretch.svg" alt="stretch" style="width:400px"><br>
> \- `justify-items: stretch` : 셀의 전체 너비를 채움(기본값)<br>


>**align-items** : 열에 따른 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/align-items-start.svg" alt="start" style="width:400px"><br>
> \- `align-items: start` : 셀의 시작 가장자리와 같은 높이로 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/align-items-end.svg" alt="end" style="width:400px"><br>
> \- `align-items: end` : 셀의 끝 가장자리와 같은 높이로 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/align-items-center.svg" alt="center" style="width:400px"><br>
> \- `align-items: center` : 셀의 중앙에 항목을 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-items-stretch.svg" alt="stretch" style="width:400px"><br>
> \- `align-items: stretch` : 셀의 전체 너비를 채움(기본값)<br>
> \- `align-items: baseline` : 텍스트 기준선을 따라 항목을 정렬<br>

>**justify-content** : 컨테이너를 행에 따른 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-content-start.svg" alt="start" style="width:400px"><br>
> \- `justify-content: start` : 그리드 컨테이너의 시작 가장자리와 같은 높이로 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-content-end.svg" alt="end" style="width:400px"><br>
> \- `justify-content: end` : 그리드 컨테이너의 끝 가장자리와 같은 높이로 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-content-center.svg" alt="center" style="width:400px"><br>
> \- `justify-content: center` : 그리드 컨테이너의 중앙에 항목을 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-content-stretch.svg" alt="stretch" style="width:400px"><br>
> \- `justify-content: stretch` : 그리드 컨테이너의 전체 너비를 채움<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-around.svg" alt="space-around" style="width:400px"><br>
> \- `justify-content: space-around` : 각 그리드 항목 사이에 일정한 양의 공간을 배치하고 맨 끝에는 절반 크기의 공간이 있음<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-between.svg" alt="space-between" style="width:400px"><br>
> \- `justify-content: space-between` : 맨 끝에 공백 없이 각 그리드 항목 사이에 일정한 양의 공백을 배치<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-evenly.svg" alt="space-evenly" style="width:400px"><br>
> \- `justify-content: space-evenly` : 맨 끝을 포함하여 각 그리드 항목 사이에 일정한 양의 공간을 배치<br>
> 
>**align-content** : 컨테이너를 열에 따른 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/align-content-start.svg" alt="start" style="width:400px"><br>
> \- `align-content : start` : 그리드 컨테이너의 시작 가장자리와 같은 높이로 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/align-content-end.svg" alt="end" style="width:400px"><br>
> \- `align-content : end` : 그리드 컨테이너의 끝 가장자리와 같은 높이로 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/align-content-center.svg" alt="center" style="width:400px"><br>
> \- `align-content : center` : 그리드 컨테이너의 중앙에 항목을 정렬<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/align-content-stretch.svg" alt="stretch" style="width:400px"><br>
> \- `align-content : stretch` : 그리드 컨테이너의 전체 너비를 채움<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-around.svg" alt="space-around" style="width:400px"><br>
> \- `align-content : space-around` : 각 그리드 항목 사이에 일정한 양의 공간을 배치하고 맨 끝에는 절반 크기의 공간이 있음<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-between.svg" alt="space-between" style="width:400px"><br>
> \- `align-content : space-between` : 맨 끝에 공백 없이 각 그리드 항목 사이에 일정한 양의 공백을 배치<br>
> <br><img src="https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-evenly.svg" alt="space-evenly" style="width:400px"><br>
> \- `align-content : space-evenly` : 맨 끝을 포함하여 각 그리드 항목 사이에 일정한 양의 공간을 배치<br>

---

||장점|단점|
|:-:|:--|:--|
|Flex|- 페이지 레이아웃이 다른 화면 크기와 다른 디스플레이 장치를 수용해야 할 때 요소 컨트롤이 쉬움<br>- float사용 시 여백으로 무너지는 레이아웃이 무너지지 않게 함|- IE11이상 버전에서만 사용가능<br>- 다른 브라우저도 버전 낮은 것을 대비하여 벤더프리픽스를 사용해야함<br>(* 벤더프리픽스 : 새로운 기능을 모두 제공해야 할 때 변환 효과를 적용하는 스타일 시트)|
|Grid|- 다른 레이아웃과 중첩으로 사용할 필요가 없어 메모리 사용량을 줄일 수 있음<br>- 매우 쉽고 효율적으로 간단하게 작성하여 2차원의 레이아웃을 관리할 수 있음|- IE에서 작동하지 않음<br>- 최신 버전인 IE11에서도 작동 X, 벤더프리픽스를 사용|

---

### **6. CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?**
> **CSS 선택자** : 특성 요소들을 선택하여 스타일 적용<br>
> **[ 선택자 종류 ]**
> - 선택자 하나만 쓸 경우
>   - 전체 선택자<br>
> `*` 사용<br>
> `* { color : #FFD384; }`
>   - 태그 선택자<br>
> `태그명` 사용 <br>
> `p { color : #FFD384; }`
>   - 클래스 선택자<br>
> `.클래스명` 사용<br>
> `.classname { color : #FFD384; }`
>   - 아이디 선택자<br>
> `#아이디명` 사용<br>
> `#idname { color : #FFD384; }`
> <hr>
> 
> - 선택자 여러개 쓸 경우
>   - 하위 선택자 (= 자손 선택자)<br>
> `공백` 사용<br>
> <br><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99E7E0445C967F6C07" alt="자손선택자" style = "width:400px;"><br>
> <br>`section ul { color : #FFD384; }`
> 
>   - 자식 선택자<br>
> `>` 사용<br>
> <br><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99E838445C967F6D07" alt="자식선택자" style = "width:400px;"><br>
> <br>`section > ul { color : #FFD384; }`
> 
>   - 인접 형제 선택자<br>
> `+` 사용<br>
> <br><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99C8A9435C9681E207" alt="인접형제선택자" style = "width:400px;"><br>
> <br>`h1 + ul { color : #FFD384; }`
> 
>   - 일반 형제 선택자<br>
> `~` 사용<br>
> <br><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99C8B3435C9681E207" alt="일반형제선택자" style = "width:400px;"><br>
> <br>`h1 ~ ul { color : #FFD384; }`
> <hr>
>  
>
> - 속성 선택자 : 적절한 id와 class 이름이 없을 경우 사용<br>
> <table  border="1px solid #000;" style="margin: 0 50px;">
>   <tr>
>       <th>구성</th>
>       <th>설명</th>
>   </tr>
>   <tr>
>       <td>태그[속성]</td>
>       <td>'속성이름' 해당 </td>
>   </tr>
>   <tr>
>       <td>태그[속성="변수"]</td>
>       <td>'속성'의 속성값이 '변수'인 태그 선택</td>
>   </tr>
>   <tr>
>       <td>태그[속성~="변수"]</td>
>       <td>'속성'의 속성값이 '변수'를 포함하는 태그 선택</td>
>   </tr>
>   <tr>
>       <td>태그[속성^="변수"]</td>
>       <td>'속성'의 속성값이 '변수'로 시작하는 태그 선택</td>
>   </tr>
>   <tr>
>       <td>태그[속성$="변수"]</td>
>       <td>'속성'의 속성값이 '변수'로 끝나는 태그 선택</td>
>   </tr>
>   <tr>
>       <td>태그[속성*="변수"]</td>
>       <td>'속성'의 속성값이'변수'를 포함하는 태그 선택</td>
>   </tr>
>   <tr>
>       <td>태그[속성|="변수"]</td>
>       <td>'속성'의 속성값이'변수'이거나 '변수'로 시작하는 태그 선택</td>
>   </tr>
> </table>
> <br>
> 
> ▸ `태그[속성~="변수"]`와 `태그[속성*="변수"]`의 차이는?<br>
> 　　~ : 포함여부를 **단어**를 기준으로 판단<br>
> 　　\* : 포함여부를 **문자열**을 기준으로 판단<br>
> 　　　　ex) navers<br>
> 　　　　　　~="naver" : 단어가 다르기 때문에 선택 X<br>
> 　　　　　　*="naver" : 문자열을 포함하기 때문에 선택 O
> <hr>
> 
> 
>- 의사 선택자 (= 의사 클래스) : html요소, 아이디, 클래스 선택자에게 특별한 상태를 명시할 때 사용<br>
> `:(콜론)`을 사용하여 표현<br>
>   - 동적 의사 클래스
> <table border="1px solid #000;" style="margin: 0 50px;">
>   <tr>
>       <td>:link</td>
>       <td>사용자가 아직 한 번도 해당 링크를 누르지 않은 상태 (a요소 기본)</td>
>   </tr>
>   <tr>
>       <td>:visited</td>
>       <td>사용자가 한 번이라도 해당 링크를 누른 상태</td>
>   </tr>
>   <tr>
>       <td>:hover</td>
>       <td>사용자가의 마우스 커서가 위에 올라가 있는 상태</td>
>   </tr>
>   <tr>
>       <td>:active</td>
>       <td>사용자의 마우스 커서가 클릭중인 상태</td>
>   </tr>
>   <tr>
>       <td>:focus</td>
>       <td>tab키로 focus가 맞춰진 상태</td>
>   </tr>
> </table><br>
> 
>   - 상태 의사 클래스
> <table border="1px solid #000;" style="margin: 0 50px;">
>   <tr>
>       <td>:checked</td>
>       <td>input의 checkbox나 raidobutton이 체크된 상태</td>
>   </tr>
>   <tr>
>       <td>:enabled</td>
>       <td>input의 "type=text", selct, option에서 사용자가 선택한 상태</td>
>   </tr>
>   <tr>
>       <td>:disabled</td>
>       <td>input의 "type=text", selct, option을 사용자가 선택할 수 없도록 만든 상태</td>
>   </tr>
> </table><br>
> 
>   - 구조 의사 클래스
> <table border="1px solid #000;" style="margin: 0 50px;">
>   <tr>
>       <td>:first-child</td>
>       <td>모든 자식 요소 중에서 첫 번째에 위치하는 자식을 선택</td>
>   </tr>
>   <tr>
>       <td>:nth-child(n)</td>
>       <td>모든 자식 요소 중에서 n번재 위치하는 자식을 선택</td>
>   </tr>
>   <tr>
>       <td>:last-child</td>
>       <td>모든 자식 요소 중에서 마지막에 위치하는 자식을 선택</td>
>   </tr>
>   <tr>
>       <td>:first-of-type</td>
>       <td>모든 자식 요소 중에서 첫 번째에 등장하는 특정 요소를 선택</td>
>   </tr>
>   <tr>
>       <td>:nth-of-type(n)</td>
>       <td>모든 자식 요소 중에서 n번째로 등장하는 특정 요소를 선택</td>
>   </tr>
>   <tr>
>       <td>:last-of-type</td>
>       <td>모든 자식 요소 중에서 마지막으로 등장하는 특정 요소를 선택</td>
>   </tr>
> </table><br>
> 
> ▸ `:first-child`와 `:first-of-type`의 차이?<br>
> ```html
> <div class="parent">
>   <div>text1</div>
>   <p>text2</p>
>   <p>text2</p>
> </div>
> ```
> <hr>
> 
> ```css
> .parent p:first-child {
>   color: #ff0000;
> }
> 
> .parent p:first-of-type {
>   color: #ff0000;
> }
> ```
> <hr>
> ▸ 결과<br>
> 
> `:first-child` : .parent의 첫번째 자식은 div이기 때문에 적용 X<br>
> `:first-of-type` : .parent의 두번째 자식이자 자식중 첫번째 p이기 때문에 적용 O
> <br>
> #### **[ 같은 CSS 적용하는 방법 ]**<br>
> ```
> ▸ 똑같은 class명 부여
> ▸ ,(쉼표) 로 분리
>     p {color:red;}
>     div {color:red;}
>             ↓
>     p, div {color:red;}
> ```
><br>
---
## ➕ Advanced

<details>
<summary>📄 목차(Click)</summary>

　　⭐ [CSS의 어려움](#1-왜-css는-어려울까요)<br>
　　⭐ [CSS 극복 방법](#2-css의-어려움을-극복하기-위해-어떤-방법들이-제시되고-나왔을까요)<br>
　　⭐ [CSS가 적용되는 과정](#3-css가-브라우저에-의해-해석되고-적용되기까지-내부적으로-어떤-과정을-거칠까요)<br>
　　⭐ [웹 폰트의 렌더링 과정](#4-웹-폰트의-경우에는-브라우저-엔진-별로-어떤-과정을-통해-렌더링-될까요)<br>
</details>

### **1. 왜 CSS는 어려울까요?**<br>
### **2. CSS의 어려움을 극복하기 위해 어떤 방법들이 제시되고 나왔을까요?**
### **3. CSS가 브라우저에 의해 해석되고 적용되기까지 내부적으로 어떤 과정을 거칠까요?**
### **4. 웹 폰트의 경우에는 브라우저 엔진 별로 어떤 과정을 통해 렌더링 될까요?**