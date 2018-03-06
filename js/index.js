/**
 * Created by wells on 2017/6/30 030.
 */
var screenelement={
    ".screen-1":[
        ".screen-1__heading",
        ".screen-1__phone",
        ".screen-1__shadow"
    ],
    ".screen-2":[
        ".screen-2__heading",
        ".screen-2__subheading",
        ".screen-2__phone",
        ".screen-2__phone__point_i_1",
        ".screen-2__phone__point_i_2",
        ".screen-2__phone__point_i_3"
    ],
    ".screen-3":[
        ".screen-3__heading",
        ".screen-3__subheading",
        ".screen-3__phone",
        ".screen-3__item"
    ],
    ".screen-4":[
        ".screen-4__heading",
        ".screen-4__subheading",
        ".screen-4__type__phone_i_1",
        ".screen-4__type__phone_i_2",
        ".screen-4__type__phone_i_3",
        ".screen-4__type__phone_i_4"
    ],
    ".screen-5":[
        ".screen-5__heading",
        ".screen-5__subheading",
        ".screen-5__pic"
    ]
};
var outline=document.querySelector(".outline"),
    header=document.querySelector("header"),
    headerItem=document.querySelectorAll(".header__nav__item"),
    outlineNav=document.querySelectorAll(".outline__nav"),
    tip=document.querySelector(".header__nav_tip");
//*****第一步初始化******
//所有动画初始化
for(screenCls in screenelement){
    setAnimationInit(screenCls);
}
//动画初始化方法
function setAnimationInit(screenCls) {
    var elementCls = screenelement[screenCls];                  //获取项对应属性中的数组
    for (var i = 0; i < elementCls.length; i++) {
        var animationElementCls = elementCls[i],                        //遍历数组
            element = document.querySelectorAll(animationElementCls);  //获取元素
        for (var j = 0; j < element.length; j++) {
            var baseCls = element[j].className;
            element[j].setAttribute(
                "class",baseCls.replace(
                    animationElementCls.substr(1),animationElementCls.substr(1) + " " + animationElementCls.substr(1) + "_animate_init"
                )
            )
        }
    }
}
//初始化大纲
outlineInit();
function outlineInit() {
    outline.className="outline" + " " + "outline_status_out";
}
//*****第二步动画运行******
//各屏动画实行、导航条样式变更及大纲动画
window.onload=function () {
    playAnimate(".screen-1");
}
window.onscroll=function () {
    var top=document.documentElement.scrollTop;
    //屏幕滚动80px，导航条样式变更
    if (top > 80){
        header.className="header_status_black";
    }
    else {
        header.className=null;
    }
    //大纲出现
    if(top > 800 - 100){
        outline.className="outline";
    }
    else {
        outline.className="outline" + " " + "outline_status_out";
    }
    //各屏内容出现及导航条、大纲选中项目样式变更
    if(top >=0){
        navActive(0);
    }
    if (top > 800*1 - 100){
        playAnimate(".screen-2");
        navActive(1);
    }
    if (top > 800*2 - 100){
        playAnimate(".screen-3");
        navActive(2);
    }
    if (top > 800*3 - 100){
        playAnimate(".screen-4");
        navActive(3);
    }
    if (top > 800*4 - 100){
        playAnimate(".screen-5");
        navActive(4);
    }
};
//动画运行方法
function playAnimate(screenCls){
    var elementCls = screenelement[screenCls];                  //获取项对应属性中的数组
    for (var i = 0; i < elementCls.length; i++) {
        var animationElementCls = elementCls[i],                        //遍历数组
            element = document.querySelectorAll(animationElementCls);  //获取元素
        for (var j = 0; j < element.length; j++) {
            var baseCls = element[j].className;
            element[j].setAttribute(
                "class",baseCls.replace(
                    animationElementCls.substr(1) + " " + animationElementCls.substr(1) + "_animate_init",animationElementCls.substr(1)
                )
            )
        }
    }
}
//*****第三步导航条和大纲选中样式******
//滑动门效果方法
var activeIdx=0;
function navTip(i) {
    headerItem[i].onmouseover=function () {
        tip.style.left=93*i + "px";
    }
    headerItem[i].onmouseout=function () {
        tip.style.left=93*activeIdx + "px";
    }
}
//导航条和大纲选中样式变更方法
function navActive(idx) {
    //初始化导航条和大纲样式
    for(var i=0;i<outlineNav.length;i++){
        headerItem[i].className="header__nav__item";
        outlineNav[i].className="outline__nav";
    }
    //导航条选中样式
    headerItem[idx].className="header__nav__item" + " " + "header__nav__item_status_active";
    activeIdx=idx;
    tip.style.left=93*idx + "px";
    //大纲选中样式
    outlineNav[idx].className="outline__nav" + " " + "outline__nav_status_active"
}
//*****第四步选中导航条、大纲页面导航至相应部分******
//导航条、大纲页面导航至相应部分方法
function setJump(i) {
    headerItem[i].onclick=function () {
        document.body.scrollTop=800*i;
    }
    outlineNav[i].onclick=function () {
        document.body.scrollTop=800*i;
    }
}
//遍历滑动门效果及导航条、大纲页面导航至相应部分方法
for(var i=0;i<outlineNav.length;i++){
    navTip(i);
    setJump(i);
}