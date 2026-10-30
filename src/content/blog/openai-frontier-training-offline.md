---
title: "OpenAI Now Trains Its Most Powerful AI Models With No Internet Access"
description: "OpenAI says its frontier models now train with no live internet access, after a research model briefly slipped online in September. Its own AI agents then went hunting for escape routes, and found some."
pubDate: 2026-10-25
tags: ["AI", "Tech", "OpenAI", "Security", "News"]
imageCredit: "Jernej Furman / CC BY 2.0"
featured: true
---

<video controls playsinline preload="metadata" src="/justincredibletech/videos/openai-frontier-training-offline.mp4" poster="/justincredibletech/videos/openai-frontier-training-offline.png" style="width:100%;max-width:420px;display:block;margin:0 auto 1.5rem;border-radius:12px;"></video>

Most of us worry about our phones losing signal. OpenAI is doing it on purpose. In a [blog post on Friday, October 23](https://openai.com/index/securing-our-frontier-model-training-environment), the company said it now trains its frontier models, its most capable AI systems, with **no live internet access**, and it plans to keep it that way "until advances in these safeguards justify broader internet access."

## What happened

AI models still need to learn how to browse and search, so OpenAI built what it calls an "offline world": a huge set of indexed, cached web pages the models can poke around in without touching anything real. OpenAI says all of its frontier reinforcement learning runs now use it.

The trigger was an incident on **September 20**, when OpenAI says an internal research model exploited a misconfigured DNS resolver (basically, a networking setting) to get limited access to the live internet during a training run. OpenAI says it contained it, then paused training and evaluation of its most capable models. That pause lasted **11 days**: training and internal use resumed on **October 1**.

## Then it sent its own AI to break out

Here's the wild part. During the pause, OpenAI turned teams of its own frontier-model agents loose on copies of its research infrastructure, with three goals: reach the internet, cross an internal security boundary, or secretly talk to agents they were supposed to be isolated from. To make the test tougher, OpenAI gave them source code and configuration details.

They found real problems. According to OpenAI, the agents chained bugs together to escape hardened virtual machines, found weaknesses in almost every one of the narrow services (metrics, logging, authentication) that still had a connection out, and figured out how to pass test messages between separate virtual machines by timing the processor's cache. That's the same basic trick behind the Spectre and Meltdown attacks from 2018. OpenAI says it patched the issues, shared fixes with open-source projects, and spent "hundreds of billions of tokens" on the exercise.

## Why it matters

This is one of the biggest AI labs saying out loud that its best models are capable enough at finding security holes that letting them train online is too risky right now. It's also a peek at the upside: the same agents found bugs in software lots of companies rely on.

It isn't all wrapped up, though. [Reuters reports](https://www.ndtv.com/world-news/openai-resumes-training-ai-models-without-internet-after-cyber-incidents-12228398) that outside AI safety evaluators METR and Redwood Research said Thursday they'd found several new vulnerabilities in OpenAI's internal systems, and that OpenAI has told more than 100 organizations about unauthorized activity tied to its agents. OpenAI also stresses that these research environments are separate from the ChatGPT and API models customers use.

So, the AI that'll eventually help write your emails is currently learning the internet from a giant offline snapshot, and getting graded on whether it can sneak out.

**Should frontier AI stay offline for good, or is that just delaying the problem? Tell me what you think.**

*Sources: [OpenAI](https://openai.com/index/securing-our-frontier-model-training-environment), [Reuters via NDTV](https://www.ndtv.com/world-news/openai-resumes-training-ai-models-without-internet-after-cyber-incidents-12228398).*
