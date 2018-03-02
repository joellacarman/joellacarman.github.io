---
layout: post
title:  "How Not To Make A Chart: Fiscal Policy Space, Take 2"
date:   2018-03-01 12:54:02
image: /assets/fiscal-dashboard.png
---

**Role**: design, development

**Tech**: D3, Pym.js


[Here](https://s3.amazonaws.com/fiscaldashboard/parent.html) is take two on the [Fiscal Policy Space](http://fiscalpolicyspace.greatcities.uic.edu/) interactive (take one [here](/2018/03/01/responsive-map.html)). 

After the discovery that our audience was not buying the formula used to create a set of peers inside this "fiscal policy space" (cities that face similar economic and political constraints and therefore might be good sources for borrowed policy), the researchers in charge decided to go with a straight presentation of the data. 

I had recently seen an [interesting approach](https://visual.ons.gov.uk/what-affects-an-areas-healthy-life-expectancy/) for showing the spread of observations on the UK's Office for National Statistics site and thought it might work as a model. My idea was that city leaders might want to see how cities performing similarly to their own on one measure performed across all measures. But would they? Is that interesting? I had a feeling the hardest thing to get over would be the novelty of these measures. Wondering how "property tax gap" might relate to the number of taxes available to a municipality is not exactly like looking for similarities between rates of smoking, drinking and early death in UK cities. 

In the end, this demo hit the reject pile. After months of arguing over what to highlight and slapping together prototypes to demo potential solutions, the group concluded city leaders only want to see comparisons against a stock list of rivals they keep stored in their heads. (So much for the novel set of measurements to help leaders find new, better rivals). I threw in the towel and suggested Tableau might have some nice map/table features that could be easily updated with more data in the future.

The whole experience made me feel like the person [Mike Montiero](https://abookapart.com/products/design-is-a-job) warned you about. I did everything wrong, including the way I failed: not fast like a daring, experimental hot shot, but long and slow with great stubbornness and baseless hope that things might work out.

It was not pretty, and I knew it was wrong at the time but I wasn't sure how to get to a position where I could do things the right way. In the interest of learning from my mistakes, here's what I would say about it in a retrospective:

**What went well:** I created a cool-looking clicky, sticky presentation.

**What didn't go well:** On the design side, I didn't understand what users might want to do with this product. I had no research to base my choices on, so I was mostly guessing and unable to defend my positions logically. This left me being very reactive to each round of criticism, which came from a researcher who was also guessing about what users want, not an actual user.

On the code side, I didn't do a good job of controlling state or keeping things clean. I made so many tiny tweaks to satisfy whims that I gave up on best practices thinking I'd come back and fix it later. What I have now is partially responsive (incomplete) and probably buggy, but how would I know.

**What I'd do differently next time:**
Everything! Starting with an insistence on interviewing users. I'd also be better about, you know, getting the client to be sure their message was hammered out first.

Click below to see it in action (if you dare).

[![Peer cities chart of measures](/assets/fiscal-dashboard.png)](https://s3.amazonaws.com/fiscaldashboard/parent.html)
