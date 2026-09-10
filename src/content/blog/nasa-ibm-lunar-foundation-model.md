---
title: "NASA and IBM just open-sourced a foundation model for the Moon"
description: "On September 10, 2026, NASA and IBM released a lunar AI foundation model on Hugging Face — craters, volcanic quirks, polar ice, and why that ice matters."
pubDate: 2026-09-10
tags: ["NASA", "IBM", "AI", "space", "Moon"]
featured: true
---

Some days the tech news is a phone. Some days it’s an AI model trained on the Moon. **September 10, 2026** is the second kind of day.

NASA, working with **IBM Research** and a bench of academic partners, launched the **NASA-IBM Lunar Foundation Model** — among the first open-source AI foundation models built specifically for lunar science. The weights live on **Hugging Face**. The code is on **GitHub**. The training diet is mostly **Lunar Reconnaissance Orbiter (LRO)** data, with help from other missions. And the early party tricks are exactly the ones lunar scientists care about: **craters**, **young-looking volcanic features**, and **polar ice prospectivity**.

## What a “foundation model for the Moon” even means

Foundation models are the “pre-train once, fine-tune many times” idea you’ve heard in language and Earth observation — except here the corpus is the lunar surface. Instead of building a bespoke algorithm from scratch every time you want to count craters or guess where ice might hide, you start from a model that already absorbed a huge, mostly unlabeled library of Moon imagery and related measurements.

NASA’s own framing is refreshingly practical: decades of lunar data only help if scientists can *explore* it. Kevin Murphy, NASA’s chief science data officer (and acting chief data/AI officer), put it plainly — collecting petabytes is half the job; making that data usable for discovery is the other half.

## Trained on a lot of Moon

LRO has been mapping the Moon in detail for years. NASA notes LRO’s data volume dwarfs other NASA planetary missions combined, and the foundation model was trained on on the order of **~2 million image tiles** — more than **1 million** high-resolution camera tiles around **1-meter** resolution and nearly **964,000** multispectral tiles around **100-meter** resolution. The mix also includes contributions tied to missions such as **GRAIL**, **Lunar Prospector**, and JAXA’s **SELENE (Kaguya)** terrain/imagery heritage.

That multimodal, multi-resolution setup is the point. The Moon doesn’t look the same in every instrument or at every scale. A model that can reconcile those views is more useful than a single-sensor specialist.

## Three jobs that matter right now

### 1) Craters, faster
Every crater is an impact story. Counting and measuring them is how scientists date surfaces and reconstruct solar-system history. Doing that by hand across global mosaics is heroic and slow. The Lunar Foundation Model helps accelerate identification and measurement so researchers spend more time on interpretation — and it can be fine-tuned to spot *new* changes between observations (NASA showed an example highlighting a fresh impact feature against older craters).

### 2) Weird volcanic leftovers
The Moon isn’t belching lava today, but its volcanic past left oddballs called **irregular mare patches**. They can look relatively young, which pokes at timelines for how the Moon cooled. Mapping them at scale is tedious; a foundation model that can segment those features after light fine-tuning is a force multiplier for geologic storytelling.

### 3) Polar ice prospectivity
This is the headline for Artemis-era practicality. Permanently shadowed regions near the poles stay cold enough to trap and preserve ice for geological ages. Knowing where ice is *likely* — on and below the surface — informs science *and* future resource planning (think life support, fuel chemistry, and “do we land here?” decisions). NASA and IBM released ice-prospectivity fine-tunes alongside the base model; public Hugging Face cards describe strong test metrics on that regression-style task (including reported **R² around 0.988** on held-out evaluation for the ice-prospectivity checkpoint). Treat benchmarks as benchmarks — but the direction is clear: ice maps are becoming model-assisted.

## Why lunar ice is such a big deal

Ice isn’t just a trivia answer for “does the Moon have water?” It’s a logistics unlock. Water can support crews directly and, in more ambitious architectures, feed propellant production. Even before anyone is refining lunar OH/H₂O into rocket fuel at industrial scale, **knowing where ice is stable** changes landing-site science priorities and rover traverse planning. Dark polar cold traps are hard to observe; models that fuse multiple datasets help fill gaps without pretending the uncertainty is zero.

## Open science, not a walled demo

This release sits in NASA’s broader **AI for science** collaboration with IBM — alongside Earth-focused **Prithvi** models and the heliophysics **Surya** model. It ships with ML-ready datasets and benchmarks on Hugging Face, aimed at reproducible fine-tuning rather than a walled demo. Inside NASA, Marshall’s IMPACT AI team worked with Goddard, Ames, Planetary Science Division collaborators, and university partners — sprawl that, here, means the evaluation culture was treated as first-class.

## How to poke it yourself

On Hugging Face, look for **`nasa-ibm-ai4science/NASA-IBM-Lunar-Foundation-Model`** plus the **Ice-Prospectivity** fine-tune in the same org. GitHub has the full codebase; **TerraTorch** integration and LoRA-style adapters (freeze most base weights) are part of the published workflow. Pick a small labeled task — craters, mare patches, or ice — and fine-tune. No mission-control badge required.

## The JustinCredible take

Phones fold. Rockets stage. And now the Moon has a downloadable brain starter pack. The NASA-IBM Lunar Foundation Model won’t replace field geology or orbital missions — it makes the *maps and measurements* those missions produce easier to turn into answers. Craters for clocks. Volcanic oddities for thermal history. Ice for the future humans who might need a drink (or a tank of LOX/LH2) far from Earth.

Open weights on Hugging Face on launch day is the right energy. If you’re a space nerd, bookmark it. If you’re an ML nerd, fine-tune it. If you’re both: welcome — September 10, 2026 was a good day to be us.
