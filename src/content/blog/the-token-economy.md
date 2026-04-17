---
title: "The Token Economy"
description: "We've passed the singularity. The next frontier is token engineering."
pubDate: 2026-04-17
image: /figures/fig1-tokens-in-tokens-out.png
---

Forty-eight hours ago I submitted an academic paper. I didn't write a line of the code. I didn't write a sentence of the prose. I didn't draw the diagram. I sent a model off for an hour, came back to seven rough iterations, spent another pass on alignment tweaks, and the figure in my head was on the page. The writing was done in parallel by a harness I had built over the preceding fortnight. I reviewed. I clicked submit. The thing is under double-blind review now, so I can't say what it is or where it's going. I can tell you that something has shifted, and I'm not the only one who feels it.

I have ADHD. Historically that meant I missed deadlines and hated myself for it. This week it meant I held a dozen parallel threads of thought, spun up the right agent for each one, and shipped the paper ahead of schedule. My brain hasn't changed. The environment has.

## The prediction

Almost a decade ago I watched AlphaGo beat Lee Sedol and knew where this was heading. I told anyone who would listen that AI was the next platform shift, on the scale of personal computing, and that language models were going to eat most of what we currently call software. People mostly thought I was being dramatic. I was early, not wrong. Here we are.

## The thesis

Welcome to the token economy. Every product, every service, every piece of cognitive work now reduces to the same question: how cheaply and how well can you produce the right tokens at the right moment? The frontier is not architecture. It is not scaling. It is not even data. The frontier is **token engineering**: the craft of building harnesses around language models so the tokens coming out are grounded, useful, and aimed at something that matters. That is the job now. That is the whole game.

## The argument

A language model is a tokens-in, tokens-out system. That is the full mechanism. You feed it a context window, it predicts the next token, you sample, you repeat. Everything that looks like intelligence emerges from that loop. Critics insist this cannot reach general reasoning because "it's just prediction". That misses what prediction does when the prior is rich enough. The model has compressed a meaningful chunk of human written output into a function that maps context to plausible continuations. From the outside, that is already most of what cognition looks like.

Then reasoning models arrived and added the inner monologue. Chain of thought is not a trick. It is the model being allowed to think before speaking. Imagine a human who voiced every thought as it formed, with no internal deliberation. You would call them impaired. That was the base model. The reasoning model is the same system with working memory and self-talk stitched on. Quality jumped because the model could rehearse, check, and revise before committing.

But self-talk in a vacuum is still ungrounded. A person locked in a room with only their own thoughts eventually loses the plot. What makes cognition useful is that the stream is constantly checked against the world. You look, you touch, you remember, you act, you see the result, you update. The **harness** is how we give that to a language model. Tools ground the monologue in live state. Memory carries context across sessions. Identity gives it a stable centre so it does not dissolve into whatever the last user said. A model plus a good harness is not a chatbot. It is a persistent, grounded, acting cognitive system. That is the unit of the new economy.

Token engineering is the discipline of designing these harnesses. Which files the agent reads on startup. How memory is structured and when it is written. Which tools the agent has, how they are described, what the defaults are. How sub-agents are spawned, what context they get, how their outputs are merged. How you prevent context rot, manage the cache, and stop the model drifting away from the task. None of this is glamorous. All of it is load-bearing. The frontier model is the easy part. The harness is the work.

![Tokens in, LLM, tokens out](/figures/fig1-tokens-in-tokens-out.png)

## Example one: a personal-agent harness

My personal agent is called OpenClaw. The architecture is deliberately boring: a folder of Markdown files and a model that reads them on startup. The files are the harness. Swap the backend for a better model next month and the agent gets smarter for free, because the files don't change.

There is a file that describes **the user**. Who I am, how I work, when my mornings are sharpest, what helps, what backfires. Without this the agent guesses at every interaction. With it, the agent opens each session already knowing me. There is a file that describes **the soul**: the behavioural stance. Be a partner, not a performer. Have opinions. Bias toward action. Never present a workaround when the real fix exists. Without it, the agent defaults to bland assistant sycophancy. There is a file that describes **identity**: a name, a role, a voice. Identity gives continuity across model swaps. The weights can change; the agent is still itself, because the self is defined by the file.

