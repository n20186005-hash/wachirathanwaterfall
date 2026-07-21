export const siteConfig = {
  // 多语言名称（站点名 / 当地名）
  name: {
    th: 'น้ำตกวชิรธาร',
    en: 'Wachirathan Waterfall',
    zh: '瓦基拉坦瀑布',
  },
  nameLocal: 'น้ำตกวชิรธาร', // 当地（泰文）名称
  domain: 'https://wachirathanwaterfall.com',

  phone: '+6653285730',
  phoneDisplay: '+66 53 285 730',

  rating: 4.7,
  reviewCount: '10,634',

  // 实际坐标（用于天气 / 日落 API 与地图嵌入）
  coords: { lat: 18.5420, lng: 98.5986 },

  // 统一 Google Maps 链接（首屏 / 照片 / 评价 / 页脚 共 4 处 + JSON-LD sameAs）
  mapsUrl: 'https://maps.app.goo.gl/QERbeU7GTZCtzj1bA',

  // 结构化数据 sameAs（权威资料页）
  sameAs: [
    'https://maps.app.goo.gl/QERbeU7GTZCtzj1bA',
    'https://www.thailandtourismdirectory.go.th/en/attraction/3304',
  ],

  address: '1009, Ban Luang, Chom Thong District, Chiang Mai 50160, Thailand',
  plusCode: 'GHRX+HP',

  // 画廊图片前缀（配合 public/gallery/wachirathan-waterfall-1..N.jpg）
  galleryPrefix: 'wachirathan-waterfall-',

  // 社交 / 资料链接（科普站占位，上线前请替换为官方或可运营账号）
  socialLinks: [
    {
      name: 'Tourism Thailand',
      href: 'https://www.tourismthailand.org/',
      icon: 'globe',
    },
    {
      name: 'Doi Inthanon NP',
      href: 'https://www.thailandtourismdirectory.go.th/en/attraction/5149',
      icon: 'tree',
    },
    {
      name: 'Google Maps',
      href: 'https://maps.app.goo.gl/QERbeU7GTZCtzj1bA',
      icon: 'map',
    },
  ],

  // 资料来源（页脚引用，需与页脚 per-language name 结构一致）
  sources: [
    {
      name: { th: 'การท่องเที่ยวแห่งประเทศไทย', en: 'Tourism Thailand', zh: '泰国国家旅游局' },
      url: 'https://www.tourismthailand.org/',
    },
    {
      name: { th: 'อุทยานแห่งชาติดอยอินทนนท์', en: 'Doi Inthanon National Park', zh: '因他农山国家公园' },
      url: 'https://www.thailandtourismdirectory.go.th/en/attraction/3304',
    },
    {
      name: { th: 'กรมอุทยานแห่งชาติ', en: 'DNP Thailand', zh: '泰国国家公园厅' },
      url: 'https://www.dnp.go.th/',
    },
  ],
};
