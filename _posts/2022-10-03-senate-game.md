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

I designed this piece in response to a simple, three part brief:
- Convey to the reader which seats are up for grabs in the midterms
- Let the reader assign those seats to either party and see how the balance of power changes
- Convey which way a seat currently leans

<img class="med-img" src="/assets/newer/senate-game.jpg" alt=
"">

I saw a way to elegantly knock out all three of these using a beeswarm chart. The ability to show the spread of data that is often clustered made it a natural way to visualize political leanings. Using it as interface seemed interesting and elegant. 

Because it is a novel way to let users make selections, we tested the idea and were pleased to see users didn't have trouble understanding the intention. On mobile, where the elements can't darken in response to a mouse hover, I added a little more shadow to the circles to help them feel button-y.

In addition to designing the piece, I was part of the team that built the project, contributing quite a bit of JS behind the main visuals and all-over page styles. The requirements for the project evolved as we worked on it, for example thoughts on how it should work as election day neared, and our team was able to respond nimbly to the concerns, meeting deadlines without any major panics thanks to nicely structured code.

We also did a lot of work with accessibility experts to make the game playable for more users, using good ARIA markup and attention to the screenreader experience. This took a considerable amount of our development time, probably 1/4 of the overall time, and was a great learning experience. I've been in thousands of conversations about accessibility, this was the first time I worked on a project that really implemented it and I'm thankful to have had the opportunity.


<img class="sm-img" src="/assets/newer/ph_senate-game.png" alt="">
