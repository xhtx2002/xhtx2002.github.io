// data.js

const poems = [
    {
      id: 1,
      grade: 'primary', // 小学
      title: '静夜思',
      content: `床前明月光，
疑是地上霜。
举头望明月，
低头思故乡。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
      words: [
        {
          word: '床',
          meaning: '井栏或窗前，不是现代的床',
          audio: 'audio/1/床.mp3'
        },
        {
          word: '疑',
          meaning: '好像，表示猜测',
          audio: 'audio/1/疑.mp3'
        },
        {
            word: '举',
            meaning: '抬起',
            audio: 'audio/1/举.mp3'
        },
        {
            word: '望',
            meaning: '仰望，远望，表示抬头看',
            audio: 'audio/1/望.mp3'
        }
        // 可以继续添加更多的古今异义词
      ]
    },
    {
        id: 2,
        grade: 'primary', // 小学
        title: '春晓',
        content: `春眠不觉晓，
处处闻啼鸟。
夜来风雨声，
花落知多少。`,
sentences: [
  {
    text: '春眠不觉晓，',
    audio: 'audio/2/春眠不觉晓.mp3'
  },
  {
    text: '处处闻啼鸟。',
    audio: 'audio/2/处处闻啼鸟.mp3'
  },
  {
    text: '夜来风雨声，',
    audio: 'audio/2/夜来风雨声.mp3'
  },
  {
    text: '花落知多少。',
    audio: 'audio/2/花落知多少.mp3'
  }
],
        words: [
          {
            word: '晓',
            meaning: '天亮、清晨',
            audio: 'audio/2/晓.mp3'
          },
          {
            word: '闻',
            meaning: '听到，听见',
            audio: 'audio/2/闻.mp3'
          },
          {
              word: '啼',
              meaning: '鸟鸣叫，特指鸟类发出的声音',
              audio: 'audio/2/啼.mp3'
         },
        {
              word: '夜来',
              meaning: '昨夜，昨晚',
              audio: 'audio/2/夜来.mp3'
        }
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 3,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
sentences: [
  {
    text: '锄禾日当午，',
    audio: 'audio/3/锄禾日当午.mp3'
  },
  {
    text: '汗滴禾下土。',
    audio: 'audio/3/汗滴禾下土.mp3'
  },
  {
    text: '谁知盘中餐，',
    audio: 'audio/3/谁知盘中餐.mp3'
  },
  {
    text: '粒粒皆辛苦。',
    audio: 'audio/3/粒粒皆辛苦.mp3'
  }
],
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/3/锄.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/3/禾.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/3/日.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/3/当午.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/3/餐.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 4,
        grade: 'primary', // 小学
        title: '咏鹅',
        content: `鹅，鹅，鹅，
曲项向天歌。
白毛浮绿水，
红掌拨清波。`,
sentences: [
  {
    text: '鹅，鹅，鹅，',
    audio: 'audio/4/鹅鹅鹅.mp3'
  },
  {
    text: '曲项向天歌。',
    audio: 'audio/4/曲项向天歌.mp3'
  },
  {
    text: '白毛浮绿水，',
    audio: 'audio/4/白毛浮绿水.mp3'
  },
  {
    text: '红掌拨清波。',
    audio: 'audio/4/红掌拨清波.mp3'
  }
],
        words: [
          {
            word: '咏',
            meaning: '歌颂，吟诵',
            audio: 'audio/咏.mp3'
          },
          {
            word: '项',
            meaning: '脖子',
            audio: 'audio/4/项.mp3'
          },
          {
              word: '拨',
              meaning: '划动，推动',
              audio: 'audio/4/拨.mp3'
         },
        {
              word: '清波',
              meaning: '清澈的水波',
              audio: 'audio/4/清波.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 5,
        grade: 'primary', // 小学
        title: '山行',
        content: `远上寒山石径斜，
白云深处有人家。
停车坐爱枫林晚，
霜叶红于二月花。`,
sentences: [
  {
    text: '远上寒山石径斜，',
    audio: 'audio/5/远上寒山石径斜.mp3'
  },
  {
    text: '白云深处有人家。',
    audio: 'audio/5/白云深处有人家.mp3'
  },
  {
    text: '停车坐爱枫林晚，',
    audio: 'audio/5/停车坐爱枫林晚.mp3'
  },
  {
    text: '霜叶红于二月花。',
    audio: 'audio/5/霜叶红于二月花.mp3'
  }
],
        words: [
          {
            word: '上',
            meaning: '向上（攀登）',
            audio: 'audio/5/上.mp3'
          },
          {
            word: '寒',
            meaning: '使人感到凉意',
            audio: 'audio/5/寒.mp3'
          },
          {
              word: '径',
              meaning: '小路',
              audio: 'audio/5/径.mp3'
         },
        {
              word: '斜',
              meaning: '歪斜',
              audio: 'audio/5/斜.mp3'
        },
        {
            word: '生',
            meaning: '出现',
            audio: 'audio/5/生.mp3'
        },
        {
          word: '坐',
          meaning: '因为',
          audio: 'audio/5/坐.mp3'
      },
      {
        word: '于',
        meaning: '比',
        audio: 'audio/5/于.mp3'
    },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 6,
        grade: 'primary', // 小学
        title: '枫桥夜泊',
        content: `月落乌啼霜满天，
江枫渔火对愁眠。
姑苏城外寒山寺，
夜半钟声到客船。`,
sentences: [
  {
    text: '月落乌啼霜满天，',
    audio: 'audio/6/月落乌啼霜满天.mp3'
  },
  {
    text: '江枫渔火对愁眠。',
    audio: 'audio/6/江枫渔火对愁眠.mp3'
  },
  {
    text: '姑苏城外寒山寺，',
    audio: 'audio/6/姑苏城外寒山寺.mp3'
  },
  {
    text: '夜半钟声到客船。',
    audio: 'audio/6/夜半钟声到客船.mp3'
  }
],
        words: [
          {
            word: '泊',
            meaning: '船停靠在岸边',
            audio: 'audio/6/泊.mp3'
          },
          {
            word: '渔',
            meaning: '渔船',
            audio: 'audio/6/渔.mp3'
          },
          {
              word: '火',
              meaning: '灯火',
              audio: 'audio/6/火.mp3'
         },
        {
              word: '对',
              meaning: '面对',
              audio: 'audio/6/对.mp3'
        },
        {
            word: '姑苏',
            meaning: '苏州的古称',
            audio: 'audio/6/姑苏.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 7,
        grade: 'primary', // 小学
        title: '望庐山瀑布',
        content: `日照香炉生紫烟，
遥看瀑布挂前川。
飞流直下三千尺，
疑是银河落九天。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '香炉',
            meaning: '香炉峰，庐山的一座山峰',
            audio: 'audio/7/香炉.mp3'
          },
          {
            word: '生',
            meaning: '生起，产生',
            audio: 'audio/7/生.mp3'
          },
          {
              word: '川',
              meaning: '河流',
              audio: 'audio/7/川.mp3'
         },
        {
              word: '飞流',
              meaning: '形容水流得非常迅速，好像飞下来一样',
              audio: 'audio/7/飞流.mp3'
        },
        {
            word: '疑',
            meaning: '好像，表示猜测',
            audio: 'audio/7/疑.mp3'
        },
        {
          word: '九天',
          meaning: '古代传说中天的最高层，指极高的地方',
          audio: 'audio/7/九天.mp3'
      },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 8,
        grade: 'primary', // 小学
        title: '赠汪伦',
        content: `李白乘舟将欲行，
忽闻岸上踏歌声。
桃花潭水深千尺，
不及汪伦送我情。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '行',
            meaning: '离开，出发',
            audio: 'audio/8/行.mp3'
          },
          {
            word: '踏歌',
            meaning: '边走边唱歌',
            audio: 'audio/8/踏歌.mp3'
          },
          {
              word: '不及',
              meaning: '比不上，赶不上',
              audio: 'audio/8/不及.mp3'
         },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 9,
        grade: 'primary', // 小学
        title: '早发白帝城',
        content: `朝辞白帝彩云间，
千里江陵一日还。
两岸猿声啼不住，
轻舟已过万重山。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '早',
            meaning: '早晨',
            audio: 'audio/9/早.mp3'
          },
          {
            word: '发',
            meaning: '出发，启程',
            audio: 'audio/9/发.mp3'
          },
          {
              word: '辞',
              meaning: '告别，告辞',
              audio: 'audio/9/辞.mp3'
         },
        {
              word: '白帝',
              meaning: '指白帝城，位于今重庆市奉节县',
              audio: 'audio/9/白帝.mp3'
        },
        {
            word: '还',
            meaning: '返回，回去',
            audio: 'audio/9/还.mp3'
        },
        {
          word: '江陵',
          meaning: '古代地名，位于今湖北省荆州市',
          audio: 'audio/9/江陵.mp3'
      },
      {
        word: '轻舟',
        meaning: '轻便的船只',
        audio: 'audio/9/轻舟.mp3'
    },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 10,
        grade: 'primary', // 小学
        title: '黄鹤楼送孟浩然之广陵',
        content: `故人西辞黄鹤楼，
烟花三月下扬州。
孤帆远影碧空尽，
唯见长江天际流。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '故人',
            meaning: '老朋友',
            audio: 'audio/10/故人.mp3'
          },
          {
            word: '烟花',
            meaning: '指春天的繁花似锦和烟雾迷蒙的景象',
            audio: 'audio/10/烟花.mp3'
          },
          {
              word: '下',
              meaning: '顺流而下，前往',
              audio: 'audio/10/下.mp3'
         },
        {
              word: '孤帆',
              meaning: '孤单远行的船只',
              audio: 'audio/10/孤帆.mp3'
        },
        {
            word: '碧空',
            meaning: '蓝天',
            audio: 'audio/10/碧空.mp3'
        },
        {
          word: '尽',
          meaning: '消失，消尽',
          audio: 'audio/10/尽.mp3'
      },
      {
        word: '唯',
        meaning: '只，仅仅',
        audio: 'audio/10/唯.mp3'
    },
    {
      word: '天际',
      meaning: '天边，天空的尽头',
      audio: 'audio/10/天际.mp3'
  },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 11,
        grade: 'primary', // 小学
        title: '绝句',
        content: `两个黄鹂鸣翠柳，
