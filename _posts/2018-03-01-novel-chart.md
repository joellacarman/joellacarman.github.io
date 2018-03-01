---
layout: post
title:  "How Not To Make A Chart: Fiscal Policy Space, Take 2"
date:   2018-03-01 12:54:02
image: /assets/fiscal-dashboard.png
---

**Role**: design, development

**Tech**: D3, Pym.js


[Here](https://s3.amazonaws.com/fiscaldashboard/parent.html) is take two on the [Fiscal Policy Space](http://fiscalpolicyspace.greatcities.uic.edu/) interactive (take one [here](/2018/03/01/responsive-map.html)). 

After the discovery that our audience was not buying the formula to create a set of "peer cities", the researchers in charge decided to go with a straight presentation of the data. I had recently seen an [interesting approach](https://visual.ons.gov.uk/what-affects-an-areas-healthy-life-expectancy/) for showing the spread of observations on the UK's Office for National Statistics site and thought it might work as a model. The idea was that city leaders might want to see how cities performing similarly to their own on one measure performed across all measures. In the end, this demo hit the reject pile as well. 

I wish I could say this was an example of "fail fast", but it was a long slow failure that took place sporadically over many months. Here's what I would say about it in a retrospective:

**What went well:** I created a novel and clicky, sticky presentation.

**What didn't go well:** On the design side, I didn't understand what users might want to do with this product. I had no research to base my choices on, so I was mostly guessing and unable to defend my positions logically. This left me being very reactive to each round of criticism, which came from a researcher who was also guessing about what users want, not an actual user.

On the code side, I didn't do a good job of controlling state or keeping things clean. I made so many tiny tweaks to satisfy whims that I gave up on best practices thinking I'd come back and fix it later. What I have now is partially responsive and probably buggy, but how would I know.

**What I'd do differently next time:**
Everything! Starting with an insistence on interviewing users. I'd also getting the client to be sure their message was hammered out first.

Click below to see it in action.

[![Peer cities chart of measures](/assets/fiscal-dashboard.png)](https://s3.amazonaws.com/fiscaldashboard/parent.html)
