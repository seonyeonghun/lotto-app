// var vs let, const 차이 --> old vs new 차이
// 클릭할 대상
const make1num = document.querySelector("#make_num1")
const make5num = document.querySelector("#make_num5")

// 이벤트 등록
make1num.addEventListener("click", show1num);
// make5num.addEventListener("click", show5num);

// 로또 생성 함수
function show1num(){
    let num_one = [];
    for(let i=1; i<46; i++){ // 1~45 만든다
        num_one.push(i);
    }
    num_one.sort(function(){ // 섞는다
        return Math.random() - 0.5
    })
    //console.log(num_one); // 확인한다
    // 추출   .slice()  vs .splice()

    let start = Math.ceil(Math.random() * 40); // 정수로 시작점
    let new_num_one = num_one.slice(start, start+6);
    new_num_one.sort(function(a,b){ // 오름차순정리
        return a-b;
    })   
    localStorage.setItem("lottoNum",new_num_one)
    
    location.href = "/result1"
}


// function show5num(){
    
    
// }