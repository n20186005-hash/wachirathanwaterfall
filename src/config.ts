export const siteConfig = {
  // 单景点 SEO 实体绑定变量
  domain: 'wachirathanwaterfall.com',
  attractionFullName: 'Wachirathan Waterfall',
  attractionShortName: 'Wachirathan Waterfall',
  cityName: 'Chom Thong',
  stateProvince: 'Chiang Mai',
  countryName: 'Thailand',
  countryCode2Letter: 'TH',
  postalCode: '50160',
  latitude: 18.542,
  longitude: 98.5986,
  nearbyLandmark1: 'Sirithan Waterfall',
  nearbyLandmark2: 'Phra Mahathat Naphamethanidon – Naphaphonphumisiri',

  // 多语言名称（站点名 / 当地名）
  name: {
    th: 'น้ำตกวชิรธาร',
    en: 'Wachirathan Waterfall',
    zh: '瓦基拉坦瀑布',
  },
  nameLocal: 'น้ำตกวชิรธาร', // 当地（泰文）名称

  siteUrl: 'https://wachirathanwaterfall.com',

  phone: '+6653285730',
  phoneDisplay: '+66 53 285 730',

  // 最新谷歌评分与评价数（同步自 Google Maps · 2026 年 9 月）
  rating: 4.7,
  reviewCount: '10,776',
  reviewCountNumeric: 10776,
  reviewSyncedAt: '2026 年 9 月',

  // 实际坐标（用于天气 / 日落 API 与地图嵌入）
  coords: { lat: 18.542, lng: 98.5986 },

  // 统一 Google Maps 链接（首屏 / 照片 / 评价 / 页脚 共 4 处 + JSON-LD sameAs）
  mapsUrl: 'https://maps.app.goo.gl/QERbeU7GTZCtzj1bA',

  // Google Maps 嵌入 iframe 链接
  mapsEmbedSrc:
    'https://www.google.com/maps?q=Wachirathan+Waterfall,+Ban+Luang,+Chom+Thong,+Chiang+Mai,+Thailand&hl=zh-CN&z=15&output=embed',

  // 结构化数据 sameAs（权威资料页）
  sameAs: [
    'https://maps.app.goo.gl/QERbeU7GTZCtzj1bA',
    'https://www.thailandtourismdirectory.go.th/en/attraction/3304',
    'https://www.tourismthailand.org/',
    'https://www.dnp.go.th/',
    'https://en.wikipedia.org/wiki/Wachirathan_Waterfall',
  ],

  // 政府 / 官方旅游局权威链接（用于外部权威出站）
  govtTourismUrl: 'https://www.tourismthailand.org/',
  nationalParkUrl: 'https://www.thailandtourismdirectory.go.th/en/attraction/3304',
  dnpUrl: 'https://www.dnp.go.th/',

  address: '1009, Ban Luang, Chom Thong District, Chiang Mai 50160, Thailand',
  plusCode: 'GHRX+HP',

  // 画廊图片前缀（配合 public/gallery/wachirathan-waterfall-1..N.jpg）
  galleryPrefix: 'wachirathan-waterfall-',

  // 图片版权说明（页脚 / 相册 / 关于处共用）
  imageCopyrightNotice:
    '本网站所展示的所有图片产权及版权均归原摄影者所有。',

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