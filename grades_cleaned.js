{
    
    'grade3_2': {
    id: 'grade3_2',
    name: '三年级下',
    metadata: {
        title: "Oxford English Primary 3 (Shanghai Edition)",
        subtitle: "牛津上海版小学英语三年级下册",
        totalUnits: 12,
        totalModules: 4
    },
    
    modules: [
        {
            id: "module1",
            name: "Using my five senses",
            nameCN: "运用我的五种感官",
            units: [
                { id: "unit1", name: "Colours", nameCN: "颜色" },
                { id: "unit2", name: "Tastes", nameCN: "味道" },
                { id: "unit3", name: "Sounds", nameCN: "声音" }
            ]
        },
        {
            id: "module2",
            name: "My favourite things",
            nameCN: "我最喜欢的东西",
            units: [
                { id: "unit4", name: "Animals", nameCN: "动物" },
                { id: "unit5", name: "Toys", nameCN: "玩具" },
                { id: "unit6", name: "Food and drinks", nameCN: "食物和饮料" }
            ]
        },
        {
            id: "module3",
            name: "Things around us",
            nameCN: "我们周围的事物",
            units: [
                { id: "unit7", name: "Shapes", nameCN: "形状" },
                { id: "unit8", name: "Seasons", nameCN: "季节" },
                { id: "unit9", name: "Clothes", nameCN: "衣服" }
            ]
        },
        {
            id: "module4",
            name: "More things to learn",
            nameCN: "更多学习内容",
            units: [
                { id: "unit10", name: "Funny cartoons", nameCN: "有趣的卡通" },
                { id: "unit11", name: "My day", nameCN: "我的一天" },
                { id: "unit12", name: "Three little pigs", nameCN: "三只小猪" }
            ]
        }
    ],

    units: {
        "unit1": {
            id: "unit1",
            module: "module1",
            name: "Colours",
            nameCN: "颜色",
            topic: "学习各种颜色和简单的颜色描述",
            vocabulary: [
                { word: "red", chinese: "红色", phonetic: "/red/", audio: "red", letterSounds: [{letters:"r",sound:"/r/"},{letters:"e",sound:"/e/"},{letters:"d",sound:"/d/"}] },
                { word: "blue", chinese: "蓝色", phonetic: "/bluː/", audio: "blue", letterSounds: [{letters:"bl",sound:"/bl/"},{letters:"u",sound:"/uː/"},{letters:"e",sound:"/ə/"}] },
                { word: "yellow", chinese: "黄色", phonetic: "/ˈjeloʊ/", audio: "yellow", letterSounds: [{letters:"y",sound:"/j/"},{letters:"e",sound:"/e/"},{letters:"ll",sound:"/l/"},{letters:"ow",sound:"/oʊ/"}] },
                { word: "green", chinese: "绿色", phonetic: "/ɡriːn/", audio: "green", letterSounds: [{letters:"gr",sound:"/ɡr/"},{letters:"ee",sound:"/iː/"},{letters:"n",sound:"/n/"}] },
                { word: "orange", chinese: "橙色", phonetic: "/ˈɔːrɪndʒ/", audio: "orange", letterSounds: [{letters:"or",sound:"/ɔː/"},{letters:"a",sound:"/ɪ/"},{letters:"n",sound:"/n/"},{letters:"ge",sound:"/dʒ/"}] },
                { word: "purple", chinese: "紫色", phonetic: "/ˈpɜːrpəl/", audio: "purple", letterSounds: [{letters:"pur",sound:"/pɜːr/"},{letters:"ple",sound:"/pəl/"}] },
                { word: "pink", chinese: "粉色", phonetic: "/pɪŋk/", audio: "pink", letterSounds: [{letters:"p",sound:"/p/"},{letters:"i",sound:"/ɪ/"},{letters:"nk",sound:"/ŋk/"}] },
                { word: "brown", chinese: "棕色", phonetic: "/braʊn/", audio: "brown", letterSounds: [{letters:"br",sound:"/br/"},{letters:"ow",sound:"/aʊ/"},{letters:"n",sound:"/n/"}] },
                { word: "black", chinese: "黑色", phonetic: "/blæk/", audio: "black", letterSounds: [{letters:"bl",sound:"/bl/"},{letters:"a",sound:"/æ/"},{letters:"ck",sound:"/k/"}] },
                { word: "white", chinese: "白色", phonetic: "/waɪt/", audio: "white", letterSounds: [{letters:"wh",sound:"/w/"},{letters:"i",sound:"/aɪ/"},{letters:"te",sound:"/t/"}] },
                { word: "colour", chinese: "颜色", phonetic: "/ˈkʌlər/", audio: "colour", letterSounds: [{letters:"c",sound:"/k/"},{letters:"o",sound:"/ʌ/"},{letters:"l",sound:"/l/"},{letters:"our",sound:"/ər/"}] },
                { word: "rainbow", chinese: "彩虹", phonetic: "/ˈreɪnboʊ/", audio: "rainbow", letterSounds: [{letters:"ai",sound:"/eɪ/"},{letters:"n",sound:"/n/"},{letters:"bo",sound:"/boʊ/"},{letters:"w",sound:"/w/"}] }
            ],
            sentences: [
                { english: "What colour is it?", chinese: "它是什么颜色？", audio: "what_colour_is_it" },
                { english: "It's red.", chinese: "它是红色的。", audio: "its_red" },
                { english: "I like blue.", chinese: "我喜欢蓝色。", audio: "i_like_blue" },
                { english: "The sky is blue.", chinese: "天空是蓝色的。", audio: "the_sky_is_blue" },
                { english: "Look at the rainbow!", chinese: "看彩虹！", audio: "look_at_the_rainbow" },
                { english: "What a beautiful rainbow!", chinese: "多美丽的彩虹啊！", audio: "what_beautiful_rainbow" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: What colour do you like?",
                    participants: ["Alice", "Ben"],
                    l