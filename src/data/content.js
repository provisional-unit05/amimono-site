const BASE_URL = import.meta.env.BASE_URL;

export const siteContent = {
  webName: 'KnittingMayuMayu',
  subWebName: 'やさしい編み物の時間',
  hero: {
    images: [
      `${BASE_URL}images/knittingBack_1.jpg`,
      `${BASE_URL}images/knittingBack_2.jpg`,
      `${BASE_URL}images/knittingBack_3.jpg`,
    ],
    label: '編み物ギャラリー',
    title: 'やさしさを編む、日常のための作品たち',
    description: '手で紡いだ編み物が、暮らしにしっくり馴染む。白を基調にしたやさしい表情のデザインで、静かな存在感を届けます。',
    concept: 'コンセプト',
    conceptText: '日々の暮らしに寄り添うやさしい編み物。白を基調に、素材の風合いと心地よさを大切にした作品をお届けします。',
    instagramUrl: 'https://www.instagram.com/',
  },
  menu: [
    { id: 'works', label: '作品紹介', path: '/works' },
    { id: 'about', label: '自己紹介', path: '/about' },
    { id: 'future', label: 'これから', path: '/future' },
  ],
  imageGallery: [
    `${BASE_URL}images/doily_1.jpg`,
    `${BASE_URL}images/handBag_1.jpg`,
    `${BASE_URL}images/mat_1.jpg`,
    `${BASE_URL}images/pinkBag_1.jpg`, 
    `${BASE_URL}images/strawHat_1.jpg`,
    `${BASE_URL}images/whiteStrawHat_1.jpg`,
  ],
  worksTitle: '作品紹介',
  worksDetail: '日常に寄り添うやさしい編み物を紹介します。白を基調に、素材の風合いと心地よさを大切にした作品たちです。',
  works: [
    {
      id: '1',
      title: '麦わら帽子（沖縄の）',
      description: '夏らしい表情を添える、ナチュラルな編み飾り。',
      detail: '沖縄の麦わら帽子をベースに、白い糸で編んだ飾りをあしらいました。軽やかな素材感とシンプルなデザインで、夏のコーディネートにぴったりの一品です。',
      image: [
        `${BASE_URL}images/whiteStrawHat_1.jpg`,
        `${BASE_URL}images/whiteStrawHat_2.jpg`,
        `${BASE_URL}images/whiteStrawHat_3.jpg`,
      ],
      accent: '#d9b162',
    },
    {
      id: '2',
      title: 'pinkのハンドバッグ',
      description: '軽やかな編み地とシンプルなデザインで、どんなスタイルにも合わせやすいバッグです。',
      detail: 'ピンクのハンドバッグは、軽やかな編み地とシンプルなデザインで、どんなスタイルにも合わせやすい一品です。',
      image: [
        `${BASE_URL}images/pinkBag_1.jpg`,
        `${BASE_URL}images/pinkBag_2.jpg`,
        `${BASE_URL}images/pinkBag_3.jpg`,
      ],
      accent: '#f57bbe',
    },
    {
      id: '3',
      title: '麦わら帽子',
      description: 'やわらかな色合いとコンパクトなサイズ感で、持ち歩きやすい一品。',
      detail: '麦わら帽子は、やわらかな色合いとコンパクトなサイズ感で、持ち歩きやすい一品です。',
      image: [
        `${BASE_URL}images/strawHat_1.jpg`,
        `${BASE_URL}images/strawHat_2.jpg`,
        `${BASE_URL}images/strawHat_3.jpg`,
      ],
      accent: '#b6b678',
    },
    {
      id: '4',
      title: 'ハンドバック',
      description: '柔らかなフォルムと控えめな色で、さりげなく存在感を放つ一品。',
      detail: 'ハンドバックは、柔らかなフォルムと控えめな色で、さりげなく存在感を放つ一品です。',
      image: [
        `${BASE_URL}images/handBag_1.jpg`,
        `${BASE_URL}images/handBag_2.jpg`,
      ],
      accent: '#a6e38a',
    },
    {
      id: '5',
      title: 'ドイリーの花かざり',
      description: '窓辺に馴染む、繊細な雰囲気を纏った編みモチーフ。',
      detail: 'ドイリーの花かざりは、窓辺に馴染む、繊細な雰囲気を纏った編みモチーフです。白い糸で編まれた花の形が、やさしい光を通しながらお部屋を彩ります。',
      image: [
        `${BASE_URL}images/doily_1.jpg`, 
        `${BASE_URL}images/doily_2.jpg`],
      accent: '#aeb1f4',
    },
        {
      id: '6',
      title: '巾着バッグ',
      description: 'やわらかな色合いとコンパクトなサイズ感で、持ち歩きやすい一品。',
      detail: '巾着バッグは、やわらかな色合いとコンパクトなサイズ感で、持ち歩きやすい一品です。',
      image: [
        `${BASE_URL}images/purse_1.jpg`
      ],
      accent: '#92e2b6',
    },
    {
      id: '7',
      title: 'お花のマット',
      description: 'お部屋にやさしいアクセントを添える、花モチーフのラグマット。',
      detail: 'お花のマットは、お部屋にやさしいアクセントを添える、花モチーフのラグマットです。',
      image: [
        `${BASE_URL}images/mat_1.jpg`
      ],
      accent: '#92e2b6',
    },
  ],
  about: {
    title: 'まゆまゆについて',
    lead: '自然の風景ややわらかな光にインスパイアされた、日常に寄り添う編み物を制作しています。',
    body: '手仕事のあたたかさを大切にしつつ、白を基調とした洗練された空気感を目指しています。素材と色のバランスを意識しながら、使いやすさも考えたデザインをお届けします。',
    note: 'これからも、静かな存在感のある編み物を少しずつ形にしていきます。',
  },
  future: {
    eyebrow: 'これから',
    title: '準備中のコンテンツ',
    description: '本日はご覧いただきありがとうございます。新しい作品や活動情報についてはInstagramで随時更新していきますので、ぜひフォローしてお待ちください。今後の展開にご期待いただけると嬉しいです。',
  },
  CautionaryNote: '※掲載している作品はすべて商用目的の作品ではありません。あくまでデザインの参考例としてご覧ください。',
};
