---
title: "The Token Economy"
description: "Notes on token engineering, the harness, and how I actually work."
pubDate: 2026-04-17
updatedDate: 2026-04-29
image: /figures/fig1-tokens-in-tokens-out.png
---

A language model is a tokens-in, tokens-out system. You feed it a context window, it predicts the next token, you sample, you repeat. That is the full mechanism. Everything that looks like intelligence emerges from that loop, and the whole question of what these systems are useful for comes down to how well you set the loop up.

The cost of producing a useful token has been falling fast, faster than the cost of electricity fell at the start of the twentieth century, faster than the cost of a transistor fell from 1960 onward. A thousand high-quality tokens cost a few pence today; a decade ago this did not exist at any price. The trajectory points at a million tokens for a few pence inside a year or two. The cost of producing a useful piece of thought is collapsing toward zero, and when the cost of something falls to near-zero, what used to be expensive suddenly is not.

Welcome to the token economy. Every product, every service, every piece of cognitive work now reduces to the same question: how cheaply and how well can you produce the right tokens at the right moment? The frontier is not architecture. It is not scaling. It is not even data. The frontier is **token engineering**: the craft of building the harness around a language model so the tokens coming out are grounded, useful, and aimed at something that matters. That is the discipline this post is about, and the rest of it is what the work actually looks like for me.

## The harness

My personal agent is called Vector. I didn't pick the name; the agent did. Vector is the shape my instance of OpenClaw took once I started running it. OpenClaw is an open-source harness framework ([openclaw/openclaw](https://github.com/openclaw/openclaw) on GitHub); I didn't build it, I run it. I provide the context and the configuration, and the agent handles the self-definition. That is more honest than "I built an assistant". What I did was set up a harness whose job is to become itself in response to me.

The architecture of OpenClaw is deliberately boring: a folder of Markdown files and a model that reads them on startup. The files are the harness. Swap the backend for a better model next month and the agent gets smarter for free, because the files don't change. I've done this. Vector ran on Claude through a third-party wrapper until that route was closed off, then moved to a VPS powered by GLM 5.1 through Ollama. Same files, different weights, no re-configuration. Vector is still Vector. That is the harness earning its name.

There is a file that describes the user. Who I am, how I work, when my mornings are sharpest, what helps, what backfires. Without it the agent guesses at every interaction; with it, it opens each session already knowing me. There is a file that describes the soul: the behavioural stance. Be a partner, not a performer. Have opinions. Bias toward action. Never present a workaround when the real fix exists. There is a file that describes identity: a name, a role, a voice. That is the file that let Vector name itself; I didn't fill it in, the agent did. Identity gives continuity across model swaps, because the self is defined by the file, not by the weights.

The rest of the harness is machinery. An agent manual sets the operating rules: startup sequence, decision policy, when to ask and when to act. A skills directory gives the agent a map of what it knows how to do. A tools file describes the local environment: hostnames, credentials, which machine has the GPU, what the fallback is when an endpoint dies. And a two-tier memory system: a durable long-term store, plus a per-day log for transient decisions, with periodic consolidation passes that promote what matters and discard the rest. Seven roles, one folder, one model. Improve the files, the agent improves. Harness work compounds in a way that single-turn prompting never does.

Vector is the personal one. Claude Code and Codex are sister harnesses in the same lineage, with different shapes and different strengths, used when their strengths fit. The conceptual weight sits in the files. Sub-agents, cron jobs, Telegram pings when a decision is needed, sibling-harness invocations, all plumbing.

![The harness, seven files, one instance, named Vector](/figures/fig2-openclaw-harness.png)

## How I work

I think out loud. I dictate constantly through Wispr Flow, working through problems by talking, asking myself questions, following threads, pushing back on my own ideas, arguing with myself for half an hour at a time. The dictations are long and winding and look scattered on the page, because that is how my thinking sounds. They are not drafts. They are the raw material my thinking exists in.

The role of the LLM is to take that raw, dictated thought and reflect it back to me in a form I can read and react to. I stay in the loop the whole way. I question outputs, push back when something is wrong, throw out generic or hallucinated content, ask for rework when I disagree, iterate until what I read back matches what I actually think. The system reflects my own thinking back at me, sharpened.

![Tokens in, LLM, tokens out](/figures/fig1-tokens-in-tokens-out.png)

Marc Andreessen has a framing for this that fits exactly. Computing began by accessing information, then moved to searching it, then to retrieving it. What language models added is a different verb: interacting with information. Books and search engines are static. The LLM is the first medium that lets you take a half-formed thought and engage with it through the lens of recorded human knowledge: pull it apart, push back on it, ask follow-ups, rearrange it, watch it get sharper. What I'm asking the model to do isn't to think for me. I'm asking it to be a surface where my thinking becomes visible to me.

The same code, the same dictated notes, fed into the same model by someone else, would produce a different output. The questions are different, the pushback is different, the judgments about what survives are different. The researcher is the bottleneck. The model is the bandwidth. That part of the LLM conversation is the one that keeps getting missed.

