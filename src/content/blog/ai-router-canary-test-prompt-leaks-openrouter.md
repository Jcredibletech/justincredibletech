---
title: "Researcher's 2 Million 'Canary' Prompts Show Secrets Leaking Through AI Providers; OpenRouter Drops Three Providers"
description: "Dragos researcher HD Moore seeded nearly two million AI prompts with trackable fake secrets and found some leaked through breached providers, logging resellers and privacy-flag violations. On November 22, 2026, OpenRouter said it off-boarded three providers and pulled 125 endpoints from Zero Data Retention."
pubDate: 2026-11-22
section: "ai"
tags: ["AI security", "Privacy", "OpenRouter", "Inference providers", "Dragos", "AI"]
featured: false
image: "/images/ai-router-canary-test-prompt-leaks-openrouter.jpg"
imageAlt: "Rows of black server racks filled with equipment in a bright data center room"
imageCredit: "Carl Lender / CC BY 2.0, via Wikimedia Commons (illustrative data center)"
---

When an app sends your question to an AI model, it often passes through several companies first. A new experiment shows some of those links leak.

## What happened

HD Moore, chief research officer at security firm **Dragos**, sent **nearly two million AI prompts** to AI providers, each containing a unique "canary": fake but working AWS keys, passwords, private URLs and code-repository references that had never been used anywhere else. If a canary was ever used, he could trace exactly which provider let it out, [Ars Technica reported](https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/).

Many apps use **AI routers** (also called gateways) such as OpenRouter or Vercel, which pass prompts to whichever inference provider is cheapest or best suited. Each hop decrypts and can log the prompt.

According to Moore's findings, as described by Ars Technica:

- At least **three hosting providers were breached** by attackers who copied incoming prompts. Stolen bait keys were used "tens of thousands" of times in AWS API calls, sometimes within hours.
- Some **resellers logged prompts** themselves, and secrets sent through them were later used.
- Several providers **ignored "Zero Data Retention" or "no data collection" flags**. Moore said a Chinese AI lab's systems fetched the secret URLs from more than half of the prompts sent to its models, including prompts sent through US hosts reselling its models.

## The response

On **November 22**, OpenRouter posted that the findings "did not show any breach or unauthorized access of OpenRouter," but that it has:

- **Off-boarded three providers**,
- **Removed 125 endpoints** from Zero Data Retention eligibility, partly as a precaution, and
- **Notified all potentially affected customers**.

[OpenRouter's post](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) links to incident notices from providers Novita, Phala and Together. Ars Technica reported that OpenRouter's customer email pointed to prompts sent to China-based model maker **MiniMax**, directly or through resellers AtlasCloud, Novita and StreamLake. Ars noted that the big first-party labs, such as OpenAI and Anthropic, were not the providers implicated.

## Why it matters

Businesses increasingly paste contracts, code and customer data into AI tools, often through cheap routing services. A "privacy" checkbox only helps if every company down the chain honors it. Moore's advice: self-host if you can, otherwise use a first-tier provider directly, and pick upstream providers yourself instead of accepting default pools. And never put real passwords or keys in a prompt.

**Sources:** [Ars Technica](https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/), [OpenRouter](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/)

Does this change which AI tools you'd trust with work documents?
