---
title: "Signal Starts Blocking Screenshots on Phones to Keep Built-In AI Assistants From Reading Chats"
description: "On November 20, 2026, Signal said it will restrict screenshots by default on iOS 27 and on Android devices where it detects an AI assistant reading the screen, to stop OS-level AI agents like Siri AI and Gemini from capturing messages. Signal calls the fix incomplete."
pubDate: 2026-11-20
section: "tech"
tags: ["Signal", "Privacy", "Apple", "Google", "Messaging", "AI agents"]
featured: false
image: "/images/signal-blocks-screenshots-ai-agents-ios-android.jpg"
imageAlt: "A screenshot of a Signal chat on an iPhone, shown over a blurred background"
imageCredit: "Signal iOS screenshot by Albe.26.1 / AGPL, via Wikimedia Commons (illustrative; an earlier Signal version, composited on a blurred background)"
---

Can an app keep your messages private if your phone's own AI assistant can read the screen? Signal says it now has to fight that problem directly.

## What happened

On **Friday, November 20, 2026**, Signal president **Meredith Whittaker** announced in a [blog post](https://signal.org/blog/protecting-your-privacy/) that Signal is "restricting the latest AI agents built into mobile operating systems from potentially capturing and storing your Signal data." [Reuters](https://www.investing.com/news/stock-market-news/exclusivesignal-restricts-screenshots-to-block-ai-agents-from-reading-messages-5040998) got the post first, and [The Verge](https://www.theverge.com/ai-artificial-intelligence/1038390/signal-blocking-ai-agent-screenshots-mobile-app) also reported it.

Here is how it works, according to Signal and [Digital Trends](https://www.digitaltrends.com/phones/signal-adds-screenshot-protections-to-stop-ai-agents-reading-chats/):

- **iPhone (iOS 27):** Signal blocks screenshots inside the app and adds a **"Block Siri AI"** setting under Privacy. It also hides Signal content in the App Switcher.
- **Android:** Instead of trying to catch every screenshot, Signal turns on its existing **Screen security** setting automatically when it detects an AI assistant trying to read the screen. That only works on Android versions where Signal can reliably detect it.
- **Mac:** Signal says it **can't** reliably block screenshots on macOS yet. It suggests adding Signal to the Siri "Excluded Apps" list.

You can switch the protection off if you want screenshots back, but Signal warns that doing so could expose your messages, and your contacts' messages, to those AI agents.

## Why Signal did it

Signal's argument is that AI features that "scan" what's on your screen pull messages out of its end-to-end encrypted app and into whatever database or server the AI agent uses. In Whittaker's words, the agents are "undermining Signal's ability to independently guarantee privacy." Signal did something similar last year on Windows 11 to block Microsoft's Recall feature.

Reuters also noted that earlier this week it reported Meta's **Muse** agent was able to pull Signal messages on a Mac and on an Android phone using broad system permissions granted at setup. Meta told Reuters agents need to see and interact with people's computers to work on their behalf, and that Muse only accesses other apps through permissions users explicitly grant.

## The catch

Signal itself calls the remedy **"incomplete."** Blocking screenshots doesn't stop other ways an AI agent might reach app data, such as files already stored on the device. Signal is asking **Apple, Google and Microsoft** to give app developers a simple way to opt out of AI screen reading, notifications access and file access.

## Why it matters

Phone makers are racing to build assistants that can see your screen and act for you. Signal's move is the clearest sign yet that privacy-focused apps and those assistants are on a collision course, and the trade-off lands on users: convenience features or stricter privacy.

**Sources:** [Signal blog](https://signal.org/blog/protecting-your-privacy/), [Reuters via Investing.com](https://www.investing.com/news/stock-market-news/exclusivesignal-restricts-screenshots-to-block-ai-agents-from-reading-messages-5040998), [The Verge](https://www.theverge.com/ai-artificial-intelligence/1038390/signal-blocking-ai-agent-screenshots-mobile-app), [Digital Trends](https://www.digitaltrends.com/phones/signal-adds-screenshot-protections-to-stop-ai-agents-reading-chats/)

Would you give up screenshots in a chat app to keep your phone's AI assistant out of your messages?
