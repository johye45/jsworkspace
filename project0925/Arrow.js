
//아래 코드 단위는 사물 자체가 아니라, 정차 사물을 대량으러
//생산할 수 있는 틀이다
//그리고 전산분야에서는 이틀을 가리켜 클래스라 부른다

//객체지향 프로그래밍 언어
//객체지향이란 객체중심적 사고방식으로 접근해야 한다

class Arrow{
    //클래스 안에 선언된 변수는, 이 클래스 소속이 되므로 변수명 앞에 자기 자신꺼라는
    //대명사를 붙여야 하며 this라는 이미 정해진 변수를 쓴다
    constructor(){
        this.arrow;
        this.stepX=10;//10씩 움직일 변수
    }

    //화살 생성
    //클래스 안에 선언된, 즉 클래스가 보유한 함수는 해당 사물의 동작 방법을 결정짓는다 하여
    //메소드라 한다
    createArrow(x,y){
        this.arrow = document.createElement("span"); //<span></span>
        this.arrow.innerText="→";//<span>→</span>
        this.arrow.style.position="absolute";
        this.arrow.style.left=x+"px";
        this.arrow.style.top=y+"px";
        this.arrow.style.color="red";
        this.arrow.style.fontSize="50px";

        document.body.appendChild(this.arrow);//body에 부착
    }

    //화살 동작을 처리할 함수
    move(){//x축으로만
        this.arrow.style.left=parseInt(this.arrow.style.left)+this.stepX+"px";
    }
        
}