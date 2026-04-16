#!/usr/bin/env python3
"""更新三年级下册词汇数据"""

import json

def create_vocabulary(word, chinese, phonetic):
    """创建单词条目"""
    return {
        "word": word,
        "chinese": chinese,
        "phonetic": phonetic,
        "audio": word.lower().replace("/", "").replace(" ", "_").replace("-", "_"),
        "letterSounds": []
    }

# 定义各单元词汇数据
m1u1_vocabulary = [  # Seeing and hearing
    create_vocabulary("listen", "听", "/ˈlɪsən/"),
    create_vocabulary("hear", "听见", "/hɪə/"),
    create_vocabulary("look", "看", "/lʊk/"),
    create_vocabulary("see", "看见", "/siː/"),
    create_vocabulary("aeroplane", "飞机(英)", "/ˈeərəpleɪn/"),
    create_vocabulary("plane", "飞机", "/pleɪn/"),
    create_vocabulary("bus", "公共汽车", "/bʌs/"),
    create_vocabulary("ship", "轮船", "/ʃɪp/"),
    create_vocabulary("car", "小汽车", "/kɑː/"),
    create_vocabulary("van", "厢式货车", "/væn/"),
    create_vocabulary("train", "火车", "/treɪn/"),
    create_vocabulary("taxi", "出租车", "/ˈtæksi/"),
    create_vocabulary("else", "别的，其他的", "/els/"),
    create_vocabulary("circle", "圆圈", "/ˈsɜːkl/"),
    create_vocabulary("draw", "画", "/drɔː/"),
    create_vocabulary("cut", "剪，切", "/kʌt/"),
    create_vocabulary("colour", "涂色", "/ˈkʌlə/"),
    create_vocabulary("use", "使用", "/juːz/"),
    create_vocabulary("toothpick", "牙签", "/ˈtuːθpɪk/"),
    create_vocabulary("spin", "旋转", "/spɪn/"),
    create_vocabulary("spinner", "旋转器", "/ˈspɪnə/"),
    create_vocabulary("child", "孩子(单数)", "/tʃaɪld/"),
    create_vocabulary("children", "孩子们(复数)", "/ˈtʃɪldrən/"),
    create_vocabulary("raindrop", "雨滴", "/ˈreɪndrɒp/"),
    create_vocabulary("fall", "落下", "/fɔːl/"),
    create_vocabulary("down", "向下", "/daʊn/"),
    create_vocabulary("pitter-patter", "噼里啪啦(雨声)", "/ˌpɪtə ˈpætə/"),
    create_vocabulary("them", "它们/他们", "/ðem/"),
]

m1u2_vocabulary = [  # Touching and feeling
    create_vocabulary("feel", "感觉", "/fiːl/"),
    create_vocabulary("touch", "触摸", "/tʌtʃ/"),
    create_vocabulary("pineapple", "菠萝", "/ˈpaɪnæpl/"),
    create_vocabulary("cake", "蛋糕", "/keɪk/"),
    create_vocabulary("glass", "玻璃杯", "/ɡlɑːs/"),
    create_vocabulary("glasses", "眼镜", "/ˈɡlɑːsɪz/"),
    create_vocabulary("bag", "包，袋子", "/bæɡ/"),
    create_vocabulary("bear", "熊", "/beə/"),
    create_vocabulary("desk", "桌子", "/desk/"),
    create_vocabulary("bread", "面包", "/bred/"),
    create_vocabulary("banana", "香蕉", "/bəˈnɑːnə/"),
    create_vocabulary("rough", "粗糙的", "/rʌf/"),
    create_vocabulary("smooth", "光滑的", "/smuːð/"),
    create_vocabulary("hard", "硬的", "/hɑːd/"),
    create_vocabulary("soft", "柔软的", "/sɒft/"),
    create_vocabulary("hungry", "饿的", "/ˈhʌŋɡri/"),
    create_vocabulary("thirsty", "渴的", "/ˈθɜːsti/"),
    create_vocabulary("supermarket", "超市", "/ˈsuːpəmɑːkɪt/"),
    create_vocabulary("pie", "馅饼", "/paɪ/"),
    create_vocabulary("yummy", "好吃的", "/ˈjʌmi/"),
    create_vocabulary("food", "食物", "/fuːd/"),
    create_vocabulary("let's", "让我们", "/lets/"),
    create_vocabulary("let us", "让我们", "/let ʌs/"),
    create_vocabulary("hand", "手", "/hænd/"),
    create_vocabulary("finger", "手指", "/ˈfɪŋɡə/"),
    create_vocabulary("with", "和...一起", "/wɪð/"),
    create_vocabulary("eye", "眼睛", "/aɪ/"),
    create_vocabulary("ear", "耳朵", "/ɪə/"),
    create_vocabulary("Moon", "月亮", "/muːn/"),
    create_vocabulary("please", "请", "/pliːz/"),
    create_vocabulary("yuan", "元(人民币)", "/juːˈɑːn/"),
]

