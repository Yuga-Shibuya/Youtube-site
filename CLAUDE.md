# YouTube クローン

## 技術

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- lucide-react
- react-router-dom

## アイコン

アイコンはすべて `lucide-react` から import する。絵文字や独自 SVG で代用しない。

## 画面構成

- ヘッダー: ハンバーガー / YouTube ロゴ / 検索欄 / マイク / 通知ベル / ユーザーアバター
- サイドバー: ホーム・ショート・登録チャンネル・履歴・後で見る
- コンテンツ: カテゴリのチップを横一列に並べ、その下に動画カード 12 枚を 4 列グリッドで表示する
- 動画データは `src/data/videos.ts` の実在する 12 本を使用する。サムネイルは `https://img.youtube.com/vi/動画ID/hqdefault.jpg` を参照する

## ルーティング

- `/`: ホーム
- `/watch/:id`: 動画の視聴ページ。サイドバーを表示せず、最大幅 1280px の中央寄せでプレーヤー・動画情報と関連動画 8 件を左右に並べる
- `/shorts`: ショート
- `/subscriptions`: 登録チャンネル
- `/history`: 履歴
- `/watch-later`: 後で見る
