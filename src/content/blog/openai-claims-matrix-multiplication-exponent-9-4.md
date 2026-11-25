---
title: "OpenAI Preprint Claims the Matrix Multiplication Exponent Is Exactly 9/4, Not Yet Verified"
description: "OpenAI's Nov. 24, 2026 preprint claims a lower bound that fixes the matrix multiplication exponent at 9/4; it is not yet peer reviewed."
pubDate: 2026-11-25
section: "ai"
tags: ["OpenAI", "Math", "AI research", "Lean", "Matrix multiplication"]
featured: false
image: "/images/openai-claims-matrix-multiplication-exponent-9-4.jpg"
imageAlt: "Color-coded diagram of Strassen's scheme for multiplying two 2-by-2 matrices with seven products instead of eight"
imageCredit: "Fractalone / CC BY-SA 4.0, via Wikimedia Commons (illustrative)"
---

**OpenAI** posted a preprint on **November 24** titled ["The matrix multiplication exponent is nine fourths"](https://github.com/openai/math/tree/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026), claiming to settle one of the best-known open problems in theoretical computer science. If it holds up, multiplying two n-by-n matrices can never be done with fewer than about **n^2.25** multiplications in the standard arithmetic model. The paper has **not been peer reviewed**, and no human mathematician has publicly confirmed the full proof yet.

## What happened

The "exponent of matrix multiplication," written **ω (omega)**, measures how the work of multiplying matrices grows as they get bigger. The schoolbook method takes about n³ steps. In 1969 Volker Strassen showed you could do better (the diagram above), and decades of work pushed the best known bound lower. Many researchers suspected ω could get all the way down to 2.

In October, OpenAI said an internal model found an **upper bound of 9/4**, meaning a method that works in about n^2.25 steps. Outside researchers have since given independent proofs and extended it to every field, according to an [exposition on arXiv](https://arxiv.org/abs/2611.09716) and [Mad Robot's write-up](https://madrobot.blog/2026/11/25/openai-matrix-multiplication-exponent-9-4-proof/).

The new paper claims the **matching lower bound**: in a formal arithmetic circuit, multiplying two n-by-n matrices needs at least n^(9/4)/2 multiplication or division steps. Upper and lower bounds meeting would pin ω at exactly 9/4 and rule out the ω = 2 conjecture in that model. It was the top story on Hacker News Wednesday, with more than 800 points.

## How sure is anyone?

- **Machine-checked, partly.** OpenAI's Lean formalization covers circuits that **never divide**. An independent audit by [Carlos Toledo](https://carlostoledo.co/omega/) says three separate proof checkers accepted that Lean proof. That audit also says it does **not** show any human has checked the math, and it lists parts of the paper the formal proof doesn't cover.
- **Not human-reviewed.** OpenAI's repository calls its manuscripts "raw research data" from "an unnamed internal OpenAI model" and warns "some of the unformalized results could have issues." Mad Robot notes OpenAI has pulled earlier papers from the same collection after posting them.
- **Reactions are mixed.** OpenAI researcher Sébastien Bubeck called it "the kind of result that I never thought I would see in my lifetime." Others point out it's a statement about one model of computation, and [Zvi Mowshowitz's roundup](https://thezvi.substack.com/p/new-math-from-openai) shows some mathematicians are unhappy with how quickly OpenAI released lightly edited papers.

## Why it matters

Matrix multiplication sits under graphics and AI training, but this result changes nothing about your computer tomorrow. It counts arithmetic steps in an idealized model, and the very fast theoretical methods carry overheads too large for real chips. The bigger story is AI as a research tool: after [OpenAI's earlier claim about a major computer science hypothesis](/blog/openai-ai-eth-proof-claims/) and [the AI-assisted Riemann Hypothesis proof the Lean community later certified](/blog/update-lean-community-certifies-riemann-hypothesis-proof/), the open question is how fast humans can check what these systems produce.

**Sources:** [OpenAI preprint (PDF)](https://raw.githubusercontent.com/openai/math/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf), [OpenAI math repository](https://github.com/openai/math/tree/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026), [Mad Robot](https://madrobot.blog/2026/11/25/openai-matrix-multiplication-exponent-9-4-proof/), [Carlos Toledo audit](https://carlostoledo.co/omega/), [arXiv exposition](https://arxiv.org/abs/2611.09716), [Zvi Mowshowitz](https://thezvi.substack.com/p/new-math-from-openai)

**Should AI labs wait for human review before announcing big math results, or is posting fast and checking in public better? Tell me on X.**