m1u3_vocabulary = [  # Tasting and smelling
    create_vocabulary("taste", "尝", "/teɪst/"),
    create_vocabulary("tasting", "品尝", "/ˈteɪstɪŋ/"),
    create_vocabulary("smell", "闻", "/smel/"),
    create_vocabulary("smelling", "闻一闻", "/ˈsmelɪŋ/"),
    create_vocabulary("sweet", "甜的", "/swiːt/"),
    create_vocabulary("sour", "酸的", "/ˈsaʊə/"),
    create_vocabulary("salty", "咸的", "/ˈsɔːlti/"),
    create_vocabulary("bitter", "苦的", "/ˈbɪtə/"),
    create_vocabulary("lemon", "柠檬", "/ˈlemən/"),
    create_vocabulary("salt", "盐", "/sɔːlt/"),
    create_vocabulary("coffee", "咖啡", "/ˈkɒfi/"),
    create_vocabulary("now", "现在", "/naʊ/"),
    create_vocabulary("close", "关闭", "/kləʊz/"),
    create_vocabulary("or", "或者", "/ɔː/"),
    create_vocabulary("night", "夜晚", "/naɪt/"),
    create_vocabulary("right", "正确的", "/raɪt/"),
    create_vocabulary("sometimes", "有时", "/ˈsʌmtaɪmz/"),
    create_vocabulary("drink", "喝", "/drɪŋk/"),
    create_vocabulary("sleep", "睡觉", "/sliːp/"),
    create_vocabulary("photograph", "照片", "/ˈfəʊtəɡrɑːf/"),
    create_vocabulary("photo", "照片", "/ˈfəʊtəʊ/"),
]

m2u1_vocabulary = [  # Animals
    create_vocabulary("animal", "动物", "/ˈænɪməl/"),
    create_vocabulary("tiger", "老虎", "/ˈtaɪɡə/"),
    create_vocabulary("lion", "狮子", "/ˈlaɪən/"),
    create_vocabulary("panda", "熊猫", "/ˈpændə/"),
    create_vocabulary("monkey", "猴子", "/ˈmʌŋki/"),
    create_vocabulary("elephant", "大象", "/ˈelɪfənt/"),
    create_vocabulary("hippo", "河马", "/ˈhɪpəʊ/"),
    create_vocabulary("fox", "狐狸(单数)", "/fɒks/"),
    create_vocabulary("foxes", "狐狸(复数)", "/ˈfɒksɪz/"),
    create_vocabulary("wolf", "狼(单数)", "/wʊlf/"),
    create_vocabulary("wolves", "狼(复数)", "/wʊlvz/"),
    create_vocabulary("giraffe", "长颈鹿", "/dʒɪˈrɑːf/"),
    create_vocabulary("zebra", "斑马", "/ˈzebrə/"),
    create_vocabulary("snake", "蛇", "/sneɪk/"),
    create_vocabulary("bull", "公牛", "/bʊl/"),
    create_vocabulary("don't", "不(do not)", "/dəʊnt/"),
    create_vocabulary("do not", "不", "/duː nɒt/"),
    create_vocabulary("doesn't", "不(does not)", "/ˈdʌzənt/"),
    create_vocabulary("does not", "不", "/dʌz nɒt/"),
    create_vocabulary("cute", "可爱的", "/kjuːt/"),
    create_vocabulary("clever", "聪明的", "/ˈklevə/"),
]