一行白鹭上青天。
窗含西岭千秋雪，
门泊东吴万里船。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '绝句',
            meaning: '一种诗体，通常为四句，押韵整齐',
            audio: 'audio/11/绝句.mp3'
          },
          {
            word: '含',
            meaning: '包含，包裹在里面',
            audio: 'audio/11/含.mp3'
          },
          {
              word: '西岭',
              meaning: '指西边的山岭',
              audio: 'audio/11/西岭.mp3'
         },
        {
              word: '千秋',
              meaning: '千年，形容时间久远',
              audio: 'audio/11/千秋.mp3'
        },
        {
            word: '东吴',
            meaning: '指东吴地区，古代地名，今江苏、浙江一带',
            audio: 'audio/11/东吴.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 12,
        grade: 'primary', // 小学
        title: '春夜喜雨',
        content: `好雨知时节，
当春乃发生。
随风潜入夜，
润物细无声。
野径云俱黑，
江船火独明。
晓看红湿处，
花重锦官城。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '发生',
            meaning: '生长，指植物在春雨滋润下开始生长',
            audio: 'audio/12/发生.mp3'
          },
          {
            word: '潜',
            meaning: '悄悄地，暗中',
            audio: 'audio/12/潜.mp3'
          },
          {
              word: '润',
              meaning: '滋润，浸润',
              audio: 'audio/12/润.mp3'
         },
        {
              word: '物',
              meaning: '指万物，主要是指植物',
              audio: 'audio/12/物.mp3'
        },
        {
            word: '野',
            meaning: '田野，郊外',
            audio: 'audio/12/野.mp3'
        },
        {
          word: '俱',
          meaning: '全，都',
          audio: 'audio/12/俱.mp3'
      },
      {
        word: '独',
        meaning: '只有，唯一',
        audio: 'audio/12/独.mp3'
    },
    {
      word: '锦官城',
      meaning: '指成都，古时成都以产锦闻名',
      audio: 'audio/12/锦官城.mp3'
  },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 13,
        grade: 'primary', // 小学
        title: '绝句四首・其三',
        content: `迟日江山丽，
春风花草香。
泥融飞燕子，
沙暖睡鸳鸯。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '迟日',
            meaning: '指春天日照时间渐长的日子',
            audio: 'audio/13/迟日.mp3'
          },
          {
            word: '融',
            meaning: '融化，形容泥土在春天温暖下变得松软',
            audio: 'audio/13/融.mp3'
          },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 14,
        grade: 'primary', // 小学
        title: '登鹳雀楼',
        content: `白日依山尽，
黄河入海流。
欲穷千里目，
更上一层楼。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '依',
            meaning: '依附，贴近，靠着',
            audio: 'audio/14/依.mp3'
          },
          {
            word: '穷',
            meaning: '穷尽，达到极限',
            audio: 'audio/14/穷.mp3'
          },
          {
            word: '千里',
            meaning: '古义指极远的距离',
            audio: 'audio/14/千里.mp3'
        },
          {
              word: '目',
              meaning: '视野，目光',
              audio: 'audio/14/目.mp3'
         },
        {
              word: '更',
              meaning: '再，再一次',
              audio: 'audio/14/更.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 15,
        grade: 'primary', // 小学
        title: '江南春',
        content: `千里莺啼绿映红，
