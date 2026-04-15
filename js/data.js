/**
 * 牛津上海版三年级下册 课本数据
 * Oxford Shanghai Edition Primary 3 - Semester 2
 */

const TEXTBOOK_DATA = {
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
            name: "My colourful life",
            nameCN: "我多彩的生活",
            units: [
                { id: "unit7", name: "Hobbies", nameCN: "爱好" },
                { id: "unit8", name: "Happy birthday", nameCN: "生日快乐" },
                { id: "unit9", name: "A day on the farm", nameCN: "农场的一天" }
            ]
        },
        {
            id: "module4",
            name: "Things we enjoy",
            nameCN: "我们喜欢的事物",
            units: [
                { id: "unit10", name: "Funny cartoons", nameCN: "有趣的卡通" },
                { id: "unit11", name: "Mother's Day", nameCN: "母亲节" },
                { id: "unit12", name: "Three little pigs", nameCN: "三只小猪" }
            ]
        }
    ],

    units: {
        // ==================== Module 1: Using my five senses ====================
        "unit1": {
            id: "unit1",
            module: "module1",
            name: "Colours",
            nameCN: "颜色",
            topic: "学习各种颜色和简单的颜色描述",
            
            vocabulary: [
                { word: "red", chinese: "红色", phonetic: "/red/", audio: "red" },
                { word: "blue", chinese: "蓝色", phonetic: "/bluː/", audio: "blue" },
                { word: "yellow", chinese: "黄色", phonetic: "/ˈjeloʊ/", audio: "yellow" },
                { word: "green", chinese: "绿色", phonetic: "/ɡriːn/", audio: "green" },
                { word: "orange", chinese: "橙色", phonetic: "/ˈɔːrɪndʒ/", audio: "orange" },
                { word: "purple", chinese: "紫色", phonetic: "/ˈpɜːrpəl/", audio: "purple" },
                { word: "pink", chinese: "粉色", phonetic: "/pɪŋk/", audio: "pink" },
                { word: "brown", chinese: "棕色", phonetic: "/braʊn/", audio: "brown" },
                { word: "black", chinese: "黑色", phonetic: "/blæk/", audio: "black" },
                { word: "white", chinese: "白色", phonetic: "/waɪt/", audio: "white" },
                { word: "colour", chinese: "颜色", phonetic: "/ˈkʌlər/", audio: "colour" },
                { word: "rainbow", chinese: "彩虹", phonetic: "/ˈreɪnboʊ/", audio: "rainbow" }
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
                    lines: [
                        { speaker: "Alice", text: "What colour do you like, Ben?", audio: "what_colour_do_you_like" },
                        { speaker: "Ben", text: "I like blue. What about you?", audio: "i_like_blue_what_about_you" },
                        { speaker: "Alice", text: "I like pink and purple.", audio: "i_like_pink_and_purple" },
                        { speaker: "Ben", text: "Great! We both like colours.", audio: "great_we_both_like_colours" }
                    ]
                },
                {
                    title: "Dialogue 2: At the art class",
                    participants: ["Teacher", "Students"],
                    lines: [
                        { speaker: "Teacher", text: "Children, let's paint today!", audio: "lets_paint_today" },
                        { speaker: "Student1", text: "What colour should I use?", audio: "what_colour_should_i_use" },
                        { speaker: "Teacher", text: "Use red and yellow. Make an orange sun!", audio: "use_red_and_yellow" },
                        { speaker: "Student2", text: "How nice! I like my picture.", audio: "how_nice_i_like_my_picture" }
                    ]
                }
            ],
            
            exercises: [
                {
                    type: "choice",
                    question: "天空是什么颜色？",
                    options: ["Red", "Blue", "Green"],
                    answer: "Blue",
                    audio: "sky_is_blue"
                },
                {
                    type: "choice",
                    question: "'红色'用英语怎么说？",
                    options: ["Blue", "Yellow", "Red"],
                    answer: "Red",
                    audio: "red"
                },
                {
                    type: "choice",
                    question: "'绿色'用英语怎么说？",
                    options: ["Green", "Orange", "Purple"],
                    answer: "Green",
                    audio: "green"
                },
                {
                    type: "fill",
                    question: "The apple is _____.",
                    answer: "red",
                    options: ["red", "blue", "yellow"],
                    audio: "the_apple_is_red"
                },
                {
                    type: "listen_select",
                    question: "Listen and choose the colour you hear",
                    audio: "red",
                    options: ["Red", "Blue", "Green"],
                    answer: "Red"
                }
            ]
        },

        "unit2": {
            id: "unit2",
            module: "module1",
            name: "Tastes",
            nameCN: "味道",
            topic: "学习描述食物和饮料的味道",
            
            vocabulary: [
                { word: "sweet", chinese: "甜的", phonetic: "/swiːt/", audio: "sweet" },
                { word: "sour", chinese: "酸的", phonetic: "/ˈsaʊər/", audio: "sour" },
                { word: "salty", chinese: "咸的", phonetic: "/ˈsɔːlti/", audio: "salty" },
                { word: "delicious", chinese: "美味的", phonetic: "/dɪˈlɪʃəs/", audio: "delicious" },
                { word: "taste", chinese: "味道", phonetic: "/teɪst/", audio: "taste" },
                { word: " yummy", chinese: "好吃的", phonetic: "/ˈjʌmi/", audio: "yummy" },
                { word: "orange", chinese: "橙子", phonetic: "/ˈɔːrɪndʒ/", audio: "orange" },
                { word: "lemon", chinese: "柠檬", phonetic: "/ˈlemən/", audio: "lemon" },
                { word: "candy", chinese: "糖果", phonetic: "/ˈkændi/", audio: "candy" },
                { word: "juice", chinese: "果汁", phonetic: "/dʒuːs/", audio: "juice" }
            ],
            
            sentences: [
                { english: "How does it taste?", chinese: "它是什么味道？", audio: "how_does_it_taste" },
                { english: "It's sweet.", chinese: "它是甜的。", audio: "its_sweet" },
                { english: "The orange is sour.", chinese: "这个橙子是酸的。", audio: "the_orange_is_sour" },
                { english: "This candy is very sweet.", chinese: "这颗糖果很甜。", audio: "this_candy_is_very_sweet" },
                { english: "Yummy! I like it.", chinese: "好吃！我喜欢它。", audio: "yummy_i_like_it" },
                { english: "The soup is too salty.", chinese: "汤太咸了。", audio: "the_soup_is_too_salty" }
            ],
            
            dialogues: [
                {
                    title: "Dialogue 1: At the fruit shop",
                    participants: ["Mum", "Tom"],
                    lines: [
                        { speaker: "Mum", text: "Tom, what fruit do you want?", audio: "what_fruit_do_you_want" },
                        { speaker: "Tom", text: "I want some oranges, Mum.", audio: "i_want_some_oranges" },
                        { speaker: "Mum", text: "How does it taste?", audio: "how_does_it_taste" },
                        { speaker: "Tom", text: "It's sweet. I like sweet fruits.", audio: "its_sweet_i_like_sweet_fruits" }
                    ]
                },
                {
                    title: "Dialogue 2: At lunch time",
                    participants: ["Alice", "Ben"],
                    lines: [
                        { speaker: "Alice", text: "Ben, is your lunch nice?", audio: "is_your_lunch_nice" },
                        { speaker: "Ben", text: "Yes! The chicken is delicious.", audio: "the_chicken_is_delicious" },
                        { speaker: "Alice", text: "The vegetables are yummy too.", audio: "the_vegetables_are_yummy_too" },
                        { speaker: "Ben", text: "Let's eat together!", audio: "lets_eat_together" }
                    ]
                }
            ],
            
            exercises: [
                {
                    type: "choice",
                    question: "'甜的'用英语怎么说？",
                    options: ["Sweet", "Sour", "Salty"],
                    answer: "Sweet",
                    audio: "sweet"
                },
                {
                    type: "choice",
                    question: "柠檬是什么味道？",
                    options: ["Sweet", "Sour", "Salty"],
                    answer: "Sour",
                    audio: "sour"
                },
                {
                    type: "fill",
                    question: "The candy is very _____.",
                    answer: "sweet",
                    options: ["sweet", "sour", "salty"],
                    audio: "the_candy_is_very_sweet"
                },
                {
                    type: "listen_select",
                    question: "Listen and choose the taste you hear",
                    audio: "delicious",
                    options: ["Sweet", "Delicious", "Salty"],
                    answer: "Delicious",
                    audio: "delicious"
                }
            ]
        },

        "unit3": {
            id: "unit3",
            module: "module1",
            name: "Sounds",
            nameCN: "声音",
            topic: "学习描述各种声音",
            
            vocabulary: [
                { word: "hear", chinese: "听见", phonetic: "/hɪər/", audio: "hear" },
                { word: "listen", chinese: "听", phonetic: "/ˈlɪsən/", audio: "listen" },
                { word: "sound", chinese: "声音", phonetic: "/saʊnd/", audio: "sound" },
                { word: "quiet", chinese: "安静的", phonetic: "/ˈkwaɪət/", audio: "quiet" },
                { word: "loud", chinese: "响亮的", phonetic: "/laʊd/", audio: "loud" },
                { word: "bird", chinese: "鸟", phonetic: "/bɜːrd/", audio: "bird" },
                { word: "bell", chinese: "铃铛", phonetic: "/bel/", audio: "bell" },
                { word: "music", chinese: "音乐", phonetic: "/ˈmjuːzɪk/", audio: "music" },
                { word: "sing", chinese: "唱歌", phonetic: "/sɪŋ/", audio: "sing" },
                { word: "cry", chinese: "哭", phonetic: "/kraɪ/", audio: "cry" }
            ],
            
            sentences: [
                { english: "I can hear a bird.", chinese: "我能听见一只鸟。", audio: "i_can_hear_a_bird" },
                { english: "Listen! The bell is ringing.", chinese: "听！铃铛在响。", audio: "listen_the_bell_is_ringing" },
                { english: "The music is beautiful.", chinese: "音乐很美。", audio: "the_music_is_beautiful" },
                { english: "Please be quiet.", chinese: "请安静。", audio: "please_be_quiet" },
                { english: "The dog is barking loudly.", chinese: "狗在大声叫。", audio: "the_dog_is_barking_loudly" },
                { english: "Can you hear me?", chinese: "你能听到我吗？", audio: "can_you_hear_me" }
            ],
            
            dialogues: [
                {
                    title: "Dialogue 1: In the park",
                    participants: ["Mum", "Tom"],
                    lines: [
                        { speaker: "Mum", text: "Tom, what can you hear?", audio: "what_can_you_hear" },
                        { speaker: "Tom", text: "I can hear birds singing.", audio: "i_can_hear_birds_singing" },
                        { speaker: "Mum", text: "The birds are singing beautifully.", audio: "the_birds_are_singing_beautifully" },
                        { speaker: "Tom", text: "Yes! I love the sounds of nature.", audio: "i_love_the_sounds_of_nature" }
                    ]
                },
                {
                    title: "Dialogue 2: At the music room",
                    participants: ["Teacher", "Alice"],
                    lines: [
                        { speaker: "Teacher", text: "Listen to this music, children.", audio: "listen_to_this_music" },
                        { speaker: "Alice", text: "It's so beautiful, Miss Li.", audio: "its_so_beautiful" },
                        { speaker: "Teacher", text: "Now let's sing a song together!", audio: "now_lets_sing_a_song" },
                        { speaker: "Alice", text: "Great! I like singing.", audio: "great_i_like_singing" }
                    ]
                }
            ],
            
            exercises: [
                {
                    type: "choice",
                    question: "'听见'用英语怎么说？",
                    options: ["Hear", "See", "Speak"],
                    answer: "Hear",
                    audio: "hear"
                },
                {
                    type: "choice",
                    question: "大声的用英语怎么说？",
                    options: ["Quiet", "Loud", "Soft"],
                    answer: "Loud",
                    audio: "loud"
                },
                {
                    type: "fill",
                    question: "I can _____ birds singing in the tree.",
                    answer: "hear",
                    options: ["hear", "see", "touch"],
                    audio: "i_can_hear_birds"
                },
                {
                    type: "listen_select",
                    question: "Listen and choose the sound you hear",
                    audio: "bell",
                    options: ["Bird", "Bell", "Music"],
                    answer: "Bell",
                    audio: "bell"
                }
            ]
        },

        // ==================== Module 2: My favourite things ====================
        "unit4": {
            id: "unit4",
            module: "module2",
            name: "Animals",
            nameCN: "动物",
            topic: "学习常见的动物名称和描述",
            
            vocabulary: [
                { word: "cat", chinese: "猫", phonetic: "/kæt/", audio: "cat" },
                { word: "dog", chinese: "狗", phonetic: "/dɔːɡ/", audio: "dog" },
                { word: "bird", chinese: "鸟", phonetic: "/bɜːrd/", audio: "bird" },
                { word: "fish", chinese: "鱼", phonetic: "/fɪʃ/", audio: "fish" },
                { word: "rabbit", chinese: "兔子", phonetic: "/ˈræbɪt/", audio: "rabbit" },
                { word: "turtle", chinese: "乌龟", phonetic: "/ˈtɜːrtəl/", audio: "turtle" },
                { word: "hamster", chinese: "仓鼠", phonetic: "/ˈhæmstər/", audio: "hamster" },
                { word: "pet", chinese: "宠物", phonetic: "/pet/", audio: "pet" },
                { word: "small", chinese: "小的", phonetic: "/smɔːl/", audio: "small" },
                { word: "cute", chinese: "可爱的", phonetic: "/kjuːt/", audio: "cute" }
            ],
            
            sentences: [
                { english: "I have a pet.", chinese: "我有一只宠物。", audio: "i_have_a_pet" },
                { english: "It's a cute cat.", chinese: "它是一只可爱的猫。", audio: "its_a_cute_cat" },
                { english: "What pet do you have?", chinese: "你有什么宠物？", audio: "what_pet_do_you_have" },
                { english: "The rabbit is small and white.", chinese: "兔子又小又白。", audio: "the_rabbit_is_small_and_white" },
                { english: "I like animals.", chinese: "我喜欢动物。", audio: "i_like_animals" },
                { english: "The fish can swim.", chinese: "鱼会游泳。", audio: "the_fish_can_swim" }
            ],
            
            dialogues: [
                {
                    title: "Dialogue 1: Talking about pets",
                    participants: ["Alice", "Ben"],
                    lines: [
                        { speaker: "Alice", text: "Do you have a pet, Ben?", audio: "do_you_have_a_pet" },
                        { speaker: "Ben", text: "Yes, I have a little dog.", audio: "yes_i_have_a_little_dog" },
                        { speaker: "Alice", text: "What's its name?", audio: "whats_its_name" },
                        { speaker: "Ben", text: "It's called Bobby. It's so cute!", audio: "its_called_bobby_its_so_cute" }
                    ]
                },
                {
                    title: "Dialogue 2: At the pet shop",
                    participants: ["Tom", "Shopkeeper"],
                    lines: [
                        { speaker: "Tom", text: "Look! There are many animals here.", audio: "there_are_many_animals_here" },
                        { speaker: "Shopkeeper", text: "Which one do you like?", audio: "which_one_do_you_like" },
                        { speaker: "Tom", text: "I like the white rabbit. It's so cute.", audio: "i_like_the_white_rabbit" },
                        { speaker: "Shopkeeper", text: "Rabbits like carrots.", audio: "rabbits_like_carrots" }
                    ]
                }
            ],
            
            exercises: [
                {
                    type: "choice",
                    question: "'猫'用英语怎么说？",
                    options: ["Dog", "Cat", "Bird"],
                    answer: "Cat",
                    audio: "cat"
                },
                {
                    type: "choice",
                    question: "'兔子'用英语怎么说？",
                    options: ["Fish", "Rabbit", "Turtle"],
                    answer: "Rabbit",
                    audio: "rabbit"
                },
                {
                    type: "fill",
                    question: "The _____ is small and cute.",
                    answer: "rabbit",
                    options: ["rabbit", "dog", "bird"],
                    audio: "the_rabbit_is_small_and_cute"
                },
                {
                    type: "listen_select",
                    question: "Listen and choose the animal you hear",
                    audio: "fish",
                    options: ["Fish", "Cat", "Dog"],
                    answer: "Fish",
                    audio: "fish"
                }
            ]
        },

        "unit5": {
            id: "unit5",
            module: "module2",
            name: "Toys",
            nameCN: "玩具",
            topic: "学习各种玩具的名称",
            
            vocabulary: [
                { word: "ball", chinese: "球", phonetic: "/bɔːl/", audio: "ball" },
                { word: "doll", chinese: "娃娃", phonetic: "/dɑːl/", audio: "doll" },
                { word: "teddy bear", chinese: "泰迪熊", phonetic: "/ˈtedi ber/", audio: "teddy_bear" },
                { word: "car", chinese: "汽车", phonetic: "/kɑːr/", audio: "car" },
                { word: "toy", chinese: "玩具", phonetic: "/tɔɪ/", audio: "toy" },
                { word: "play", chinese: "玩", phonetic: "/pleɪ/", audio: "play" },
                { word: "new", chinese: "新的", phonetic: "/nuː/", audio: "new" },
                { word: "big", chinese: "大的", phonetic: "/bɪɡ/", audio: "big" },
                { word: "kite", chinese: "风筝", phonetic: "/kaɪt/", audio: "kite" },
                { word: "robot", chinese: "机器人", phonetic: "/ˈroʊbɑːt/", audio: "robot" }
            ],
            
            sentences: [
                { english: "I have a new toy.", chinese: "我有一个新玩具。", audio: "i_have_a_new_toy" },
                { english: "It's a big teddy bear.", chinese: "它是一只大泰迪熊。", audio: "its_a_big_teddy_bear" },
                { english: "Do you like playing with dolls?", chinese: "你喜欢玩娃娃吗？", audio: "do_you_like_playing_with_dolls" },
                { english: "Let's play with the ball.", chinese: "让我们玩球吧。", audio: "lets_play_with_the_ball" },
                { english: "The robot can dance.", chinese: "机器人会跳舞。", audio: "the_robot_can_dance" },
                { english: "I like my toys very much.", chinese: "我非常喜欢我的玩具。", audio: "i_like_my_toys_very_much" }
            ],
            
            dialogues: [
                {
                    title: "Dialogue 1: Birthday present",
                    participants: ["Alice", "Mum"],
                    lines: [
                        { speaker: "Alice", text: "Mum, it's my birthday tomorrow!", audio: "its_my_birthday_tomorrow" },
                        { speaker: "Mum", text: "Yes, I know. What present do you want?", audio: "what_present_do_you_want" },
                        { speaker: "Alice", text: "I want a big teddy bear, please.", audio: "i_want_a_big_teddy_bear" },
                        { speaker: "Mum", text: "OK! I will buy one for you.", audio: "i_will_buy_one_for_you" }
                    ]
                },
                {
                    title: "Dialogue 2: Playing together",
                    participants: ["Tom", "Ben"],
                    lines: [
                        { speaker: "Tom", text: "Look at my new toy car, Ben.", audio: "look_at_my_new_toy_car" },
                        { speaker: "Ben", text: "Wow! It's so cool! Can I play with it?", audio: "can_i_play_with_it" },
                        { speaker: "Tom", text: "Sure! Let's race our cars.", audio: "lets_race_our_cars" },
                        { speaker: "Ben", text: "That's great! I'm ready.", audio: "thats_great_im_ready" }
                    ]
                }
            ],
            
            exercises: [
                {
                    type: "choice",
                    question: "'球'用英语怎么说？",
                    options: ["Ball", "Doll", "Car"],
                    answer: "Ball",
                    audio: "ball"
                },
                {
                    type: "choice",
                    question: "'泰迪熊'用英语怎么说？",
                    options: ["Teddy bear", "Robot", "Kite"],
                    answer: "Teddy bear",
                    audio: "teddy_bear"
                },
                {
                    type: "fill",
                    question: "I have a new _____.",
                    answer: "toy",
                    options: ["toy", "book", "pen"],
                    audio: "i_have_a_new_toy"
                },
                {
                    type: "listen_select",
                    question: "Listen and choose the toy you hear",
                    audio: "doll",
                    options: ["Ball", "Doll", "Car"],
                    answer: "Doll",
                    audio: "doll"
                }
            ]
        },

        "unit6": {
            id: "unit6",
            module: "module2",
            name: "Food and drinks",
            nameCN: "食物和饮料",
            topic: "学习食物和饮料的名称",
            
            vocabulary: [
                { word: "apple", chinese: "苹果", phonetic: "/ˈæpəl/", audio: "apple" },
                { word: "banana", chinese: "香蕉", phonetic: "/bəˈnænə/", audio: "banana" },
                { word: "milk", chinese: "牛奶", phonetic: "/mɪlk/", audio: "milk" },
                { word: "water", chinese: "水", phonetic: "/ˈwɔːtər/", audio: "water" },
                { word: "bread", chinese: "面包", phonetic: "/bred/", audio: "bread" },
                { word: "egg", chinese: "鸡蛋", phonetic: "/eɡ/", audio: "egg" },
                { word: "rice", chinese: "米饭", phonetic: "/raɪs/", audio: "rice" },
                { word: "chicken", chinese: "鸡肉", phonetic: "/ˈtʃɪkɪn/", audio: "chicken" },
                { word: "vegetable", chinese: "蔬菜", phonetic: "/ˈvedʒtəbəl/", audio: "vegetable" },
                { word: "hungry", chinese: "饿的", phonetic: "/ˈhʌŋɡri/", audio: "hungry" }
            ],
            
            sentences: [
                { english: "I'm hungry. I want some food.", chinese: "我饿了。我想吃点东西。", audio: "im_hungry_i_want_some_food" },
                { english: "Do you like apples?", chinese: "你喜欢苹果吗？", audio: "do_you_like_apples" },
                { english: "I like drinking milk.", chinese: "我喜欢喝牛奶。", audio: "i_like_drinking_milk" },
                { english: "Let's have some bread and eggs.", chinese: "让我们吃些面包和鸡蛋吧。", audio: "lets_have_some_bread_and_eggs" },
                { english: "The vegetables are fresh.", chinese: "蔬菜很新鲜。", audio: "the_vegetables_are_fresh" },
                { english: "I have rice and chicken for lunch.", chinese: "我午餐吃米饭和鸡肉。", audio: "i_have_rice_and_chicken_for_lunch" }
            ],
            
            dialogues: [
                {
                    title: "Dialogue 1: At the supermarket",
                    participants: ["Mum", "Tom"],
                    lines: [
                        { speaker: "Mum", text: "Tom, what fruit do you want to buy?", audio: "what_fruit_do_you_want_to_buy" },
                        { speaker: "Tom", text: "I want some apples and bananas, please.", audio: "i_want_some_apples_and_bananas" },
                        { speaker: "Mum", text: "OK. What drinks do you want?", audio: "what_drinks_do_you_want" },
                        { speaker: "Tom", text: "Can we buy some milk?", audio: "can_we_buy_some_milk" }
                    ]
                },
                {
                    title: "Dialogue 2: Having dinner",
                    participants: ["Dad", "Alice"],
                    lines: [
                        { speaker: "Dad", text: "Alice, come and have dinner.", audio: "come_and_have_dinner" },
                        { speaker: "Alice", text: "I'm coming, Dad. I'm hungry.", audio: "im_coming_dad_im_hungry" },
                        { speaker: "Dad", text: "We have rice, chicken and vegetables.", audio: "we_have_rice_chicken_and_vegetables" },
                        { speaker: "Alice", text: "Yummy! I love this dinner.", audio: "yummy_i_love_this_dinner" }
                    ]
                }
            ],
            
            exercises: [
                {
                    type: "choice",
                    question: "'苹果'用英语怎么说？",
                    options: ["Apple", "Banana", "Egg"],
                    answer: "Apple",
                    audio: "apple"
                },
                {
                    type: "choice",
                    question: "'牛奶'用英语怎么说？",
                    options: ["Water", "Milk", "Juice"],
                    answer: "Milk",
                    audio: "milk"
                },
                {
                    type: "fill",
                    question: "I want some _____ and bread.",
                    answer: "egg",
                    options: ["egg", "water", "apple"],
                    audio: "i_want_some_egg_and_bread"
                },
                {
                    type: "listen_select",
                    question: "Listen and choose the food you hear",
                    audio: "banana",
                    options: ["Apple", "Banana", "Rice"],
                    answer: "Banana",
                    audio: "banana"
                }
            ]
        },

        // ==================== Module 3: My colourful life ====================
        "unit7": {
            id: "unit7",
            module: "module3",
            name: "Hobbies",
            nameCN: "爱好",
            topic: "学习描述自己的爱好",
            
            vocabulary: [
                { word: "hobby", chinese: "爱好", phonetic: "/ˈhɑːbi/", audio: "hobby" },
                { word: "draw", chinese: "画画", phonetic: "/drɔː/", audio: "draw" },
                { word: "read", chinese: "阅读", phonetic: "/riːd/", audio: "read" },
                { word: "swim", chinese: "游泳", phonetic: "/swɪm/", audio: "swim" },
                { word: "dance", chinese: "跳舞", phonetic: "/dæns/", audio: "dance" },
                { word: "sing", chinese: "唱歌", phonetic: "/sɪŋ/", audio: "sing" },
                { word: "play football", chinese: "踢足球", phonetic: "/pleɪ ˈfʊtbɔːl/", audio: "play_football" },
                { word: "like", chinese: "喜欢", phonetic: "/laɪk/", audio: "like" },
                { word: "love", chinese: "热爱", phonetic: "/lʌv/", audio: "love" },
                { word: "fun", chinese: "有趣的", phonetic: "/fʌn/", audio: "fun" }
            ],
            
            sentences: [
                { english: "What is your hobby?", chinese: "你的爱好是什么？", audio: "what_is_your_hobby" },
                { english: "I like drawing pictures.", chinese: "我喜欢画画。", audio: "i_like_drawing_pictures" },
                { english: "She loves singing songs.", chinese: "她喜欢唱歌。", audio: "she_loves_singing_songs" },
                { english: "He can swim very well.", chinese: "他游泳游得很好。", audio: "he_can_swim_very_well" },
                { english: "We all like playing football.", chinese: "我们都喜欢踢足球。", audio: "we_all_like_playing_football" },
                { english: "Dancing is so much fun!", chinese: "跳舞真有趣！", audio: "dancing_is_so_much_fun" }
            ],
            
            dialogues: [
                {
                    title: "Dialogue 1: Talking about hobbies",
                    participants: ["Alice", "Ben"],
                    lines: [
                        { speaker: "Alice", text: "Ben, what is your hobby?", audio: "ben_what_is_your_hobby" },
                        { speaker: "Ben", text: "I like playing football. What about you?", audio: "i_like_playing_football_what_about_you" },
                        { speaker: "Alice", text: "I love drawing and reading books.", audio: "i_love_drawing_and_reading_books" },
                        { speaker: "Ben", text: "Great! We all have nice hobbies.", audio: "great_we_all_have_nice_hobbies" }
                    ]
                },
                {
                    title: "Dialogue 2: After school",
                    participants: ["Tom", "Mum"],
                    lines: [
                        { speaker: "Tom", text: "Mum, I want to learn dancing.", audio: "mum_i_want_to_learn_dancing" },
                        { speaker: "Mum", text: "That's wonderful, Tom! Why do you want to dance?", audio: "why_do_you_want_to_dance" },
                        { speaker: "Tom", text: "Because dancing is so much fun!", audio: "because_dancing_is_so_much_fun" },
                        { speaker: "Mum", text: "OK, I will find a dance class for you.", audio: "i_will_find_a_dance_class_for_you" }
                    ]
                }
            ],
            
            exercises: [
                {
                    type: "choice",
                    question: "'爱好'用英语怎么说？",
                    options: ["Hobby", "Homework", "House"],
                    answer: "Hobby",
                    audio: "hobby"
                },
                {
                    type: "choice",
                    question: "'游泳'用英语怎么说？",
                    options: ["Swim", "Sing", "Draw"],
                    answer: "Swim",
                    audio: "swim"
                },
                {
                    type: "fill",
                    question: "My hobby is _____ pictures.",
                    answer: "drawing",
                    options: ["drawing", "running", "sleeping"],
                    audio: "my_hobby_is_drawing_pictures"
                },
                {
                    type: "listen_select",
                    question: "Listen and choose the hobby you hear",
                    audio: "dance",
                    options: ["Dance", "Swim", "Read"],
                    answer: "Dance",
                    audio: "dance"
                }
            ]
        },

        "unit8": {
            id: "unit8",
            module: "module3",
            name: "Happy birthday",
            nameCN: "生日快乐",
            topic: "学习生日相关的表达",
            
            vocabulary: [
                { word: "birthday", chinese: "生日", phonetic: "/ˈbɜːrθdeɪ/", audio: "birthday" },
                { word: "happy", chinese: "快乐的", phonetic: "/ˈhæpi/", audio: "happy" },
                { word: "present", chinese: "礼物", phonetic: "/ˈprezənt/", audio: "present" },
                { word: "cake", chinese: "蛋糕", phonetic: "/keɪk/", audio: "cake" },
                { word: "candle", chinese: "蜡烛", phonetic: "/ˈkændəl/", audio: "candle" },
                { word: "wish", chinese: "愿望", phonetic: "/wɪʃ/", audio: "wish" },
                { word: "party", chinese: "派对", phonetic: "/ˈpɑːrti/", audio: "party" },
                { word: "friend", chinese: "朋友", phonetic: "/frend/", audio: "friend" },
                { word: "card", chinese: "卡片", phonetic: "/kɑːrd/", audio: "card" },
                { word: "open", chinese: "打开", phonetic: "/ˈoʊpən/", audio: "open" }
            ],
            
            sentences: [
                { english: "Happy birthday to you!", chinese: "祝你生日快乐！", audio: "happy_birthday_to_you" },
                { english: "How old are you?", chinese: "你几岁了？", audio: "how_old_are_you" },
                { english: "I'm nine years old.", chinese: "我九岁了。", audio: "im_nine_years_old" },
                { english: "This is for you.", chinese: "这是给你的。", audio: "this_is_for_you" },
                { english: "Make a wish and blow out the candles.", chinese: "许个愿然后吹蜡烛。", audio: "make_a_wish_and_blow_out_the_candles" },
                { english: "Thank you for the lovely present.", chinese: "谢谢你可爱的礼物。", audio: "thank_you_for_the_lovely_present" }
            ],
            
            dialogues: [
                {
                    title: "Dialogue 1: Birthday party",
                    participants: ["Alice", "Ben"],
                    lines: [
                        { speaker: "Alice", text: "Happy birthday, Ben!", audio: "happy_birthday_ben" },
                        { speaker: "Ben", text: "Thank you, Alice! Come in, please.", audio: "thank_you_come_in" },
                        { speaker: "Alice", text: "Here is a present for you.", audio: "here_is_a_present_for_you" },
                        { speaker: "Ben", text: "How nice! Let me open it.", audio: "how_nice_let_me_open_it" }
                    ]
                },
                {
                    title: "Dialogue 2: At the birthday party",
                    participants: ["Mum", "Children"],
                    lines: [
                        { speaker: "Mum", text: "Children, let's sing Happy Birthday!", audio: "lets_sing_happy_birthday" },
                        { speaker: "Children", text: "Happy birthday to you!", audio: "happy_birthday_to_you" },
                        { speaker: "Mum", text: "Ben, make a wish and blow out the candles.", audio: "make_a_wish_and_blow_out_the_candles" },
                        { speaker: "Ben", text: "I wish to have many friends.", audio: "i_wish_to_have_many_friends" }
                    ]
                }
            ],
            
            exercises: [
                {
                    type: "choice",
                    question: "'生日'用英语怎么说？",
                    options: ["Birthday", "Party", "Holiday"],
                    answer: "Birthday",
                    audio: "birthday"
                },
                {
                    type: "choice",
                    question: "'蛋糕'用英语怎么说？",
                    options: ["Cake", "Bread", "Candy"],
                    answer: "Cake",
                    audio: "cake"
                },
                {
                    type: "fill",
                    question: "Happy _____ to you!",
                    answer: "birthday",
                    options: ["birthday", "holiday", "party"],
                    audio: "happy_birthday_to_you"
                },
                {
                    type: "listen_select",
                    question: "Listen and choose what you hear",
                    audio: "present",
                    options: ["Present", "Party", "Card"],
                    answer: "Present",
                    audio: "present"
                }
            ]
        },

        "unit9": {
            id: "unit9",
            module: "module3",
            name: "A day on the farm",
            nameCN: "农场的一天",
            topic: "学习农场相关的词汇和活动",
            
            vocabulary: [
                { word: "farm", chinese: "农场", phonetic: "/fɑːrm/", audio: "farm" },
                { word: "cow", chinese: "奶牛", phonetic: "/kaʊ/", audio: "cow" },
                { word: "pig", chinese: "猪", phonetic: "/pɪɡ/", audio: "pig" },
                { word: "horse", chinese: "马", phonetic: "/hɔːrs/", audio: "horse" },
                { word: "sheep", chinese: "绵羊", phonetic: "/ʃiːp/", audio: "sheep" },
                { word: "chicken", chinese: "鸡", phonetic: "/ˈtʃɪkɪn/", audio: "chicken" },
                { word: "duck", chinese: "鸭子", phonetic: "/dʌk/", audio: "duck" },
                { word: "farm", chinese: "农民", phonetic: "/fɑːrmər/", audio: "farmer" },
                { word: "milk", chinese: "挤奶", phonetic: "/mɪlk/", audio: "milk" },
                { word: "feed", chinese: "喂养", phonetic: "/fiːd/", audio: "feed" }
            ],
            
            sentences: [
                { english: "I live on a farm.", chinese: "我住在农场。", audio: "i_live_on_a_farm" },
                { english: "The cows give us milk.", chinese: "奶牛给我们提供牛奶。", audio: "the_cows_give_us_milk" },
                { english: "The farmer feeds the animals every day.", chinese: "农民每天喂养动物。", audio: "the_farmer_feeds_the_animals" },
                { english: "Look at the cute little pigs!", chinese: "看那些可爱的小猪！", audio: "look_at_the_cute_little_pigs" },
                { english: "The horses run very fast.", chinese: "马跑得很快。", audio: "the_horses_run_very_fast" },
                { english: "We have fresh eggs every morning.", chinese: "我们每天早晨都有新鲜的鸡蛋。", audio: "we_have_fresh_eggs_every_morning" }
            ],
            
            dialogues: [
                {
                    title: "Dialogue 1: Visiting the farm",
                    participants: ["Tom", "Farmer"],
                    lines: [
                        { speaker: "Tom", text: "Hello! Welcome to my farm.", audio: "welcome_to_my_farm" },
                        { speaker: "Farmer", text: "Thank you! What animals do you have?", audio: "what_animals_do_you_have" },
                        { speaker: "Tom", text: "We have cows, pigs, horses and sheep.", audio: "we_have_cows_pigs_horses_and_sheep" },
                        { speaker: "Farmer", text: "Can I feed the chickens?", audio: "can_i_feed_the_chickens" }
                    ]
                },
                {
                    title: "Dialogue 2: Morning on the farm",
                    participants: ["Mum", "Alice"],
                    lines: [
                        { speaker: "Mum", text: "Alice, let's help on the farm today.", audio: "lets_help_on_the_farm_today" },
                        { speaker: "Alice", text: "Great! What shall we do?", audio: "what_shall_we_do" },
                        { speaker: "Mum", text: "Let's feed the chickens and collect eggs.", audio: "lets_feed_the_chickens_and_collect_eggs" },
                        { speaker: "Alice", text: "I love farm life!", audio: "i_love_farm_life" }
                    ]
                }
            ],
            
            exercises: [
                {
                    type: "choice",
                    question: "'农场'用英语怎么说？",
                    options: ["Farm", "School", "Home"],
                    answer: "Farm",
                    audio: "farm"
                },
                {
                    type: "choice",
                    question: "'猪'用英语怎么说？",
                    options: ["Pig", "Cow", "Horse"],
                    answer: "Pig",
                    audio: "pig"
                },
                {
                    type: "fill",
                    question: "The _____ give us milk.",
                    answer: "cows",
                    options: ["cows", "pigs", "chickens"],
                    audio: "the_cows_give_us_milk"
                },
                {
                    type: "listen_select",
                    question: "Listen and choose the animal you hear",
                    audio: "horse",
                    options: ["Horse", "Sheep", "Duck"],
                    answer: "Horse",
                    audio: "horse"
                }
            ]
        },

        // ==================== Module 4: Things we enjoy ====================
        "unit10": {
            id: "unit10",
            module: "module4",
            name: "Funny cartoons",
            nameCN: "有趣的卡通",
            topic: "学习谈论喜欢的卡通人物",
            
            vocabulary: [
                { word: "cartoon", chinese: "卡通", phonetic: "/kɑːrˈtuːn/", audio: "cartoon" },
                { word: "character", chinese: "人物", phonetic: "/ˈkærəktər/", audio: "character" },
                { word: "funny", chinese: "有趣的", phonetic: "/ˈfʌni/", audio: "funny" },
                { word: "watch", chinese: "观看", phonetic: "/wɑːtʃ/", audio: "watch" },
                { word: "TV", chinese: "电视", phonetic: "/ˌtiːˈviː/", audio: "tv" },
                { word: "Mickey", chinese: "米奇", phonetic: "/ˈmɪki/", audio: "mickey" },
                { word: "Donald", chinese: "唐老鸭", phonetic: "/ˈdɑːnəld/", audio: "donald" },
                { word: "Princess", chinese: "公主", phonetic: "/ˈprɪnses/", audio: "princess" },
                { word: "hero", chinese: "英雄", phonetic: "/ˈhɪəroʊ/", audio: "hero" },
                { word: "story", chinese: "故事", phonetic: "/ˈstɔːri/", audio: "story" }
            ],
            
            sentences: [
                { english: "I like watching cartoons.", chinese: "我喜欢看卡通片。", audio: "i_like_watching_cartoons" },
                { english: "Mickey Mouse is very funny.", chinese: "米老鼠很有趣。", audio: "mickey_mouse_is_very_funny" },
                { english: "Who is your favourite character?", chinese: "你最喜欢的人物是谁？", audio: "who_is_your_favourite_character" },
                { english: "I love this cartoon story.", chinese: "我喜欢这个卡通故事。", audio: "i_love_this_cartoon_story" },
                { english: "The cartoon is very interesting.", chinese: "这个卡通很有趣。", audio: "the_cartoon_is_very_interesting" },
                { english: "Let's watch cartoons together.", chinese: "让我们一起看卡通片吧。", audio: "lets_watch_cartoons_together" }
            ],
            
            dialogues: [
                {
                    title: "Dialogue 1: Talking about cartoons",
                    participants: ["Alice", "Ben"],
                    lines: [
                        { speaker: "Alice", text: "Ben, do you like cartoons?", audio: "ben_do_you_like_cartoons" },
                        { speaker: "Ben", text: "Yes, I love cartoons! How about you?", audio: "yes_i_love_cartoons_how_about_you" },
                        { speaker: "Alice", text: "I like them too. My favourite is Mickey Mouse.", audio: "my_favourite_is_mickey_mouse" },
                        { speaker: "Ben", text: "Mickey is so cute and funny!", audio: "mickey_is_so_cute_and_funny" }
                    ]
                },
                {
                    title: "Dialogue 2: At home",
                    participants: ["Tom", "Dad"],
                    lines: [
                        { speaker: "Tom", text: "Dad, can I watch cartoons now?", audio: "can_i_watch_cartoons_now" },
                        { speaker: "Dad", text: "Sure, but first finish your homework.", audio: "sure_but_first_finish_your_homework" },
                        { speaker: "Tom", text: "OK! Then I can watch my favourite cartoon.", audio: "then_i_can_watch_my_favourite_cartoon" },
                        { speaker: "Dad", text: "What cartoon do you like best?", audio: "what_cartoon_do_you_like_best" }
                    ]
                }
            ],
            
            exercises: [
                {
                    type: "choice",
                    question: "'卡通'用英语怎么说？",
                    options: ["Cartoon", "Movie", "Book"],
                    answer: "Cartoon",
                    audio: "cartoon"
                },
                {
                    type: "choice",
                    question: "'有趣的'用英语怎么说？",
                    options: ["Funny", "Boring", "Scary"],
                    answer: "Funny",
                    audio: "funny"
                },
                {
                    type: "fill",
                    question: "Mickey Mouse is a funny _____.",
                    answer: "character",
                    options: ["character", "teacher", "doctor"],
                    audio: "mickey_mouse_is_a_funny_character"
                },
                {
                    type: "listen_select",
                    question: "Listen and choose what you hear",
                    audio: "watch",
                    options: ["Watch", "Read", "Play"],
                    answer: "Watch",
                    audio: "watch"
                }
            ]
        },

        "unit11": {
            id: "unit11",
            module: "module4",
            name: "Mother's Day",
            nameCN: "母亲节",
            topic: "学习母亲节相关的表达",
            
            vocabulary: [
                { word: "mother", chinese: "妈妈", phonetic: "/ˈmʌðər/", audio: "mother" },
                { word: "father", chinese: "爸爸", phonetic: "/ˈfɑːðər/", audio: "father" },
                { word: "parent", chinese: "父母", phonetic: "/ˈperənt/", audio: "parent" },
                { word: "love", chinese: "爱", phonetic: "/lʌv/", audio: "love" },
                { word: "gift", chinese: "礼物", phonetic: "/ɡɪft/", audio: "gift" },
                { word: "flower", chinese: "花", phonetic: "/ˈflaʊər/", audio: "flower" },
                { word: "cook", chinese: "做饭", phonetic: "/kʊk/", audio: "cook" },
                { word: "help", chinese: "帮助", phonetic: "/help/", audio: "help" },
                { word: "kind", chinese: "善良的", phonetic: "/kaɪnd/", audio: "kind" },
                { word: "beautiful", chinese: "美丽的", phonetic: "/ˈbjuːtɪfəl/", audio: "beautiful" }
            ],
            
            sentences: [
                { english: "I love my mother.", chinese: "我爱我的妈妈。", audio: "i_love_my_mother" },
                { english: "Happy Mother's Day!", chinese: "母亲节快乐！", audio: "happy_mothers_day" },
                { english: "This flower is for you, Mum.", chinese: "这朵花是给你的，妈妈。", audio: "this_flower_is_for_you_mum" },
                { english: "Mum is very kind.", chinese: "妈妈很善良。", audio: "mum_is_very_kind" },
                { english: "I want to help Mum cook.", chinese: "我想帮妈妈做饭。", audio: "i_want_to_help_mum_cook" },
                { english: "Thank you, Mum. I love you.", chinese: "谢谢你，妈妈。我爱你。", audio: "thank_you_mum_i_love_you" }
            ],
            
            dialogues: [
                {
                    title: "Dialogue 1: Mother's Day morning",
                    participants: ["Tom", "Mum"],
                    lines: [
                        { speaker: "Tom", text: "Happy Mother's Day, Mum!", audio: "happy_mothers_day_mum" },
                        { speaker: "Mum", text: "Thank you, Tom! You're so sweet.", audio: "thank_you_tom_youre_so_sweet" },
                        { speaker: "Tom", text: "I made a card for you.", audio: "i_made_a_card_for_you" },
                        { speaker: "Mum", text: "How beautiful! I love it.", audio: "how_beautiful_i_love_it" }
                    ]
                },
                {
                    title: "Dialogue 2: Helping Mum",
                    participants: ["Alice", "Mum"],
                    lines: [
                        { speaker: "Alice", text: "Mum, what can I do for you today?", audio: "mum_what_can_i_do_for_you_today" },
                        { speaker: "Mum", text: "You can help me clean the room.", audio: "you_can_help_me_clean_the_room" },
                        { speaker: "Alice", text: "OK! I want to help you.", audio: "ok_i_want_to_help_you" },
                        { speaker: "Mum", text: "What a good girl you are!", audio: "what_a_good_girl_you_are" }
                    ]
                }
            ],
            
            exercises: [
                {
                    type: "choice",
                    question: "'妈妈'用英语怎么说？",
                    options: ["Mother", "Father", "Sister"],
                    answer: "Mother",
                    audio: "mother"
                },
                {
                    type: "choice",
                    question: "'花'用英语怎么说？",
                    options: ["Flower", "Tree", "Grass"],
                    answer: "Flower",
                    audio: "flower"
                },
                {
                    type: "fill",
                    question: "Happy _____ Day!",
                    answer: "Mother's",
                    options: ["Mother's", "Father's", "Children's"],
                    audio: "happy_mothers_day"
                },
                {
                    type: "listen_select",
                    question: "Listen and choose what you hear",
                    audio: "gift",
                    options: ["Gift", "Flower", "Card"],
                    answer: "Gift",
                    audio: "gift"
                }
            ]
        },

        "unit12": {
            id: "unit12",
            module: "module4",
            name: "Three little pigs",
            nameCN: "三只小猪",
            topic: "学习和讲述三只小猪的故事",
            
            vocabulary: [
                { word: "pig", chinese: "猪", phonetic: "/pɪɡ/", audio: "pig" },
                { word: "little", chinese: "小的", phonetic: "/ˈlɪtəl/", audio: "little" },
                { word: "house", chinese: "房子", phonetic: "/haʊs/", audio: "house" },
                { word: "straw", chinese: "稻草", phonetic: "/strɔː/", audio: "straw" },
                { word: "stick", chinese: "树枝", phonetic: "/stɪk/", audio: "stick" },
                { word: "brick", chinese: "砖头", phonetic: "/brɪk/", audio: "brick" },
                { word: "wolf", chinese: "狼", phonetic: "/wʊlf/", audio: "wolf" },
                { word: "big", chinese: "大的", phonetic: "/bɪɡ/", audio: "big" },
                { word: "strong", chinese: "坚固的", phonetic: "/strɔːŋ/", audio: "strong" },
                { word: "work", chinese: "工作", phonetic: "/wɜːrk/", audio: "work" }
            ],
            
            sentences: [
                { english: "Once upon a time, there were three little pigs.", chinese: "从前有三只小猪。", audio: "once_upon_a_time_three_little_pigs" },
                { english: "The first pig built a house of straw.", chinese: "第一只小猪建了一座稻草房子。", audio: "the_first_pig_built_a_house_of_straw" },
                { english: "The second pig built a house of sticks.", chinese: "第二只小猪建了一座树枝房子。", audio: "the_second_pig_built_a_house_of_sticks" },
                { english: "The third pig built a house of bricks.", chinese: "第三只小猪建了一座砖头房子。", audio: "the_third_pig_built_a_house_of_bricks" },
                { english: "The wolf blew down the houses.", chinese: "狼吹倒了房子。", audio: "the_wolf_blew_down_the_houses" },
                { english: "The third pig was very clever.", chinese: "第三只小猪很聪明。", audio: "the_third_pig_was_very_clever" }
            ],
            
            dialogues: [
                {
                    title: "Story: The three little pigs",
                    participants: ["Narrator"],
                    lines: [
                        { speaker: "Narrator", text: "Once upon a time, there were three little pigs.", audio: "once_upon_a_time" },
                        { speaker: "Narrator", text: "They wanted to build their own houses.", audio: "they_wanted_to_build_their_own_houses" },
                        { speaker: "Narrator", text: "The first pig built his house with straw.", audio: "the_first_pig_built_his_house_with_straw" },
                        { speaker: "Narrator", text: "The second pig built his house with sticks.", audio: "the_second_pig_built_his_house_with_sticks" },
                        { speaker: "Narrator", text: "The third pig worked hard and built a strong house of bricks.", audio: "the_third_pig_built_a_strong_house" },
                        { speaker: "Narrator", text: "A big bad wolf came. He blew down the first house.", audio: "the_wolf_blew_down_the_first_house" },
                        { speaker: "Narrator", text: "He blew down the second house too.", audio: "he_blew_down_the_second_house_too" },
                        { speaker: "Narrator", text: "But he couldn't blow down the third house.", audio: "but_he_couldnt_blow_down_the_third_house" },
                        { speaker: "Narrator", text: "The three little pigs were safe. They lived happily ever after.", audio: "they_lived_happily_ever_after" }
                    ]
                }
            ],
            
            exercises: [
                {
                    type: "choice",
                    question: "第一只小猪用什么建房子？",
                    options: ["Straw", "Bricks", "Wood"],
                    answer: "Straw",
                    audio: "straw"
                },
                {
                    type: "choice",
                    question: "谁的房子最坚固？",
                    options: ["Third pig", "First pig", "Second pig"],
                    answer: "Third pig",
                    audio: "third_pig"
                },
                {
                    type: "fill",
                    question: "The wolf _____ down the house of straw.",
                    answer: "blew",
                    options: ["blew", "built", "ran"],
                    audio: "the_wolf_blew_down_the_house"
                },
                {
                    type: "listen_select",
                    question: "Listen and choose what you hear",
                    audio: "brick",
                    options: ["Straw", "Brick", "Stick"],
                    answer: "Brick",
                    audio: "brick"
                },
                {
                    type: "choice",
                    question: "'坚固的'用英语怎么说？",
                    options: ["Strong", "Big", "Small"],
                    answer: "Strong",
                    audio: "strong"
                }
            ]
        }
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TEXTBOOK_DATA;
}