m2u2_vocabulary = [  # Toys
    create_vocabulary("toy", "玩具", "/tɔɪ/"),
    create_vocabulary("skateboard", "滑板", "/ˈskeɪtbɔːd/"),
    create_vocabulary("doll", "娃娃", "/dɒl/"),
    create_vocabulary("lovely", "可爱的", "/ˈlʌvli/"),
    create_vocabulary("toy train", "玩具火车", "/tɔɪ treɪn/"),
    create_vocabulary("robot", "机器人", "/ˈrəʊbɒt/"),
    create_vocabulary("foil", "箔纸", "/fɔɪl/"),
    create_vocabulary("glue", "胶水", "/ɡluː/"),
    create_vocabulary("button", "按钮", "/ˈbʌtən/"),
    create_vocabulary("stick", "棍棒", "/stɪk/"),
    create_vocabulary("together", "一起", "/təˈɡeðə/"),
    create_vocabulary("fun", "乐趣", "/fʌn/"),
    create_vocabulary("funny", "滑稽的", "/ˈfʌni/"),
    create_vocabulary("walk", "走", "/wɔːk/"),
    create_vocabulary("sorry", "对不起", "/ˈsɒri/"),
    create_vocabulary("wall", "墙", "/wɔːl/"),
    create_vocabulary("behind", "在...后面", "/bɪˈhaɪnd/"),
    create_vocabulary("kite", "风筝", "/kaɪt/"),
    create_vocabulary("bicycle", "自行车", "/ˈbaɪsɪkl/"),
    create_vocabulary("transformer", "变形金刚", "/trænsˈfɔːmə/"),
]

m2u3_vocabulary = [  # Clothes
    create_vocabulary("clothes", "衣服", "/kləʊðz/"),
    create_vocabulary("these", "这些", "/ðiːz/"),
    create_vocabulary("those", "那些", "/ðəʊz/"),
    create_vocabulary("hat", "帽子", "/hæt/"),
    create_vocabulary("gloves", "手套", "/ɡlʌvz/"),
    create_vocabulary("trousers", "裤子", "/ˈtraʊzəz/"),
    create_vocabulary("scarf", "围巾(单数)", "/skɑːf/"),
    create_vocabulary("scarves", "围巾(复数)", "/skɑːvz/"),
    create_vocabulary("jacket", "夹克衫", "/ˈdʒækɪt/"),
    create_vocabulary("socks", "袜子", "/sɒks/"),
    create_vocabulary("shoes", "鞋子", "/ʃuːz/"),
    create_vocabulary("shirt", "衬衫", "/ʃɜːt/"),
    create_vocabulary("blouse", "女式衬衫", "/blaʊz/"),
    create_vocabulary("skirt", "裙子", "/skɜːt/"),
    create_vocabulary("dress", "连衣裙", "/dres/"),
    create_vocabulary("shorts", "短裤", "/ʃɔːts/"),
    create_vocabulary("coat", "外套", "/kəʊt/"),
    create_vocabulary("sweater", "毛衣", "/ˈswetə/"),
    create_vocabulary("T-shirt", "T恤衫", "/ˈtiːʃɜːt/"),
    create_vocabulary("pair", "一对，一双", "/peə/"),
    create_vocabulary("picture", "图片", "/ˈpɪktʃə/"),
    create_vocabulary("word", "单词", "/wɜːd/"),
    create_vocabulary("horse", "马", "/hɔːs/"),
    create_vocabulary("zebra", "斑马", "/ˈzebrə/"),
    create_vocabulary("toe", "脚趾", "/təʊ/"),
    create_vocabulary("beside", "在...旁边", "/bɪˈsaɪd/"),
    create_vocabulary("English", "英语", "/ˈɪŋɡlɪʃ/"),
    create_vocabulary("hurry", "赶紧", "/ˈhʌri/"),
    create_vocabulary("miss", "想念，错过", "/mɪs/"),
    create_vocabulary("pupil", "学生", "/ˈpjuːpəl/"),
    create_vocabulary("clean", "干净的", "/kliːn/"),
]

