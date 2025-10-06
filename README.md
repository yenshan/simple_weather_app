# Simple Weather App
[デモページ：https://yenshan.github.io/simple_weather_app/](https://yenshan.github.io/simple_weather_app/)
<img width="712" height="481" alt="スクリーンショット 2025-10-06 16 41 30" src="https://github.com/user-attachments/assets/67d136d9-7005-4c52-9db5-62f037fea777" />

React+Typescriptを使用したシンプルなお天気アプリです。日本の都道府県を選択すると、その地点の現在の天気・気温と本日の最高/最低気温を表示します。

## 主な機能
- 都道府県セレクタで地域を切り替え
- 現在の天気コードに応じたアイコンと説明表示
- 現在気温、当日の最高/最低気温を表示

## 技術スタック
- フロントエンド: `React 19`, `TypeScript`
- viteの使用: `Vite 7`
- React: useStateによる値の管理
- React: useEffectによる副作用の利用
- Web APIの使用(無償のOpen‑Meteo API)
- GitHub Pagesへのデプロイ対応

## セットアップ
前提: Node.js 18 以上（LTS 推奨）、npm 利用を想定

1. 依存関係のインストール
   - `npm ci`（初回または CI）
   - もしくは `npm install`
2. 開発サーバー起動
   - `npm run dev`
   - ローカルで Vite の開発サーバーが起動します（表示 URL はコンソール参照）
3. ビルド/プレビュー
   - 本番ビルド: `npm run build`
   - ビルド結果プレビュー: `npm run preview`

## ディレクトリ構成（抜粋）
- `src/App.tsx`: ルートコンポーネント。都道府県の選択と `WeatherDisplay` の描画
- `src/WeatherDisplay.tsx`: 天気取得と表示ロジック（fetch + 表示）
- `src/prefectures.tsx`: 都道府県名と緯度経度の一覧、および検索関数
- `src/weather_conditions.tsx`: WMO 天気コード → 説明/アイコンのマッピング
- `public/weather_icons/`: 天気アイコン画像（PNG）
- `vite.config.ts`: Vite 設定（`base: "/simple_weather_app/"` により GitHub Pages に対応）
- `.github/workflows/deplpy.yml`: GitHub Pages への自動デプロイ用ワークフロー

## ライセンス
リポジトリ同梱の `LICENSE` を参照してください。

