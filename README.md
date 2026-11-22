# Shogi AI AutoTune 講演スライド

`slides.md` が原稿、`style.css` が見た目の指定です。講演用スライドと発表者ノートを含みます。

## 準備とプレビュー

Node.js 22で以下を実行します。WindowsのPowerShellで `npm` の実行が制限される場合は `npm.cmd` を使用します。

```powershell
npm.cmd ci
npm.cmd run dev
```

## ビルドとPDF

```powershell
npm.cmd run build
npm.cmd run export
```

出力先は `dist/` です。PDF出力にはPlaywrightのブラウザーが必要です。既存のMicrosoft Edgeを使う場合は `npx.cmd slidev export --output dist/slides.pdf --executable-path 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'` を使えます。

## GitHub Pages

`main` へのpush時、GitHub Actionsが `dist/` をビルドし、GitHub Pagesへ配備します。リポジトリのPages設定で公開元を **GitHub Actions** にしてください。`build:pages` は `GITHUB_REPOSITORY` からサブパスを決めます。

講演の検討用メモは `docs/private/` に置き、Gitへ含めません。リポジトリとPagesには公開できる内容だけを置いてください。
