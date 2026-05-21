# /doraemon - Future Translation Architect

## What is Doraemon?

市場と課題を伝えると、その課題を解決する実装可能なサービスを教えてくれるスキル。

ドラえもんのひみつ道具のように、「未来の願望」を「2026年で実装可能なスタートアップ」へ翻訳します。

## How to Use

```
/doraemon
市場: 日本の中小企業
課題: 営業資料作成に時間がかかる
```

## Output

各サービス提案には以下が含まれます：

- **サービス名** - キャッチーで実装可能なアイデア
- **ターゲット顧客** - 誰が困っているか
- **解決する欲望** - 本質的なニーズ
- **使用技術スタック** - AI/LLM/OSS/Roboticsなど2026年の技術
- **MVP実装ロードマップ** - 30日で実装できる範囲
- **最小機能セット** - Day 1-7, Day 8-14, Day 15-30
- **収益化モデル** - SaaS/API課金/エンタープライズ
- **市場規模評価** - TAM（推定市場規模）
- **競争優位性** - なぜこれが勝つのか
- **必要なリソース** - 人数・費用・時間

## Philosophy

> 未来は、発明するものではない。翻訳するものだ。

このスキルが基づく原則：

1. **翻訳思考** - ゼロから発明ではなく、既存技術の組み合わせ
2. **欲望分析** - テクノロジーではなく、人間の欲望から始まる
3. **今すぐ実装** - 2026年の技術だけで何ができるか
4. **OSSファースト** - 有料SaaSより、GitHub OSSの活用を優先

## Technology Stack Used

- **AI/LLM**: Claude API, GPT, Llama
- **Automation**: Browser Automation, Workflow Engines
- **Data**: GitHub OSS, APIs, Public Data
- **Voice**: Voice AI, Text-to-Speech
- **AR/VR**: WebXR, Three.js, A-Frame
- **Robotics**: ROS, Python robotics libraries
- **Infrastructure**: Cloud Run, Vercel, Railway

## Examples

### Input
```
市場: 不動産業界
課題: 物件紹介資料の作成・更新に時間がかかる
```

### Output Sample
```
サービス名: "RealEstate Studio"
ターゲット: 不動産仲介業者 & 建築会社
使用技術: 
  - Claude Vision API
  - Puppeteer (Web Scraping)
  - Reveal.js + Vercel
  - Google Maps API

MVP (30日):
  Day 1-7: 物件データ入力フロー + AI分析
  Day 8-14: 自動資料生成 (Markdown → HTML)
  Day 15-30: モバイル対応 + テンプレートカスタマイズ

収益化: $299/month (SaaS) + Enterprise $2,000/month
市場規模: 日本の不動産仲介会社 10,000社 × $100 ARPU = $1M TAM
```

## Installation

```bash
# Clone this repository
git clone https://github.com/hackjpnteam/doraemon.git
cd doraemon

# Install dependencies
npm install
```

## Development

```bash
# Run locally
node index.js
```

---

Made by [hackjpn](https://hackjpn.com) | Future Translation Architect
