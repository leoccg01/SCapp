var timer,
    timerIndex=-1,
    timerFnArray=[];

$(function(){
  //搜索按钮事件
	$('#btnSrch').on('tap',function(e){
		var txt=$('#srch-text').val()||'leo前端';
		window.location.href='../srch.html?kw='+txt;
	})
	//初始化轮播图
	initBannerSwiper();
  //秒杀执行
  timerFnArray.push(updateMsTimer);

  timer=setInterval(function(){
    timerIndex+=1;
    timerIndex=timerIndex % 100;
    for (var i=0;i<timerFnArray.length;i++){
      timerFnArray[i]();// 调用数组中的每个回调函数执行。
    }
  },200);
});
//卸载页面退出秒杀倒计时
window.onunload = function() {
  clearInterval(timer);
}
//更新倒计时时间
function updateMsTimer(){
    if(timerIndex %5 !=0){
      return;
    } 
    //满1s
    var endDate= new Date(loadData.ms.endTimer);
    var strArr=getHouersMinutesSecondsByMS(endDate-Date.now());
    $('#msTimerBox .timer-num').each(function(index,item){
      item.innerHTML=strArr?strArr[index]:'-';
    });
  }

//初始化轮播图的方法
function initBannerSwiper(){
	var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical',
    loop: true,
    autoplay:true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  })        
};