const BASE_URL = import.meta.env.BASE_URL;

export const siteContent = {
  webName: 'knitting　MayuMayu',
  hero: {
    images: [
      `${BASE_URL}images/knittingBack_1.jpg`,
      `${BASE_URL}images/knittingBack_2.jpg`,
      `${BASE_URL}images/knittingBack_3.jpg`,
      `${BASE_URL}images/knittingBack_4.jpg`,      
    ],
    label: 'knitting　MayuMayu',
    title: '暮らしの中にときめく余白を',
    description: '一つ一つ丁寧に手作りした編み物が、日々の暮らしに彩りを添えます。コットンやリネン、シルクなどの素材感を大切にした	\r\nパステルカラーの作品が得意です。',
    concept: 'concept',
    conceptText: '見るだけで、なんだかワクワクしてくるような「ときめき」をプラスする編み物をお届けします。',
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
  worksDetail: '日々にときめきを添える手仕事の記録',
  works: [
    {
      id: '1',
      title: 'レースリボンの麦わら帽子',
      description: 'こちらは、オリジナル作品です。',
      detail: '夏の日差しよけに活躍する麦わら帽子。洗える糸で作っているため、汗をかいても簡単にお手入れできます。',
      image: [
        `${BASE_URL}images/whiteStrawHat_1.jpg`,
        `${BASE_URL}images/whiteStrawHat_2.jpg`,
        `${BASE_URL}images/whiteStrawHat_3.jpg`,
      ],
      accent: '#d9b162',
    },
    {
      id: '2',
      title: 'モチーフつなぎのバケットバッグ',
      description: 'こちらは、書籍（NHKすてきにハンドメイド）を参考に作りました。',
      detail: 'こちらの作品は、『NHKすてきにハンドメイド　かぎ針で編む春夏糸のバッグと帽子』の編み図を参考に、技術向上のため制作したものです。書籍等の著作権に配慮し、こちらの作品の販売･オーダー受付はしておりません。',
      image: [
        `${BASE_URL}images/pinkBag_1.jpg`,
        `${BASE_URL}images/pinkBag_2.jpg`,
        `${BASE_URL}images/pinkBag_3.jpg`,
      ],
      accent: '#f57bbe',
    },
    {
      id: '3',
      title: 'コットン糸のバケハ',
      description: 'こちらは、happyknittingmama/ハピママさんの編み図を参考に作りました。',
      detail: 'コットン糸で編んでいるため、コンパクトに折りたたんで持ち運べます。春先から秋口まで活躍する、やわらかな色合いのバケハです。色違いでのオーダーも受付可能です。',
      image: [
        `${BASE_URL}images/strawHat_1.jpg`,
        `${BASE_URL}images/strawHat_2.jpg`,
        `${BASE_URL}images/strawHat_3.jpg`,
      ],
      accent: '#b6b678',
    },
    {
      id: '4',
      title: '巾着付きのハンドバック',
      description: 'こちらは、LiLi nana*さんの動画を参考に作りました。',
      detail: 'ハンドバックは柔らかなフォルムと、どんなコーディネートにも合う色で、さりげなく存在感を放つ一品です。小さく見えて、内側には巾着がついているため、意外と収納力があります。',
      image: [
        `${BASE_URL}images/handBag_1.jpg`,
        `${BASE_URL}images/handBag_2.jpg`,
      ],
      accent: '#f3d39d',
    },
    {
      id: '5',
      title: '透かし編みの大きめコースター',
      description: 'こちらは、YouTubeの動画を参考に作りました。',
      detail: '急須や湯飲み、テーブルの小物置きに活躍する大きめのコースターです。繊細な編み目が、リラックスタイムをより特別なものにしてくれます。',
      image: [
        `${BASE_URL}images/doily_1.jpg`, 
        `${BASE_URL}images/doily_2.jpg`],
      accent: '#9ee097',
    },
        {
      id: '6',
      title: '三色巾着バッグ',
      description: 'こちらは、オリジナル作品です。',
      detail: 'ポーチより大きめで、ちょっとしたお出かけにぴったりなサイズの巾着バッグです。小さなリボンのような特殊な糸を使っているため、人とあまり被らないフワフワの素材感が特徴です。',
      image: [
        `${BASE_URL}images/purse_1.jpg`
      ],
      accent: '#ed89b1',
    },
    {
      id: '7',
      title: 'お花のミニマルチマット',
      description: 'こちらは、YouTubeの動画を参考に作りました。',
      detail: 'テーブルだけでなく、玄関やベッドサイドなど、ちょっとしたスペースに置いて楽しめるマルチマットです。色違いのお花のモチーフが、空間にさりげない華やかさをプラスしてくれます。',
      image: [
        `${BASE_URL}images/mat_1.jpg`
      ],
      accent: '#7dceee',
    },
  ],
  about: {
    title: 'ニッティングまゆまゆ',
    text1: '編み物を始めたきっかけは、ふと何気なく「作ってみよう」と思ったことからでした。一針一針編み進め、形になっていく達成感や、人工的なものにはない手作りならではの温かみに、いつの間にか魅了されていきました。',
    text2: '「あの人は普段こんな服を着ているから、この色が似合うかもしれない」「このデザインなら、きっと喜んでくれそう」そんなふうに、使う人の笑顔や暮らしを想像しながら糸を選び、作品を作る時間が大好きです。',
    text3: '生きていく中では、効率や必要なものばかりが重視されがちです。でも、一見「不必要なもの」に思えるかもしれない、ちいさな癒やしや、心がキュンとする楽しみが、心豊かに生きていくために必要なものだと思っています。',
    text4: '細かい部分も妥協せず、編むことの楽しさを大切にしながら、日々技術を磨いています。ニッティングまゆまゆの作品が、あなたにとって日常のささやかな楽しみや、ときめきになりますように。',
    image: `${BASE_URL}images/mayu_1.jpg`,
    note: '使う人の笑顔を浮かべながら、一針ずつ大切に。',
  },
  future: {
    eyebrow: 'これから',
    title: '準備中のコンテンツ',
    text1: '本日はご覧いただきありがとうございます。新しい作品や活動情報については、Instagramで随時更新していきますので、ぜひフォローしてお待ちいただけると嬉しいです。',
    text2: '今後は、メルカリ等での販売も予定しています。「色違いが欲しいな」「この商品についてもっと知りたい」などございましたら、InstagramのDMからでも、お気軽にお問い合わせください。',
    instagram: 'https://www.instagram.com/knitting_mayumayu?igsh=MTFiZXFvYXY3NjlwaQ%3D%3D&utm_source=qr',
  },
  CautionaryNote: '※一部作品は著作権の問題から販売できないものもございます。詳細につきましては、作品紹介ページの各作品の説明をご覧ください。',
};