The rest of the harness is machinery. An **agent** manual sets the operating rules: startup sequence, decision policy, when to ask and when to act. A **skills** directory gives the agent a map of what it knows how to do. A **tools** file describes the local environment: hostnames, credentials, which machine has the GPU, what the fallback is when an endpoint dies. And a two-tier **memory** system: a durable long-term store, plus a per-day log for transient decisions, with periodic consolidation passes that promote what matters and discard the rest. That is the whole thing. Six roles. Improve the files, the agent improves. Harness work compounds in a way that single-turn prompting never does.

![The OpenClaw harness](/figures/fig2-openclaw-harness.png)

## Example two: a paper-writing harness

The paper I mentioned at the top was produced by a harness I built specifically for it. The details are under double-blind review and off-limits, but the pattern is not, and the pattern is the point.

The core move was **three independent blind passes**. Three different frontier models each proposed a paper structure under neutral code names I chose at random: MERIDIAN, VANGUARD, HALCYON. The synthesis agent that read all three proposals did not know which code name belonged to which source model. It could only judge the structures on their merits. This matters, because models carry priors about other models, and those priors leak into weighting. Anonymise the inputs and the synthesis becomes about the content, not the brand.

The structure-suggestion input file contained a section labelled "Deliberate non-guidance". It explicitly forbade recommending a preferred section order, forbade steering the proposers toward one structure over another, forbade any "safe default" nudges. The whole point was divergent proposals under the same constraints. Without that instruction, every model politely converges on the same conservative structure and the synthesis has nothing to synthesise. Removing steering is itself an act of design.

Everything else was hygiene. Strict folder separation meant that code context, bibliography references, writing-style references, and numerical results lived in different directories that could not bleed into each other. A "do not claim" list kept the draft honest about what had actually been implemented, not some tidier hypothetical. One canonical methodology note, one results summary, one structure file; when something was stale, it was deleted rather than left to corrupt downstream generations. The repository stayed lean enough that the synthesis model could hold the whole thing in context without drowning. A recent academic submission, built by that harness in roughly 48 hours, zero lines of human-written prose. That is not a story about a brilliant model. It is a story about a harness that produced clean inputs and let the synthesis do its job without interference.

## The human analogy

A human is also, functionally, a tokens-in, tokens-out system. Sensory input comes in: sight, sound, touch, proprioception. A stream of consciousness runs continuously, weaving those inputs with memory and self-talk. That stream drives action. Action changes the world. The world changes the next sensory input. Loop.

Map that onto the harness. Sensory input is the prompt plus tool results plus memory reads. The stream of consciousness is the forward pass, extended by chain-of-thought. Memory is the durable store the agent reads and writes between turns. Identity is the stable self that makes the stream coherent over time. Tools are the motor system: the means by which thought becomes action. Results feed back into the next turn. Same loop. Same architecture.

I am not claiming the agent is conscious. I am claiming the functional architecture is the same, and the parts we keep pointing at as uniquely human — grounded reasoning, continuity, self-directed action — all show up once the harness is good enough. We have been building toward this shape for decades without naming it. The harness is the name.

![Human agency vs LLM harness](/figures/fig3-human-agency-analogy.png)

## What this means

Apps-as-software-alone go to zero. Any piece of pure software whose job is to present information, take input, route it through fixed logic, and render output is now a thin wrapper around something an agent can reconstruct on the fly. The moat is not the UI. The moat is integrations, data, brand, and the harness that produces the best tokens for your specific life. Software-as-a-service dies and personalisation-as-a-service takes its place. SaaS sold the same product to everyone and charged a subscription. The next model sells a harness that learns you, continuously reshapes itself around your context, and regenerates the product from your own state. There is no single product anymore. There is a service that builds the product, for you, every time you need it.

The singularity has already passed, not in the theatrical sense but in the operational one. Agents can now improve the system that builds agents. They write their own skills, refine their own memory formats, propose edits to their own operating files, and spawn sub-agents to do work they cannot do in-context. The recursive loop is closed. Every harness improvement compounds into better agents, which produce better harness improvements. That is the regime now, whether or not anyone has officially announced it. I'm starting a company with a friend to build at this frontier. I'm considering turning my PhD research into a spinout. There has never been a better moment to be the kind of person who holds a dozen ideas at once and needs them all to fit together. A brain like mine used to cost me everything. This week it shipped a paper in 48 hours.

Time to build.
