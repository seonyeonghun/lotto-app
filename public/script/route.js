// 자바스크립트 변수 : var    vs   let, const(=상수)
// 차이점!          : old     /    new
// ECMA Script --> JS Standard! --> ES 5 ==> ES 6 (과도기)
// 여러분은! var 보다 let, const 사용하세요!
// 문제점! var는 선언하지 않고도 사용가능하고 또 전역/지역 명확하지 않음.

// 대상 : id요소 camelCase
const openBTN = document.querySelector("#openSide")
const closeBTN = document.querySelector("#closeSide")
const sidePan = document.querySelector("#sidePannel")

// 이벤트 등록
openBTN.addEventListener("click", sideOpen);
closeBTN.addEventListener("click", sideClose);

// 함수
function sideOpen(){
    sidePan.classList.remove("d-none");
}
function sideClose(){
    sidePan.classList.add("d-none");
}