m3u1_vocabulary = [  # Shapes
    create_vocabulary("shape", "形状", "/ʃeɪp/"),
    create_vocabulary("circle", "圆形", "/ˈsɜːkl/"),
    create_vocabulary("square", "正方形", "/skweə/"),
    create_vocabulary("triangle", "三角形", "/ˈtraɪæŋɡl/"),
    create_vocabulary("star", "星形", "/stɑː/"),
    create_vocabulary("rectangle", "长方形", "/ˈrektæŋɡl/"),
    create_vocabulary("house", "房子", "/haʊs/"),
    create_vocabulary("picture", "图片", "/ˈpɪktʃə/"),
    create_vocabulary("after", "在...之后", "/ˈɑːftə/"),
    create_vocabulary("home", "家", "/həʊm/"),
    create_vocabulary("hungry", "饿的", "/ˈhʌŋɡri/"),
    create_vocabulary("thirsty", "渴的", "/ˈθɜːsti/"),
    create_vocabulary("side", "边", "/saɪd/"),
    create_vocabulary("angle", "角", "/ˈæŋɡl/"),
    create_vocabulary("light", "灯，轻的", "/laɪt/"),
    create_vocabulary("bright", "明亮的", "/braɪt/"),
    create_vocabulary("coat", "外套", "/kəʊt/"),
    create_vocabulary("so", "非常", "/səʊ/"),
    create_vocabulary("fan", "风扇", "/fæn/"),
    create_vocabulary("like", "像", "/laɪk/"),
    create_vocabulary("biscuit", "饼干", "/ˈbɪskɪt/"),
    create_vocabulary("off", "离开", "/ɒf/"),
]

m3u2_vocabulary = [  # Colours
    create_vocabulary("red", "红色", "/red/"),
    create_vocabulary("orange", "橙色", "/ˈɒrɪndʒ/"),
    create_vocabulary("yellow", "黄色", "/ˈjeloʊ/"),
    create_vocabulary("green", "绿色", "/ɡriːn/"),
    create_vocabulary("blue", "蓝色", "/bluː/"),
    create_vocabulary("white", "白色", "/waɪt/"),
    create_vocabulary("black", "黑色", "/blæk/"),
    create_vocabulary("purple", "紫色", "/ˈpɜːpl/"),
    create_vocabulary("violet", "紫罗兰色", "/ˈvaɪələt/"),
    create_vocabulary("brown", "棕色", "/braʊn/"),
    create_vocabulary("grey", "灰色", "/ɡreɪ/"),
    create_vocabulary("pink", "粉色", "/pɪŋk/"),
    create_vocabulary("colourful", "色彩鲜艳的", "/ˈkʌlərfl/"),
    create_vocabulary("rainbow", "彩虹", "/ˈreɪnbəʊ/"),
    create_vocabulary("sky", "天空", "/skaɪ/"),
    create_vocabulary("sea", "大海", "/siː/"),
    create_vocabulary("mountain", "山", "/ˈmaʊntɪn/"),
    create_vocabulary("river", "河流", "/ˈrɪvə/"),
    create_vocabulary("nature", "大自然", "/ˈneɪtʃə/"),
    create_vocabulary("ant", "蚂蚁", "/ænt/"),
    create_vocabulary("grasshopper", "蚱蜢", "/ˈɡrɑːshɒpə/"),
    create_vocabulary("sleep", "睡觉", "/sliːp/"),
]

