//영화 이미지 썸네일을 정의한다
class Thumbnail{
    constructor(container,width,height,bd,src,x){
        this.container=container;//thumb에 넣을건데 혹시 이름이 바뀔 수 잇으니 변수로 받아오기!
        this.div=document.createElement("div");
        this.width=width;
        this.height=height;
        this.bd=bd;//보더두께
        this.img = document.createElement("img");
        this.src=src;
        this.x=x;//div의 x좌표
        var me = this;//
        

        //스타일 부여하기
        this.div.style.position="absolute";//여러 이미지가 와야되기 때문에 포지션 지정
        this.div.style.left=this.x+"px";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.border=this.bd+"px solid white";
        this.div.style.boxSizing="border-box";//보더두께 width에 포함 X
        this.img.src=this.src//이미지 대입
        this.img.style.width=(this.width-(bd*2))+"px";
        this.img.style.height=(this.height-(bd*2))+"px";//border안에 이미지가 딱 맞게 들어갈 수 있도록 
        //보더만큼 빼준다
        this.img.style.boxSizing="border-box";//이미지 박스 사이즈
    
        //이미지에 이벤트 구현하기
        this.img.addEventListener("click", function(){
            // alert("나의 경로는 "+ this.src);
            // getDetail(this.src)//나의 이미지 경로
            // 이벤트 구현시 사용되는 익명함수내에서 this를 사용하게 되면,
            //객체의 인스턴스를 가리키게 되는것이 아;니라,
            //익명함수의 {}영역을 가리키게 된다

            //현재 객체가 매열의 몇번째인지 알아맞추기
            var index = thumbArray.indexOf(me);//thumbArray에 클래스 Thumbnail담기
            console.log(index);
            // alert("저는 thumbArray의"+index+"번째 있으니 marvel배열의 "+index+"번째 이용할거임");
            getDetail(index);
            
            //포인터의 targetX값을 나의 좌표와 일치
            pointer.targetX=me.x;//me가 this를 대신했기 때문에
            //this로 하면 안됨
        });


        //div에 이미지 넣기
        this.div.appendChild(this.img);
        this.container.appendChild(this.div);//thumb div에 붙이기 
    
    }

}