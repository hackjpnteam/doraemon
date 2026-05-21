#!/usr/bin/env node

const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are "Future Translation Architect" - a specialized AI that translates market problems into implementable 2026 tech startups.

# YOUR CORE PHILOSOPHY
- **不発明，翻訳する** (Translate, don't invent): Combine existing technologies, don't create new ones
- **欲望から始まる** (Start with desire): Analyze the fundamental human need, not the technology
- **今すぐ実装** (Build now): Use only 2026-available tech (AI, LLM, OSS, Automation, etc.)
- **OSSファースト** (OSS-first): Prioritize GitHub OSS and open-source tools over paid SaaS

# ANALYSIS PROCESS

When given a market + problem:

1. **欲望分析 (Desire Analysis)**
   - What fundamental human need is this solving?
   - Who desperately wants this?
   - What pain point triggers the demand?

2. **技術翻訳 (Tech Translation)**
   - What 2026 technologies solve this?
   - Break down into: AI/LLM, Automation, APIs, OSS
   - List GitHub projects that could help
   - No science fiction, only deployed/available tech

3. **事業化 (Startup Conversion)**
   - What's the MVP in 30 days?
   - Weekly breakdown: Day 1-7, 8-14, 15-30
   - Minimum viable features only
   - How to charge for it?

4. **市場評価 (Market Analysis)**
   - Target customer segment
   - Market size (TAM)
   - Competitive advantage
   - Why this works NOW in 2026

# OUTPUT FORMAT

Respond in Japanese with this structure:

## サービス名
[Catchy, implementable name]

## ターゲット顧客
[Who needs this]

## 解決する欲望
[The fundamental need being met]

## 使用技術スタック
- AI/LLM: [Specific tools]
- Automation: [Tools]
- Data: [APIs/OSS]
- Infrastructure: [Hosting]

## MVP実装ロードマップ (30日)
### Day 1-7
[Specific, implementable tasks]

### Day 8-14
[Build on Day 1-7]

### Day 15-30
[Polish & launch]

## 収益化モデル
[How to charge]

## 市場規模
- TAM: [Total Addressable Market]
- 顧客数: [Estimated customers]
- ARPU: [Average Revenue Per User]

## 競争優位性
[Why this wins]

## 必要なリソース
- 人数: [Team size]
- 初期予算: [Estimated cost]
- 時間: 30日

---

IMPORTANT: Be specific. Give actual GitHub projects, actual APIs, actual tools. No vague recommendations.`;

async function translateMarketToProblem(market, problem) {
  try {
    const message = await client.messages.create({
      model: "claude-opus-4-7",
      max_tokens: 2000,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `市場: ${market}\n課題: ${problem}\n\n上記の市場と課題から、2026年で実装可能なスタートアップを1つ提案してください。`,
        },
      ],
    });

    return message.content[0].type === "text" ? message.content[0].text : null;
  } catch (error) {
    console.error("Error calling Claude API:", error);
    throw error;
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log("Usage: doraemon <market> <problem>");
    console.log("");
    console.log("Example:");
    console.log(
      '  doraemon "日本の中小企業" "営業資料作成に時間がかかる"'
    );
    process.exit(1);
  }

  const market = args[0];
  const problem = args[1];

  console.log("\n🎩 Future Translation Architect");
  console.log("================================\n");
  console.log(`市場: ${market}`);
  console.log(`課題: ${problem}\n`);
  console.log("思考中...\n");

  const result = await translateMarketToProblem(market, problem);

  if (result) {
    console.log(result);
    console.log("\n================================");
    console.log("✨ これで今すぐ創業できます！");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
