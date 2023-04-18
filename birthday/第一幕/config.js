// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "可爱的briol",  // 同上...
        "今天是你的生日",
        "这是我遇见你的",
        "第七个生日！",
        "这七年来，我见过你",
        "奇怪的样子",
        "可爱的样子",
        "生气的样子",
        "都是你独一无二的样子",
        "对了，礼物收全了吗？",
        "今年要好！好！吃！饭！",
        "喂饱饱的",
        "然后才有力气干活",
        "生日快乐~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/songxinxin.jpeg",
        "可爱的briol": "./imgs/briol.jpg",
        "今天是你的生日": "./imgs/shengri.jpeg",
        "这是我遇见你的": "./imgs/zaiyiqi.png",
        "第七个生日！": "./imgs/birth7.jpg",
        "这七年来，我见过你": "./imgs/yangzi.jpeg",
        "奇怪的样子": "./imgs/qiguai.jpg",
        "可爱的样子": "./imgs/cute.jpg",
        "生气的样子": "./imgs/anger.jpg",
        "都是你独一无二的样子": "./imgs/strange.jpg",
        "对了，礼物收全了吗？": "./imgs/chuo.gif",
        "今年要好！好！吃！饭！": "./imgs/chihaodian.jpeg",
        "喂饱饱的": "./imgs/weibao.jpeg",
        "然后才有力气干活": "./imgs/work.jpg",
        "生日快乐~~": "./imgs/happy.jpg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "从这里开始~",
        play: "上音乐",
        bannar_coming: "来点颜色",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '爱你的vJanGo~'
};
