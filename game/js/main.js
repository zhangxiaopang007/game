//1.创建一组全局变量
//全局变量当前文件中所有函数都可以使用全局变量
//如果index.html main.js ane.js
var can1;//画布1
var can2;//画布2
var ctx1;//画笔1
var ctx2;//画笔2
var canWidth;//画布宽度
var canHeight;//画布高度
//1.1创建全局变量保存背景图片
var bgPic;
//1.2创建全局变量保存海葵对象
var ane;
//1.3创建全局变量保存食物对象
var fruit;
//1.4创建全局变量保存大鱼对象
var mom;
// 1.5创建二个变量保存鼠标位置
var mx = 0;
var my = 0;

//2.创建函数game 游戏第一个执行函数
function game(){
    init();
    gameloop();
}
//3.创建函数init 游戏中初始化全局变量
function init(){
    can1 = document.getElementById("c1");
    can2 = document.getElementById("c2");
    ctx1 = can1.getContext("2d");
    ctx2 = can2.getContext("2d");
    canWidth = can1.width;
    canHeight = can1.height;
    //3.1创建背景图对象并且下载图片
    bgPic = new Image();
    bgPic.src = "src/background.jpg";
    //3.2创建海葵对象，并且调用初始化的方法
    ane=new aneObj();
    ane.init();
    //3.3创建食物对象，并且调用初始化的方法
    fruit=new fruitObj();
    fruit.init();
    //3.4创建大鱼对象并且调用初始化方法
    mom=new momObj();
    mom.init();
    // 3.5为画布1绑定鼠标移动事件
    can1.addEventListener("mousemove",handleMove,false);
}
//4.创建函数gameloop 游戏创建定时器循环绘制所有元素
function gameloop(){
    //4.1创建智能定时器调用gameloop函数
    requestAnimationFrame(gameloop);
    //4.2绘制背景图片
    drawBackground();
    //4.3绘制海葵的对象
    ane.draw();
    //4.4绘制食物对象
    fruitMonitor();
    fruit.draw();
    //清除画布1
    ctx1.clearRect(0,0,canWidth,canHeight);
    //4.5绘制大鱼对象
    mom.draw();
}
//5.当前面加载成功后调用game函数
document.body.onload = game;
//6.监听鼠标移动
function handleMove(e){
    mx = e.offsetX;
    my = e.offsetY;
    console.log(mx+":"+my);
}