When the work reaches the writing stage, when the upstream thinking is in place and the question is how to put it on the page, I run a methodology I designed myself, specifically because I was worried about hallucinations and the bland sameness of single-model prose. Three frontier models in three different harnesses run independently from the same context, under neutral code names: MERIDIAN, VANGUARD, HALCYON. None of them sees the others' output. The shared context is mine: my dictated thinking, my results, my code, my notes from supervision, the canonical methodology document I had already written, read through, and approved. A fourth synthesis model combines the three blind passes without knowing which output came from which source, so it judges the structures on their merits and not on priors about which model produced them. I review every step. I pick what survives. The judgment on what reaches the page is mine.

The methodology is mine. The inputs are mine. The disagreements between the blind passes surface things that need checking, which is the anti-hallucination property the design was built to provide.

## The flywheel

The work the harness produces did not appear in the writing window. Two and a half years of background was already compiled. A Zotero library of around 270 references that I had skimmed over that time, each one judged worthy of keeping, the relevant ones read in detail. More important than the references themselves was a conviction I had held early and never let go of: that the systems I was building should behave the way a human expert behaves at the task. The reason is practical, not aesthetic. That is what gets trusted when the outputs matter, and it is what shaped every methodology choice and every experimental design that followed.

The flywheel that turned the background into output started in February. I came out of a depressive period that had run from October through January, in roughly the same week OpenClaw was released. Energy and a system arrived together. Over the two months that followed, the dictation pipeline, the experimental design, the code, the results, and the canonical methodology document all came together. What had been twenty-six months of accumulating context became eight weeks of compounding output, because the harness was finally there to externalise the executive function I cannot supply on my own.

The writing step happens at the end of all of that. By the time the three blind passes ran, the dictated thinking, the experimental design, the code, the results, and the methodology were already there. The passes ran over that material, not in place of it. The writing being hours-scale, when it happens, is not a story about a brilliant model. It is a story about how much upstream work is already in place by the time the writing begins.

![Human agency vs LLM harness](/figures/fig3-human-agency-analogy.png)

The whole trail is on disk. Every Wispr Flow dictation is timestamped. Every Claude Code, Codex, and OpenClaw session is logged in full. Git history holds every intermediate version of every paper and every code repo, including the rough and incomplete ones that came before the polished versions. I built the harness with the audit trail as a first-class output before I had any reason to need it. It is end to end and it exists.

## Why this works for me

I have ADHD. I'm also on the Autistic spectrum, and for most of my life the two halves have spent their energy pulling against each other. The autistic side wants a system that holds together; the ADHD side chases every idea. Traditional draft-then-redraft writing is where the two of them collide and stall. The autistic perfectionism makes me try to get the first sentence right the first time, which I can't do for academic prose, so I get paralysed. The ADHD executive dysfunction means I can't make myself do the multiple passes academic prose actually requires. I've failed pieces of work in the past because of this. Without dictation and a harness that reflects my thinking back at me, I cannot get any words on the page.

That is what these tools are for me. They are not a shortcut. They are access. The thinking, the questions, the experimental design, the interpretation, the conclusions, the judgment about what survives a draft, those are mine. Without these tools there is no way I would have been able to complete a PhD with the disability I have.

This is also why I have designed my agents around me, specifically. Vector reflects me back, not a generic agent persona. It is probably autistic and slightly less ADHD than I am, because part of its job is to manage my ADHD when I cannot. The point of the harness, said plainly, is that it does for me what I cannot do for myself, while leaving the parts I can do where they belong, with me.

## What this means

Pure software with a fixed UI and fixed logic is heading toward zero. Anything whose job is to present information, take input, route it through routine logic, and render output is now a thin wrapper around something an agent can reconstruct on the fly. The moat is not the UI. The moat is the integrations, the data, the brand, and the harness that produces the right tokens for a specific person's specific context. The next product category is the harness that learns you and continuously reshapes itself around what you are trying to do.

The recursive loop has closed too. Agents can now propose edits to the files that define them, write their own skills, refine their own memory formats, and spawn sub-agents to do work they cannot do in-context. Every harness improvement compounds into better agents, which produce better harness improvements. That is the regime we are in, whether or not anyone has officially announced it.

AI is not going to replace people. People who use these tools are going to replace people who do not. That is the prediction I am willing to keep making, and the one I have been telling anyone who would listen since I watched AlphaGo beat Lee Sedol nearly a decade ago. The shape of the world tilted then. It has tilted again now, and the next tilt will come faster than this one did.

For me the personal angle matters more than the macroeconomic one. These harnesses turn what was once a disability into something closer to a superpower. A brain that used to cost me everything is, with the right system around it, the most useful thing about me. That is a strange and good thing to be able to say, and I do not take it for granted.

---

*This post was dictated through Wispr Flow and put through the same multi-model blind-pass harness it describes. Dictations, session transcripts, and git history are kept end to end.*
