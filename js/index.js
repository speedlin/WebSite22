window.onscroll = function(){
    var y = window.scrollY+window.innerHeight;//获取底部高度
    if (window.getComputedStyle) {
        // 高版本的浏览器获取的
        heightForRight1 = getComputedStyle(mainTop).height.slice(0,-2)*1+20+getComputedStyle(headerAll).height.slice(0,-2)*1;
        heightForRight2 = getComputedStyle(right_to_bottom).height.slice(0,-2)*1+20+getComputedStyle(headerAll).height.slice(0,-2)*1;
    } else {
        // ie浏览器获取的
        heightForRight1 = mainTop.currentStyle.height.slice(0,-2)*1+20+headerAll.currentStyle.height.slice(0,-2)*1;
        heightForRight2 = right_to_bottom.currentStyle.height.slice(0,-2)*1+20+headerAll.currentStyle.height.slice(0,-2)*1;
    }
    var heightbottom = y-heightForRight1;
    // heightbottom 变量获取与底部的距离
    // window.scrollY 滚动时浏览器顶部的位置
    // window.innerHeight 可视窗口的高度
    if(y-window.innerHeight==window.scrollY){
        // y-window.innerHeight 相当于 window.scrollY
        // 初始化position属性
        // 如果不满足第二个判断条件就恢复初始值
        // 当y>=2276及满足第二个条件时也为执行此判断，但被覆盖无效
        // 判断条件不可交换
        right_to_bottom.style.position = 'static';
        right_to_bottom.style.marginLeft = 0;
    }
    if(y>=getComputedStyle(right_to_bottom).height.slice(0,-2)*1+20+getComputedStyle(headerAll).height.slice(0,-2)*1){
        // 改变右边内容的固定定位
        right_to_bottom.style.position = "fixed";
        right_to_bottom.style.bottom = 0;
        right_to_bottom.style.left = '50%';
        right_to_bottom.style.marginLeft = '290px';
        if(window.innerWidth<=1219){
            right_to_bottom.style.marginLeft = '230px';
        }
    }
    if(y>heightForRight1){
        // 滑动到底部时变量改变bottom值
        right_to_bottom.style.bottom = heightbottom+'px';
    }

}