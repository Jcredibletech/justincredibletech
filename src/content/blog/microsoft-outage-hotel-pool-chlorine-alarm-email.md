---
title: "Microsoft's Outage Blocked a Hotel Pool's Email Alarm, and 15 Guests Were Hurt, German Theme Park Says"
description: "Phantasialand says the automatic chlorine dosing system at its Hotel Ling Bao in Brühl, Germany, overdosed the pool on Friday, November 13, 2026, and the monitoring system's warning emails never arrived because of the Microsoft 365 and Outlook outage. Fifteen guests reported respiratory irritation and four were taken to hospitals."
pubDate: 2026-11-15
section: "tech"
tags: ["Microsoft", "Outlook", "Microsoft 365", "Outage", "Safety", "Germany"]
featured: true
image: "/images/microsoft-outage-hotel-pool-chlorine-alarm-email.jpg"
imageAlt: "The pagoda-style Hotel Ling Bao at Phantasialand in Brühl, Germany, beside a garden pond"
imageCredit: "Phantasialand DE / CC BY-SA 4.0, via Wikimedia Commons (file photo)"
---

<video controls playsinline preload="metadata" src="/justincredibletech/videos/microsoft-outage-hotel-pool-chlorine-alarm-email.mp4" poster="/justincredibletech/videos/microsoft-outage-hotel-pool-chlorine-alarm-email.png" style="width:100%;max-width:420px;display:block;margin:0 auto 1.5rem;border-radius:12px;"></video>

**This is a follow-up** to our coverage of last week's Microsoft 365 outage, most recently [Microsoft Says Microsoft 365 Is Fully Restored and Blames a Network Capacity Upgrade for the Outage](https://justincredibletech.com/blog/microsoft-365-outage-ends-network-upgrade/). The outage is over, but one of its strangest real-world effects is only now coming out.

## What happened

On Friday, November 13, 2026, guests at **Hotel Ling Bao**, one of the hotels at the Phantasialand theme park in Brühl, near Cologne, Germany, complained of health problems after using the hotel's pool. Emergency crews were called. According to the fire department, about **40 first responders** were on scene for roughly two hours ([Der Spiegel](https://www.spiegel.de/panorama/phantasialand-in-bruehl-wegen-microsoft-ausfall-chlorpanne-zu-spaet-entdeckt-15-verletzte-a-6e70b4ec-9e3e-4c52-aae5-28beaa2fef62)).

Responders' tests found a defect in the pool's **automatic chlorine dosing system**, which had pushed the chlorine level far too high. In total, **15 guests** were affected, mostly with irritated airways. Early reports said five people went to the hospital; that was later corrected to **four**, one of whom stayed for observation with a moderate injury. The others were checked by an emergency doctor. The water was replaced, and the pool has reopened ([WDR](https://www1.wdr.de/nrw/rheinland/rhein-erft-kreis/technischer-defekt-chlor-phantasialand-100.html)).

## Where Microsoft comes in

Phantasialand told German public broadcaster WDR on Saturday that the pool's maintenance and safety monitoring system **did** raise an alarm, but it sends those alarms **by email**. Because of the Microsoft outage that was hitting Outlook at the time, the park said, the warning emails never arrived, so nobody knew the chlorine level was out of range until guests started feeling it ([WDR](https://www1.wdr.de/nrw/rheinland/rhein-erft-kreis/technischer-defekt-chlor-phantasialand-100.html); [Deutschlandfunk](https://www.deutschlandfunk.de/phantasialand-fuehrt-pool-panne-auf-stoerung-bei-microsoft-zurueck-100.html)).

That explanation comes from the park. Microsoft has not commented on this specific incident, and no official investigation findings have been published. Microsoft said Saturday morning that all of its Microsoft 365 systems were running again ([Der Spiegel](https://www.spiegel.de/panorama/phantasialand-in-bruehl-wegen-microsoft-ausfall-chlorpanne-zu-spaet-entdeckt-15-verletzte-a-6e70b4ec-9e3e-4c52-aae5-28beaa2fef62)). The story has since spread well beyond Germany, including a widely shared [Tom's Hardware](https://www.tomshardware.com/tech-industry/data-centers/microsoft-365-outage-leads-to-chlorine-gas-poisoning-of-15-hotel-guests-email-warning-system-fails-40-first-responders-deployed-for-triage-four-hospitalized) report that reached the Hacker News front page.

## Why it matters

The monitoring side worked: it noticed the problem. The weak link was that the only path from "something is wrong" to "a human knows" ran through one cloud email service. When that service went down, the alarm effectively went with it.

Plenty of everyday systems work the same way: building alarms, server monitors, freezer and water-leak sensors, even some home security setups that alert you only by email or a single app. The lesson engineers keep relearning (CrowdStrike in 2024 was another one) is that anything tied to safety needs a second path that doesn't share the same point of failure: a local siren or light, a text message through a different provider, or a person who checks a reading on a schedule.

## What you can do

- **Check how your own alerts reach you.** If your smoke, leak, or security alerts only arrive by one email account or one app, see whether you can add a second method, like SMS or a local alarm.
- **If you run systems at work,** test what happens when your email or messaging provider is down. An alert that can't be delivered is the same as no alert.

**Should a safety alarm ever rely on email alone? Tell me on X.**
