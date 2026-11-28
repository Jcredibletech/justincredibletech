---
title: "Anthropic and OpenAI Claim AI Proofs That VP Is Not VNP, a 47-Year-Old Math Problem"
description: "Claude and OpenAI posted proofs of Valiant's 1979 VP vs. VNP conjecture on Nov. 23, 2026; computer checks passed, but no human mathematician has verified them."
pubDate: 2026-11-28
section: "science"
tags: ["Mathematics", "Anthropic", "OpenAI", "Lean", "Computer Science"]
featured: false
image: "/images/ai-proofs-vp-not-vnp-valiant-conjecture.jpg"
imageAlt: "Computer scientist Leslie Valiant, a gray-haired man in glasses and a dark suit, speaking in front of a blue backdrop"
imageCredit: "Dennis Hamilton / CC BY 2.0, via Wikimedia Commons (Leslie Valiant in 2012, who posed the VP vs. VNP question in 1979)"
---

Two AI labs say their models have solved a famous open problem in theoretical computer science. On **Nov. 23**, **Anthropic** posted a paper credited to its **Claude** model claiming a proof that **VP is not equal to VNP**, a conjecture computer scientist **Leslie Valiant** (now at Harvard) stated in **1979**. About six hours later, **OpenAI** posted its own proof of the same result. Both came with machine-checkable versions in the **Lean** proof language. But as Anthropic itself wrote, "no human mathematician has checked the proof."

## What happened

VP vs. VNP is an algebra version of the famous **P vs. NP** question. In plain terms, it asks whether some math formulas are truly, permanently hard to compute, no matter how clever the computer program is.

The classic example is a matrix's **determinant** versus its **permanent**. They're almost identical sums; the determinant just flips some signs to minus. That tiny difference lets computers find determinants quickly, while no fast method has ever been found for permanents. Valiant conjectured that none exists. Both AI papers claim to prove that permanents (and a related "Hamiltonian cycle" formula) really do need ever-faster-growing amounts of computing as matrices get bigger, according to an explainer from [Maths Spelled Out](https://www.matweb.cz/en/two-ai-labs-claim-to-have-proved-that-vp-is-not-vnp/).

Cambridge's **Tom Gur** told [New Scientist](https://www.newscientist.com/article/2600542-two-ai-companies-reveal-earth-shattering-solutions-to-major-maths-problem/) it was "Earth-shattering progress," adding, "We are seeing here decades of progress in days." Oxford's **Varun Kanade** said it gets researchers closer to P vs. NP but that "we will require new techniques" for that bigger question.

## What's verified and what isn't

- **Computer-checked:** Independent Lean builds report that both formal proofs compile. Lean only confirms a proof matches its *formal statement*, though.
- **Not yet human-checked:** No mathematician has publicly confirmed that the formal statements say what the papers claim.
- **Not P vs. NP:** Anthropic stresses this does **not** settle P vs. NP, one of the $1 million Millennium Prize problems.

## Why it matters

This comes days after an AI-assisted [Riemann hypothesis proof](/blog/anthropic-mathematician-claims-riemann-hypothesis-proof-claude/) passed [Lean community checks](/blog/update-lean-community-certifies-riemann-hypothesis-proof/), and after OpenAI's [matrix multiplication claim](/blog/openai-claims-matrix-multiplication-exponent-9-4/). On **Nov. 28**, [The Guardian](https://www.theguardian.com/technology/2026/nov/28/could-ai-break-encryption-what-mathematical-breakthroughs-mean-for-cybersecurity) reported that leading computer scientists and Bank of England Governor Andrew Bailey have raised the possibility that AI labs could produce discoveries affecting encryption. To be clear, VP vs. VNP is not an encryption break, and no one has shown one. The worry is about where this pace of AI math could lead. Not everyone is cheering: Imperial College's **Ben Livshits** told New Scientist it's "a very mixed blessing" for researchers who spent careers on these problems.

## What's next

Mathematicians now need to read both papers and compare them with the Lean files. Gur said the community needs "more time to study these results." Until that review happens, these are strong claims, not settled math.

**Sources:** [New Scientist](https://www.newscientist.com/article/2600542-two-ai-companies-reveal-earth-shattering-solutions-to-major-maths-problem/), [The Guardian](https://www.theguardian.com/technology/2026/nov/28/could-ai-break-encryption-what-mathematical-breakthroughs-mean-for-cybersecurity), [Maths Spelled Out](https://www.matweb.cz/en/two-ai-labs-claim-to-have-proved-that-vp-is-not-vnp/), [Anthropic on GitHub](https://github.com/anthropics/formal-math/blob/main/vp-vnp/README.md), [OpenAI on GitHub](https://github.com/openai/math/blob/main/preprints/VP-and-VNP-are-different-November-23-2026/README.md)

**Should AI-written proofs count before a human mathematician signs off? Tell me on X.**
