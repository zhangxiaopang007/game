//起点坐标 控制点坐标 终点坐标
//摆动幅度
//1.创建构造函数aneObj
function aneObj(){
    this.rootx = [];//起点坐标
    this.headx = [];//终点坐标x
    this.heady = [];//终点坐标y
    this.amp = []   //摆动幅度 20 25 50
    this.alpha = 0;//正弦函数返回 -1 -0.9 .. 0.8 0.9 1
}
//2.为构造函数添加数据 num = 50
aneObj.prototype.num = 50;
//3.为构造函数添加函数 init
aneObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.rootx[i] = i *16 +Math.random()*20;
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight -250 +Math.random()*50
        this.amp[i] = 20 + Math.random()*20
    }
}
//4.为构造函数添加函数 draw
aneObj.prototype.draw = function(){
    ctx2.save();
    ctx2.strokeStyle = "#3b154e";
    ctx2.lineWidth = 20;
    ctx2.lineCap = "round";
    ctx2.globalAlpha = 0.5;
    //创建数据 -1 0 
    this.alpha += 0.001 *24;
    var p = Math.sin(this.alpha)
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        //重新计算终点坐标
        this.headx[i]=this.rootx[i]+this.amp[i]*p;
        ctx2.moveTo(this.rootx[i],canHeight);
        ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i])//控制点
        
        ctx2.stroke();
    }

    ctx2.restore();
}
//5.在index.html注释上一个ane.js添加ane2.js