---
title: 将棋AIの開発をAIに任せる
theme: default
fonts:
  sans: Noto Sans JP
  provider: none
transition: none
---

<div class="cover">
  <div class="eyebrow">SHOGI AI × AI AGENT</div>
  <h1>将棋AIの開発を<br>AIに任せる</h1>
  <p>実験の自動化を試してわかったこと</p>
  <div class="tag">講演スライド 試作</div>
</div>

<!--
将棋AIの改善実験を題材に、AIエージェントとツールの役割分担を紹介します。
これは構成と表示を確認するための試作です。
-->

---

<div class="eyebrow">01 / SHOGI AI</div>

# 将棋AIは、先を読み局面を評価する

<div class="two-cards">
  <div class="card"><div class="number">01</div><h2>探索</h2><p>候補となる手と、<br>その先の局面を読む</p></div>
  <div class="card"><div class="number">02</div><h2>評価関数</h2><p>読んだ先の局面が<br>どれくらい良いかを評価する</p></div>
</div>

<div class="callout">NNUEは、局面を高速に評価するニューラルネットワークの一種</div>

<!--
探索が先の展開を読み、評価関数がその局面の良さを見積もります。
この講演では評価関数の学習と、その改善を確かめる実験に注目します。
-->

---

<div class="eyebrow">02 / EXPERIMENT</div>

# 学習した候補は、本当に強い？

```mermaid
flowchart LR
  A[学習データ] --> B[候補を学習]
  B --> C[基準と対局]
  C --> D{結果を検査}
  D -->|条件を満たす| E[採用を検討]
  D -->|不採用・判定不能| F[基準を維持]
```

<div class="callout">学習の損失が下がっただけでは、棋力が上がったとは言えない</div>

<!--
学習で得られた候補を、対局条件をそろえて基準と比較します。
不採用や判定不能も結果として記録します。図は説明用に簡略化しています。
-->

---

<div class="eyebrow">03 / AUTOMATION</div>

# 実験の一連の作業を `/goal` で進める

<div class="steps">
  <div><b>01</b><span>計画・実装</span></div><i>→</i>
  <div><b>02</b><span>学習・対局</span></div><i>→</i>
  <div><b>03</b><span>結果確認・採否</span></div><i>→</i>
  <div><b>04</b><span>記事・通知</span></div>
</div>

<p class="detail">Codexが計画と判断を担い、実験ツールやJenkinsを使う。<br>長時間処理後の再開など、人が確認する場面もある。</p>

<!--
実験計画の立案から、実装、実験、結果の確認と採否、ブログ執筆、メール通知までを進めるGoalを開発しました。
長時間・反復処理は必要に応じてJenkinsで実行し、pauseした場合は人が状態を確認して再開します。
-->