水村山郭酒旗风。
南朝四百八十寺，
多少楼台烟雨中。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '映',
            meaning: '映照，衬托',
            audio: 'audio/15/映.mp3'
          },
          {
            word: '水村',
            meaning: '水边的村庄',
            audio: 'audio/15/水村.mp3'
          },
          {
              word: '山郭',
              meaning: '山间的小城或村落',
              audio: 'audio/15/山郭.mp3'
         },
        {
              word: '酒旗',
              meaning: '酒店门外用来招揽顾客的旗帜',
              audio: 'audio/15/酒旗.mp3'
        },
        {
            word: '楼台',
            meaning: '楼阁和台榭',
            audio: 'audio/15/楼台.mp3'
        },
        {
          word: '烟雨',
          meaning: '细雨朦胧、雾气笼罩的雨天',
          audio: 'audio/15/烟雨.mp3'
      },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 16,
        grade: 'primary', // 小学
        title: '清明',
        content: `清明时节雨纷纷，
路上行人欲断魂。
借问酒家何处有？
牧童遥指杏花村。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '清明',
            meaning: '二十四节气之一，指清明节，通常在春季',
            audio: 'audio/16/清明.mp3'
          },
          {
            word: '纷纷',
            meaning: '形容雨多，雨丝不断落下的样子',
            audio: 'audio/16/纷纷.mp3'
          },
          {
              word: '断魂',
              meaning: '形容人极度悲伤、失魂落魄',
              audio: 'audio/16/断魂.mp3'
         },
        {
              word: '借问',
              meaning: '请问，询问',
              audio: 'audio/16/借问.mp3'
        },
        {
            word: '酒家',
            meaning: '古代供人喝酒的小酒馆或酒店',
            audio: 'audio/16/酒家.mp3'
        },
        {
          word: '何处',
          meaning: '哪里',
          audio: 'audio/16/何处.mp3'
      },
      {
        word: '牧童',
        meaning: '放牛的孩子',
        audio: 'audio/16/牧童.mp3'
    },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 17,
        grade: 'primary', // 小学
        title: '秋夕',
        content: `银烛秋光冷画屏，