# 读取原文件
with open('grade3_2.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 更新modules结构
data['modules'] = [
    {
        "id": "module1",
        "name": "Using my five senses",
        "nameCN": "运用我的五种感官",
        "units": [
            {"id": "unit1", "name": "Seeing and hearing", "nameCN": "视觉和听觉"},
            {"id": "unit2", "name": "Touching and feeling", "nameCN": "触觉和感觉"},
            {"id": "unit3", "name": "Tasting and smelling", "nameCN": "味觉和嗅觉"}
        ]
    },
    {
        "id": "module2",
        "name": "My favourite things",
        "nameCN": "我最喜欢的事物",
        "units": [
            {"id": "unit4", "name": "Animals", "nameCN": "动物"},
            {"id": "unit5", "name": "Toys", "nameCN": "玩具"},
            {"id": "unit6", "name": "Clothes", "nameCN": "服装"}
        ]
    },
    {
        "id": "module3",
        "name": "Things around us",
        "nameCN": "我们周围的事物",
        "units": [
            {"id": "unit7", "name": "Shapes", "nameCN": "形状"},
            {"id": "unit8", "name": "Colours", "nameCN": "颜色"},
            {"id": "unit9", "name": "Seasons", "nameCN": "季节"}
        ]
    },
    {
        "id": "module4",
        "name": "More things to learn",
        "nameCN": "更多学习内容",
        "units": [
            {"id": "unit10", "name": "Funny cartoons", "nameCN": "有趣的卡通"},
            {"id": "unit11", "name": "My day", "nameCN": "我的一天"},
            {"id": "unit12", "name": "Three little pigs", "nameCN": "三只小猪"}
        ]
    }
]

# 更新units中的词汇数据
data['units']['unit1'] = {
    "id": "unit1",
    "module": "module1",
    "name": "Seeing and hearing",
    "nameCN": "视觉和听觉",
    "topic": "学习视觉和听觉相关词汇，包括交通工具",
    "vocabulary": m1u1_vocabulary,
    "sentences": [
        {"english": "Listen! What can you hear?", "chinese": "听！你能听到什么？", "audio": "listen_what_can_you_hear"},
        {"english": "I can hear an aeroplane.", "chinese": "我能听到飞机声。", "audio": "i_can_hear_an_aeroplane"},
        {"english": "Look! I can see a bus.", "chinese": "看！我能看到一辆公共汽车。", "audio": "look_i_can_see_a_bus"},
        {"english": "What else can you see?", "chinese": "你还能看到什么？", "audio": "what_else_can_you_see"},
        {"english": "I can see a ship and a train.", "chinese": "我能看到一艘轮船和一列火车。", "audio": "i_can_see_a_ship_and_a_train"},
        {"english": "Draw a circle. Cut it.", "chinese": "画一个圆圈，然后剪下来。", "audio": "draw_a_circle_cut_it"}
    ],
    "dialogues": [
        {
            "title": "Dialogue 1: What can you hear?",
            "participants": ["Ben", "Kitty"],
            "lines": [
                {"speaker": "Ben", "text": "Listen! What can you hear?", "audio": "listen_what_can_you_hear"},
                {"speaker": "Kitty", "text": "I can hear an aeroplane.", "audio": "i_can_hear_an_aeroplane"},
                {"speaker": "Ben", "text": "Look! I can see a plane.", "audio": "look_i_can_see_a_plane"},
                {"speaker": "Kitty", "text": "What else can you see?", "audio": "what_else_can_you_see"}
            ]
        }
    ],
    "exercises": [
        {"type": "choice", "question": "'听'用英语怎么说？", "options": ["Listen", "Look", "Hear"], "answer": "Listen", "audio": "listen"},
        {"type": "choice", "question": "'公共汽车'用英语怎么说？", "options": ["Bus", "Car", "Taxi"], "answer": "Bus", "audio": "bus"},
        {"type": "choice", "question": "'火车'用英语怎么说？", "options": ["Train", "Plane", "Ship"], "answer": "Train", "audio": "train"}
    ]
}

data['units']['unit2'] = {
    "id": "unit2",
    "module": "module1",
    "name": "Touching and feeling",
    "nameCN": "触觉和感觉",
    "topic": "学习触觉和感觉相关词汇",
    "vocabulary": m1u2_vocabulary,
    "sentences": [
        {"english": "Feel the pineapple. Is it rough or smooth?", "chinese": "摸摸菠萝，它是粗糙的还是光滑的？", "audio": "feel_the_pineapple"},
        {"english": "It's rough.", "chinese": "它是粗糙的。", "audio": "its_rough"},
        {"english": "Feel the bread. Is it hard or soft?", "chinese": "摸摸面包，它是硬的吗还是软的？", "audio": "feel_the_bread"},
        {"english": "It's soft.", "chinese": "它是软的。", "audio": "its_soft"},
        {"english": "Are you hungry or thirsty?", "chinese": "你饿了还是渴了？", "audio": "are_you_hungry_or_thirsty"},
        {"english": "I want some bread and water, please.", "chinese": "我想要一些面包和水。", "audio": "i_want_some_bread_and_water"}
    ],
    "dialogues": [
        {
            "title": "Dialogue 1: At the supermarket",
            "participants": ["Mum", "Tom"],
            "lines": [
                {"speaker": "Mum", "text": "Feel the pineapple. Is it rough or smooth?", "audio": "feel_the_pineapple"},
                {"speaker": "Tom", "text": "It's rough.", "audio": "its_rough"},
                {"speaker": "Mum", "text": "Feel the cake.", "audio": "feel_the_cake"},
                {"speaker": "Tom", "text": "It's soft.", "audio": "its_soft"}
            ]
        }
    ],
    "exercises": [
        {"type": "choice", "question": "'触摸'用英语怎么说？", "options": ["Touch", "Feel", "Look"], "answer": "Touch", "audio": "touch"},
        {"type": "choice", "question": "'光滑的'用英语怎么说？", "options": ["Smooth", "Rough", "Hard"], "answer": "Smooth", "audio": "smooth"},
        {"type": "choice", "question": "'饿的'用英语怎么说？", "options": ["Hungry", "Thirsty", "Tired"], "answer": "Hungry", "audio": "hungry"}
    ]
}

data['units']['unit3'] = {
    "id": "unit3",
    "module": "module1",
    "name": "Tasting and smelling",
    "nameCN": "味觉和嗅觉",
    "topic": "学习味觉和嗅觉相关词汇",
    "vocabulary": m1u3_vocabulary,
    "sentences": [
        {"english": "Taste the lemon. Is it sweet or sour?", "chinese": "尝尝柠檬，它是甜的还是酸的？", "audio": "taste_the_lemon"},
        {"english": "It's sour.", "chinese": "它是酸的。", "audio": "its_sour"},
        {"english": "Smell the coffee. Is it nice?", "chinese": "闻闻咖啡，它好闻吗？", "audio": "smell_the_coffee"},
        {"english": "It's bitter.", "chinese": "它是苦的。", "audio": "its_bitter"},
        {"english": "Sometimes it is sweet. Sometimes it is sour.", "chinese": "有时候它是甜的，有时候它是酸的。", "audio": "sometimes_sweet_sometimes_sour"},
        {"english": "The coffee is too bitter.", "chinese": "咖啡太苦了。", "audio": "the_coffee_is_too_bitter"}
    ],
    "dialogues": [
        {
            "title": "Dialogue 1: At the fruit shop",
            "participants": ["Mum", "Tom"],
            "lines": [
                {"speaker": "Mum", "text": "Taste the lemon. Is it sweet or sour?", "audio": "taste_the_lemon"},
                {"speaker": "Tom", "text": "It's sour.", "audio": "its_sour"},
                {"speaker": "Mum", "text": "Smell the lemon.", "audio": "smell_the_lemon"},
                {"speaker": "Tom", "text": "It's sour but nice.", "audio": "its_sour_but_nice"}
            ]
        }
    ],
    "exercises": [
        {"type": "choice", "question": "'甜的'用英语怎么说？", "options": ["Sweet", "Sour", "Salty"], "answer": "Sweet", "audio": "sweet"},
        {"type": "choice", "question": "'酸的'用英语怎么说？", "options": ["Sour", "Bitter", "Salty"], "answer": "Sour", "audio": "sour"},
        {"type": "choice", "question": "'尝'用英语怎么说？", "options": ["Taste", "Smell", "Feel"], "answer": "Taste", "audio": "taste"}
    ]
}

data['units']['unit4'] = {
    "id": "unit4",
    "module": "module2",
    "name": "Animals",
    "nameCN": "动物",
    "topic": "学习动物园里的动物名称和描述",
    "vocabulary": m2u1_vocabulary,
    "sentences": [
        {"english": "Look at the animals.", "chinese": "看这些动物。", "audio": "look_at_the_animals"},
        {"english": "I like tigers. They are clever.", "chinese": "我喜欢老虎，它们很聪明。", "audio": "i_like_tigers"},
        {"english": "The panda is cute.", "chinese": "熊猫很可爱。", "audio": "the_panda_is_cute"},
        {"english": "Don't feed the animals.", "chinese": "不要喂动物。", "audio": "dont_feed_the_animals"},
        {"english": "The lion is strong.", "chinese": "狮子很强壮。", "audio": "the_lion_is_strong"},
        {"english": "What animal is it?", "chinese": "它是什么动物？", "audio": "what_animal_is_it"}
    ],
    "dialogues": [
        {
            "title": "Dialogue 1: At the zoo",
            "participants": ["Ben", "Kitty"],
            "lines": [
                {"speaker": "Ben", "text": "Look at the animals.", "audio": "look_at_the_animals"},
                {"speaker": "Kitty", "text": "I like tigers. They are clever.", "audio": "i_like_tigers"},
                {"speaker": "Ben", "text": "What about pandas?", "audio": "what_about_pandas"},
                {"speaker": "Kitty", "text": "They are cute.", "audio": "they_are_cute"}
            ]
        }
    ],
    "exercises": [
        {"type": "choice", "question": "'动物'用英语怎么说？", "options": ["Animal", "Tiger", "Panda"], "answer": "Animal", "audio": "animal"},
        {"type": "choice", "question": "'老虎'用英语怎么说？", "options": ["Tiger", "Lion", "Fox"], "answer": "Tiger", "audio": "tiger"},
        {"type": "choice", "question": "'大象'用英语怎么说？", "options": ["Elephant", "Monkey", "Bear"], "answer": "Elephant", "audio": "elephant"}
    ]
}

data['units']['unit5'] = {
    "id": "unit5",
    "module": "module2",
    "name": "Toys",
    "nameCN": "玩具",
    "topic": "学习各种玩具的名称",
    "vocabulary": m2u2_vocabulary,
    "sentences": [
        {"english": "I have a new toy.", "chinese": "我有一个新玩具。", "audio": "i_have_a_new_toy"},
        {"english": "This toy train can walk.", "chinese": "这个玩具火车会走。", "audio": "this_toy_train_can_walk"},
        {"english": "Don't walk behind the wall.", "chinese": "不要走在墙后面。", "audio": "dont_walk_behind_the_wall"},
        {"english": "Let's make a toy together.", "chinese": "我们一起做一个玩具吧。", "audio": "lets_make_a_toy_together"},
        {"english": "It's fun!", "chinese": "真有趣！", "audio": "its_fun"},
        {"english": "Sorry, I can't find my kite.", "chinese": "对不起，我找不到我的风筝了。", "audio": "sorry_i_cant_find_my_kite"}
    ],
    "dialogues": [
        {
            "title": "Dialogue 1: Let's make a robot",
            "participants": ["Alice", "Ben"],
            "lines": [
                {"speaker": "Alice", "text": "Let's make a toy together.", "audio": "lets_make_a_toy_together"},
                {"speaker": "Ben", "text": "Good idea! I have some foil and glue.", "audio": "good_idea_i_have_some_foil_and_glue"},
                {"speaker": "Alice", "text": "We need some buttons too.", "audio": "we_need_some_buttons_too"},
                {"speaker": "Ben", "text": "It's fun!", "audio": "its_fun"}
            ]
        }
    ],
    "exercises": [
        {"type": "choice", "question": "'玩具'用英语怎么说？", "options": ["Toy", "Ball", "Doll"], "answer": "Toy", "audio": "toy"},
        {"type": "choice", "question": "'机器人'用英语怎么说？", "options": ["Robot", "Kite", "Skateboard"], "answer": "Robot", "audio": "robot"},
        {"type": "choice", "question": "'风筝'用英语怎么说？", "options": ["Kite", "Ball", "Train"], "answer": "Kite", "audio": "kite"}
    ]
}

data['units']['unit6'] = {
    "id": "unit6",
    "module": "module2",
    "name": "Clothes",
    "nameCN": "服装",
    "topic": "学习服装相关的词汇",
    "vocabulary": m2u3_vocabulary,
    "sentences": [
        {"english": "I have new clothes.", "chinese": "我有新衣服。", "audio": "i_have_new_clothes"},
        {"english": "These are my trousers.", "chinese": "这些是我的裤子。", "audio": "these_are_my_trousers"},
        {"english": "Those are his shoes.", "chinese": "那些是他的鞋子。", "audio": "those_are_his_shoes"},
        {"english": "I need a pair of gloves.", "chinese": "我需要一副手套。", "audio": "i_need_a_pair_of_gloves"},
        {"english": "This T-shirt is funny.", "chinese": "这件T恤很有趣。", "audio": "this_tshirt_is_funny"},
        {"english": "Hurry up! Don't miss the bus.", "chinese": "快点！不要错过公共汽车。", "audio": "hurry_up_dont_miss_the_bus"}
    ],
    "dialogues": [
        {
            "title": "Dialogue 1: Buying clothes",
            "participants": ["Mum", "Kitty"],
            "lines": [
                {"speaker": "Mum", "text": "I have new clothes.", "audio": "i_have_new_clothes"},
                {"speaker": "Kitty", "text": "These are my trousers.", "audio": "these_are_my_trousers"},
                {"speaker": "Mum", "text": "Those are her shoes.", "audio": "those_are_her_shoes"},
                {"speaker": "Kitty", "text": "And this is my new hat.", "audio": "and_this_is_my_new_hat"}
            ]
        }
    ],
    "exercises": [
        {"type": "choice", "question": "'衣服'用英语怎么说？", "options": ["Clothes", "Shoes", "Hat"], "answer": "Clothes", "audio": "clothes"},
        {"type": "choice", "question": "'帽子'用英语怎么说？", "options": ["Hat", "Scarf", "Gloves"], "answer": "Hat", "audio": "hat"},
        {"type": "choice", "question": "'围巾'用英语怎么说？", "options": ["Scarf", "Jacket", "Coat"], "answer": "Scarf", "audio": "scarf"}
    ]
}

data['units']['unit7'] = {
    "id": "unit7",
    "module": "module3",
    "name": "Shapes",
    "nameCN": "形状",
    "topic": "学习各种形状的名称",
    "vocabulary": m3u1_vocabulary,
    "sentences": [
        {"english": "What shape is it?", "chinese": "它是什么形状？", "audio": "what_shape_is_it"},
        {"english": "It's a circle.", "chinese": "它是圆形。", "audio": "its_a_circle"},
        {"english": "I can see a square.", "chinese": "我能看到一个正方形。", "audio": "i_can_see_a_square"},
        {"english": "How many sides does a triangle have?", "chinese": "三角形有几条边？", "audio": "how_many_sides_does_a_triangle_have"},
        {"english": "It has three sides.", "chinese": "它有三条边。", "audio": "it_has_three_sides"},
        {"english": "Let's draw a house after school.", "chinese": "放学后让我们画一个房子吧。", "audio": "lets_draw_a_house_after_school"}
    ],
    "dialogues": [
        {
            "title": "Dialogue 1: Shapes",
            "participants": ["Ben", "Kitty"],
            "lines": [
                {"speaker": "Ben", "text": "What shape is it?", "audio": "what_shape_is_it"},
                {"speaker": "Kitty", "text": "It's a circle.", "audio": "its_a_circle"},
                {"speaker": "Ben", "text": "What shape is this?", "audio": "what_shape_is_this"},
                {"speaker": "Kitty", "text": "It's a triangle.", "audio": "its_a_triangle"}
            ]
        }
    ],
    "exercises": [
        {"type": "choice", "question": "'形状'用英语怎么说？", "options": ["Shape", "Circle", "Square"], "answer": "Shape", "audio": "shape"},
        {"type": "choice", "question": "'圆形'用英语怎么说？", "options": ["Circle", "Square", "Triangle"], "answer": "Circle", "audio": "circle"},
        {"type": "choice", "question": "'正方形'用英语怎么说？", "options": ["Square", "Triangle", "Star"], "answer": "Square", "audio": "square"}
    ]
}

data['units']['unit8'] = {
    "id": "unit8",
    "module": "module3",
    "name": "Colours",
    "nameCN": "颜色",
    "topic": "学习各种颜色和相关自然词汇",
    "vocabulary": m3u2_vocabulary,
    "sentences": [
        {"english": "What colour is it?", "chinese": "它是什么颜色？", "audio": "what_colour_is_it"},
        {"english": "It's red.", "chinese": "它是红色的。", "audio": "its_red"},
        {"english": "Look at the rainbow!", "chinese": "看彩虹！", "audio": "look_at_the_rainbow"},
        {"english": "The sky is blue.", "chinese": "天空是蓝色的。", "audio": "the_sky_is_blue"},
        {"english": "The sea is blue too.", "chinese": "大海也是蓝色的。", "audio": "the_sea_is_blue_too"},
        {"english": "I like colourful pictures.", "chinese": "我喜欢色彩鲜艳的图片。", "audio": "i_like_colourful_pictures"}
    ],
    "dialogues": [
        {
            "title": "Dialogue 1: What colour do you like?",
            "participants": ["Alice", "Ben"],
            "lines": [
                {"speaker": "Alice", "text": "What colour do you like, Ben?", "audio": "what_colour_do_you_like"},
                {"speaker": "Ben", "text": "I like blue. What about you?", "audio": "i_like_blue_what_about_you"},
                {"speaker": "Alice", "text": "I like pink and purple.", "audio": "i_like_pink_and_purple"},
                {"speaker": "Ben", "text": "Great! We both like colours.", "audio": "great_we_both_like_colours"}
            ]
        }
    ],
    "exercises": [
        {"type": "choice", "question": "'彩虹'用英语怎么说？", "options": ["Rainbow", "Sky", "Sea"], "answer": "Rainbow", "audio": "rainbow"},
        {"type": "choice", "question": "'天空'用英语怎么说？", "options": ["Sky", "Sea", "River"], "answer": "Sky", "audio": "sky"},
        {"type": "choice", "question": "'红色'用英语怎么说？", "options": ["Red", "Blue", "Green"], "answer": "Red", "audio": "red"}
    ]
}

# 保存更新后的文件
with open('grade3_2.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("词汇数据更新完成！")
print(f"共更新了 {len(data['units'])} 个单元")
