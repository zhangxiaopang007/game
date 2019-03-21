//1.创建食物构造函数
var fruitObj = function(){
    this.x = [];
    this.y = [];
    this.alive = [];       //食物状态true false
    this.fruitType = [];   //食物类型blue orange
    this.l= [];
    this.spd = [];
    this.blue = new Image();//两张图片
    this.orange = new Image();
    this.aneNo = [];        //海葵下标
}
//2.为食物构造函数添加数量 num =30
fruitObj.prototype.num = 30;
//3.为食物构造函数添加方法 init
fruitObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.alive[i] = false;
        this.x[i]=0;
        this.y[i]=0;
        this.l[i]=0;
        this.fruitType[i]="";
        this.spd[i] = Math.random()*0.017+0.3;
    }
    this.blue.src="src/blue.png";
    this.orange.src="src/fruit.png";
}
//4.为食物构造函数添加方法 draw
fruitObj.prototype.draw = function(){
    for(var i=0;i<this.num;i++){
        //1.当前食物的状态
        if(this.alive[i]){
            //2.当前食物的类型
            if(this.fruitType[i]=="blue"){
                var pic = this.blue;
            }else{
                var pic = this.orange;
            }
        }
        
        if(this.l[i]<=14){
            this.l[i]+=this.spd[i];//3.由小变大
            var no = this.aneNo[i];//获取海葵下标
            this.x[i] = ane.headx[no];//获取当前海葵xy
            this.y[i] = ane.heady[no];
        }else{
            this.y[i]-=this.spd[i]*5//4.向上漂浮
        }
        //5.绘图
        ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
        //6.如果漂浮出画布，将当前食物修改不活动
        if(this.y[i]<10){
            this.alive[i] = false;
        }
    }
}
//5.在index.html添加fruit2.js
//7.创建函数监听画布上活动食物数量
function fruitMonitor(){
    var sum = 0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i])sum++;
    }
    if(sum<15){
        sendFruit();
        return;
    }
}
//8.从不活动食物中挑一个
function sendFruit(){
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]==false){
            fruit.born(i);
            return;
        }
    }
}
//9.出生
fruitObj.prototype.born = function(i){
    //随机找海葵下标
    var idx = Math.floor(Math.random()*ane.num);
    this.aneNo[i] = idx;
    this.l[i] = 0;//宽度
    //状态true
    this.alive[i] = true;
    //随机指定类型字符串
    this.fruitType[i] = Math.random()<0.9?"blue":"orange";
}
//10.在main.js gameloop 调用监听画布方法
/*
//fruit2.js
//1:创建食物构造函数  **
var fruitObj = function(){
    this.x = [];             //食物位置
    this.y = [];
    this.alive = [];         //食物状态 true false
    this.fruitType = [];     //食物类型  blue orange
    this.l = [];             //宽度
    this.spd = [];           //速度
    this.blue = new Image(); //两张图片
    this.orange = new Image();
    this.aneNo = [];         //海葵下标
 }
 //2:为食物构造函数添加数量 num = 30
 fruitObj.prototype.num = 30;
 //3:为食物构造函数添加方法 init  15:50
 fruitObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
      this.alive[i] = false;
      this.x[i]=0;
      this.y[i]=0;
      this.l[i]=0;
      this.fruitType[i]="";
      this.spd[i] = Math.random()*0.017+0.3;
    }
    this.blue.src = "src/blue.png";
    this.orange.src = "src/fruit.png";
 }
 //4:为食物构造函数添加方法 draw
 fruitObj.prototype.draw = function(){
    for(var i=0;i<this.num;i++){
      //1:判断当前食物状态true
      if(this.alive[i]){
       //2:判断当前食物类型
       if(this.fruitType[i]=="blue"){
         var pic = this.blue;
       }else{
         var pic = this.orange;
       } 
       //3:由小变大
       //4:向上漂浮
       if(this.l[i]<=14){ 
          this.l[i]+=this.spd[i];
          //------------------------
          var no = this.aneNo[i]; //获取海葵下标
          this.x[i] = ane.headx[no];//获取当前海葵xy
          this.y[i] = ane.heady[no];
          //-------------------------
       }else{
          this.y[i]-=this.spd[i]*3;
       }
       //5:绘图
       ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
       //6:如果漂浮出画布 将当前食物修改不活动
       if(this.y[i]<10){
         this.alive[i] = false;
       }
      }
    }
 }
 //5:在index.html 注释fruit.js文件
 //  添加fruit2.js
 //7:创建函数监听画布上活动食物数量
 //如果不足15活动食物挑一个不活动食物
 function fruitMonitor(){
    var sum = 0;
    for(var i=0;i<fruit.num;i++){
      if(fruit.alive[i])sum++;
    }
    if(sum<15){
      sendFruit();
      return;
    }
 }
 //8:从不活动食物中挑一个
 function sendFruit(){
    for(var i=0;i<fruit.num;i++){
       if(fruit.alive[i]==false){
          fruit.born(i);
          return;
       }
    }
 }
 //9:出生16:45
 fruitObj.prototype.born = function(i){
    //随机找海葵下标
    var idx = Math.floor(Math.random()*ane.num); 
    this.aneNo[i] = idx;
    //宽度
    this.l[i] = 0;
    //状态true
    this.alive[i] = true;
    //随机指定类型字符串
    this.fruitType[i] = Math.random()<0.9?"blue":"orange";
 }
 //10:在main.js gameloop 调用监听画布方法
 */