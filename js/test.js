/**
 * Created by wells on 2017/7/3 003.
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
//为对象每一个属性设置点击切换动画方法
for(screenCls in screenelement){
    setAnimation(screenCls);
}
//点击切换动画方法
function setAnimation(screenCls) {
    var screen = document.querySelector(screenCls),                                   //获取对象属性的元素
        elementCls = screenelement[screenCls];                  //获取项对应属性中的数组
    screen.onclick = function() {
        for (var i = 0; i < elementCls.length; i++) {
            var animationElementCls = elementCls[i],                        //遍历数组
                element = document.querySelectorAll(animationElementCls);  //获取元素
            for(var j=0;j<element.length;j++){
                var baseCls=element[j].className;
                if(baseCls.indexOf("init") === -1){
                    element[j].setAttribute(
                        "class",baseCls.replace(
                            animationElementCls.substr(1),animationElementCls.substr(1) + " " + animationElementCls.substr(1) + "_animate_init"
                        )
                    )
                }
                else if(baseCls.indexOf("init") !== -1){
                    element[j].setAttribute(
                        "class",baseCls.replace(
                            animationElementCls.substr(1) + " " + animationElementCls.substr(1) + "_animate_init",animationElementCls.substr(1)
                        )
                    )
                }
            }
        }
    }
}
