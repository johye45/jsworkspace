/*백인을 정의한다*/
//extends Person 은 부모 js불러옴
class BlackPerson extends Person{
    constructor(){
        // this.name="nigro";//에러발생이유: 부모보다 시급한 초기화는 없기 때문에
        //부모의 탄생이 최우선시 되야 함, 부모가 존재해야 자식이 존재하니까!
        super(5,10);//부모의 constructor()의미
        this.name="nigro";//정상수행(부모 생성자 호출보다 아래에 두었기 때문에)
        //부모 생성자 호출 이유: 생물학적으로 당연, 자식의 초기화보다
        //최우선시 해야 하는 작업은 부모의 존재 즉 초기화 이므로
        //상태는 변ㄴ수로 표현한다. 즉 속성
        this.color="black";
        // console.log("I am sub class(Person)")
    }
}




