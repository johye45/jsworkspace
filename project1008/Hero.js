//extends GameObject를 명시하는 순간부터, 현재의 Hero의 인스턴스는
//마치 내것처럼, GameObject의 모든 변수, 함수를 사용할 수 있다. 그래서 상속이다.
class Hero extends GameObject{
    constructor(container,src,width,height,x,y,velX,velY){
        super(container,src,width,height,x,y,velX,velY);//부모를 먼저 초기화

    }
    //아래의 메서드는 주인공만의 해동방법이므로 이 클래서에서 정의하면됨
    tick(){
        this.x=this.x+this.velX;//기존 x위치에 속도만큼 더해나간다
        this.y=this.y+this.velY;//기존 y위치에 속동만큼 더해나감
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}