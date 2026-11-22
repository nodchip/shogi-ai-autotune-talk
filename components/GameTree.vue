<script setup>
import Mermaid from '@slidev/client/builtin/Mermaid.vue'
import LZString from 'lz-string'
import initial from '../assets/game-tree/image4.png'
import firstLeft from '../assets/game-tree/image6.png'
import firstRight from '../assets/game-tree/image5.png'
import secondLeft from '../assets/game-tree/image8.png'
import secondRight from '../assets/game-tree/image7.png'
import thirdLeft from '../assets/game-tree/image9.png'
import thirdRight from '../assets/game-tree/image10.png'

const branchColor = '#60847c'
const diagramStyle = {
  themeCSS: `.flowchart-link { stroke: ${branchColor}; } .marker { fill: ${branchColor}; stroke: ${branchColor}; } .nodeLabel { font-size: 19px; }`,
}
const diagram = `
%%{init: {"flowchart": {"curve": "bumpY", "rankSpacing": 32, "nodeSpacing": 12}}}%%
flowchart TD
  A@{ img: "${initial}", h: 60, constraint: "on" } --> B1@{ img: "${firstLeft}", h: 60, constraint: "on" }
  A --> B2@{ img: "${firstRight}", h: 60, constraint: "on" }
  B1 --> C1@{ img: "${secondLeft}", h: 60, constraint: "on" }
  B1 --> C2@{ img: "${secondRight}", h: 60, constraint: "on" }
  B2 --> C3[…]
  C1 --> D1@{ img: "${thirdLeft}", h: 60, constraint: "on" }
  C1 --> D2@{ img: "${thirdRight}", h: 60, constraint: "on" }
  C2 --> D3[…]
  D1 --> E1[…]
  D2 --> E2[…]
  classDef omitted fill:#e0f0eb,stroke:${branchColor},color:#152c31;
  class C3,D3,E1,E2 omitted;
`
</script>

<template>
  <div role="img" aria-label="初期局面から、指し手ごとに将棋盤が枝分かれする図">
    <Mermaid :code-lz="LZString.compressToBase64(diagram)" :scale="0.9" v-bind="diagramStyle" />
  </div>
</template>