轻罗小扇扑流萤。
天阶夜色凉如水，
卧看牵牛织女星。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '秋光',
            meaning: '秋天的月光或秋天的景色',
            audio: 'audio/17/秋光.mp3'
          },
          {
            word: '画屏',
            meaning: '指装饰有绘画图案的屏风',
            audio: 'audio/17/画屏.mp3'
          },
          {
              word: '轻罗',
              meaning: '轻薄的丝织品，通常用来做衣服或扇子',
              audio: 'audio/17/轻罗.mp3'
         },
        {
              word: '小扇',
              meaning: '小巧的扇子',
              audio: 'audio/17/小扇.mp3'
        },
        {
            word: '扑',
            meaning: '轻轻拍打',
            audio: 'audio/17/扑.mp3'
        },
        {
          word: '流萤',
          meaning: '废物的萤火虫',
          audio: 'audio/17/流萤.mp3'
      },
      {
        word: '天阶',
        meaning: '指宫殿前的台阶',
        audio: 'audio/17/天阶.mp3'
    },
    {
      word: '牵牛织女',
      meaning: '指的是天上的两颗星星，传说中是牛郎和织女',
      audio: 'audio/17/牵牛织女.mp3'
  },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 18,
        grade: 'primary', // 小学
        title: '泊船瓜洲',
        content: `京口瓜洲一水间，
钟山只隔数重山。
春风又绿江南岸，
明月何时照我还。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '京口',
            meaning: '古地名，今江苏省镇江市',
            audio: 'audio/18/京口.mp3'
          },
          {
            word: '瓜洲',
            meaning: '古地名，位于今江苏扬州南部长江边',
            audio: 'audio/18/瓜洲.mp3'
          },
          {
              word: '一水间',
              meaning: '隔着一条江河的距离',
              audio: 'audio/18/一水间.mp3'
         },
        {
              word: '钟山',
              meaning: '今南京的紫金山，古时称为钟山',
              audio: 'audio/18/钟山.mp3'
        },
        {
            word: '绿',
            meaning: '使......变绿',
            audio: 'audio/18/绿.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 19,
        grade: 'primary', // 小学
        title: '夜宿山寺',
        content: `危楼高百尺，
