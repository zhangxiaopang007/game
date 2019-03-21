//1.创建大鱼构造函数
var momObj = function(){
    this.x;     //大鱼x y
    this.y;
    this.angle;          //游动角度
    this.bigEye = [];//保存大鱼眼睛图片数组
    this.bigBody = [];//保存大鱼身体图片数组
    this.bigTail = [];//保存大鱼尾巴图片数组


    // 完成尾巴切换图片
    this.bigTailIdx = 0;    //尾巴图片下标
    this.bigTailStart = 0;  //计时开始
    this.bigTailEnd = 200;  //计时结束

    // 完成眼睛切换图片
    this.bigEyeIdx = 0;
    this.bigEyeStart = 0;
    this.bigEyeEnd = 3000;
    //完成身体切换图片
    this.bigBodyIdx = 0;
    this.bigBodyStart = 0;
    this.bigBodyEnd = 3000;
}
//2.为构造函数添加初始化方法 init
momObj.prototype.init = function(){
    //2.1初始化大鱼位置画布中心
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    //2.2初始化大鱼游动角度
    this.angle = 0;
    //2.3初始化大鱼眼睛图片(创建图片对象，下载图片)
    for(var i=0;i<2;i++){
        this.bigEye[i] = new Image();
        this.bigEye[i].src = "src/bigEye"+i+".png";
    }
    //2.4初始化大鱼身体图片(创建图片对象，下载图片)
    for(var i=0;i<8;i++){
        this.bigBody[i] = new Image();
        this.bigBody[i].src = "src/bigSwim"+i+".png";
    }
    //2.5初始化大鱼尾巴图片(创建图片对象，下载图片)
    for(var i=0;i<8;i++){
        this.bigTail[i] = new Image();
        this.bigTail[i].src = "src/bigTail"+i+".png";
    }
    //console.log(this.bigEye);
    //console.log(this.bigBody);
    //console.log(this.bigTail);
}
//3.为构造函数添加绘制方法 draw
momObj.prototype.draw = function(){
    // 1.将鼠标位置赋值给大鱼 大鱼面向鼠标慢慢游过去
    this.x = lerpDistance(mx,this.x,0.99);
    this.y = lerpDistance(my,this.y,0.99);
    // 2.将大鱼面向鼠标游戏动修改角度
    // 2.1计算获取大鱼与鼠标坐标差
    var deltaX = mx - this.x;
    var deltaY = my - this.y;
    // 2.2角度差
    var beta = Math.atan2(deltaY,deltaX)+Math.PI;
    // 2.3重新计算大鱼游动角度
    this.angle = lerpAngle(beta,this.angle,0.91);



    //3.将大鱼尾巴图片切换
    // 开始计时
    this.bigTailStart+=10;
    // 如果开始时间大于结束时间
    if(this.bigTailStart > this.bigTailEnd){
        // 切换下一张图片
        this.bigTailIdx = (this.bigTailIdx+1)%8;
        // 开始值清空
        this.bigTailStart = 0;
    }

    // 4.大鱼眼睛图片切换
    // 4.1计时开始时间累加
    this.bigEyeStart+=10;
    // 4.2如果开始时间大于结束时间
    if(this.bigEyeStart > this.bigEyeEnd){
        // 4.3切换眼睛图片下标
        this.bigEyeIdx = (this.bigEyeIdx+1)%2;
        // 4.4计时开始时间清空
        this.bigEyeStart = 0;
    }
    
    


    // 5.大鱼身体图片切换
    // 5.1计时开始时间累加
    this.bigBodyStart+=10;
    // 5.2如果开始时间大于结束时间
    if( this.bigBodyStart > this.bigBodyEnd){
        // 5.3切换身体图片下标
        this.bigBodyIdx = (this.bigBodyIdx+1)%8;
        // 5.4计时开始时间清空
        this.bigBodyStart = 0;
    }
    
    


    ctx1.save();//保存画笔状态
    ctx1.translate(this.x,this.y);//平移原点在大鱼身上
    ctx1.rotate(this.angle);//旋转指定角度
    //绘制大鱼身体
    ctx1.drawImage(this.bigBody[this.bigBodyIdx],-this.bigBody[this.bigBodyIdx].width*0.5,-this.bigBody[this.bigBodyIdx].height*0.5);
    //绘制大鱼尾巴
    ctx1.drawImage(this.bigTail[this.bigTailIdx],-this.bigTail[this.bigTailIdx].width*0.5+30,-this.bigTail[this.bigTailIdx].height*0.5);
    //绘制大鱼眼睛
    ctx1.drawImage(this.bigEye[this.bigEyeIdx],-this.bigEye[this.bigEyeIdx].width*0.5,-this.bigEye[this.bigEyeIdx].height*0.5)

    ctx1.restore();//恢复画笔状态
}
//4.在main.js创建大鱼对象并且调用相关方法