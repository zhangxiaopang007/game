//1.创建食物构造函数 fruitObj
var  fruitObj = function(){
    this.x = [];//食物坐标
    this.y = [];
    this.fruitType = [];//类型
    this.alive = [];//食物状态 true false
    this.l = [];    //食物宽度
    this.spd = [];  //食物速度
    this.blue = new Image();   //两个图片对象
    this.orange = new Image();
}
//2.为构造函数添加属性 num
fruitObj.prototype.num=30;
//3.为构造函数添加方法 init
fruitObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.alive[i] = true;
        this.x[i] =Math.random()*canWidth;
        this.y[i] =Math.random()*canHeight;
        this.l[i]=0;
        this.fruitType[i]=Math.random()<0.9?"blue":"orange";
        this.spd[i]=Math.random()*0.17+0.02;
    }
    this.blue.src="src/blue.png";
    this.orange.src="src/fruit.png";
}
//4.为构造函数添加方法 draw
fruitObj.prototype.draw = function(){
    //1.创建循环
    for(var i=0;i<this.num;i++){
    //2.判断当前食物是否活动状态
        if(this.alive[i]){
        //3.判断食物类型 blue orange
          if(this.fruitType[i]=="blue"){
              var pic = this.blue;
          }else{
              var pic = this.orange;
          }
        if(this.l[i]<=14){
            this.l[i]+=this.spd[i];//4.宽度小于14 生长
        }else{
            this.y[i]-=this.spd[i]*5;//5.向上漂浮
        }
        //6.绘制图片
        ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
        }
    }
}
//5.将fruit.js添加index.html文件中
//6.在main.js创建食物构造函数对象并且调用其它方法