手可摘星辰。
不敢高声语，
恐惊天上人。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '危',
            meaning: '高而险峻',
            audio: 'audio/19/危.mp3'
          },
          {
            word: '恐',
            meaning: '害怕',
            audio: 'audio/19/恐.mp3'
          },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 20,
        grade: 'primary', // 小学
        title: '早春呈水部十八员外',
        content: `天街小雨润如酥，
草色遥看近却无。
最是一年春好处，
绝胜烟柳满皇都。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '酥',
            meaning: '酥油',
            audio: 'audio/20/酥.mp3'
          },
          {
            word: '绝胜',
            meaning: '远远胜过，比......好得多',
            audio: 'audio/20/绝胜.mp3'
          },
          {
              word: '烟柳',
              meaning: '春天时柳树在雾气中的柔美景象',
              audio: 'audio/20/烟柳.mp3'
         },
        {
              word: '皇都',
              meaning: '指京城',
              audio: 'audio/20/皇都.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 21,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 22,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
sentences: [
  {
    text: '床前明月光，',
    audio: 'audio/1/床前明月光.mp3'
  },
  {
    text: '疑是地上霜。',
    audio: 'audio/1/疑是地上霜.mp3'
  },
  {
    text: '举头望明月，',
    audio: 'audio/1/举头望明月.mp3'
  },
  {
    text: '低头思故乡。',
    audio: 'audio/1/低头思故乡.mp3'
  }
],
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 23,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 24,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 25,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 26,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 27,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 28,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 29,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 30,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 31,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 32,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 33,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 34,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 35,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 36,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 37,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 38,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 39,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },      
      {
        id: 40,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },      
      {
        id: 41,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },      
      {
        id: 42,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },      
      {
        id: 43,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },     
      {
        id: 44,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 45,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 46,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 47,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 48,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 49,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
      {
        id: 50,
        grade: 'primary', // 小学
        title: '悯农',
        content: `锄禾日当午，
汗滴禾下土。
谁知盘中餐，
粒粒皆辛苦。`,
        words: [
          {
            word: '锄',
            meaning: '指用锄头耕作',
            audio: 'audio/chu.mp3'
          },
          {
            word: '禾',
            meaning: '指庄稼，尤其是指稻谷',
            audio: 'audio/he.mp3'
          },
          {
              word: '日',
              meaning: '太阳',
              audio: 'audio/ri.mp3'
         },
        {
              word: '当午',
              meaning: '正午，指太阳正好在中天的时候',
              audio: 'audio/dangwu.mp3'
        },
        {
            word: '餐',
            meaning: '指饭食',
            audio: 'audio/can.mp3'
        },
          // 可以继续添加更多的古今异义词
        ]
      },
    // 可以继续添加更多的诗词
  ];