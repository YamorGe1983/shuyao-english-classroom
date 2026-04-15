#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
舒窈小课堂 - 四年级下册和五年级下册数据填充脚本
"""

# 四年级下册完整数据
grade4_2_data = """'grade4_2': {
    id: 'grade4_2',
    name: '四年级下册',
    metadata: {
        title: "Oxford English Primary 4 (Shanghai Edition)",
        subtitle: "牛津上海版小学英语四年级下册",
        totalUnits: 12,
        totalModules: 4
    },
    
    modules: [
        {
            id: "module1",
            name: "Using my five senses",
            nameCN: "运用我的五种感官",
            units: [
                { id: "unit1", name: "Touch and feel", nameCN: "触摸和感受" },
                { id: "unit2", name: "Smell and taste", nameCN: "闻和尝" },
                { id: "unit3", name: "Look and see", nameCN: "看和观察" }
            ]
        },
        {
            id: "module2",
            name: "My favourite things",
            nameCN: "我最喜欢的东西",
            units: [
                { id: "unit4", name: "Subjects", nameCN: "学科" },
                { id: "unit5", name: "Sport", nameCN: "运动" },
                { id: "unit6", name: "Music", nameCN: "音乐" }
            ]
        },
        {
            id: "module3",
            name: "My colourful life",
            nameCN: "我丰富多彩的生活",
            units: [
                { id: "unit7", name: "My day", nameCN: "我的一天" },
                { id: "unit8", name: "My week", nameCN: "我的一周" },
                { id: "unit9", name: "Jobs", nameCN: "职业" }
            ]
        },
        {
            id: "module4",
            name: "Things we enjoy",
            nameCN: "我们喜欢的事物",
            units: [
                { id: "unit10", name: "My family", nameCN: "我的家人" },
                { id: "unit11", name: "Feelings", nameCN: "感受" },
                { id: "unit12", name: "Abilities", nameCN: "能力" }
            ]
        }
    ],

    units: {
        "unit1": {
            id: "unit1",
            module: "module1",
            name: "Touch and feel",
            nameCN: "触摸和感受",
            topic: "学习通过触觉描述物体的特征",
            vocabulary: [
                { word: "touch", chinese: "触摸", phonetic: "/tʌtʃ/", audio: "touch", letterSounds: [{letters:"t",sound:"/t/"},{letters:"ou",sound:"/ʌ/"},{letters:"ch",sound:"/tʃ/"}] },
                { word: "feel", chinese: "感觉", phonetic: "/fiːl/", audio: "feel", letterSounds: [{letters:"f",sound:"/f/"},{letters:"ee",sound:"/iː/"},{letters:"l",sound:"/l/"}] },
                { word: "soft", chinese: "柔软的", phonetic: "/sɒft/", audio: "soft", letterSounds: [{letters:"s",sound:"/s/"},{letters:"o",sound:"/ɒ/"},{letters:"ft",sound:"/ft/"}] },
                { word: "hard", chinese: "硬的", phonetic: "/hɑːd/", audio: "hard", letterSounds: [{letters:"h",sound:"/h/"},{letters:"ar",sound:"/ɑː/"},{letters:"d",sound:"/d/"}] },
                { word: "thick", chinese: "厚的", phonetic: "/θɪk/", audio: "thick", letterSounds: [{letters:"th",sound:"/θ/"},{letters:"i",sound:"/ɪ/"},{letters:"ck",sound:"/k/"}] },
                { word: "thin", chinese: "薄的", phonetic: "/θɪn/", audio: "thin", letterSounds: [{letters:"th",sound:"/θ/"},{letters:"i",sound:"/ɪ/"},{letters:"n",sound:"/n/"}] },
                { word: "blind", chinese: "失明的", phonetic: "/blaɪnd/", audio: "blind", letterSounds: [{letters:"bl",sound:"/bl/"},{letters:"i",sound:"/aɪ/"},{letters:"nd",sound:"/nd/"}] },
                { word: "noise", chinese: "噪音", phonetic: "/nɔɪz/", audio: "noise", letterSounds: [{letters:"n",sound:"/n/"},{letters:"oi",sound:"/ɔɪ/"},{letters:"se",sound:"/z/"}] },
                { word: "young", chinese: "年轻的", phonetic: "/jʌŋ/", audio: "young", letterSounds: [{letters:"y",sound:"/j/"},{letters:"ou",sound:"/ʌ/"},{letters:"ng",sound:"/ŋ/"}] }
            ],
            sentences: [
                { english: "Touch this. How does it feel?", chinese: "摸摸这个。它摸起来怎么样？", audio: "touch_this_how_does_it_feel" },
                { english: "It feels soft.", chinese: "它摸起来很软。", audio: "it_feels_soft" },
                { english: "This book is thick.", chinese: "这本书很厚。", audio: "this_book_is_thick" },
                { english: "The paper is thin.", chinese: "这张纸很薄。", audio: "the_paper_is_thin" },
                { english: "I can feel it.", chinese: "我能感觉到它。", audio: "i_can_feel_it" },
                { english: "Don't touch the hot pot.", chinese: "不要碰热锅。", audio: "dont_touch_the_hot_pot" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: Feeling objects",
                    participants: ["Mum", "Tom"],
                    lines: [
                        { speaker: "Mum", text: "Tom, close your eyes and touch this.", audio: "tom_close_your_eyes_and_touch_this" },
                        { speaker: "Tom", text: "OK, Mum. It feels soft. Is it a toy?", audio: "ok_mum_it_feels_soft_is_it_a_toy" },
                        { speaker: "Mum", text: "No, it's not. It's a pillow.", audio: "no_its_not_its_a_pillow" },
                        { speaker: "Tom", text: "A pillow! I like soft pillows.", audio: "a_pillow_i_like_soft_pillows" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'柔软的'用英语怎么说？", options: ["Soft", "Hard", "Thick"], answer: "Soft", audio: "soft" },
                { type: "choice", question: "'厚的'用英语怎么说？", options: ["Thin", "Thick", "Young"], answer: "Thick", audio: "thick" },
                { type: "choice", question: "什么可以用来触摸东西？", options: ["Eyes", "Nose", "Hands"], answer: "Hands", audio: "hands" }
            ]
        },

        "unit2": {
            id: "unit2",
            module: "module1",
            name: "Smell and taste",
            nameCN: "闻和尝",
            topic: "学习描述食物的气味和味道",
            vocabulary: [
                { word: "smell", chinese: "闻起来", phonetic: "/smel/", audio: "smell", letterSounds: [{letters:"sm",sound:"/sm/"},{letters:"e",sound:"/e/"},{letters:"ll",sound:"/l/"}] },
                { word: "strawberry", chinese: "草莓", phonetic: "/ˈstrɔːbəri/", audio: "strawberry", letterSounds: [{letters:"str",sound:"/str/"},{letters:"aw",sound:"/ɔː/"},{letters:"ber",sound:"/bər/"},{letters:"ry",sound:"/i/"}] },
                { word: "watermelon", chinese: "西瓜", phonetic: "/ˈwɔːtərmelən/", audio: "watermelon", letterSounds: [{letters:"w",sound:"/w/"},{letters:"a",sound:"/ɔː/"},{letters:"ter",sound:"/tər/"},{letters:"me",sound:"/mə/"},{letters:"lon",sound:"/lən/"}] },
                { word: "grape", chinese: "葡萄", phonetic: "/ɡreɪp/", audio: "grape", letterSounds: [{letters:"gr",sound:"/ɡr/"},{letters:"a",sound:"/eɪ/"},{letters:"pe",sound:"/p/"}] },
                { word: "fox", chinese: "狐狸", phonetic: "/fɒks/", audio: "fox", letterSounds: [{letters:"f",sound:"/f/"},{letters:"o",sound:"/ɒ/"},{letters:"x",sound:"/ks/"}] },
                { word: "round", chinese: "圆的", phonetic: "/raʊnd/", audio: "round", letterSounds: [{letters:"r",sound:"/r/"},{letters:"ou",sound:"/aʊ/"},{letters:"nd",sound:"/nd/"}] },
                { word: "purple", chinese: "紫色的", phonetic: "/ˈpɜːrpəl/", audio: "purple", letterSounds: [{letters:"pur",sound:"/pɜːr/"},{letters:"ple",sound:"/pəl/"}] },
                { word: "wait", chinese: "等待", phonetic: "/weɪt/", audio: "wait", letterSounds: [{letters:"w",sound:"/w/"},{letters:"ai",sound:"/eɪ/"},{letters:"t",sound:"/t/"}] },
                { word: "minute", chinese: "分钟", phonetic: "/ˈmɪnɪt/", audio: "minute", letterSounds: [{letters:"mi",sound:"/mɪ/"},{letters:"n",sound:"/n/"},{letters:"ute",sound:"/ɪt/"}] },
                { word: "get", chinese: "得到", phonetic: "/ɡet/", audio: "get", letterSounds: [{letters:"g",sound:"/ɡ/"},{letters:"e",sound:"/e/"},{letters:"t",sound:"/t/"}] },
                { word: "those", chinese: "那些", phonetic: "/ðoʊz/", audio: "those", letterSounds: [{letters:"th",sound:"/ð/"},{letters:"o",sound:"/oʊ/"},{letters:"se",sound:"/z/"}] }
            ],
            sentences: [
                { english: "What does it smell like?", chinese: "它闻起来像什么？", audio: "what_does_it_smell_like" },
                { english: "It smells like strawberry.", chinese: "它闻起来像草莓。", audio: "it_smells_like_strawberry" },
                { english: "These grapes are sweet.", chinese: "这些葡萄很甜。", audio: "these_grapes_are_sweet" },
                { english: "Wait a minute, please.", chinese: "请稍等一下。", audio: "wait_a_minute_please" },
                { english: "Do you like watermelons?", chinese: "你喜欢西瓜吗？", audio: "do_you_like_watermelons" },
                { english: "Those are nice fruits.", chinese: "那些是不错的水果。", audio: "those_are_nice_fruits" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: At the fruit shop",
                    participants: ["Shopkeeper", "Lily"],
                    lines: [
                        { speaker: "Shopkeeper", text: "What can I do for you?", audio: "what_can_i_do_for_you" },
                        { speaker: "Lily", text: "I'd like some strawberries, please.", audio: "id_like_some_strawberries_please" },
                        { speaker: "Shopkeeper", text: "Here you are. These are fresh.", audio: "here_you_are_these_are_fresh" },
                        { speaker: "Lily", text: "Thank you. Do you have grapes?", audio: "thank_you_do_you_have_grapes" },
                        { speaker: "Shopkeeper", text: "Yes, the purple ones are sweet.", audio: "yes_the_purple_ones_are_sweet" },
                        { speaker: "Lily", text: "I'll take them. Thank you.", audio: "ill_take_them_thank_you" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'草莓'用英语怎么说？", options: ["Strawberry", "Watermelon", "Grape"], answer: "Strawberry", audio: "strawberry" },
                { type: "choice", question: "'紫色的'用英语怎么说？", options: ["Round", "Purple", "Sweet"], answer: "Purple", audio: "purple" },
                { type: "choice", question: "'分钟'用英语怎么说？", options: ["Wait", "Minute", "Those"], answer: "Minute", audio: "minute" }
            ]
        },

        "unit3": {
            id: "unit3",
            module: "module1",
            name: "Look and see",
            nameCN: "看和观察",
            topic: "学习描述一天中不同时间的景象",
            vocabulary: [
                { word: "rise", chinese: "升起", phonetic: "/raɪz/", audio: "rise", letterSounds: [{letters:"r",sound:"/r/"},{letters:"i",sound:"/aɪ/"},{letters:"se",sound:"/z/"}] },
                { word: "shadow", chinese: "影子", phonetic: "/ˈʃædoʊ/", audio: "shadow", letterSounds: [{letters:"sh",sound:"/ʃ/"},{letters:"a",sound:"/æ/"},{letters:"do",sound:"/doʊ/"},{letters:"w",sound:"/w/"}] },
                { word: "noon", chinese: "中午", phonetic: "/nuːn/", audio: "noon", letterSounds: [{letters:"n",sound:"/n/"},{letters:"oo",sound:"/uː/"},{letters:"n",sound:"/n/"}] },
                { word: "high", chinese: "高的", phonetic: "/haɪ/", audio: "high", letterSounds: [{letters:"h",sound:"/h/"},{letters:"igh",sound:"/aɪ/"}] },
                { word: "sky", chinese: "天空", phonetic: "/skaɪ/", audio: "sky", letterSounds: [{letters:"sk",sound:"/sk/"},{letters:"y",sound:"/aɪ/"}] },
                { word: "evening", chinese: "傍晚", phonetic: "/ˈiːvnɪŋ/", audio: "evening", letterSounds: [{letters:"ev",sound:"/iːv/"},{letters:"en",sound:"/ən/"},{letters:"ing",sound:"/ɪŋ/"}] },
                { word: "again", chinese: "再次", phonetic: "/əˈɡen/", audio: "again", letterSounds: [{letters:"a",sound:"/ə/"},{letters:"ga",sound:"/ɡeɪ/"},{letters:"in",sound:"/n/"}] },
                { word: "night", chinese: "夜晚", phonetic: "/naɪt/", audio: "night", letterSounds: [{letters:"n",sound:"/n/"},{letters:"igh",sound:"/aɪ/"},{letters:"t",sound:"/t/"}] },
                { word: "moon", chinese: "月亮", phonetic: "/muːn/", audio: "moon", letterSounds: [{letters:"m",sound:"/m/"},{letters:"oo",sound:"/uː/"},{letters:"n",sound:"/n/"}] },
                { word: "him", chinese: "他（宾格）", phonetic: "/hɪm/", audio: "him", letterSounds: [{letters:"h",sound:"/h/"},{letters:"i",sound:"/ɪ/"},{letters:"m",sound:"/m/"}] },
                { word: "stop", chinese: "停止", phonetic: "/stɒp/", audio: "stop", letterSounds: [{letters:"st",sound:"/st/"},{letters:"o",sound:"/ɒ/"},{letters:"p",sound:"/p/"}] }
            ],
            sentences: [
                { english: "The sun rises in the morning.", chinese: "太阳在早晨升起。", audio: "the_sun_rises_in_the_morning" },
                { english: "The shadow is long at noon.", chinese: "中午时影子很长。", audio: "the_shadow_is_long_at_noon" },
                { english: "The bird flies high in the sky.", chinese: "鸟儿在天空中高高飞翔。", audio: "the_bird_flies_high_in_the_sky" },
                { english: "Good evening!", chinese: "晚上好！", audio: "good_evening" },
                { english: "Look at the moon.", chinese: "看月亮。", audio: "look_at_the_moon" },
                { english: "Let's go home again.", chinese: "我们回家吧。", audio: "lets_go_home_again" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: Watching the sun",
                    participants: ["Dad", "Tom"],
                    lines: [
                        { speaker: "Dad", text: "Look, Tom! The sun is rising.", audio: "look_tom_the_sun_is_rising" },
                        { speaker: "Tom", text: "It's so beautiful, Dad.", audio: "its_so_beautiful_dad" },
                        { speaker: "Dad", text: "At noon, the sun is high in the sky.", audio: "at_noon_the_sun_is_high_in_the_sky" },
                        { speaker: "Tom", text: "And the shadow is short.", audio: "and_the_shadow_is_short" },
                        { speaker: "Dad", text: "Yes, you're right.", audio: "yes_youre_right" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'影子'用英语怎么说？", options: ["Shadow", "Rise", "Sky"], answer: "Shadow", audio: "shadow" },
                { type: "choice", question: "'夜晚'用英语怎么说？", options: ["Morning", "Evening", "Night"], answer: "Night", audio: "night" },
                { type: "choice", question: "'月亮'用英语怎么说？", options: ["Sun", "Moon", "Star"], answer: "Moon", audio: "moon" }
            ]
        },

        "unit4": {
            id: "unit4",
            module: "module2",
            name: "Subjects",
            nameCN: "学科",
            topic: "学习学校各个学科的名称",
            vocabulary: [
                { word: "subject", chinese: "学科", phonetic: "/ˈsʌbdʒekt/", audio: "subject", letterSounds: [{letters:"sub",sound:"/sʌb/"},{letters:"ject",sound:"/dʒekt/"}] },
                { word: "lesson", chinese: "课", phonetic: "/ˈlesən/", audio: "lesson", letterSounds: [{letters:"le",sound:"/le/"},{letters:"sson",sound:"/sən/"}] },
                { word: "Chinese", chinese: "语文", phonetic: "/tʃaɪˈniːz/", audio: "chinese", letterSounds: [{letters:"Ch",sound:"/tʃ/"},{letters:"i",sound:"/aɪ/"},{letters:"nese",sound:"/niːz/"}] },
                { word: "Maths", chinese: "数学", phonetic: "/mæθs/", audio: "maths", letterSounds: [{letters:"m",sound:"/m/"},{letters:"a",sound:"/æ/"},{letters:"th",sound:"/θ/"},{letters:"s",sound:"/s/"}] },
                { word: "English", chinese: "英语", phonetic: "/ˈɪŋɡlɪʃ/", audio: "english", letterSounds: [{letters:"En",sound:"/ɪŋ/"},{letters:"g",sound:"/ɡ/"},{letters:"lish",sound:"/lɪʃ/"}] },
                { word: "Science", chinese: "科学", phonetic: "/ˈsaɪəns/", audio: "science", letterSounds: [{letters:"Sc",sound:"/saɪ/"},{letters:"ence",sound:"/əns/"}] },
                { word: "PE", chinese: "体育", phonetic: "/piː iː/", audio: "pe", letterSounds: [{letters:"PE",sound:"/piː iː/"}] },
                { word: "Music", chinese: "音乐", phonetic: "/ˈmjuːzɪk/", audio: "music", letterSounds: [{letters:"Mu",sound:"/mjuː/"},{letters:"sic",sound:"/zɪk/"}] },
                { word: "Art", chinese: "美术", phonetic: "/ɑːrt/", audio: "art", letterSounds: [{letters:"a",sound:"/ɑː/"},{letters:"r",sound:"/r/"},{letters:"t",sound:"/t/"}] },
                { word: "IT", chinese: "信息技术", phonetic: "/aɪ tiː/", audio: "it", letterSounds: [{letters:"IT",sound:"/aɪ tiː/"}] }
            ],
            sentences: [
                { english: "What's your favourite subject?", chinese: "你最喜欢的学科是什么？", audio: "whats_your_favourite_subject" },
                { english: "I like English best.", chinese: "我最喜欢英语。", audio: "i_like_english_best" },
                { english: "We have Maths every day.", chinese: "我们每天都有数学课。", audio: "we_have_maths_every_day" },
                { english: "Music class is fun.", chinese: "音乐课很有趣。", audio: "music_class_is_fun" },
                { english: "I can draw in Art class.", chinese: "我可以在美术课上画画。", audio: "i_can_draw_in_art_class" },
                { english: "We have six subjects.", chinese: "我们有六门学科。", audio: "we_have_six_subjects" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: Talking about subjects",
                    participants: ["Amy", "Ben"],
                    lines: [
                        { speaker: "Amy", text: "What subjects do you have, Ben?", audio: "what_subjects_do_you_have_ben" },
                        { speaker: "Ben", text: "I have Chinese, Maths, English, Science, PE and Music.", audio: "i_have_chinese_maths_english_science_pe_and_music" },
                        { speaker: "Amy", text: "That's six subjects. What's your favourite?", audio: "thats_six_subjects_whats_your_favourite" },
                        { speaker: "Ben", text: "I like Science. What about you?", audio: "i_like_science_what_about_you" },
                        { speaker: "Amy", text: "I like Music and Art.", audio: "i_like_music_and_art" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'数学'用英语怎么说？", options: ["Maths", "Science", "Chinese"], answer: "Maths", audio: "maths" },
                { type: "choice", question: "'体育'用英语怎么说？", options: ["PE", "IT", "Art"], answer: "PE", audio: "pe" },
                { type: "choice", question: "'音乐'用英语怎么说？", options: ["Music", "Maths", "PE"], answer: "Music", audio: "music" }
            ]
        },

        "unit5": {
            id: "unit5",
            module: "module2",
            name: "Sport",
            nameCN: "运动",
            topic: "学习各种运动项目和表达爱好",
            vocabulary: [
                { word: "sport", chinese: "运动", phonetic: "/spɔːrt/", audio: "sport", letterSounds: [{letters:"sp",sound:"/sp/"},{letters:"or",sound:"/ɔː/"},{letters:"t",sound:"/t/"}] },
                { word: "football", chinese: "足球", phonetic: "/ˈfʊtbɔːl/", audio: "football", letterSounds: [{letters:"foo",sound:"/fʊ/"},{letters:"t",sound:"/t/"},{letters:"ball",sound:"/bɔːl/"}] },
                { word: "club", chinese: "俱乐部", phonetic: "/klʌb/", audio: "club", letterSounds: [{letters:"cl",sound:"/kl/"},{letters:"u",sound:"/ʌ/"},{letters:"b",sound:"/b/"}] },
                { word: "join", chinese: "参加", phonetic: "/dʒɔɪn/", audio: "join", letterSounds: [{letters:"j",sound:"/dʒ/"},{letters:"oi",sound:"/ɔɪ/"},{letters:"n",sound:"/n/"}] },
                { word: "tell", chinese: "告诉", phonetic: "/tel/", audio: "tell", letterSounds: [{letters:"t",sound:"/t/"},{letters:"e",sound:"/e/"},{letters:"ll",sound:"/l/"}] },
                { word: "about", chinese: "关于", phonetic: "/əˈbaʊt/", audio: "about", letterSounds: [{letters:"a",sound:"/ə/"},{letters:"bou",sound:"/baʊ/"},{letters:"t",sound:"/t/"}] },
                { word: "basketball", chinese: "篮球", phonetic: "/ˈbæskɪtbɔːl/", audio: "basketball", letterSounds: [{letters:"ba",sound:"/bæ/"},{letters:"sket",sound:"/skɪt/"},{letters:"ball",sound:"/bɔːl/"}] },
                { word: "volleyball", chinese: "排球", phonetic: "/ˈvɒlibɔːl/", audio: "volleyball", letterSounds: [{letters:"vo",sound:"/vɒ/"},{letters:"l",sound:"/l/"},{letters:"ley",sound:"/li/"},{letters:"ball",sound:"/bɔːl/"}] },
                { word: "play", chinese: "玩/打/踢", phonetic: "/pleɪ/", audio: "play", letterSounds: [{letters:"pl",sound:"/pl/"},{letters:"ay",sound:"/eɪ/"}] }
            ],
            sentences: [
                { english: "I like playing football.", chinese: "我喜欢踢足球。", audio: "i_like_playing_football" },
                { english: "Do you want to join our club?", chinese: "你想加入我们的俱乐部吗？", audio: "do_you_want_to_join_our_club" },
                { english: "I can play basketball.", chinese: "我会打篮球。", audio: "i_can_play_basketball" },
                { english: "Let's play volleyball.", chinese: "我们打排球吧。", audio: "lets_play_volleyball" },
                { english: "Football is my favourite sport.", chinese: "足球是我最喜欢的运动。", audio: "football_is_my_favourite_sport" },
                { english: "Tell me about your hobby.", chinese: "告诉我你的爱好。", audio: "tell_me_about_your_hobby" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: Joining a club",
                    participants: ["Tom", "Coach"],
                    lines: [
                        { speaker: "Tom", text: "I'd like to join the football club.", audio: "id_like_to_join_the_football_club" },
                        { speaker: "Coach", text: "Great! Do you like playing football?", audio: "great_do_you_like_playing_football" },
                        { speaker: "Tom", text: "Yes, I play football every weekend.", audio: "yes_i_play_football_every_weekend" },
                        { speaker: "Coach", text: "That's wonderful. Welcome to the club!", audio: "thats_wonderful_welcome_to_the_club" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'足球'用英语怎么说？", options: ["Football", "Basketball", "Volleyball"], answer: "Football", audio: "football" },
                { type: "choice", question: "'参加'用英语怎么说？", options: ["Join", "Tell", "Play"], answer: "Join", audio: "join" },
                { type: "choice", question: "'俱乐部'用英语怎么说？", options: ["Club", "Sport", "Ball"], answer: "Club", audio: "club" }
            ]
        },

        "unit6": {
            id: "unit6",
            module: "module2",
            name: "Music",
            nameCN: "音乐",
            topic: "学习各种乐器的名称",
            vocabulary: [
                { word: "wonderful", chinese: "精彩的", phonetic: "/ˈwʌndərfəl/", audio: "wonderful", letterSounds: [{letters:"won",sound:"/wʌn/"},{letters:"der",sound:"/dər/"},{letters:"ful",sound:"/fəl/"}] },
                { word: "violin", chinese: "小提琴", phonetic: "/ˌvaɪəˈlɪn/", audio: "violin", letterSounds: [{letters:"vi",sound:"/vaɪ/"},{letters:"o",sound:"/ə/"},{letters:"lin",sound:"/lɪn/"}] },
                { word: "guitar", chinese: "吉他", phonetic: "/ɡɪˈtɑːr/", audio: "guitar", letterSounds: [{letters:"g",sound:"/ɡ/"},{letters:"u",sound:"/ɪ/"},{letters:"tar",sound:"/tɑːr/"}] },
                { word: "whose", chinese: "谁的", phonetic: "/huːz/", audio: "whose", letterSounds: [{letters:"wh",sound:"/h/"},{letters:"o",sound:"/uː/"},{letters:"se",sound:"/z/"}] },
                { word: "piano", chinese: "钢琴", phonetic: "/piˈænoʊ/", audio: "piano", letterSounds: [{letters:"pi",sound:"/pi/"},{letters:"a",sound:"/æ/"},{letters:"no",sound:"/noʊ/"}] },
                { word: "city", chinese: "城市", phonetic: "/ˈsɪti/", audio: "city", letterSounds: [{letters:"c",sound:"/s/"},{letters:"i",sound:"/ɪ/"},{letters:"ty",sound:"/ti/"}] },
                { word: "bag", chinese: "包", phonetic: "/bæɡ/", audio: "bag", letterSounds: [{letters:"b",sound:"/b/"},{letters:"a",sound:"/æ/"},{letters:"g",sound:"/ɡ/"}] },
                { word: "gold", chinese: "金子", phonetic: "/ɡoʊld/", audio: "gold", letterSounds: [{letters:"g",sound:"/ɡ/"},{letters:"o",sound:"/oʊ/"},{letters:"ld",sound:"/ld/"}] }
            ],
            sentences: [
                { english: "The music is wonderful!", chinese: "音乐真精彩！", audio: "the_music_is_wonderful" },
                { english: "Whose guitar is this?", chinese: "这是谁的吉他？", audio: "whose_guitar_is_this" },
                { english: "I can play the piano.", chinese: "我会弹钢琴。", audio: "i_can_play_the_piano" },
                { english: "She plays the violin beautifully.", chinese: "她小提琴拉得很动听。", audio: "she_plays_the_violin_beautifully" },
                { english: "My bag is heavy.", chinese: "我的包很重。", audio: "my_bag_is_heavy" },
                { english: "The city is beautiful at night.", chinese: "夜晚的城市很美。", audio: "the_city_is_beautiful_at_night" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: In the music room",
                    participants: ["Lucy", "Teacher"],
                    lines: [
                        { speaker: "Teacher", text: "Whose violin is this?", audio: "whose_violin_is_this" },
                        { speaker: "Lucy", text: "It's mine, Miss Wang.", audio: "its_mine_miss_wang" },
                        { speaker: "Teacher", text: "Can you play it?", audio: "can_you_play_it" },
                        { speaker: "Lucy", text: "Yes, I can. I practice every day.", audio: "yes_i_can_i_practice_every_day" },
                        { speaker: "Teacher", text: "Wonderful! The music is beautiful.", audio: "wonderful_the_music_is_beautiful" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'钢琴'用英语怎么说？", options: ["Piano", "Violin", "Guitar"], answer: "Piano", audio: "piano" },
                { type: "choice", question: "'精彩的'用英语怎么说？", options: ["Wonderful", "Heavy", "Beautiful"], answer: "Wonderful", audio: "wonderful" },
                { type: "choice", question: "'谁的'用英语怎么说？", options: ["Whose", "Who", "What"], answer: "Whose", audio: "whose" }
            ]
        },

        "unit7": {
            id: "unit7",
            module: "module3",
            name: "My day",
            nameCN: "我的一天",
            topic: "学习描述日常作息时间",
            vocabulary: [
                { word: "get up", chinese: "起床", phonetic: "/ɡet ʌp/", audio: "get_up", letterSounds: [{letters:"g",sound:"/ɡ/"},{letters:"e",sound:"/e/"},{letters:"t",sound:"/t/"}] },
                { word: "have breakfast", chinese: "吃早餐", phonetic: "/hæv ˈbrekfəst/", audio: "have_breakfast", letterSounds: [{letters:"br",sound:"/br/"},{letters:"ea",sound:"/ek/"},{letters:"k",sound:"/k/"},{letters:"fast",sound:"/fəst/"}] },
                { word: "go to school", chinese: "去上学", phonetic: "/ɡoʊ tuː skuːl/", audio: "go_to_school", letterSounds: [{letters:"sch",sound:"/sk/"},{letters:"oo",sound:"/uː/"},{letters:"l",sound:"/l/"}] },
                { word: "have lunch", chinese: "吃午餐", phonetic: "/hæv lʌntʃ/", audio: "have_lunch", letterSounds: [{letters:"lu",sound:"/lʌ/"},{letters:"n",sound:"/n/"},{letters:"ch",sound:"/tʃ/"}] },
                { word: "go home", chinese: "回家", phonetic: "/ɡoʊ hoʊm/", audio: "go_home", letterSounds: [{letters:"h",sound:"/h/"},{letters:"o",sound:"/oʊ/"},{letters:"me",sound:"/m/"}] },
                { word: "have dinner", chinese: "吃晚餐", phonetic: "/hæv ˈdɪnər/", audio: "have_dinner", letterSounds: [{letters:"di",sound:"/dɪ/"},{letters:"n",sound:"/n/"},{letters:"ner",sound:"/nər/"}] },
                { word: "go to bed", chinese: "上床睡觉", phonetic: "/ɡoʊ tuː bed/", audio: "go_to_bed", letterSounds: [{letters:"b",sound:"/b/"},{letters:"e",sound:"/e/"},{letters:"d",sound:"/d/"}] },
                { word: "o'clock", chinese: "……点钟", phonetic: "/əˈklɒk/", audio: "oclock", letterSounds: [{letters:"clo",sound:"/klɒ/"},{letters:"ck",sound:"/k/"}] },
                { word: "half", chinese: "半", phonetic: "/hæf/", audio: "half", letterSounds: [{letters:"h",sound:"/h/"},{letters:"a",sound:"/æ/"},{letters:"lf",sound:"/f/"}] }
            ],
            sentences: [
                { english: "I get up at seven o'clock.", chinese: "我七点起床。", audio: "i_get_up_at_seven_oclock" },
                { english: "I have breakfast at half past seven.", chinese: "我七点半吃早餐。", audio: "i_have_breakfast_at_half_past_seven" },
                { english: "I go to school at eight o'clock.", chinese: "我八点去上学。", audio: "i_go_to_school_at_eight_oclock" },
                { english: "I have lunch at school.", chinese: "我在学校吃午餐。", audio: "i_have_lunch_at_school" },
                { english: "I go home at four o'clock.", chinese: "我四点回家。", audio: "i_go_home_at_four_oclock" },
                { english: "I go to bed at nine o'clock.", chinese: "我九点上床睡觉。", audio: "i_go_to_bed_at_nine_oclock" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: Talking about daily routine",
                    participants: ["Mum", "Tom"],
                    lines: [
                        { speaker: "Mum", text: "Tom, what time do you get up?", audio: "tom_what_time_do_you_get_up" },
                        { speaker: "Tom", text: "I get up at seven o'clock.", audio: "i_get_up_at_seven_oclock" },
                        { speaker: "Mum", text: "When do you go to school?", audio: "when_do_you_go_to_school" },
                        { speaker: "Tom", text: "I go to school at half past seven.", audio: "i_go_to_school_at_half_past_seven" },
                        { speaker: "Mum", text: "What about lunch?", audio: "what_about_lunch" },
                        { speaker: "Tom", text: "I have lunch at twelve o'clock.", audio: "i_have_lunch_at_twelve_oclock" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'起床'用英语怎么说？", options: ["Get up", "Go to bed", "Have breakfast"], answer: "Get up", audio: "get_up" },
                { type: "choice", question: "'半'用英语怎么说？", options: ["Half", "O'clock", "Past"], answer: "Half", audio: "half" },
                { type: "choice", question: "'回家'用英语怎么说？", options: ["Go home", "Go to school", "Go to bed"], answer: "Go home", audio: "go_home" }
            ]
        },

        "unit8": {
            id: "unit8",
            module: "module3",
            name: "My week",
            nameCN: "我的一周",
            topic: "学习一周七天的名称",
            vocabulary: [
                { word: "Monday", chinese: "星期一", phonetic: "/ˈmʌndeɪ/", audio: "monday", letterSounds: [{letters:"Mon",sound:"/mʌn/"},{letters:"day",sound:"/deɪ/"}] },
                { word: "Tuesday", chinese: "星期二", phonetic: "/ˈtuːzdeɪ/", audio: "tuesday", letterSounds: [{letters:"Tue",sound:"/tuːz/"},{letters:"sday",sound:"/deɪ/"}] },
                { word: "Wednesday", chinese: "星期三", phonetic: "/ˈwenzdeɪ/", audio: "wednesday", letterSounds: [{letters:"Wed",sound:"/wenz/"},{letters:"nesday",sound:"/deɪ/"}] },
                { word: "Thursday", chinese: "星期四", phonetic: "/ˈθɜːrzdeɪ/", audio: "thursday", letterSounds: [{letters:"Thu",sound:"/θɜːr/"},{letters:"rsday",sound:"/zdeɪ/"}] },
                { word: "Friday", chinese: "星期五", phonetic: "/ˈfraɪdeɪ/", audio: "friday", letterSounds: [{letters:"Fri",sound:"/fraɪ/"},{letters:"day",sound:"/deɪ/"}] },
                { word: "Saturday", chinese: "星期六", phonetic: "/ˈsætərdeɪ/", audio: "saturday", letterSounds: [{letters:"Sat",sound:"/sæt/"},{letters:"urday",sound:"/ərdeɪ/"}] },
                { word: "Sunday", chinese: "星期日", phonetic: "/ˈsʌndeɪ/", audio: "sunday", letterSounds: [{letters:"Sun",sound:"/sʌn/"},{letters:"day",sound:"/deɪ/"}] },
                { word: "week", chinese: "周/星期", phonetic: "/wiːk/", audio: "week", letterSounds: [{letters:"w",sound:"/w/"},{letters:"ee",sound:"/iː/"},{letters:"k",sound:"/k/"}] }
            ],
            sentences: [
                { english: "What day is it today?", chinese: "今天是星期几？", audio: "what_day_is_it_today" },
                { english: "Today is Monday.", chinese: "今天是星期一。", audio: "today_is_monday" },
                { english: "I have PE on Wednesday.", chinese: "我星期三有体育课。", audio: "i_have_pe_on_wednesday" },
                { english: "Sunday is my favourite day.", chinese: "星期日是我最喜欢的一天。", audio: "sunday_is_my_favourite_day" },
                { english: "How many days are there in a week?", chinese: "一周有几天？", audio: "how_many_days_are_there_in_a_week" },
                { english: "There are seven days in a week.", chinese: "一周有七天。", audio: "there_are_seven_days_in_a_week" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: What's your favourite day?",
                    participants: ["Amy", "Ben"],
                    lines: [
                        { speaker: "Amy", text: "What day is it today?", audio: "what_day_is_it_today" },
                        { speaker: "Ben", text: "It's Friday.", audio: "its_friday" },
                        { speaker: "Amy", text: "Great! I love Fridays.", audio: "great_i_love_fridays" },
                        { speaker: "Ben", text: "Why?", audio: "why" },
                        { speaker: "Amy", text: "Because we have Art and Music.", audio: "because_we_have_art_and_music" },
                        { speaker: "Ben", text: "That's nice!", audio: "thats_nice" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'星期一'用英语怎么说？", options: ["Monday", "Sunday", "Friday"], answer: "Monday", audio: "monday" },
                { type: "choice", question: "'星期三'用英语怎么说？", options: ["Wednesday", "Thursday", "Tuesday"], answer: "Wednesday", audio: "wednesday" },
                { type: "choice", question: "一周有几天？", options: ["Seven", "Five", "Six"], answer: "Seven", audio: "seven" }
            ]
        },

        "unit9": {
            id: "unit9",
            module: "module3",
            name: "Jobs",
            nameCN: "职业",
            topic: "学习各种职业的名称",
            vocabulary: [
                { word: "firefighter", chinese: "消防员", phonetic: "/ˈfaɪərfaɪtər/", audio: "firefighter", letterSounds: [{letters:"fire",sound:"/faɪər/"},{letters:"fight",sound:"/faɪt/"},{letters:"er",sound:"/ər/"}] },
                { word: "police officer", chinese: "警察", phonetic: "/pəˈliːs ˈɒfɪsər/", audio: "police_officer", letterSounds: [{letters:"po",sound:"/pə/"},{letters:"lice",sound:"/liːs/"}] },
                { word: "farmer", chinese: "农民", phonetic: "/ˈfɑːrmər/", audio: "farmer", letterSounds: [{letters:"far",sound:"/fɑːr/"},{letters:"mer",sound:"/mər/"}] },
                { word: "doctor", chinese: "医生", phonetic: "/ˈdɒktər/", audio: "doctor", letterSounds: [{letters:"do",sound:"/dɒ/"},{letters:"ct",sound:"/kt/"},{letters:"or",sound:"/ər/"}] },
                { word: "nurse", chinese: "护士", phonetic: "/nɜːrs/", audio: "nurse", letterSounds: [{letters:"n",sound:"/n/"},{letters:"urse",sound:"/ɜːrs/"}] },
                { word: "teacher", chinese: "老师", phonetic: "/ˈtiːtʃər/", audio: "teacher", letterSounds: [{letters:"te",sound:"/tiː/"},{letters:"ach",sound:"/tʃ/"},{letters:"er",sound:"/ər/"}] },
                { word: "cook", chinese: "厨师", phonetic: "/kʊk/", audio: "cook", letterSounds: [{letters:"c",sound:"/k/"},{letters:"oo",sound:"/ʊ/"},{letters:"k",sound:"/k/"}] },
                { word: "driver", chinese: "司机", phonetic: "/ˈdraɪvər/", audio: "driver", letterSounds: [{letters:"dr",sound:"/dr/"},{letters:"i",sound:"/aɪ/"},{letters:"ver",sound:"/vər/"}] },
                { word: "job", chinese: "工作", phonetic: "/dʒɒb/", audio: "job", letterSounds: [{letters:"j",sound:"/dʒ/"},{letters:"o",sound:"/ɒ/"},{letters:"b",sound:"/b/"}] }
            ],
            sentences: [
                { english: "What do you want to be?", chinese: "你想成为什么？", audio: "what_do_you_want_to_be" },
                { english: "I want to be a doctor.", chinese: "我想当医生。", audio: "i_want_to_be_a_doctor" },
                { english: "My father is a police officer.", chinese: "我爸爸是警察。", audio: "my_father_is_a_police_officer" },
                { english: "The firefighter helps people.", chinese: "消防员帮助人们。", audio: "the_firefighter_helps_people" },
                { english: "A farmer works in the field.", chinese: "农民在田里工作。", audio: "a_farmer_works_in_the_field" },
                { english: "Teaching is a good job.", chinese: "教书是一份好工作。", audio: "teaching_is_a_good_job" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: What do you want to be?",
                    participants: ["Teacher", "Amy"],
                    lines: [
                        { speaker: "Teacher", text: "Amy, what do you want to be?", audio: "amy_what_do_you_want_to_be" },
                        { speaker: "Amy", text: "I want to be a doctor.", audio: "i_want_to_be_a_doctor" },
                        { speaker: "Teacher", text: "Why?", audio: "why" },
                        { speaker: "Amy", text: "Because doctors help sick people.", audio: "because_doctors_help_sick_people" },
                        { speaker: "Teacher", text: "That's great! You can help many people.", audio: "thats_great_you_can_help_many_people" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'医生'用英语怎么说？", options: ["Doctor", "Nurse", "Teacher"], answer: "Doctor", audio: "doctor" },
                { type: "choice", question: "'消防员'用英语怎么说？", options: ["Firefighter", "Police officer", "Driver"], answer: "Firefighter", audio: "firefighter" },
                { type: "choice", question: "'老师'用英语怎么说？", options: ["Teacher", "Cook", "Farmer"], answer: "Teacher", audio: "teacher" }
            ]
        },

        "unit10": {
            id: "unit10",
            module: "module4",
            name: "My family",
            nameCN: "我的家人",
            topic: "学习描述家庭成员",
            vocabulary: [
                { word: "family", chinese: "家庭", phonetic: "/ˈfæməli/", audio: "family", letterSounds: [{letters:"fa",sound:"/fæ/"},{letters:"mily",sound:"/məli/"}] },
                { word: "parent", chinese: "父母", phonetic: "/ˈpeərənt/", audio: "parent", letterSounds: [{letters:"pa",sound:"/peər/"},{letters:"rent",sound:"/ənt/"}] },
                { word: "father", chinese: "父亲", phonetic: "/ˈfɑːðər/", audio: "father", letterSounds: [{letters:"fa",sound:"/fɑː/"},{letters:"ther",sound:"/ðər/"}] },
                { word: "mother", chinese: "母亲", phonetic: "/ˈmʌðər/", audio: "mother", letterSounds: [{letters:"mo",sound:"/mʌ/"},{letters:"ther",sound:"/ðər/"}] },
                { word: "sister", chinese: "姐妹", phonetic: "/ˈsɪstər/", audio: "sister", letterSounds: [{letters:"sis",sound:"/sɪs/"},{letters:"ter",sound:"/tər/"}] },
                { word: "brother", chinese: "兄弟", phonetic: "/ˈbrʌðər/", audio: "brother", letterSounds: [{letters:"bro",sound:"/brʌ/"},{letters:"ther",sound:"/ðər/"}] },
                { word: "grandfather", chinese: "祖父/外祖父", phonetic: "/ˈɡrænfɑːðər/", audio: "grandfather", letterSounds: [{letters:"grand",sound:"/ɡrænd/"},{letters:"fa",sound:"/fɑː/"},{letters:"ther",sound:"/ðər/"}] },
                { word: "grandmother", chinese: "祖母/外祖母", phonetic: "/ˈɡrænmʌðər/", audio: "grandmother", letterSounds: [{letters:"grand",sound:"/ɡræn/"},{letters:"mo",sound:"/mʌ/"},{letters:"ther",sound:"/ðər/"}] }
            ],
            sentences: [
                { english: "This is my family.", chinese: "这是我的家人。", audio: "this_is_my_family" },
                { english: "I have a brother and a sister.", chinese: "我有一个哥哥和一个姐姐。", audio: "i_have_a_brother_and_a_sister" },
                { english: "My father is tall.", chinese: "我爸爸很高。", audio: "my_father_is_tall" },
                { english: "My mother is kind.", chinese: "我妈妈很善良。", audio: "my_mother_is_kind" },
                { english: "I love my family.", chinese: "我爱我的家人。", audio: "i_love_my_family" },
                { english: "My grandparents are old.", chinese: "我的祖父母年纪大了。", audio: "my_grandparents_are_old" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: Introducing my family",
                    participants: ["Tom", "Lucy"],
                    lines: [
                        { speaker: "Tom", text: "Lucy, this is my family photo.", audio: "lucy_this_is_my_family_photo" },
                        { speaker: "Lucy", text: "Oh, how nice! Who is this?", audio: "oh_how_nice_who_is_this" },
                        { speaker: "Tom", text: "This is my father and this is my mother.", audio: "this_is_my_father_and_this_is_my_mother" },
                        { speaker: "Lucy", text: "Do you have any brothers or sisters?", audio: "do_you_have_any_brothers_or_sisters" },
                        { speaker: "Tom", text: "Yes, I have a brother.", audio: "yes_i_have_a_brother" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'母亲'用英语怎么说？", options: ["Mother", "Father", "Sister"], answer: "Mother", audio: "mother" },
                { type: "choice", question: "'兄弟'用英语怎么说？", options: ["Brother", "Sister", "Parent"], answer: "Brother", audio: "brother" },
                { type: "choice", question: "'家庭'用英语怎么说？", options: ["Family", "School", "Friend"], answer: "Family", audio: "family" }
            ]
        },

        "unit11": {
            id: "unit11",
            module: "module4",
            name: "Feelings",
            nameCN: "感受",
            topic: "学习表达身体和情绪感受",
            vocabulary: [
                { word: "happy", chinese: "开心的", phonetic: "/ˈhæpi/", audio: "happy", letterSounds: [{letters:"ha",sound:"/hæ/"},{letters:"ppy",sound:"/pi/"}] },
                { word: "sad", chinese: "伤心的", phonetic: "/sæd/", audio: "sad", letterSounds: [{letters:"s",sound:"/s/"},{letters:"a",sound:"/æ/"},{letters:"d",sound:"/d/"}] },
                { word: "tired", chinese: "累的", phonetic: "/ˈtaɪərd/", audio: "tired", letterSounds: [{letters:"ti",sound:"/taɪ/"},{letters:"red",sound:"/ərd/"}] },
                { word: "hungry", chinese: "饿的", phonetic: "/ˈhʌŋɡri/", audio: "hungry", letterSounds: [{letters:"hu",sound:"/hʌ/"},{letters:"ngry",sound:"/ŋɡri/"}] },
                { word: "full", chinese: "饱的", phonetic: "/fʊl/", audio: "full", letterSounds: [{letters:"f",sound:"/f/"},{letters:"u",sound:"/ʊ/"},{letters:"ll",sound:"/l/"}] },
                { word: "thirsty", chinese: "渴的", phonetic: "/ˈθɜːrsti/", audio: "thirsty", letterSounds: [{letters:"th",sound:"/θ/"},{letters:"irst",sound:"/ɜːrst/"},{letters:"y",sound:"/i/"}] },
                { word: "bird", chinese: "鸟", phonetic: "/bɜːrd/", audio: "bird", letterSounds: [{letters:"b",sound:"/b/"},{letters:"ir",sound:"/ɜːr/"},{letters:"d",sound:"/d/"}] },
                { word: "see", chinese: "看见", phonetic: "/siː/", audio: "see", letterSounds: [{letters:"s",sound:"/s/"},{letters:"ee",sound:"/iː/"}] },
                { word: "bottle", chinese: "瓶子", phonetic: "/ˈbɒtəl/", audio: "bottle", letterSounds: [{letters:"bo",sound:"/bɒ/"},{letters:"ttle",sound:"/təl/"}] },
                { word: "water", chinese: "水", phonetic: "/ˈwɔːtər/", audio: "water", letterSounds: [{letters:"w",sound:"/w/"},{letters:"a",sound:"/ɔː/"},{letters:"ter",sound:"/tər/"}] }
            ],
            sentences: [
                { english: "I'm happy today.", chinese: "我今天很开心。", audio: "im_happy_today" },
                { english: "I'm tired. I want to sleep.", chinese: "我累了。我想睡觉。", audio: "im_tired_i_want_to_sleep" },
                { english: "I'm hungry. Can I have some food?", chinese: "我饿了。我可以吃点东西吗？", audio: "im_hungry_can_i_have_some_food" },
                { english: "I'm thirsty. I want some water.", chinese: "我渴了。我想喝水。", audio: "im_thirsty_i_want_some_water" },
                { english: "Don't be sad.", chinese: "不要伤心。", audio: "dont_be_sad" },
                { english: "I'm full. I can't eat any more.", chinese: "我饱了。我不能再吃了。", audio: "im_full_i_cant_eat_any_more" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: How are you feeling?",
                    participants: ["Mum", "Tom"],
                    lines: [
                        { speaker: "Mum", text: "Tom, how are you feeling?", audio: "tom_how_are_you_feeling" },
                        { speaker: "Tom", text: "I'm tired, Mum.", audio: "im_tired_mum" },
                        { speaker: "Mum", text: "Do you want to have a rest?", audio: "do_you_want_to_have_a_rest" },
                        { speaker: "Tom", text: "Yes, please. But I'm also thirsty.", audio: "yes_please_but_im_also_thirsty" },
                        { speaker: "Mum", text: "Here, have some water.", audio: "here_have_some_water" },
                        { speaker: "Tom", text: "Thank you, Mum.", audio: "thank_you_mum" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'开心的'用英语怎么说？", options: ["Happy", "Sad", "Tired"], answer: "Happy", audio: "happy" },
                { type: "choice", question: "'渴的'用英语怎么说？", options: ["Thirsty", "Hungry", "Full"], answer: "Thirsty", audio: "thirsty" },
                { type: "choice", question: "'伤心的'用英语怎么说？", options: ["Sad", "Tired", "Happy"], answer: "Sad", audio: "sad" }
            ]
        },

        "unit12": {
            id: "unit12",
            module: "module4",
            name: "Abilities",
            nameCN: "能力",
            topic: "学习用can表达能力",
            vocabulary: [
                { word: "can", chinese: "会/能", phonetic: "/kæn/", audio: "can", letterSounds: [{letters:"c",sound:"/k/"},{letters:"an",sound:"/æn/"}] },
                { word: "run", chinese: "跑", phonetic: "/rʌn/", audio: "run", letterSounds: [{letters:"r",sound:"/r/"},{letters:"u",sound:"/ʌ/"},{letters:"n",sound:"/n/"}] },
                { word: "jump", chinese: "跳", phonetic: "/dʒʌmp/", audio: "jump", letterSounds: [{letters:"j",sound:"/dʒ/"},{letters:"u",sound:"/ʌ/"},{letters:"mp",sound:"/mp/"}] },
                { word: "swim", chinese: "游泳", phonetic: "/swɪm/", audio: "swim", letterSounds: [{letters:"sw",sound:"/sw/"},{letters:"i",sound:"/ɪ/"},{letters:"m",sound:"/m/"}] },
                { word: "fly", chinese: "飞", phonetic: "/flaɪ/", audio: "fly", letterSounds: [{letters:"fl",sound:"/fl/"},{letters:"y",sound:"/aɪ/"}] },
                { word: "ride", chinese: "骑", phonetic: "/raɪd/", audio: "ride", letterSounds: [{letters:"r",sound:"/r/"},{letters:"ide",sound:"/aɪd/"}] },
                { word: "dance", chinese: "跳舞", phonetic: "/dæns/", audio: "dance", letterSounds: [{letters:"d",sound:"/d/"},{letters:"an",sound:"/æ/"},{letters:"ce",sound:"/s/"}] },
                { word: "sing", chinese: "唱歌", phonetic: "/sɪŋ/", audio: "sing", letterSounds: [{letters:"s",sound:"/s/"},{letters:"i",sound:"/ɪ/"},{letters:"ng",sound:"/ŋ/"}] },
                { word: "draw", chinese: "画画", phonetic: "/drɔː/", audio: "draw", letterSounds: [{letters:"dr",sound:"/dr/"},{letters:"aw",sound:"/ɔː/"}] },
                { word: "read", chinese: "阅读", phonetic: "/riːd/", audio: "read", letterSounds: [{letters:"r",sound:"/r/"},{letters:"ea",sound:"/iː/"},{letters:"d",sound:"/d/"}] }
            ],
            sentences: [
                { english: "I can run fast.", chinese: "我会跑得很快。", audio: "i_can_run_fast" },
                { english: "Can you swim?", chinese: "你会游泳吗？", audio: "can_you_swim" },
                { english: "Yes, I can.", chinese: "是的，我会。", audio: "yes_i_can" },
                { english: "Birds can fly.", chinese: "鸟儿会飞。", audio: "birds_can_fly" },
                { english: "I can jump high.", chinese: "我会跳得很高。", audio: "i_can_jump_high" },
                { english: "What can you do?", chinese: "你会做什么？", audio: "what_can_you_do" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: What can you do?",
                    participants: ["Amy", "Tom"],
                    lines: [
                        { speaker: "Amy", text: "Tom, what can you do?", audio: "tom_what_can_you_do" },
                        { speaker: "Tom", text: "I can swim and run. What about you?", audio: "i_can_swim_and_run_what_about_you" },
                        { speaker: "Amy", text: "I can dance and sing.", audio: "i_can_dance_and_sing" },
                        { speaker: "Tom", text: "Can you draw?", audio: "can_you_draw" },
                        { speaker: "Amy", text: "Yes, I can. I like drawing.", audio: "yes_i_can_i_like_drawing" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'会/能'用英语怎么说？", options: ["Can", "Run", "Jump"], answer: "Can", audio: "can" },
                { type: "choice", question: "'游泳'用英语怎么说？", options: ["Swim", "Run", "Fly"], answer: "Swim", audio: "swim" },
                { type: "choice", question: "'跳'用英语怎么说？", options: ["Jump", "Swim", "Sing"], answer: "Jump", audio: "jump" }
            ]
        }
    }
},"""

# 五年级下册完整数据
grade5_2_data = """'grade5_2': {
    id: 'grade5_2',
    name: '五年级下册',
    metadata: {
        title: "Oxford English Primary 5 (Shanghai Edition)",
        subtitle: "牛津上海版小学英语五年级下册",
        totalUnits: 12,
        totalModules: 4
    },
    
    modules: [
        {
            id: "module1",
            name: "Daily tidying and belongings",
            nameCN: "日常整理和物品",
            units: [
                { id: "unit1", name: "What a mess", nameCN: "真乱" },
                { id: "unit2", name: "Watch it grow", nameCN: "观察它的成长" },
                { id: "unit3", name: "How noisy", nameCN: "真吵" }
            ]
        },
        {
            id: "module2",
            name: "Life and seasonal changes",
            nameCN: "生活与季节变化",
            units: [
                { id: "unit4", name: "The magic stone", nameCN: "神奇的石头" },
                { id: "unit5", name: "A party for animals", nameCN: "动物聚会" },
                { id: "unit6", name: "My favourite festival", nameCN: "我最喜欢的节日" }
            ]
        },
        {
            id: "module3",
            name: "Changes and differences",
            nameCN: "变化与差异",
            units: [
                { id: "unit7", name: "My future", nameCN: "我的未来" },
                { id: "unit8", name: "Buying clothes", nameCN: "买衣服" },
                { id: "unit9", name: "Seeing the doctor", nameCN: "看医生" }
            ]
        },
        {
            id: "module4",
            name: "More things to learn",
            nameCN: "更多学习内容",
            units: [
                { id: "unit10", name: "Great inventions", nameCN: "伟大的发明" },
                { id: "unit11", name: "Chinese festivals", nameCN: "中国节日" },
                { id: "unit12", name: "The giant's garden", nameCN: "巨人的花园" }
            ]
        }
    ],

    units: {
        "unit1": {
            id: "unit1",
            module: "module1",
            name: "What a mess",
            nameCN: "真乱",
            topic: "学习整理房间和物品归属",
            vocabulary: [
                { word: "tidy", chinese: "整洁的", phonetic: "/ˈtaɪdi/", audio: "tidy", letterSounds: [{letters:"ti",sound:"/taɪ/"},{letters:"dy",sound:"/di/"}] },
                { word: "mess", chinese: "乱七八糟", phonetic: "/mes/", audio: "mess", letterSounds: [{letters:"m",sound:"/m/"},{letters:"e",sound:"/e/"},{letters:"ss",sound:"/s/"}] },
                { word: "sock", chinese: "袜子", phonetic: "/sɒk/", audio: "sock", letterSounds: [{letters:"s",sound:"/s/"},{letters:"o",sound:"/ɒ/"},{letters:"ck",sound:"/k/"}] },
                { word: "yours", chinese: "你的", phonetic: "/jɔːrz/", audio: "yours", letterSounds: [{letters:"y",sound:"/j/"},{letters:"our",sound:"/ɔːr/"},{letters:"s",sound:"/z/"}] },
                { word: "cap", chinese: "帽子", phonetic: "/kæp/", audio: "cap", letterSounds: [{letters:"c",sound:"/k/"},{letters:"a",sound:"/æ/"},{letters:"p",sound:"/p/"}] },
                { word: "mine", chinese: "我的", phonetic: "/maɪn/", audio: "mine", letterSounds: [{letters:"m",sound:"/m/"},{letters:"i",sound:"/aɪ/"},{letters:"ne",sound:"/n/"}] },
                { word: "crayon", chinese: "蜡笔", phonetic: "/ˈkreɪən/", audio: "crayon", letterSounds: [{letters:"cr",sound:"/kr/"},{letters:"ay",sound:"/eɪ/"},{letters:"on",sound:"/ən/"}] },
                { word: "umbrella", chinese: "雨伞", phonetic: "/ʌmˈbrelə/", audio: "umbrella", letterSounds: [{letters:"um",sound:"/ʌm/"},{letters:"bre",sound:"/bre/"},{letters:"lla",sound:"/lə/"}] },
                { word: "drop", chinese: "掉落", phonetic: "/drɒp/", audio: "drop", letterSounds: [{letters:"dr",sound:"/dr/"},{letters:"o",sound:"/ɒ/"},{letters:"p",sound:"/p/"}] },
                { word: "tidy up", chinese: "整理", phonetic: "/ˈtaɪdi ʌp/", audio: "tidy_up", letterSounds: [{letters:"ti",sound:"/taɪ/"},{letters:"dy",sound:"/di/"}] }
            ],
            sentences: [
                { english: "What a mess!", chinese: "真乱啊！", audio: "what_a_mess" },
                { english: "This is mine.", chinese: "这是我的。", audio: "this_is_mine" },
                { english: "Is this yours?", chinese: "这是你的吗？", audio: "is_this_yours" },
                { english: "Let me tidy up.", chinese: "让我来整理一下。", audio: "let_me_tidy_up" },
                { english: "Don't drop your things.", chinese: "不要乱扔东西。", audio: "dont_drop_your_things" },
                { english: "Put your socks in the drawer.", chinese: "把袜子放进抽屉里。", audio: "put_your_socks_in_the_drawer" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: Tidy up the room",
                    participants: ["Mum", "Tom"],
                    lines: [
                        { speaker: "Mum", text: "Tom, your room is a mess!", audio: "tom_your_room_is_a_mess" },
                        { speaker: "Tom", text: "Sorry, Mum. Let me tidy up.", audio: "sorry_mum_let_me_tidy_up" },
                        { speaker: "Mum", text: "Is this sock yours?", audio: "is_this_sock_yours" },
                        { speaker: "Tom", text: "No, it's not mine. It's Peter's.", audio: "no_its_not_mine_its_peters" },
                        { speaker: "Mum", text: "OK. Put it in his bag.", audio: "ok_put_it_in_his_bag" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'整齐的'用英语怎么说？", options: ["Tidy", "Mess", "Clean"], answer: "Tidy", audio: "tidy" },
                { type: "choice", question: "'我的'用英语怎么说？", options: ["Mine", "Yours", "His"], answer: "Mine", audio: "mine" },
                { type: "choice", question: "'真乱'用英语怎么说？", options: ["What a mess", "How clean", "Very tidy"], answer: "What a mess", audio: "what_a_mess" }
            ]
        },

        "unit2": {
            id: "unit2",
            module: "module1",
            name: "Watch it grow",
            nameCN: "观察它的成长",
            topic: "学习描述自然变化和原因",
            vocabulary: [
                { word: "why", chinese: "为什么", phonetic: "/waɪ/", audio: "why", letterSounds: [{letters:"wh",sound:"/w/"},{letters:"y",sound:"/aɪ/"}] },
                { word: "because", chinese: "因为", phonetic: "/bɪˈkɒz/", audio: "because", letterSounds: [{letters:"be",sound:"/bɪ/"},{letters:"cau",sound:"/kɒ/"},{letters:"se",sound:"/z/"}] },
                { word: "study", chinese: "书房/学习", phonetic: "/ˈstʌdi/", audio: "study", letterSounds: [{letters:"st",sound:"/st/"},{letters:"u",sound:"/ʌ/"},{letters:"dy",sound:"/di/"}] },
                { word: "dining room", chinese: "餐厅", phonetic: "/ˈdaɪnɪŋ ruːm/", audio: "dining_room", letterSounds: [{letters:"di",sound:"/daɪ/"},{letters:"ning",sound:"/nɪŋ/"}] },
                { word: "wild goose", chinese: "野鹅", phonetic: "/waɪld ɡuːs/", audio: "wild_goose", letterSounds: [{letters:"wi",sound:"/waɪ/"},{letters:"ld",sound:"/ld/"}] },
                { word: "change", chinese: "变化", phonetic: "/tʃeɪndʒ/", audio: "change", letterSounds: [{letters:"ch",sound:"/tʃ/"},{letters:"ange",sound:"/eɪndʒ/"}] },
                { word: "place", chinese: "地方", phonetic: "/pleɪs/", audio: "place", letterSounds: [{letters:"pl",sound:"/pl/"},{letters:"ace",sound:"/eɪs/"}] },
                { word: "enough", chinese: "足够的", phonetic: "/ɪˈnʌf/", audio: "enough", letterSounds: [{letters:"e",sound:"/ɪ/"},{letters:"nough",sound:"/nʌf/"}] },
                { word: "build", chinese: "建造", phonetic: "/bɪld/", audio: "build", letterSounds: [{letters:"b",sound:"/b/"},{letters:"ui",sound:"/ɪ/"},{letters:"ld",sound:"/ld/"}] },
                { word: "noisy", chinese: "吵闹的", phonetic: "/ˈnɔɪzi/", audio: "noisy", letterSounds: [{letters:"noi",sound:"/nɔɪ/"},{letters:"sy",sound:"/zi/"}] },
                { word: "fly away", chinese: "飞走", phonetic: "/flaɪ əˈweɪ/", audio: "fly_away", letterSounds: [{letters:"fl",sound:"/fl/"},{letters:"y",sound:"/aɪ/"}] }
            ],
            sentences: [
                { english: "Why do they fly away?", chinese: "它们为什么要飞走？", audio: "why_do_they_fly_away" },
                { english: "Because it's getting cold.", chinese: "因为天气变冷了。", audio: "because_its_getting_cold" },
                { word: "Everything changes.", chinese: "一切都在变化。", phonetic: "/ˈevrɪθɪŋ tʃeɪndʒɪz/", audio: "everything_changes" },
                { english: "The bird is building a nest.", chinese: "鸟儿正在筑巢。", audio: "the_bird_is_building_a_nest" },
                { english: "It's noisy here.", chinese: "这里很吵闹。", audio: "its_noisy_here" },
                { english: "I have enough food.", chinese: "我有足够的食物。", audio: "i_have_enough_food" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: Watching the birds",
                    participants: ["Tom", "Dad"],
                    lines: [
                        { speaker: "Tom", text: "Look at those birds, Dad.", audio: "look_at_those_birds_dad" },
                        { speaker: "Dad", text: "Why are they flying south?", audio: "why_are_they_flying_south" },
                        { speaker: "Tom", text: "Because it's getting cold.", audio: "because_its_getting_cold" },
                        { speaker: "Dad", text: "Yes, they're wild geese.", audio: "yes_theyre_wild_geese" },
                        { speaker: "Tom", text: "Will they come back?", audio: "will_they_come_back" },
                        { speaker: "Dad", text: "Yes, in spring.", audio: "yes_in_spring" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'为什么'用英语怎么说？", options: ["Why", "Because", "When"], answer: "Why", audio: "why" },
                { type: "choice", question: "'因为'用英语怎么说？", options: ["Because", "Why", "But"], answer: "Because", audio: "because" },
                { type: "choice", question: "'吵闹的'用英语怎么说？", options: ["Noisy", "Quiet", "Clean"], answer: "Noisy", audio: "noisy" }
            ]
        },

        "unit3": {
            id: "unit3",
            module: "module1",
            name: "How noisy",
            nameCN: "真吵",
            topic: "学习描述声音和噪音",
            vocabulary: [
                { word: "noise", chinese: "噪音", phonetic: "/nɔɪz/", audio: "noise", letterSounds: [{letters:"n",sound:"/n/"},{letters:"oi",sound:"/ɔɪ/"},{letters:"se",sound:"/z/"}] },
                { word: "noisy", chinese: "吵闹的", phonetic: "/ˈnɔɪzi/", audio: "noisy", letterSounds: [{letters:"noi",sound:"/nɔɪ/"},{letters:"sy",sound:"/zi/"}] },
                { word: "drill", chinese: "钻孔机", phonetic: "/drɪl/", audio: "drill", letterSounds: [{letters:"dr",sound:"/dr/"},{letters:"ill",sound:"/ɪl/"}] },
                { word: "lorry", chinese: "卡车", phonetic: "/ˈlɒri/", audio: "lorry", letterSounds: [{letters:"lo",sound:"/lɒ/"},{letters:"rry",sound:"/ri/"}] },
                { word: "motorbike", chinese: "摩托车", phonetic: "/ˈmoʊtərbaɪk/", audio: "motorbike", letterSounds: [{letters:"mo",sound:"/moʊ/"},{letters:"tor",sound:"/tər/"},{letters:"bike",sound:"/baɪk/"}] },
                { word: "plane", chinese: "飞机", phonetic: "/pleɪn/", audio: "plane", letterSounds: [{letters:"pl",sound:"/pl/"},{letters:"ane",sound:"/eɪn/"}] },
                { word: "radio", chinese: "收音机", phonetic: "/ˈreɪdioʊ/", audio: "radio", letterSounds: [{letters:"ra",sound:"/reɪ/"},{letters:"di",sound:"/di/"},{letters:"o",sound:"/oʊ/"}] },
                { word: "quiet", chinese: "安静的", phonetic: "/ˈkwaɪət/", audio: "quiet", letterSounds: [{letters:"qu",sound:"/kw/"},{letters:"iet",sound:"/aɪət/"}] },
                { word: "sleep", chinese: "睡觉", phonetic: "/sliːp/", audio: "sleep", letterSounds: [{letters:"sl",sound:"/sl/"},{letters:"eep",sound:"/iːp/"}] },
                { word: "baby", chinese: "婴儿", phonetic: "/ˈbeɪbi/", audio: "baby", letterSounds: [{letters:"ba",sound:"/beɪ/"},{letters:"by",sound:"/bi/"}] },
                { word: "cry", chinese: "哭", phonetic: "/kraɪ/", audio: "cry", letterSounds: [{letters:"cr",sound:"/kr/"},{letters:"y",sound:"/aɪ/"}] },
                { word: "wake", chinese: "醒来", phonetic: "/weɪk/", audio: "wake", letterSounds: [{letters:"w",sound:"/w/"},{letters:"ake",sound:"/eɪk/"}] }
            ],
            sentences: [
                { english: "How noisy!", chinese: "真吵啊！", audio: "how_noisy" },
                { english: "Please be quiet.", chinese: "请安静。", audio: "please_be_quiet" },
                { english: "Don't make noise.", chinese: "不要制造噪音。", audio: "dont_make_noise" },
                { english: "The baby is sleeping.", chinese: "婴儿正在睡觉。", audio: "the_baby_is_sleeping" },
                { english: "I can hear the plane.", chinese: "我能听到飞机声。", audio: "i_can_hear_the_plane" },
                { english: "Wake up! It's morning.", chinese: "醒醒！早上了。", audio: "wake_up_its_morning" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: Noisy neighbours",
                    participants: ["Tom", "Mum"],
                    lines: [
                        { speaker: "Tom", text: "How noisy! I can't sleep.", audio: "how_noisy_i_cant_sleep" },
                        { speaker: "Mum", text: "What's that noise?", audio: "whats_that_noise" },
                        { speaker: "Tom", text: "It might be the lorries outside.", audio: "it_might_be_the_lorries_outside" },
                        { speaker: "Mum", text: "Let's close the windows.", audio: "lets_close_the_windows" },
                        { speaker: "Tom", text: "Good idea!", audio: "good_idea" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'吵闹的'用英语怎么说？", options: ["Noisy", "Quiet", "Sleepy"], answer: "Noisy", audio: "noisy" },
                { type: "choice", question: "'安静的'用英语怎么说？", options: ["Quiet", "Noisy", "Loud"], answer: "Quiet", audio: "quiet" },
                { type: "choice", question: "'婴儿'用英语怎么说？", options: ["Baby", "Child", "Adult"], answer: "Baby", audio: "baby" }
            ]
        },

        "unit4": {
            id: "unit4",
            module: "module2",
            name: "The magic stone",
            nameCN: "神奇的石头",
            topic: "学习杰克与魔豆故事中的词汇",
            vocabulary: [
                { word: "magic", chinese: "魔法", phonetic: "/ˈmædʒɪk/", audio: "magic", letterSounds: [{letters:"ma",sound:"/mæ/"},{letters:"gic",sound:"/dʒɪk/"}] },
                { word: "stone", chinese: "石头", phonetic: "/stoʊn/", audio: "stone", letterSounds: [{letters:"st",sound:"/st/"},{letters:"one",sound:"/oʊn/"}] },
                { word: "giant", chinese: "巨人", phonetic: "/ˈdʒaɪənt/", audio: "giant", letterSounds: [{letters:"gi",sound:"/dʒaɪ/"},{letters:"ant",sound:"/ənt/"}] },
                { word: "poor", chinese: "贫穷的", phonetic: "/pʊr/", audio: "poor", letterSounds: [{letters:"p",sound:"/p/"},{letters:"oor",sound:"/ʊr/"}] },
                { word: "sell", chinese: "卖", phonetic: "/sel/", audio: "sell", letterSounds: [{letters:"s",sound:"/s/"},{letters:"ell",sound:"/el/"}] },
                { word: "beanstalk", chinese: "豆茎", phonetic: "/ˈbiːnstɔːk/", audio: "beanstalk", letterSounds: [{letters:"be",sound:"/biː/"},{letters:"an",sound:"/ən/"},{letters:"stalk",sound:"/stɔːk/"}] },
                { word: "rich", chinese: "富有的", phonetic: "/rɪtʃ/", audio: "rich", letterSounds: [{letters:"r",sound:"/r/"},{letters:"ich",sound:"/ɪtʃ/"}] },
                { word: "save", chinese: "节省/救", phonetic: "/seɪv/", audio: "save", letterSounds: [{letters:"s",sound:"/s/"},{letters:"ave",sound:"/eɪv/"}] },
                { word: "castle", chinese: "城堡", phonetic: "/ˈkæsəl/", audio: "castle", letterSounds: [{letters:"ca",sound:"/kæ/"},{letters:"stle",sound:"/səl/"}] },
                { word: "smoke", chinese: "烟", phonetic: "/smoʊk/", audio: "smoke", letterSounds: [{letters:"sm",sound:"/sm/"},{letters:"oke",sound:"/oʊk/"}] }
            ],
            sentences: [
                { english: "It's a magic bean!", chinese: "这是一颗魔豆！", audio: "its_a_magic_bean" },
                { english: "The giant is very tall.", chinese: "那个巨人非常高。", audio: "the_giant_is_very_tall" },
                { english: "Jack is poor but kind.", chinese: "杰克很穷但很善良。", audio: "jack_is_poor_but_kind" },
                { english: "The beanstalk grows very fast.", chinese: "豆茎长得很快。", audio: "the_beanstalk_grows_very_fast" },
                { english: "They live in a big castle.", chinese: "他们住在一个大城堡里。", audio: "they_live_in_a_big_castle" },
                { english: "Don't be afraid.", chinese: "不要害怕。", audio: "dont_be_afraid" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: Jack and the beanstalk",
                    participants: ["Mum", "Jack"],
                    lines: [
                        { speaker: "Mum", text: "Jack, we are very poor.", audio: "jack_we_are_very_poor" },
                        { speaker: "Jack", text: "Don't worry, Mum. I'll sell the cow.", audio: "dont_worry_mum_ill_sell_the_cow" },
                        { speaker: "Mum", text: "OK. Be careful.", audio: "ok_be_careful" },
                        { speaker: "Jack", text: "Look, I got some magic beans!", audio: "look_i_got_some_magic_beans" },
                        { speaker: "Mum", text: "Magic beans? That's great!", audio: "magic_beans_thats_great" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'魔法'用英语怎么说？", options: ["Magic", "Story", "Castle"], answer: "Magic", audio: "magic" },
                { type: "choice", question: "'巨人'用英语怎么说？", options: ["Giant", "King", "Knight"], answer: "Giant", audio: "giant" },
                { type: "choice", question: "'城堡'用英语怎么说？", options: ["Castle", "House", "Farm"], answer: "Castle", audio: "castle" }
            ]
        },

        "unit5": {
            id: "unit5",
            module: "module2",
            name: "A party for animals",
            nameCN: "动物聚会",
            topic: "学习动物和乐器相关词汇",
            vocabulary: [
                { word: "animal", chinese: "动物", phonetic: "/ˈænɪməl/", audio: "animal", letterSounds: [{letters:"a",sound:"/æ/"},{letters:"ni",sound:"/nɪ/"},{letters:"mal",sound:"/məl/"}] },
                { word: "puppet", chinese: "木偶", phonetic: "/ˈpʌpɪt/", audio: "puppet", letterSounds: [{letters:"pu",sound:"/pʌ/"},{letters:"ppet",sound:"/pɪt/"}] },
                { word: "dinosaur", chinese: "恐龙", phonetic: "/ˈdaɪnəsɔːr/", audio: "dinosaur", letterSounds: [{letters:"di",sound:"/daɪ/"},{letters:"no",sound:"/nə/"},{letters:"saur",sound:"/sɔːr/"}] },
                { word: "computer", chinese: "电脑", phonetic: "/kəmˈpjuːtər/", audio: "computer", letterSounds: [{letters:"com",sound:"/kəm/"},{letters:"pu",sound:"/pjuː/"},{letters:"ter",sound:"/tər/"}] },
                { word: "ask", chinese: "问", phonetic: "/æsk/", audio: "ask", letterSounds: [{letters:"a",sound:"/æ/"},{letters:"sk",sound:"/sk/"}] },
                { word: "breakfast", chinese: "早餐", phonetic: "/ˈbrekfəst/", audio: "breakfast", letterSounds: [{letters:"br",sound:"/br/"},{letters:"ea",sound:"/ek/"},{letters:"k",sound:"/k/"},{letters:"fast",sound:"/fəst/"}] },
                { word: "lost", chinese: "迷路的", phonetic: "/lɒst/", audio: "lost", letterSounds: [{letters:"l",sound:"/l/"},{letters:"o",sound:"/ɒ/"},{letters:"st",sound:"/st/"}] },
                { word: "different", chinese: "不同的", phonetic: "/ˈdɪfərənt/", audio: "different", letterSounds: [{letters:"dif",sound:"/dɪf/"},{letters:"fer",sound:"/fər/"},{letters:"ent",sound:"/ənt/"}] },
                { word: "instrument", chinese: "乐器", phonetic: "/ˈɪnstrəmənt/", audio: "instrument", letterSounds: [{letters:"in",sound:"/ɪn/"},{letters:"stru",sound:"/strə/"},{letters:"ment",sound:"/mənt/"}] },
                { word: "play an instrument", chinese: "演奏乐器", phonetic: "/pleɪ ən ˈɪnstrəmənt/", audio: "play_an_instrument", letterSounds: [{letters:"in",sound:"/ɪn/"},{letters:"stru",sound:"/strə/"},{letters:"ment",sound:"/mənt/"}] }
            ],
            sentences: [
                { english: "The animals are having a party.", chinese: "动物们正在开派对。", audio: "the_animals_are_having_a_party" },
                { english: "Can you play an instrument?", chinese: "你会演奏乐器吗？", audio: "can_you_play_an_instrument" },
                { english: "I lost my way.", chinese: "我迷路了。", audio: "i_lost_my_way" },
                { english: "Let's ask the way.", chinese: "让我们问路吧。", audio: "lets_ask_the_way" },
                { word: "We're all different.", chinese: "我们都不一样。", phonetic: "/wɜːr ɔːl ˈdɪfərənt/", audio: "were_all_different" },
                { english: "This is my breakfast.", chinese: "这是我的早餐。", audio: "this_is_my_breakfast" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: Animal party",
                    participants: ["Dog", "Cat"],
                    lines: [
                        { speaker: "Dog", text: "Welcome to the animal party!", audio: "welcome_to_the_animal_party" },
                        { speaker: "Cat", text: "Thank you! What can we do here?", audio: "thank_you_what_can_we_do_here" },
                        { speaker: "Dog", text: "We can play instruments and dance!", audio: "we_can_play_instruments_and_dance" },
                        { speaker: "Cat", text: "I can play the piano.", audio: "i_can_play_the_piano" },
                        { speaker: "Dog", text: "Wonderful! Let's start.", audio: "wonderful_lets_start" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'动物'用英语怎么说？", options: ["Animal", "Plant", "People"], answer: "Animal", audio: "animal" },
                { type: "choice", question: "'演奏乐器'用英语怎么说？", options: ["Play an instrument", "Sing a song", "Dance"], answer: "Play an instrument", audio: "play_an_instrument" },
                { type: "choice", question: "'不同的'用英语怎么说？", options: ["Different", "Same", "Like"], answer: "Different", audio: "different" }
            ]
        },

        "unit6": {
            id: "unit6",
            module: "module2",
            name: "My favourite festival",
            nameCN: "我最喜欢的节日",
            topic: "学习中国传统节日",
            vocabulary: [
                { word: "festival", chinese: "节日", phonetic: "/ˈfestɪvəl/", audio: "festival", letterSounds: [{letters:"fe",sound:"/fe/"},{letters:"sti",sound:"/stɪ/"},{letters:"val",sound:"/vəl/"}] },
                { word: "Spring Festival", chinese: "春节", phonetic: "/sprɪŋ ˈfestɪvəl/", audio: "spring_festival", letterSounds: [{letters:"Sp",sound:"/sprɪŋ/"},{letters:"Fes",sound:"/festɪvəl/"}] },
                { word: "Mid-autumn Festival", chinese: "中秋节", phonetic: "/mɪd ˈɔːtəm ˈfestɪvəl/", audio: "mid_autumn_festival", letterSounds: [{letters:"Mid",sound:"/mɪd/"},{letters:"Au",sound:"/ɔːtəm/"}] },
                { word: "Dragon Boat Festival", chinese: "端午节", phonetic: "/ˈdræɡən boʊt ˈfestɪvəl/", audio: "dragon_boat_festival", letterSounds: [{letters:"Dra",sound:"/dræɡən/"},{letters:"Boat",sound:"/boʊt/"}] },
                { word: "Double Ninth Festival", chinese: "重阳节", phonetic: "/ˈdʌbəl naɪnθ ˈfestɪvəl/", audio: "double_ninth_festival", letterSounds: [{letters:"Dou",sound:"/dʌbəl/"},{letters:"Ninth",sound:"/naɪnθ/"}] },
                { word: "traditional", chinese: "传统的", phonetic: "/trəˈdɪʃənəl/", audio: "traditional", letterSounds: [{letters:"tra",sound:"/trə/"},{letters:"di",sound:"/dɪ/"},{letters:"tional",sound:"/ʃənəl/"}] },
                { word: "special", chinese: "特别的", phonetic: "/ˈspeʃəl/", audio: "special", letterSounds: [{letters:"sp",sound:"/sp/"},{letters:"ecial",sound:"/eʃəl/"}] },
                { word: "food", chinese: "食物", phonetic: "/fuːd/", audio: "food", letterSounds: [{letters:"f",sound:"/f/"},{letters:"oo",sound:"/uː/"},{letters:"d",sound:"/d/"}] },
                { word: "dumpling", chinese: "饺子", phonetic: "/ˈdʌmplɪŋ/", audio: "dumpling", letterSounds: [{letters:"du",sound:"/dʌ/"},{letters:"mp",sound:"/mp/"},{letters:"ling",sound:"/lɪŋ/"}] },
                { word: "mooncake", chinese: "月饼", phonetic: "/ˈmuːnkeɪk/", audio: "mooncake", letterSounds: [{letters:"moon",sound:"/muːn/"},{letters:"cake",sound:"/keɪk/"}] },
                { word: "zongzi", chinese: "粽子", phonetic: "/ˈzɒŋzi/", audio: "zongzi", letterSounds: [{letters:"zo",sound:"/zɒŋ/"},{letters:"ngzi",sound:"/zi/"}] }
            ],
            sentences: [
                { english: "What's your favourite festival?", chinese: "你最喜欢什么节日？", audio: "whats_your_favourite_festival" },
                { english: "My favourite festival is the Spring Festival.", chinese: "我最喜欢春节。", audio: "my_favourite_festival_is_the_spring_festival" },
                { english: "We eat dumplings at Chinese New Year.", chinese: "我们在春节吃饺子。", audio: "we_eat_dumplings_at_chinese_new_year" },
                { english: "We eat mooncakes at Mid-autumn Festival.", chinese: "我们在中秋节吃月饼。", audio: "we_eat_mooncakes_at_mid_autumn_festival" },
                { english: "Happy New Year!", chinese: "新年快乐！", audio: "happy_new_year" },
                { english: "It's a traditional festival.", chinese: "这是一个传统节日。", audio: "its_a_traditional_festival" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: Talking about festivals",
                    participants: ["Tom", "Lily"],
                    lines: [
                        { speaker: "Tom", text: "What's your favourite festival, Lily?", audio: "whats_your_favourite_festival_lily" },
                        { speaker: "Lily", text: "The Spring Festival. What about you?", audio: "the_spring_festival_what_about_you" },
                        { speaker: "Tom", text: "I like the Mid-autumn Festival.", audio: "i_like_the_mid_autumn_festival" },
                        { speaker: "Lily", text: "Why?", audio: "why" },
                        { speaker: "Tom", text: "Because I love mooncakes!", audio: "because_i_love_mooncakes" },
                        { speaker: "Lily", text: "And I love dumplings!", audio: "and_i_love_dumplings" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'春节'用英语怎么说？", options: ["Spring Festival", "Christmas", "Halloween"], answer: "Spring Festival", audio: "spring_festival" },
                { type: "choice", question: "'月饼'用英语怎么说？", options: ["Mooncake", "Dumpling", "Cake"], answer: "Mooncake", audio: "mooncake" },
                { type: "choice", question: "'节日'用英语怎么说？", options: ["Festival", "Party", "Holiday"], answer: "Festival", audio: "festival" }
            ]
        },

        "unit7": {
            id: "unit7",
            module: "module3",
            name: "My future",
            nameCN: "我的未来",
            topic: "学习谈论未来和职业规划",
            vocabulary: [
                { word: "future", chinese: "未来", phonetic: "/ˈfjuːtʃər/", audio: "future", letterSounds: [{letters:"fu",sound:"/fjuː/"},{letters:"ture",sound:"/tʃər/"}] },
                { word: "machine", chinese: "机器", phonetic: "/məˈʃiːn/", audio: "machine", letterSounds: [{letters:"ma",sound:"/mə/"},{letters:"chine",sound:"/ʃiːn/"}] },
                { word: "will", chinese: "将要", phonetic: "/wɪl/", audio: "will", letterSounds: [{letters:"w",sound:"/w/"},{letters:"ill",sound:"/ɪl/"}] },
                { word: "exercise", chinese: "锻炼/练习", phonetic: "/ˈeksərsaɪz/", audio: "exercise", letterSounds: [{letters:"ex",sound:"/eks/"},{letters:"er",sound:"/ər/"},{letters:"cise",sound:"/saɪz/"}] },
                { word: "early", chinese: "早的", phonetic: "/ˈɜːrli/", audio: "early", letterSounds: [{letters:"ea",sound:"/ɜː/"},{letters:"rly",sound:"/rli/"}] },
                { word: "easily", chinese: "容易地", phonetic: "/ˈiːzəli/", audio: "easily", letterSounds: [{letters:"ea",sound:"/iː/"},{letters:"sily",sound:"/zəli/"}] },
                { word: "hard", chinese: "努力地", phonetic: "/hɑːrd/", audio: "hard", letterSounds: [{letters:"h",sound:"/h/"},{letters:"ar",sound:"/ɑːr/"},{letters:"d",sound:"/d/"}] },
                { word: "more", chinese: "更多", phonetic: "/mɔːr/", audio: "more", letterSounds: [{letters:"m",sound:"/m/"},{letters:"ore",sound:"/ɔːr/"}] },
                { word: "in the future", chinese: "在未来", phonetic: "/ɪn ðə ˈfjuːtʃər/", audio: "in_the_future", letterSounds: [{letters:"fu",sound:"/fjuː/"},{letters:"ture",sound:"/tʃər/"}] },
                { word: "wear glasses", chinese: "戴眼镜", phonetic: "/weər ˈɡlæsɪz/", audio: "wear_glasses", letterSounds: [{letters:"gl",sound:"/ɡl/"},{letters:"asses",sound:"/æsɪz/"}] },
                { word: "do exercise", chinese: "锻炼", phonetic: "/duː ˈeksərsaɪz/", audio: "do_exercise", letterSounds: [{letters:"exe",sound:"/eks/"},{letters:"rcise",sound:"/ərsaɪz/"}] }
            ],
            sentences: [
                { english: "What will you be in the future?", chinese: "你将来想成为什么？", audio: "what_will_you_be_in_the_future" },
                { english: "I will be a scientist.", chinese: "我将是一名科学家。", audio: "i_will_be_a_scientist" },
                { english: "I will work harder.", chinese: "我会更加努力工作。", audio: "i_will_work_harder" },
                { english: "Robots will do many things.", chinese: "机器人将会做很多事情。", audio: "robots_will_do_many_things" },
                { english: "I want to be healthy.", chinese: "我想保持健康。", audio: "i_want_to_be_healthy" },
                { english: "Let's do exercise every day.", chinese: "让我们每天锻炼。", audio: "lets_do_exercise_every_day" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: My future plans",
                    participants: ["Teacher", "Amy"],
                    lines: [
                        { speaker: "Teacher", text: "What will you be in the future, Amy?", audio: "what_will_you_be_in_the_future_amy" },
                        { speaker: "Amy", text: "I will be a doctor.", audio: "i_will_be_a_doctor" },
                        { speaker: "Teacher", text: "Why?", audio: "why" },
                        { speaker: "Amy", text: "Because I want to help people.", audio: "because_i_want_to_help_people" },
                        { speaker: "Teacher", text: "That's great! You need to study hard.", audio: "thats_great_you_need_to_study_hard" },
                        { speaker: "Amy", text: "Yes, I will.", audio: "yes_i_will" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'未来'用英语怎么说？", options: ["Future", "Past", "Now"], answer: "Future", audio: "future" },
                { type: "choice", question: "'将要'用英语怎么说？", options: ["Will", "Can", "Must"], answer: "Will", audio: "will" },
                { type: "choice", question: "'锻炼'用英语怎么说？", options: ["Exercise", "Sleep", "Eat"], answer: "Exercise", audio: "exercise" }
            ]
        },

        "unit8": {
            id: "unit8",
            module: "module3",
            name: "Buying clothes",
            nameCN: "买衣服",
            topic: "学习描述衣物和购物",
            vocabulary: [
                { word: "which", chinese: "哪一个", phonetic: "/wɪtʃ/", audio: "which", letterSounds: [{letters:"wh",sound:"/w/"},{letters:"ich",sound:"/ɪtʃ/"}] },
                { word: "trousers", chinese: "裤子", phonetic: "/ˈtraʊzərz/", audio: "trousers", letterSounds: [{letters:"tr",sound:"/tr/"},{letters:"ou",sound:"/aʊ/"},{letters:"sers",sound:"/zərz/"}] },
                { word: "size", chinese: "尺寸", phonetic: "/saɪz/", audio: "size", letterSounds: [{letters:"s",sound:"/s/"},{letters:"ize",sound:"/aɪz/"}] },
                { word: "sweater", chinese: "毛衣", phonetic: "/ˈswetər/", audio: "sweater", letterSounds: [{letters:"sw",sound:"/sw/"},{letters:"e",sound:"/e/"},{letters:"ter",sound:"/tər/"}] },
                { word: "coat", chinese: "外套", phonetic: "/koʊt/", audio: "coat", letterSounds: [{letters:"c",sound:"/k/"},{letters:"oat",sound:"/oʊt/"}] },
                { word: "shoe", chinese: "鞋子", phonetic: "/ʃuː/", audio: "shoe", letterSounds: [{letters:"sh",sound:"/ʃ/"},{letters:"oe",sound:"/uː/"}] },
                { word: "emperor", chinese: "皇帝", phonetic: "/ˈempərər/", audio: "emperor", letterSounds: [{letters:"em",sound:"/emp/"},{letters:"peror",sound:"/pərər/"}] },
                { word: "only", chinese: "只/仅仅", phonetic: "/ˈoʊnli/", audio: "only", letterSounds: [{letters:"on",sound:"/oʊn/"},{letters:"ly",sound:"/li/"}] },
                { word: "nod", chinese: "点头", phonetic: "/nɒd/", audio: "nod", letterSounds: [{letters:"n",sound:"/n/"},{letters:"od",sound:"/ɒd/"}] },
                { word: "smile", chinese: "微笑", phonetic: "/smaɪl/", audio: "smile", letterSounds: [{letters:"sm",sound:"/sm/"},{letters:"ile",sound:"/aɪl/"}] },
                { word: "money", chinese: "钱", phonetic: "/ˈmʌni/", audio: "money", letterSounds: [{letters:"mo",sound:"/mʌ/"},{letters:"ney",sound:"/ni/"}] },
                { word: "keep", chinese: "保留", phonetic: "/kiːp/", audio: "keep", letterSounds: [{letters:"k",sound:"/k/"},{letters:"eep",sound:"/iːp/"}] },
                { word: "laugh", chinese: "笑", phonetic: "/læf/", audio: "laugh", letterSounds: [{letters:"la",sound:"/læ/"},{letters:"ugh",sound:"/f/"}] },
                { word: "try on", chinese: "试穿", phonetic: "/traɪ ɒn/", audio: "try_on", letterSounds: [{letters:"tr",sound:"/tr/"},{letters:"y",sound:"/aɪ/"}] },
                { word: "put on", chinese: "穿上", phonetic: "/pʊt ɒn/", audio: "put_on", letterSounds: [{letters:"pu",sound:"/pʊ/"},{letters:"t",sound:"/t/"}] },
                { word: "have a look", chinese: "看一看", phonetic: "/hæv ə lʊk/", audio: "have_a_look", letterSounds: [{letters:"lo",sound:"/lʊ/"},{letters:"ok",sound:"/k/"}] }
            ],
            sentences: [
                { english: "Which coat do you like?", chinese: "你喜欢哪件外套？", audio: "which_coat_do_you_like" },
                { english: "I like the red one.", chinese: "我喜欢红色的那件。", audio: "i_like_the_red_one" },
                { english: "Can I try it on?", chinese: "我可以试穿一下吗？", audio: "can_i_try_it_on" },
                { english: "What size do you wear?", chinese: "你穿什么尺码？", audio: "what_size_do_you_wear" },
                { english: "I'll take it.", chinese: "我买了。", audio: "ill_take_it" },
                { english: "That's too expensive.", chinese: "那太贵了。", audio: "thats_too_expensive" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: At the clothes shop",
                    participants: ["Shopkeeper", "Tom"],
                    lines: [
                        { speaker: "Shopkeeper", text: "Can I help you?", audio: "can_i_help_you" },
                        { speaker: "Tom", text: "I want to buy a sweater.", audio: "i_want_to_buy_a_sweater" },
                        { speaker: "Shopkeeper", text: "Which one do you like?", audio: "which_one_do_you_like" },
                        { speaker: "Tom", text: "The blue one, please.", audio: "the_blue_one_please" },
                        { speaker: "Shopkeeper", text: "What size?", audio: "what_size" },
                        { speaker: "Tom", text: "Size M, please.", audio: "size_m_please" },
                        { speaker: "Shopkeeper", text: "Here you are. Try it on.", audio: "here_you_are_try_it_on" },
                        { speaker: "Tom", text: "It fits well. I'll take it.", audio: "it_fits_well_ill_take_it" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'尺寸'用英语怎么说？", options: ["Size", "Colour", "Price"], answer: "Size", audio: "size" },
                { type: "choice", question: "'试穿'用英语怎么说？", options: ["Try on", "Take off", "Buy"], answer: "Try on", audio: "try_on" },
                { type: "choice", question: "'外套'用英语怎么说？", options: ["Coat", "Trousers", "Shoe"], answer: "Coat", audio: "coat" }
            ]
        },

        "unit9": {
            id: "unit9",
            module: "module3",
            name: "Seeing the doctor",
            nameCN: "看医生",
            topic: "学习身体不适和就医相关词汇",
            vocabulary: [
                { word: "ill", chinese: "生病的", phonetic: "/ɪl/", audio: "ill", letterSounds: [{letters:"i",sound:"/ɪ/"},{letters:"ll",sound:"/l/"}] },
                { word: "headache", chinese: "头痛", phonetic: "/ˈhedeɪk/", audio: "headache", letterSounds: [{letters:"he",sound:"/he/"},{letters:"ad",sound:"/deɪ/"},{letters:"ache",sound:"/k/"}] },
                { word: "fever", chinese: "发烧", phonetic: "/ˈfiːvər/", audio: "fever", letterSounds: [{letters:"fe",sound:"/fiː/"},{letters:"ver",sound:"/vər/"}] },
                { word: "should", chinese: "应该", phonetic: "/ʃʊd/", audio: "should", letterSounds: [{letters:"sh",sound:"/ʃ/"},{letters:"ould",sound:"/ʊd/"}] },
                { word: "medicine", chinese: "药", phonetic: "/ˈmedɪsɪn/", audio: "medicine", letterSounds: [{letters:"me",sound:"/me/"},{letters:"di",sound:"/dɪ/"},{letters:"cine",sound:"/sɪn/"}] },
                { word: "rest", chinese: "休息", phonetic: "/rest/", audio: "rest", letterSounds: [{letters:"r",sound:"/r/"},{letters:"e",sound:"/e/"},{letters:"st",sound:"/st/"}] },
                { word: "toothache", chinese: "牙痛", phonetic: "/ˈtuːθeɪk/", audio: "toothache", letterSounds: [{letters:"too",sound:"/tuː/"},{letters:"th",sound:"/θ/"},{letters:"ache",sound:"/eɪk/"}] },
                { word: "toothless", chinese: "没牙齿的", phonetic: "/ˈtuːθləs/", audio: "toothless", letterSounds: [{letters:"too",sound:"/tuː/"},{letters:"th",sound:"/θ/"},{letters:"less",sound:"/ləs/"}] },
                { word: "present", chinese: "礼物/出席", phonetic: "/ˈprezənt/", audio: "present", letterSounds: [{letters:"pre",sound:"/pre/"},{letters:"sent",sound:"/zənt/"}] },
                { word: "world", chinese: "世界", phonetic: "/wɜːrld/", audio: "world", letterSounds: [{letters:"wo",sound:"/wɜːr/"},{letters:"rld",sound:"/ld/"}] }
            ],
            sentences: [
                { english: "I have a headache.", chinese: "我头痛。", audio: "i_have_a_headache" },
                { english: "Do you have a fever?", chinese: "你发烧了吗？", audio: "do_you_have_a_fever" },
                { english: "You should see a doctor.", chinese: "你应该去看医生。", audio: "you_should_see_a_doctor" },
                { english: "Take this medicine three times a day.", chinese: "每天吃三次这个药。", audio: "take_this_medicine_three_times_a_day" },
                { english: "Have a good rest.", chinese: "好好休息。", audio: "have_a_good_rest" },
                { english: "I feel better now.", chinese: "我现在感觉好多了。", audio: "i_feel_better_now" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: At the doctor's",
                    participants: ["Doctor", "Tom"],
                    lines: [
                        { speaker: "Doctor", text: "What's wrong with you?", audio: "whats_wrong_with_you" },
                        { speaker: "Tom", text: "I have a headache and a fever.", audio: "i_have_a_headache_and_a_fever" },
                        { speaker: "Doctor", text: "Let me check. Oh, you have a cold.", audio: "let_me_check_oh_you_have_a_cold" },
                        { speaker: "Tom", text: "Should I take medicine?", audio: "should_i_take_medicine" },
                        { speaker: "Doctor", text: "Yes, take this medicine three times a day.", audio: "yes_take_this_medicine_three_times_a_day" },
                        { speaker: "Doctor", text: "And have a good rest.", audio: "and_have_a_good_rest" },
                        { speaker: "Tom", text: "Thank you, doctor.", audio: "thank_you_doctor" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'头痛'用英语怎么说？", options: ["Headache", "Toothache", "Fever"], answer: "Headache", audio: "headache" },
                { type: "choice", question: "'药'用英语怎么说？", options: ["Medicine", "Water", "Food"], answer: "Medicine", audio: "medicine" },
                { type: "choice", question: "'休息'用英语怎么说？", options: ["Rest", "Work", "Play"], answer: "Rest", audio: "rest" }
            ]
        },

        "unit10": {
            id: "unit10",
            module: "module4",
            name: "Great inventions",
            nameCN: "伟大的发明",
            topic: "学习中国古代四大发明",
            vocabulary: [
                { word: "invent", chinese: "发明", phonetic: "/ɪnˈvent/", audio: "invent", letterSounds: [{letters:"in",sound:"/ɪn/"},{letters:"vent",sound:"/vent/"}] },
                { word: "invention", chinese: "发明物", phonetic: "/ɪnˈvenʃən/", audio: "invention", letterSounds: [{letters:"in",sound:"/ɪn/"},{letters:"ven",sound:"/ven/"},{letters:"tion",sound:"/ʃən/"}] },
                { word: "inventor", chinese: "发明家", phonetic: "/ɪnˈventər/", audio: "inventor", letterSounds: [{letters:"in",sound:"/ɪn/"},{letters:"ven",sound:"/vent/"},{letters:"tor",sound:"/tər/"}] },
                { word: "paper", chinese: "纸", phonetic: "/ˈpeɪpər/", audio: "paper", letterSounds: [{letters:"pa",sound:"/peɪ/"},{letters:"per",sound:"/pər/"}] },
                { word: "printing", chinese: "印刷术", phonetic: "/ˈprɪntɪŋ/", audio: "printing", letterSounds: [{letters:"pr",sound:"/pr/"},{letters:"int",sound:"/ɪnt/"},{letters:"ing",sound:"/ɪŋ/"}] },
                { word: "compass", chinese: "指南针", phonetic: "/ˈkʌmpəs/", audio: "compass", letterSounds: [{letters:"co",sound:"/kʌm/"},{letters:"mpass",sound:"/pəs/"}] },
                { word: "gunpowder", chinese: "火药", phonetic: "/ˈɡʌnpaʊdər/", audio: "gunpowder", letterSounds: [{letters:"gu",sound:"/ɡʌn/"},{letters:"npo",sound:"/paʊ/"},{letters:"der",sound:"/dər/"}] },
                { word: "anyone", chinese: "任何人", phonetic: "/ˈeniwʌn/", audio: "anyone", letterSounds: [{letters:"any",sound:"/eni/"},{letters:"one",sound:"/wʌn/"}] },
                { word: "something", chinese: "某事/某物", phonetic: "/ˈsʌmθɪŋ/", audio: "something", letterSounds: [{letters:"so",sound:"/sʌ/"},{letters:"mthing",sound:"/mθɪŋ/"}] },
                { word: "everyone", chinese: "每个人", phonetic: "/ˈevrɪwʌn/", audio: "everyone", letterSounds: [{letters:"eve",sound:"/ev/"},{letters:"ry",sound:"/ri/"},{letters:"one",sound:"/wʌn/"}] }
            ],
            sentences: [
                { english: "Paper was invented in China.", chinese: "纸是中国发明的。", audio: "paper_was_invented_in_china" },
                { english: "The compass was invented long ago.", chinese: "指南针是很久以前发明的。", audio: "the_compass_was_invented_long_ago" },
                { word: "Who invented printing?", chinese: "谁发明了印刷术？", phonetic: "/huː ɪnˈventɪd ˈprɪntɪŋ/", audio: "who_invented_printing" },
                { english: "Everyone uses paper today.", chinese: "今天每个人都在使用纸。", audio: "everyone_uses_paper_today" },
                { english: "Gunpowder was used in ancient China.", chinese: "火药在中国古代被使用。", audio: "gunpowder_was_used_in_ancient_china" },
                { english: "What a great invention!", chinese: "多么伟大的发明啊！", audio: "what_a_great_invention" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: Talking about inventions",
                    participants: ["Teacher", "Tom"],
                    lines: [
                        { speaker: "Teacher", text: "What did we learn yesterday?", audio: "what_did_we_learn_yesterday" },
                        { speaker: "Tom", text: "We learned about the Four Great Inventions.", audio: "we_learned_about_the_four_great_inventions" },
                        { speaker: "Teacher", text: "What are they?", audio: "what_are_they" },
                        { speaker: "Tom", text: "Paper, printing, the compass and gunpowder.", audio: "paper_printing_the_compass_and_gunpowder" },
                        { speaker: "Teacher", text: "Well done! Do you know who invented paper?", audio: "well_done_do_you_know_who_invented_paper" },
                        { speaker: "Tom", text: "It was Cai Lun in ancient China.", audio: "it_was_cai_lun_in_ancient_china" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'发明'用英语怎么说？", options: ["Invent", "Make", "Buy"], answer: "Invent", audio: "invent" },
                { type: "choice", question: "'纸'用英语怎么说？", options: ["Paper", "Pen", "Book"], answer: "Paper", audio: "paper" },
                { type: "choice", question: "'指南针'用英语怎么说？", options: ["Compass", "Clock", "Ruler"], answer: "Compass", audio: "compass" }
            ]
        },

        "unit11": {
            id: "unit11",
            module: "module4",
            name: "Chinese festivals",
            nameCN: "中国节日",
            topic: "深入学习中国传统节日文化",
            vocabulary: [
                { word: "festival", chinese: "节日", phonetic: "/ˈfestɪvəl/", audio: "festival", letterSounds: [{letters:"fe",sound:"/fe/"},{letters:"sti",sound:"/stɪ/"},{letters:"val",sound:"/vəl/"}] },
                { word: "traditional", chinese: "传统的", phonetic: "/trəˈdɪʃənəl/", audio: "traditional", letterSounds: [{letters:"tra",sound:"/trə/"},{letters:"di",sound:"/dɪ/"},{letters:"tional",sound:"/ʃənəl/"}] },
                { word: "celebrate", chinese: "庆祝", phonetic: "/ˈseləbreɪt/", audio: "celebrate", letterSounds: [{letters:"ce",sound:"/se/"},{letters:"le",sound:"/lə/"},{letters:"brate",sound:"/breɪt/"}] },
                { word: "special", chinese: "特别的", phonetic: "/ˈspeʃəl/", audio: "special", letterSounds: [{letters:"sp",sound:"/sp/"},{letters:"ecial",sound:"/eʃəl/"}] },
                { word: "food", chinese: "食物", phonetic: "/fuːd/", audio: "food", letterSounds: [{letters:"f",sound:"/f/"},{letters:"oo",sound:"/uː/"},{letters:"d",sound:"/d/"}] },
                { word: "dumpling", chinese: "饺子", phonetic: "/ˈdʌmplɪŋ/", audio: "dumpling", letterSounds: [{letters:"du",sound:"/dʌ/"},{letters:"mp",sound:"/mp/"},{letters:"ling",sound:"/lɪŋ/"}] },
                { word: "mooncake", chinese: "月饼", phonetic: "/ˈmuːnkeɪk/", audio: "mooncake", letterSounds: [{letters:"moon",sound:"/muːn/"},{letters:"cake",sound:"/keɪk/"}] },
                { word: "zongzi", chinese: "粽子", phonetic: "/ˈzɒŋzi/", audio: "zongzi", letterSounds: [{letters:"zo",sound:"/zɒŋ/"},{letters:"ngzi",sound:"/zi/"}] },
                { word: "lantern", chinese: "灯笼", phonetic: "/ˈlæntərn/", audio: "lantern", letterSounds: [{letters:"la",sound:"/læn/"},{letters:"tern",sound:"/tərn/"}] },
                { word: "red envelope", chinese: "红包", phonetic: "/red ˈenvəloʊp/", audio: "red_envelope", letterSounds: [{letters:"re",sound:"/re/"},{letters:"d",sound:"/d/"}] }
            ],
            sentences: [
                { english: "We celebrate Chinese New Year in February.", chinese: "我们在二月庆祝春节。", audio: "we_celebrate_chinese_new_year_in_february" },
                { english: "We eat dumplings at midnight.", chinese: "我们在午夜吃饺子。", audio: "we_eat_dumplings_at_midnight" },
                { english: "Lantern Festival is in February or March.", chinese: "元宵节在二月或三月。", audio: "lantern_festival_is_in_february_or_march" },
                { english: "We eat zongzi on Dragon Boat Festival.", chinese: "我们在端午节吃粽子。", audio: "we_eat_zongzi_on_dragon_boat_festival" },
                { english: "The whole family gets together.", chinese: "全家人聚在一起。", audio: "the_whole_family_gets_together" },
                { english: "Happy festivals!", chinese: "节日快乐！", audio: "happy_festivals" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: Festival traditions",
                    participants: ["Grandma", "Li Hua"],
                    lines: [
                        { speaker: "Li Hua", text: "Grandma, what do we do at the Spring Festival?", audio: "grandma_what_do_we_do_at_the_spring_festival" },
                        { speaker: "Grandma", text: "We clean the house and decorate it.", audio: "we_clean_the_house_and_decorate_it" },
                        { speaker: "Li Hua", text: "What else?", audio: "what_else" },
                        { speaker: "Grandma", text: "We make dumplings and give red envelopes.", audio: "we_make_dumplings_and_give_red_envelopes" },
                        { speaker: "Li Hua", text: "I love the Spring Festival!", audio: "i_love_the_spring_festival" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'庆祝'用英语怎么说？", options: ["Celebrate", "Decorate", "Clean"], answer: "Celebrate", audio: "celebrate" },
                { type: "choice", question: "'传统的'用英语怎么说？", options: ["Traditional", "Modern", "Special"], answer: "Traditional", audio: "traditional" },
                { type: "choice", question: "'灯笼'用英语怎么说？", options: ["Lantern", "Light", "Candle"], answer: "Lantern", audio: "lantern" }
            ]
        },

        "unit12": {
            id: "unit12",
            module: "module4",
            name: "The giant's garden",
            nameCN: "巨人的花园",
            topic: "学习王尔德童话中的词汇",
            vocabulary: [
                { word: "giant", chinese: "巨人", phonetic: "/ˈdʒaɪənt/", audio: "giant", letterSounds: [{letters:"gi",sound:"/dʒaɪ/"},{letters:"ant",sound:"/ənt/"}] },
                { word: "garden", chinese: "花园", phonetic: "/ˈɡɑːrdən/", audio: "garden", letterSounds: [{letters:"ga",sound:"/ɡɑːr/"},{letters:"rden",sound:"/dən/"}] },
                { word: "wall", chinese: "墙", phonetic: "/wɔːl/", audio: "wall", letterSounds: [{letters:"w",sound:"/w/"},{letters:"all",sound:"/ɔːl/"}] },
                { word: "through", chinese: "穿过", phonetic: "/θruː/", audio: "through", letterSounds: [{letters:"thr",sound:"/θr/"},{letters:"ough",sound:"/uː/"}] },
                { word: "bring", chinese: "带来", phonetic: "/brɪŋ/", audio: "bring", letterSounds: [{letters:"br",sound:"/br/"},{letters:"ing",sound:"/ɪŋ/"}] },
                { word: "knock", chinese: "敲", phonetic: "/nɒk/", audio: "knock", letterSounds: [{letters:"kn",sound:"/n/"},{letters:"ock",sound:"/ɒk/"}] },
                { word: "kind", chinese: "善良的", phonetic: "/kaɪnd/", audio: "kind", letterSounds: [{letters:"k",sound:"/k/"},{letters:"ind",sound:"/aɪnd/"}] },
                { word: "happiness", chinese: "幸福", phonetic: "/ˈhæpinəs/", audio: "happiness", letterSounds: [{letters:"ha",sound:"/hæ/"},{letters:"ppi",sound:"/pɪ/"},{letters:"ness",sound:"/nəs/"}] },
                { word: "share", chinese: "分享", phonetic: "/ʃeər/", audio: "share", letterSounds: [{letters:"sh",sound:"/ʃ/"},{letters:"are",sound:"/eər/"}] },
                { word: "beautiful", chinese: "美丽的", phonetic: "/ˈbjuːtɪfəl/", audio: "beautiful", letterSounds: [{letters:"beau",sound:"/bjuː/"},{letters:"tiful",sound:"/tɪfəl/"}] },
                { word: "spring", chinese: "春天", phonetic: "/sprɪŋ/", audio: "spring", letterSounds: [{letters:"sp",sound:"/sp/"},{letters:"ring",sound:"/rɪŋ/"}] },
                { word: "summer", chinese: "夏天", phonetic: "/ˈsʌmər/", audio: "summer", letterSounds: [{letters:"su",sound:"/sʌ/"},{letters:"mmer",sound:"/mər/"}] }
            ],
            sentences: [
                { english: "The giant has a beautiful garden.", chinese: "巨人有一个美丽的花园。", audio: "the_giant_has_a_beautiful_garden" },
                { english: "The children can play in the garden now.", chinese: "孩子们现在可以在花园里玩了。", audio: "the_children_can_play_in_the_garden_now" },
                { english: "Spring is the most beautiful season.", chinese: "春天是最美丽的季节。", audio: "spring_is_the_most_beautiful_season" },
                { english: "Be kind to others.", chinese: "要对别人善良。", audio: "be_kind_to_others" },
                { english: "Let's share our happiness.", chinese: "让我们分享快乐。", audio: "lets_share_our_happiness" },
                { english: "Knock on the door before you enter.", chinese: "进来之前请敲门。", audio: "knock_on_the_door_before_you_enter" }
            ],
            dialogues: [
                {
                    title: "Dialogue 1: The kind giant",
                    participants: ["Narrator", "Giant", "Children"],
                    lines: [
                        { speaker: "Narrator", text: "The giant's garden was cold and dark.", audio: "the_giants_garden_was_cold_and_dark" },
                        { speaker: "Giant", text: "No one can come into my garden!", audio: "no_one_can_come_into_my_garden" },
                        { speaker: "Children", text: "Please let us play in your garden.", audio: "please_let_us_play_in_your_garden" },
                        { speaker: "Giant", text: "OK, you can come in. Let's share the garden.", audio: "ok_you_can_come_in_lets_share_the_garden" },
                        { speaker: "Narrator", text: "Now the garden is beautiful and full of happiness.", audio: "now_the_garden_is_beautiful_and_full_of_happiness" }
                    ]
                }
            ],
            exercises: [
                { type: "choice", question: "'巨人'用英语怎么说？", options: ["Giant", "King", "Queen"], answer: "Giant", audio: "giant" },
                { type: "choice", question: "'花园'用英语怎么说？", options: ["Garden", "Park", "Forest"], answer: "Garden", audio: "garden" },
                { type: "choice", question: "'善良的'用英语怎么说？", options: ["Kind", "Cruel", "Mean"], answer: "Kind", audio: "kind" }
            ]
        }
    }
},"""

# 读取原文件
with open('./english-learning-app/index-standalone.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 替换四年级下册数据
grade4_2_old = """// ==================== 四年级上册 ====================
    // [Lazy] 四年级上册 - 详细数据按需加载
    'grade4_1': {id:'grade4_1',name:'四年级上',modules:[],units:{}},

    // [Lazy] 四年级下册 - 详细数据按需加载
    'grade4_2': {id:'grade4_2',name:'四年级下册',modules:[],units:{}},

    // [Lazy] 五年级上册 - 详细数据按需加载
    'grade5_1': {id:'grade5_1',name:'五年级上册',modules:[],units:{}},

    // [Lazy] 五年级下册 - 详细数据按需加载
    'grade5_2': {id:'grade5_2',name:'五年级下册',modules:[],units:{}},"""

grade4_2_new = """// ==================== 四年级下册 ====================
""" + grade4_2_data + """

// ==================== 五年级下册 ====================
""" + grade5_2_data

# 执行替换
new_content = content.replace(grade4_2_old, grade4_2_new)

# 检查替换是否成功
if new_content == content:
    print("ERROR: Pattern not found!")
else:
    # 保存文件
    with open('./english-learning-app/index-standalone.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("SUCCESS: File updated!")
    print(f"Grade 4 data length: {len(grade4_2_data)}")
    print(f"Grade 5 data length: {len(grade5_2_data)}")
