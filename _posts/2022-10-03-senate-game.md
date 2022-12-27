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

I thought this could be done with a beeswarm chart. The ability to show clustered data made it a natural way to visualize political leanings, even the mix of categorical (Cook ratings) and continuous (win margins) we had. And using it as interface seemed interesting and new. 

Because of that, we tested the idea of a clickable beeswarm on some users and were pleased to see we weren't confusing people. Still, I added some gradients to lift them off the page to firm up the button feeling, especially on mobile.

<img class="sm-img" src="/assets/newer/ph_senate-game.png" alt="">

In addition to designing the piece, I was part of the team that built it. I contributed quite a bit of JS behind the main visuals and worked on page styles. Many requirements evolved as our deadline got closer. Our team was able to respond without any major panics thanks to nicely structured code.

We also worked with accessibility experts to make the game playable for more users. We were able to test the site and implement feedback from real people about the assistive-device experience. All together, this took a considerable amount of development time, probably 1/4 overall, and was a great learning experience. I've been in thousands of conversations about accessibility but this was the first time I worked on a project that really implemented it. I'm thankful to have had the opportunity.

