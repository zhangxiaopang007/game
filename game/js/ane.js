// 1:创建海葵构造函数 aneObj
function aneObj(){
	this.x=[];//所有海葵位置
	this.len=[];//所有海葵高度
}
//1.1为海葵的构造函数在原型上添加属性num表示海葵数量
aneObj.prototype.num=50;
// 2:为构造函数添加初始化方法 init
aneObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.len[i]=200+Math.random()*50;
		this.x[i]=i*16+Math.random()*20;
	}
}
// 3:为构造函数添加绘制海葵方法draw
 aneObj.prototype.draw=function(){
	// console.log(3);
	ctx2.save();
	ctx2.strokeStyle = "#3b154e";//描边样式紫色
	ctx2.lineWidth = 20;		//描边宽度
	ctx2.lineCap = "round";		//圆角
	ctx2.globalAlpha = 0.5;		//半透明
	for(var i=0;i<this.num;i++){
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],canHeight);
		ctx2.lineTo(this.x[i],canHeight-this.len[i]);
		ctx2.stroke();
	}
	ctx2.restore();
 }
// 4:将ane.js添加到index.html中
// 5:在main.js中创建海葵对象并调用相应方法