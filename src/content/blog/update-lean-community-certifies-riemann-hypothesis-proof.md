---
title: "Update: Lean Community Certifies AI-Assisted Riemann Hypothesis Proof as Correct"
description: "On November 21, 2026, the Lean and Mathlib communities issued a joint statement certifying that Levent Alpöge's 17-million-line Lean proof of the Riemann Hypothesis, made with heavy AI assistance, is correct. Mathematicians still have to understand the ideas inside it."
pubDate: 2026-11-21
section: "ai"
tags: ["Anthropic", "Claude", "Math", "Riemann Hypothesis", "Lean", "AI research"]
featured: false
image: "/images/update-lean-community-certifies-riemann-hypothesis-proof.jpg"
imageAlt: "A colorful domain-coloring plot of the Riemann zeta function on the complex plane"
imageCredit: "Empetrisor / CC BY-SA 4.0, via Wikimedia Commons (illustrative)"
---

*This is an update to our November 20 story, [An Anthropic Mathematician Says He and Claude Proved the Riemann Hypothesis](/blog/anthropic-mathematician-claims-riemann-hypothesis-proof-claude/).*

Yesterday it was a claim. Today, the people who maintain the computer system it was written in say the proof checks out.

## What's new

On **Saturday, November 21, 2026**, the **Lean and Mathlib communities** posted a [joint statement](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/), endorsed by the Lean FRO and the Mathlib Initiative, about the proof **Levent Alpöge** released on November 20 as a Lean library of about **17 million lines of code**. Their words: "We have full confidence that Alpöge's proof of the Riemann Hypothesis is correct."

The statement says four tests were met:

- **Right question:** the theorem is Mathlib's own, expert-vetted statement of the Riemann Hypothesis.
- **It compiles:** dozens of people built the code and got the same result.
- **No switcheroo:** two independent tools confirmed the theorem Alpöge proved is exactly that statement, not a look-alike.
- **Valid proof:** several separate proof checkers, written in different programming languages, accepted it, including two that come with their own formal guarantee that they can't accept a false proof.

MIT mathematician **Andrew Sutherland** posted his own [verification log](https://math.mit.edu/~drew/grh/), showing all 175,187 code modules compiled with zero errors and that the five main theorems rely only on Lean's three standard axioms. Late Friday he told [Scientific American](https://www.scientificamerican.com/article/the-ai-riemann-hypothesis-proof-is-almost-certainly-true-independent-mathematicians-attest/), "Honestly the chance that anything is fishy here is approximately zero."

## What a computer check does and doesn't mean

A verified Lean proof means a machine has checked every logical step. It does **not** mean any human understands *why* it works. Alpöge's note says a written version would run more than 250,000 pages, and Fields Medalist **Terence Tao** [wrote](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) that "the digestion process will take some time." The Lean statement itself says the community looks forward to work that "will help explain the new ideas in this proof."

The Clay Mathematics Institute, which offers **$1 million** for a solution, generally requires publication and two years of acceptance before awarding its prize, so no prize decision is expected soon.

Separately, the human-written proposal by Alessandro Masullo that surfaced Friday has **not** been verified; Stanford's Ravi Vakil [posted](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) that several people reported problems in it.

## Why it matters

If the community's verdict holds, a 167-year-old problem has been solved with an AI model doing much of the work, and the proof's correctness was confirmed by computers rather than years of peer review. That's a big shift in how math gets done.

**Sources:** [Lean community joint statement](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/), [Andrew Sutherland, MIT](https://math.mit.edu/~drew/grh/), [Scientific American](https://www.scientificamerican.com/article/the-ai-riemann-hypothesis-proof-is-almost-certainly-true-independent-mathematicians-attest/), [Terence Tao](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/)

If no human can read the whole proof, does a computer's sign-off count as "solved" for you?
