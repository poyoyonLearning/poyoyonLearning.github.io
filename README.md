# PoYoYon Learning

未就学児向け知育アプリの公式Webサイト

## 概要

このリポジトリは、PoYoYon Learningが提供する知育アプリの公式Webサイトです。
GitHub Pagesを使用してホスティングされています。

## 提供アプリ

- **ぽよタッチベビ 3Dコレクション** (PoYo Touch Baby 3D Collection)
  - 未就学児向けの安全な知育アプリ
  - 広告なし・課金なし・完全オフライン

## サイト構成

トップページは React（CDN経由）+ Babel Standalone による単一ページ構成です。ビルド不要で、ブラウザ上で直接 JSX を実行しています。

- `index.html` - トップページ（React のマウント先とスクリプト読み込みのみ）
- `shared.jsx` - デザイントークン（配色・コピー等）と共通コンポーネント
- `variation-d.jsx` - トップページ本体のコンポーネント（`VariationD`）
- `privacy/index.html` - プライバシーポリシー（静的HTML、トップページと同じデザイントークンを使用）
- `assets/` - アイコン・アプリ内画像・ロゴ等の画像アセット

## お問い合わせ

PoYoYonLearning@gmail.com

## ライセンス

© 2026 PoYoYon Learning. All rights reserved.
