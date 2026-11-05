---
title: "ChatGPT Can Now Make Animated GIFs With OpenAI's Images 2.6"
description: "OpenAI's Images 2.6 brings animated GIF creation to ChatGPT and Codex, plus image generation OpenAI says is 50% faster. It's rolling out today on web, desktop and mobile."
pubDate: 2026-11-04
tags: ["OpenAI", "ChatGPT", "AI", "Image Generation"]
imageAlt: "A hand holding a black smartphone sideways with the word ChatGPT in white on its screen, against a light gray background"
imageCredit: "Jernej Furman via Wikimedia Commons (CC BY 2.0)"
featured: true
---

<video controls playsinline preload="metadata" src="/justincredibletech/videos/openai-images-2-6-chatgpt-gifs.mp4" poster="/justincredibletech/videos/openai-images-2-6-chatgpt-gifs.png" style="width:100%;max-width:420px;display:block;margin:0 auto 1.5rem;border-radius:12px;"></video>

The reaction-GIF economy just got a new player. OpenAI launched **Images 2.6** on Wednesday, and the headline feature is one people have wanted for a while: **ChatGPT can now make animated GIFs**, from a text prompt or from a photo you upload.

It's the #2 story on the Hacker News front page tonight, it's all over AI X, and both [OpenAI's announcement](https://openai.com/index/introducing-images-2-6/) and [The Verge](https://www.theverge.com/ai-artificial-intelligence/1026474/openai-chatgpt-animated-gifs-images-2-6) have the details.

## What's new

- **GIFs, natively.** Before this, ChatGPT couldn't generate a GIF in one step, The Verge notes. Now you can ask for one, then adjust the animation speed and edit individual frames right in ChatGPT.
- **Faster images.** OpenAI says Images 2.6 generates images **50% faster** than before.
- **Two API models.** Developers get GPT-Image-2.6 **Flare** (built for speed; OpenAI says it can produce an image in as little as six seconds at low quality) and GPT-Image-2.6 **Sunburst** (higher quality and more consistency across edits).
- **More editing tools for developers.** Image markup, already in ChatGPT, comes to the API, along with SVG exports and a new "complexity" setting that controls how much planning the model does before it draws.

## The nerdy part: how a GIF gets made

A GIF is just a stack of still frames played in a loop. OpenAI's [developer guide](https://developers.openai.com/api/docs/guides/image-generation) shows the knobs: in the API, a GIF can have **2 to 64 frames** (9 by default), and each frame can be shown for 20 to 2,000 milliseconds (200 by default). So the default animation is 9 frames at 0.2 seconds each, a 1.8-second loop.

That's the same basic trick Eadweard Muybridge used in 1878 with *The Horse in Motion*: a row of still photos that look like movement when you flip through them. The difference is that this time, an AI model makes every frame.

## The scale is wild

OpenAI says people now create **4 billion images a week** across ChatGPT, Codex and its API, or more than half a billion a day. The Verge points out that's up from 3 billion a week in September.

## The safety angle

Motion adds new ways for things to go wrong, and OpenAI's [system card](https://deploymentsafety.openai.com/chatgpt-images-2-6/safety-evaluations) is upfront about it. Its safety checks look at the whole grid of frames, not just one picture, and some content categories are blocked more broadly for GIFs than for stills. On a test set of 310 policy-violating GIFs, that moderation caught 77.66% of them, and OpenAI says motion-related violations "remain challenging to detect."

## Who gets it

Images 2.6 is rolling out globally today in ChatGPT and Codex across all subscription tiers, on web, desktop and mobile, according to OpenAI. Flare and Sunburst are available in the API now.

So, be honest: what's the first GIF you're making, and is it a meme, your pet, or your boss?

*Sources: OpenAI announcement, developer guide, API changelog and Images 2.6 system card; The Verge (November 4, 2026). Photos: ChatGPT smartphone images by Jernej Furman (CC BY 2.0) via Wikimedia Commons; "The Horse in Motion" by Eadweard Muybridge, 1878 (public domain) via Wikimedia Commons.*
