---
title: "Cursor Says Its Breach Began With a Key Exposed at AI Vendor Fireworks and Led to a Fake Claude Code Extension"
description: "AI coding tool maker Cursor published the results of its security investigation on November 13, 2026. It says a key it issued to Fireworks AI was exposed, which led to stolen data and a malicious copy of the Claude Code extension that up to 5,000 users may have received."
pubDate: 2026-11-14
section: "ai"
tags: ["Cursor", "Fireworks AI", "Claude Code", "Security", "Data Breach", "AI"]
featured: false
image: "/images/cursor-breach-fireworks-key-fake-claude-code-extension.jpg"
imageAlt: "Close-up of a laptop screen showing lines of programming code"
imageCredit: "Marc Mueller / CC0, via Wikimedia Commons (illustrative)"
---

Cursor, the AI-powered code editor, has published what it found after two weeks investigating a security incident that began in late October. The short version: the attack started at a vendor, Fireworks AI, and ended with a **malicious copy of Anthropic's Claude Code extension** sitting in Cursor's extension marketplace for about 11 hours.

## What happened, step by step

According to [Cursor's November 13 update](https://cursor.com/blog/security-incident-update):

1. **A key leaked at Fireworks.** An attacker got hold of an access key Cursor had issued to Fireworks, which Cursor says Fireworks exposed. The attacker used it to copy data from a read-only storage bucket Cursor used to share data with Fireworks.
2. **Old agent logs held some credentials.** That bucket held coding agent traces, mostly from 2025, from users not in Privacy Mode. A small number contained unredacted credentials. Cursor says fewer than 0.01% of customers had API credentials exposed, and fewer than 0.05% of non-Privacy Mode users had traces exposed.
3. **The attacker moved into other tools.** Using those credentials, the attacker reached some of Cursor's software-as-a-service tools, including archived non-production code, some support emails and usage data.
4. **A fake extension.** On October 29, the attacker placed tampered copies of the Claude Code extension (versions **2.1.312 and 2.1.313**) in the cache that serves Cursor's VS Code extension marketplace. Cursor says **at most 5,000 users** may have received it before it was removed about 11 hours later. Anthropic did not publish the copy, and Cursor says it was not a flaw in Anthropic's product.

Cursor says the last attacker activity it saw was November 1 and was blocked. It says its production systems, official app updates, release signing keys and customer code repositories were not affected.

## It's not just Cursor

[TechCrunch reports](https://techcrunch.com/2026/11/13/uber-confirms-hackers-stole-thousands-of-drivers-license-information-in-data-breach/) that **Uber** is notifying drivers that their personal and driver's license information was stolen in the same Fireworks breach, including 2,567 people in Massachusetts, 3,430 in South Carolina and 1,873 in Rhode Island, with more notices expected. TechCrunch says Notion also confirmed its data was taken. A Fireworks spokesperson confirmed unauthorized access to some of its systems but did not answer detailed questions.

## What Cursor changed

Cursor says it moved all inference traffic off Fireworks, rotated every internal credential, rebuilt its extension marketplace, added secret scanning across its code, and brought in outside forensics experts. If you installed either tampered version, Cursor says to follow the steps in its [October 30 security notice](https://cursor.com/blog/claude-code-extension-security-notice), and warns that "uninstalling the extension alone may not be enough."

## Why it matters

AI coding tools see a lot: code, logs and sometimes passwords pasted into chats. This incident shows how one vendor's leaked key can ripple into other companies, and why keeping secrets out of prompts and logs matters.

**Sources:** [Cursor](https://cursor.com/blog/security-incident-update), [TechCrunch](https://techcrunch.com/2026/11/13/uber-confirms-hackers-stole-thousands-of-drivers-license-information-in-data-breach/), [Cursor security notice](https://cursor.com/blog/claude-code-extension-security-notice)

Do you trust AI coding tools with your code and keys, or does this change how you use them?
