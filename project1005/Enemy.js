//적군
class Enemy{
    //적군의 이미지가 4개 이므로 매개변수로 받는다
    constructor(src,x,y,width,height,velX,velY){
        this.img;
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        this.img = document.createElement("img");
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.src=this.src//적군 이미지
        wrapper.appendChild(this.img);
    }
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }
    render(){
        //변화된 물리량을 화면에 표시한다(그래픽 처리)
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}