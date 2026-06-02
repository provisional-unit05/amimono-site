export const siteContent = {
  hero: {
    backgroundImage: '/images/knitting.jpg',
    images: [
      '/images/knittingBack1.jpg',
      '/images/knittingBack2.jpg',
      '/images/knittingBack3.jpg',
      '/images/knittingBack4.jpg'
    ],
    label: '編み物ギャラリー',
    title: 'やさしさを編む、日常のための作品たち',
    description: '手で紡いだ編み物が、暮らしにしっくり馴染む。白を基調にしたやさしい表情のデザインで、静かな存在感を届けます。',
    instagramUrl: 'https://www.instagram.com/',
  },
  menu: [
    { id: 'works', label: '作品紹介', path: '/works' },
    { id: 'about', label: '自己紹介', path: '/about' },
    { id: 'future', label: 'これから', path: '/future' },
  ],
  works: [
    {
      id: '1',
      title: 'ハンドバッグA',
      description: '落ち着いたトーンで仕上げた、日常の装いに馴染む編みバッグ。',
      image: '/images/handbag.jpg',
      accent: '#5f776b',
    },
    {
      id: '2',
      title: 'バケットバッグ',
      description: '柔らかなフォルムと控えめな色で、さりげなく存在感を放つ一品。',
      image: '/images/bucketHand.jpg',
      accent: '#a17774',
    },
    {
      id: '3',
      title: 'ドイリーの花かざり',
      description: '窓辺に馴染む、繊細な雰囲気を纏った編みモチーフ。',
      image: '/images/doily.jpg',
      accent: '#8c7961',
    },
    {
      id: '4',
      title: '水筒ケース',
      description: 'お出かけの相棒になる、やわらかい手触りのケース。',
      image: '/images/bottleHolder.jpg',
      accent: '#6a8277',
    },
    {
      id: '5',
      title: '麦わら帽子の編み飾り',
      description: '夏らしい表情を添える、ナチュラルな編み飾り。',
      image: '/images/strawHat.jpg',
      accent: '#b99f6c',
    },
  ],
  about: {
    title: 'まゆまゆについて',
    lead: '自然の風景ややわらかな光にインスパイアされた、日常に寄り添う編み物を制作しています。',
    body: '手仕事のあたたかさを大切にしつつ、白を基調とした洗練された空気感を目指しています。素材と色のバランスを意識しながら、使いやすさも考えたデザインをお届けします。',
    note: 'これからも、静かな存在感のある編み物を少しずつ形にしていきます。',
  },
  future: {
    title: 'これから',
    body: '現在、新しい作品や展示、コラボレーションの計画を進めています。近日中に詳しいお知らせを公開予定です。',
  },
};
