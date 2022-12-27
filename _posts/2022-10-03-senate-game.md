---
layout: post
title:  "Midterm Senate game"
date:   2022-10-03 15:54:02
image: /assets/newer/sm_senate-game.jpg
involvement: design & development
category: projects
writeup: true
storylink: https://www.nbcnews.com/politics/2022-election/senate-what-if-2022-rcna50037
tech: d3, js, css
---

<p class="date" markdown="1">
October 3, 2022
</p>

I designed this piece in response to a simple, three-part brief:
- Convey to the reader which seats are up for grabs in the midterms
- Convey which way a seat currently leans
- Let the reader assign those seats to either party and see how the balance of power changes


<img class="med-img" src="/assets/newer/senate-game.png" alt=
"">

The tricky thing about political leaning was that the piece used margins from past races <i>and</i> Cook ratings. One is continuous (with a lot of values pressed into a small range) while the other is categorical. I needed a chart that could handle both.

A beeswarm came to mind because it does well with clustering. It does this in part by having an axis that's somewhat gestural. You get a sense of how things compare to each other more than a precise representation. I thought this wiggle room might allow it to be flexed into service here and that it could look cool trying, too.

As a piece of interface it felt somewhat novel, so we tested it out and were pleased to see we weren't confusing readers with our bees. Still, I added some gradients to lift them off the page like a button, especially on mobile.

In addition to designing the piece, I was part of the team that built the project. I contributed quite a bit of JS behind the main visuals and worked on page styles. Many requirements evolved as our deadline got closer. Our team was able to respond nimbly to the concerns without any major panics thanks to nicely structured code.

We also worked with accessibility experts to make the game playable for more users, using good ARIA markup and paying attention to the screenreader experience. We were able to test the site and implement feedback from real users about the assistive-device experience. All together, this took a considerable amount of our development time, probably 1/4 overall, and was a great learning experience. I've been in thousands of conversations about accessibility but this was the first time I worked on a project that really implemented it and I'm thankful to have had the opportunity.

<img class="sm-img" src="/assets/newer/ph_senate-game.png" alt="">
