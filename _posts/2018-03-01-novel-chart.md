---
layout: post
title:  "How Not to Make a Chart: Fiscal Policy Space, Take 2"
date:   2018-03-01 12:54:02
image: /assets/fiscal-dashboard.png
---

**Role**: design, development, client management

**Tech**: D3, Pym.js

[Skip Ahead to the Project](#the-project)


[Here](https://s3.amazonaws.com/fiscaldashboard/parent.html) is take two on the [Fiscal Policy Space](http://fiscalpolicyspace.greatcities.uic.edu/) interactive (take one [here](/2018/03/01/responsive-map.html)). 

This project, a collaboration between National League of Cities and the University of Illinois at Chicago, seeks to document what makes a city unique from a fiscal and policy perspective. The idea is that things like limitations on local taxes are more core to a city's identity than common ways of describing similar cities (population or location, for example). This better definition of “peer” could help leaders more easily find solutions for their own issues, since they would now know where to look for governments working within the same constraints.

**Defining Peers: Not So Easy**

The [original plan](/2018/03/01/responsive-map.html) for this project was to show peer groups among 100 cities, with a table of details about each. But nothing is that simple. The “peer” formula yielded interesting results (Akron, OH was a peer with New York City), and city leaders weren’t convinced. So the researchers in charge decided to go with a straight presentation of the data, allowing leaders to draw their own conclusions.

**Take Two: Simplifying Peers**

I had recently seen an [interesting approach](https://visual.ons.gov.uk/what-affects-an-areas-healthy-life-expectancy/) for showing the spread of observations on the UK’s Office for National Statistics site and thought it might work as a model here. We could enable leaders to see how cities performing similarly to their own on one measure performed across all measures and maybe there would be a pattern! But would they care? Is that useful? I had a feeling the hardest thing to get over would be the novelty of these measures. Wondering how “property tax gap” relates to “demand score” or the number of taxes available to a municipality is not exactly like looking for similarities between rates of smoking, drinking and early death in UK cities.

In the end, this demo hit the reject pile. After months of arguing over what to highlight and slapping together prototypes of potential solutions, the group concluded city leaders only want to compare performance against a stock list of rivals they keep stored in their heads. (So much for the novel set of measurements to help leaders find new, more tailored rivals).

**A Peerless Failure: Reflections**

The whole experience made me feel like the person [Mike Montiero](https://abookapart.com/products/design-is-a-job) warned you about. I did everything wrong, including the way I failed: not fast like a daring, experimental hot shot, but long and slow with great stubbornness and baseless hope that things might work out.

It was not pretty, and I knew it was wrong at the time but I wasn’t sure how to get to a position where I could do things the right way. It now seems the best I can do is learn from my mistakes, so here’s what I would say about the project in a retrospective:

**What went well:** I created a cool-looking clicky, sticky presentation.

**What didn't go well:** On the design side, I didn't understand what users might want to do with this product. I had no research to base my choices on, so I was mostly guessing and unable to truly defend my positions. This left me being very reactive to each round of criticism, which came from a researcher who was also guessing about what users want, not an actual user.

On the code side, I didn't do a good job of controlling state or keeping things clean. I made so many tiny tweaks to satisfy whims that I gave up on best practices thinking I'd come back and fix it later. What I have now is partially responsive (incomplete) and probably buggy.

**What I'd do differently next time:**
Everything! Starting with an insistence on interviewing users. I'd also be better about getting the client to be sure their message was hammered out first.




## The Project ##
{% raw %}
  <div class="wrapper">
    <div id="iframe-here"></div>
  </div>
  <script src="https://pym.nprapps.org/pym.v1.js" type="text/javascript"></script>
  <script>
      var pymParent = new pym.Parent("iframe-here", "https://s3.amazonaws.com/fiscaldashboard/index.html", {});
  </script>
{% endraw %}



