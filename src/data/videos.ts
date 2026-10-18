// YouTube の公開情報を 2026-10-18 に取得。再生回数・登録者数・高評価数は取得時点の値です。
export type VideoCategory = '音楽' | 'ゲーム' | '料理' | 'スポーツ' | 'アニメ' | '旅行' | 'ガジェット' | 'バラエティ' | '科学' | 'ニュース'

export type VideoItem = {
  id: string
  title: string
  channel: string
  subscriberCount: number
  viewCount: number
  publishedAt: string
  duration: string
  category: VideoCategory
  likeCount: number
  thumbnailUrl: string
  channelAvatarUrl: string
}

export const videos: VideoItem[] = [
  {"id": "gaf-pO2PdO8", "title": "Mrs. GREEN APPLE「ア・ポステリオリ」Official Music Video", "channel": "Mrs. GREEN APPLE", "subscriberCount": 6780000, "viewCount": 12140661, "publishedAt": "2026-09-30", "duration": "3:25", "category": "音楽", "likeCount": 87332, "thumbnailUrl": "https://img.youtube.com/vi/gaf-pO2PdO8/hqdefault.jpg", "channelAvatarUrl": "https://yt3.googleusercontent.com/ixsKC8Mksd0R6lfouSrbFN1rAR4364efb9mmdBrsVvWv5Vj7n9fadA9HsCAUa4xSY5aLtfes=s88-c-k-c0x00ffffff-no-rj"},
  {"id": "uORtmGCBpk4", "title": "圧倒的な評価を受けた傑作フリーゲーム『 ママにあいたい 』", "channel": "キヨ。", "subscriberCount": 5770000, "viewCount": 3555258, "publishedAt": "2026-10-03", "duration": "239:22", "category": "ゲーム", "likeCount": 65476, "thumbnailUrl": "https://img.youtube.com/vi/uORtmGCBpk4/hqdefault.jpg", "channelAvatarUrl": "https://yt3.googleusercontent.com/ytc/AIdro_lnsD4qhoHrQHhzMCOm9FdGYYR_Uu3U1k86vlUd_UhLCQQ=s88-c-k-c0x00ffffff-no-rj"},
  {"id": "NcelvZZJrOo", "title": "【松茸2026】かまいたちが4万の高級松茸を使った料理を作ったら●●が一番美味かった！", "channel": "かまいたちチャンネル", "subscriberCount": 2650000, "viewCount": 962133, "publishedAt": "2026-10-10", "duration": "23:42", "category": "料理", "likeCount": 4404, "thumbnailUrl": "https://img.youtube.com/vi/NcelvZZJrOo/hqdefault.jpg", "channelAvatarUrl": "https://yt3.googleusercontent.com/fOj85geZ13eWmzKYBLlhYxB_nY4qx_l5o4YRcF2YVMqJ7O_e8l9hPXc2GAghRo8XW3DPpxU4=s88-c-k-c0x00ffffff-no-rj"},
  {"id": "xDqPrlDa2NE", "title": "【阪神タイガース×横浜DeNAベイスターズ｜成瀬脩人と三森大貴が大仕事、CS無傷の6連勝で日本シリーズへ｜ハイライト】2026年10月17日 プロ野球クライマックスシリーズ ファイナルステージ", "channel": "⚾️DAZNベースボール", "subscriberCount": 48900, "viewCount": 1275516, "publishedAt": "2026-10-17", "duration": "3:02", "category": "スポーツ", "likeCount": 5187, "thumbnailUrl": "https://img.youtube.com/vi/xDqPrlDa2NE/hqdefault.jpg", "channelAvatarUrl": "https://yt3.googleusercontent.com/G4UTzg0-cGxAuBp-LBxElAF9H-lqhkRmpxPYlNpoybrBSKPxwrAI2Ydp2JLd1bIF9sS1chRqRw=s88-c-k-c0x00ffffff-no-rj"},
  {"id": "vJD84O_9bs8", "title": "【ハイライト】日本代表vsエクアドル代表｜2026.10.1 横浜国際総合競技場｜SAMURAI BLUE｜キリンカップサッカー 2026", "channel": "JFATV", "subscriberCount": 977000, "viewCount": 519671, "publishedAt": "2026-10-01", "duration": "4:15", "category": "スポーツ", "likeCount": 2194, "thumbnailUrl": "https://img.youtube.com/vi/vJD84O_9bs8/hqdefault.jpg", "channelAvatarUrl": "https://yt3.googleusercontent.com/ytc/AIdro_ncykCUcIM_M5RVDJSajoyovmXnAvk4zY2-hfR5V5sWwpM=s88-c-k-c0x00ffffff-no-rj"},
  {"id": "hGRtocAh3iw", "title": "TVアニメ『どうも、好きな人に惚れ薬を依頼された魔女です。』メインPV｜2026年10月5日より放送開始", "channel": "KADOKAWAanime", "subscriberCount": 3090000, "viewCount": 1210572, "publishedAt": "2026-09-14", "duration": "1:36", "category": "アニメ", "likeCount": 12291, "thumbnailUrl": "https://img.youtube.com/vi/hGRtocAh3iw/hqdefault.jpg", "channelAvatarUrl": "https://yt3.googleusercontent.com/ytc/AIdro_kBexGPE4xdlwIRGuLFEcoqtNFCi_8bWioG0HyHx7cSbvI=s88-c-k-c0x00ffffff-no-rj"},
  {"id": "XIJwnCoj-5I", "title": "到着は深夜1時半…日本から唯一のサイパン直行便、時間帯が鬼畜すぎた", "channel": "おのだ/Onoda", "subscriberCount": 495000, "viewCount": 246097, "publishedAt": "2026-10-14", "duration": "33:56", "category": "旅行", "likeCount": 1594, "thumbnailUrl": "https://img.youtube.com/vi/XIJwnCoj-5I/hqdefault.jpg", "channelAvatarUrl": "https://yt3.googleusercontent.com/ytc/AIdro_nwjbCvBl1ib8aKuT6LCuOGHM7tAD2QDONFRpB0WcA2I10=s88-c-k-c0x00ffffff-no-rj"},
  {"id": "yW5CYrCOpsw", "title": "【8分】飛ばない有酸素運動で楽しく全身燃焼！自宅でできるエアロビ有酸素【マンションOK】", "channel": "Marina Takewaki", "subscriberCount": 4460000, "viewCount": 163203, "publishedAt": "2026-10-12", "duration": "10:01", "category": "スポーツ", "likeCount": 1134, "thumbnailUrl": "https://img.youtube.com/vi/yW5CYrCOpsw/hqdefault.jpg", "channelAvatarUrl": "https://yt3.googleusercontent.com/ytc/AIdro_mvwp_yES3d5SeexZZ3-oVUGicz2DZxsFCx4XUcVBqORBU=s88-c-k-c0x00ffffff-no-rj"},
  {"id": "81WfKH4sW_8", "title": "【これを狙え】2026年 Amazon プライム感謝祭セールの戸田覚チョイスをお届けします。いまだからこそ、安く買いましょ", "channel": "戸田覚：ガジェット【辛口】点数評価", "subscriberCount": 326000, "viewCount": 98417, "publishedAt": "2026-10-13", "duration": "18:53", "category": "ガジェット", "likeCount": 395, "thumbnailUrl": "https://img.youtube.com/vi/81WfKH4sW_8/hqdefault.jpg", "channelAvatarUrl": "https://yt3.googleusercontent.com/pz-nIMyR9Lr2d0EZEviwmS7Yzyu0xvWXhIY10esHdrQPBbrWoq9Wd_qFiiu8TkYdIQEbwNF61w=s88-c-k-c0x00ffffff-no-rj"},
  {"id": "oaFYO7bWSyg", "title": "秋フェア2大巨頭、月見とさつまいものコラボ商品ってどちらが多いの？10店舗周って大調査ダァ！！！…が理想でした。", "channel": "東海オンエア", "subscriberCount": 7270000, "viewCount": 1069311, "publishedAt": "2026-10-17", "duration": "26:19", "category": "バラエティ", "likeCount": 10302, "thumbnailUrl": "https://img.youtube.com/vi/oaFYO7bWSyg/hqdefault.jpg", "channelAvatarUrl": "https://yt3.googleusercontent.com/ytc/AIdro_m1E-jlAzFTnp_jejKVfgrLMIieFkzvKDamVXJzwiSGhCg=s88-c-k-c0x00ffffff-no-rj"},
  {"id": "9x9IcWamVBU", "title": "【実写】アンドロメダ銀河を25億画素で星の一粒まで拡大する──1兆個の星が、なぜ肉眼では一つの光に見えるのか", "channel": "宇宙と深海の記録", "subscriberCount": 1020, "viewCount": 339909, "publishedAt": "2026-10-14", "duration": "21:11", "category": "科学", "likeCount": 912, "thumbnailUrl": "https://img.youtube.com/vi/9x9IcWamVBU/hqdefault.jpg", "channelAvatarUrl": "https://yt3.googleusercontent.com/rwjv2E9lWwyFePazpzn3q2Hah-z93efrIWv9dhVF8fpHC69PljRwLt9p29LZD9TLpHXaruy21w=s88-c-k-c0x00ffffff-no-rj"},
  {"id": "lWs6K8iKOk4", "title": "【火星衛星探査機】10月20日打ち上げ予定　世界初の挑戦へ (26/10/14 18:40)", "channel": "JAPAN Kagoshima News KTS", "subscriberCount": 37400, "viewCount": 77651, "publishedAt": "2026-10-14", "duration": "8:03", "category": "ニュース", "likeCount": 305, "thumbnailUrl": "https://img.youtube.com/vi/lWs6K8iKOk4/hqdefault.jpg", "channelAvatarUrl": "https://yt3.googleusercontent.com/Ieo41UoTqfOpHs7Gaw9k-anEWYUfxryTYK1gYB2H0IehGvdzrNf8ZH9FZlKvu7bPHnRh16tuow=s88-c-k-c0x00ffffff-no-rj"},
]

function formatManCount(count: number) {
  if (count >= 100000) return `${Math.floor(count / 10000)}万`
  if (count >= 10000) return `${Math.floor(count / 1000) / 10}万`
  return count.toLocaleString('ja-JP')
}

export function formatViewCount(count: number) {
  return `${formatManCount(count)}回視聴`
}

export function formatSubscriberCount(count: number) {
  if (count >= 10000 && count < 100000) return `${Math.round(count / 1000) / 10}万人`
  if (count >= 100000 && count < 1000000) return `${Math.round(count / 1000) / 10}万人`
  return `${formatManCount(count)}人`
}

export function formatLikeCount(count: number) {
  return formatManCount(count)
}

export function formatPublishedAt(isoDate: string, today = new Date()) {
  const [year, month, day] = isoDate.split('-').map(Number)
  const localDay = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
  const publishedDay = Date.UTC(year, month - 1, day)
  const days = Math.max(0, Math.round((localDay - publishedDay) / 86400000))
  return days === 0 ? '今日' : `${days}日前`
}
