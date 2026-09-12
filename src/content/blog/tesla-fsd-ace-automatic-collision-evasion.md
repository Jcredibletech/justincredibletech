---
title: "Tesla’s New FSD Trick: A Panic Button That Presses Itself"
description: "FSD Supervised v14.3.9 is rolling out with Automatic Collision Evasion on HW4—FSD can jump in while you’re driving manually if a crash looks imminent or you’re not attentive. Here’s the lighthearted consumer take."
pubDate: 2026-09-12
tags: ["Tesla", "FSD", "Autopilot", "EV", "Software", "Safety"]
featured: true
---

Your Tesla just got a feature that sounds like a movie trailer tagline: if things go sideways while *you’re* driving, **Full Self-Driving (Supervised)** can wake itself up, try to keep you safe, and then keep going.

That’s the short version of **Automatic Collision Evasion (ACE)** shipping with **FSD Supervised v14.3.9** in software **2026.27.6**—a rollout that’s live as of this weekend for Hardware 4 cars (with a parallel **FSD v14.2 Lite** path for Hardware 3).

Keep the vibe light: this is still **Supervised**. You’re not handing the keys to a sci-fi robot butler. You’re getting a software seatbelt with opinions.

## What ACE actually does (per Tesla’s notes)

Tesla’s release notes say Automatic Collision Evasion **activates Full Self-Driving (Supervised) to try to keep your vehicle safe and then continue driving**. It can engage while you’re driving **manually** when:

- The car thinks you’re **not attentive enough** (Tesla’s example: reaching toward the back seat), **or**
- FSD may have been **unintentionally disengaged**

Reporting on the fuller notes also describes a frontal-collision path: if a crash looks imminent and **braking alone may not cut it**, ACE can let FSD take over to steer around—think lane change / shoulder moves when conditions allow—then continue under normal Supervised control. Exact limits (speed caps, wet roads, no pedestrians in path, etc.) live in the Owner’s Manual and on-screen notes, and they can vary by vehicle and market.

The consumer translation: **your car has a panic button that presses itself**—then it tries to drive like FSD again instead of freezing in the middle of the street.

## The rest of v14.3.9 (why the nerds care)

ACE is the headline, but Tesla stuffed the update with the usual neural-net buffet:

- Upgraded **reinforcement learning** training across lots of driving scenarios  
- Better vision encoding for rare / low-visibility situations and traffic signs  
- A ground-up **MLIR** AI compiler/runtime rewrite Tesla says yields **~20% faster reaction time**  
- Less unnecessary lane biasing / minor tailgating  
- Snappier parking decisions and map parking pins  
- Better manners around emergency vehicles, school buses, animals, weird objects in the path, and complex lights  

HW3 owners aren’t left completely out: **v14.2 Lite** distills a lot of HW4 v14 intelligence onto older computers, plus comfort tweaks, arrival options, and speed profiles (yes, including the delightfully named **SLOTH**).

## The fun question

Be honest in the comments:

**If your car could auto-grab the wheel for one “oh no” moment, which would you want most?**

- **A)** Dropped phone / back-seat kid chaos  
- **B)** Surprise cut-in that braking alone won’t fix  
- **C)** Accidental FSD cancel you didn’t mean  
- **D)** I’m good—I’ll take over myself, thanks  

There’s no wrong answer. There’s only “I still have to pay attention,” which Tesla repeats in every Supervised disclaimer for a reason.

## Why this is a big consumer moment (without the doom scroll)

For years, driver-assist marketing lived in two camps: **“we brake hard”** (classic AEB) and **“we drive for you until we don’t.”** ACE sits in a weird middle: **you’re driving**, and the stack may still decide *now* is the time to become FSD again.

That’s useful if it works as advertised. It’s also a reminder that “Supervised” is doing a lot of linguistic heavy lifting—software can be bold *and* you still own the job of watching the road.

If you’re on HW4 with FSD, watch for **2026.27.6** / **v14.3.9** in the Software update screen. If you’re on HW3, the Lite branch is the one to eyeball. Either way: stay awake, buckle up, and maybe don’t treat “reaching for the back seat” as a lifestyle.

The panic button got smarter. Your job is still to not need it.

---

*Sources: Tesla official release notes for 2026.27.6 / FSD Supervised v14.3.9 and v14.2 Lite via Not a Tesla App; Tesla Oracle and Teslarati coverage of the Automatic Collision Evasion rollout (Sept 2026). Feature availability and exact ACE triggers can vary by hardware, market, and Owner’s Manual details—check your car’s notes.*
