---
title: "Update: Microsoft 365 Outage Enters a Second Day as Recovery Begins"
description: "The Microsoft 365 and Outlook outage that started at 10:17 a.m. Central Time on November 12, 2026, continued overnight and into Friday. Microsoft says recovery is underway, with broader improvements in North America, and has extended the email timeout window to 48 hours. The incident is still not fully resolved."
pubDate: 2026-11-13
tags: ["Microsoft", "Outlook", "Microsoft 365", "outage", "news", "tech"]
section: "tech"
imageAlt: "Building 92 at Microsoft's Redmond, Washington headquarters"
imageCredit: "Coolcaesar / CC BY-SA 4.0, via Wikimedia Commons"
featured: true
---

<video controls playsinline preload="metadata" src="/justincredibletech/videos/microsoft-365-outage-day-two-recovery.mp4" poster="/justincredibletech/videos/microsoft-365-outage-day-two-recovery.png" style="width:100%;max-width:420px;display:block;margin:0 auto 1.5rem;border-radius:12px;"></video>

If you went to bed hoping Outlook would be back to normal this morning, it isn't. Fully, anyway. The Microsoft 365 outage that started around 10:17 a.m. Central Time on Thursday, November 12, 2026, stretched through the night and into Friday. As of about 7:00 a.m. Central Time, Microsoft was still listing a service degradation, more than 20 hours later. This is an update to [yesterday's post](https://justincredibletech.com/blog/microsoft-365-outlook-outage/), which covered the outage while it was still spreading Thursday afternoon.

## What's new since yesterday afternoon

- **The first fix did not work as planned.** Thursday evening, after our earlier post, Microsoft said a process on affected servers that is responsible for establishing secure connections was becoming overwhelmed, causing those servers to stop processing requests. Overnight, it then said changes applied to improve serviceability were "not taking as expected," and it began looking at other ways to add capacity ([Microsoft Service Health](https://status.cloud.microsoft/en-us/), [The Guardian](https://www.theguardian.com/technology/live/2026/nov/13/microsoft-outage-down-today-live-update-outlook-teams-365-when-fixed-latest-status-cause-news)).
- **Recovery is underway, but it is not done.** In Friday morning updates, Microsoft reported recovery progress first in parts of Asia-Pacific, then "encouraging" progress in Europe, and by about 7:00 a.m. Central Time, "broader improvements" in North America, with "encouraging recovery signals" still coming in from Asia-Pacific. Some users "may continue to experience intermittent access issues or delayed email delivery" ([Microsoft Service Health](https://status.cloud.microsoft/en-us/); [AP](https://apnews.com/article/microsoft-outage-outlook-email-365-status-down-d92547a821930290db2964388016979a); [Tom's Guide](https://www.tomsguide.com/news/live/microsoft-outlook-down-live-updates-outage-11-12-26)).
- **Delayed mail is being given more time.** Microsoft extended the email timeout window to **48 hours** so delayed messages are less likely to expire while queues and backlogs are cleared ([Microsoft Service Health](https://status.cloud.microsoft/en-us/); [Tom's Guide](https://www.tomsguide.com/news/live/microsoft-outlook-down-live-updates-outage-11-12-26)).
- **Microsoft says it is not a cyberattack.** The company has repeatedly said it has "no evidence of malicious activity associated with this incident." After the outage is fully mitigated, it says it will publish a Post-Incident Report with the root cause and defense-in-depth actions ([Microsoft Service Health](https://status.cloud.microsoft/en-us/)).
- **The official incidents are still open.** Watch **EX1550543** and **MO1550821**. The public status page was still showing a Microsoft 365 service degradation as of Friday morning, Central Time, and no Azure issues at that time.

Downdetector counts are user reports, not a census, but they help show the trend: Tom's Guide put Outlook reports around 10,000 Friday morning, Central Time, far below Thursday's peak of more than 130,000, but not at zero.

## Why it still matters to you

This did not stay a U.S. afternoon glitch. Overnight and into Friday, the outage disrupted schools, courts, hospitals, police reporting systems, and government offices in places that were starting their workday while North America was asleep, including the United Kingdom, Japan, and Australia ([The Guardian](https://www.theguardian.com/technology/live/2026/nov/13/microsoft-outage-down-today-live-update-outlook-teams-365-when-fixed-latest-status-cause-news); [AP](https://apnews.com/article/microsoft-outage-outlook-email-365-status-down-d92547a821930290db2964388016979a)). If your inbox is coming back, you may still see delayed mail for hours. If it is not, switching apps may not help, because Outlook on the web, the desktop Messaging API, Exchange ActiveSync, and the REST API have all been listed as potentially affected.

## What you can do

- **Check the official status.** Microsoft is posting at [status.cloud.microsoft](https://status.cloud.microsoft/en-us/) and on X at [@MSFT365Status](https://x.com/MSFT365Status).
- **Give delayed mail time.** That 48-hour timeout window is there so messages already in the queue have a better chance of arriving once capacity comes back. Don't assume a message was never sent just because it hasn't shown up yet.
- **If you are an admin,** document the impact now (times, users, services) if you may later request an SLA credit. A public incident listing does not automatically mean a credit is approved.
- **Be careful with unexpected "your email is back" messages.** Outages are a common cover for phishing. Use official status pages, not links in unsolicited mail.

This post describes the incident as it stood around 7:00 a.m. Central Time on Friday, November 13, 2026. Microsoft has not marked it fully resolved and has not yet published a final root-cause report.

**Is your Outlook back this morning, or are you still waiting on delayed mail? Tell me on X.**
