---
layout: post
title:  "Fiscal Policy Space, Take 2"
date:   2018-03-01 12:54:02
image: /assets/fiscal-dashboard.png
---

**Role**: design, development

**Tech**: D3, Pym.js

[Here](https://s3.amazonaws.com/fiscaldashboard/parent.html) is take two on the [Fiscal Policy Space](http://fiscalpolicyspace.greatcities.uic.edu/) interactive (take one [here](/2018/03/01/responsive-map.html)). 

This project, a collaboration between National League of Cities and the University of Illinois at Chicago, seeks to define peer cities from a fiscal and policy perspective, putting leaders in touch with other cities that are truly similar. It may seem the way to find similar cities already exists, go by population size or geography, for example. But these are not always the most useful.

Consider a big city with a big budget. It may have an overall budget number that looks like other cities its size, but if it has numerous constraints on local taxes and a population with low expectations of government services, an expansion of the parks program is unlikely to be a hit here just because it worked well somewhere with a similar population size. 

By collecting statistics that describe this "fiscal policy space" (tax law, tax application, citizen expectation) the project can help make more accurate predictions about which policy solutions might be successfully imported from where.

**Defining Peers: Not So Easy**

The project promises new insights into what makes cities similar and when put into action it really delivers. Medium and large cities found themselves grouped together, Akron, OH and New York City, for example. The results look confusing when we're accustomed to seeing peers in terms of population size alone. 

In this case, it was too confusing so the [original plan](/2018/03/01/responsive-map.html) to show peer groups among 100 cities, with a table of details about each, was scrapped. The research team decided for now they'd prefer a straight presentation of the data, allowing leaders to draw their own conclusions.

**Take Two: Simplifying**

I had recently seen an [interesting approach](https://visual.ons.gov.uk/what-affects-an-areas-healthy-life-expectancy/) for showing the spread of observations on the UK’s Office for National Statistics site and thought it might work as a model here. We could enable leaders to see how cities performing similarly to their own on one measure performed across all measures. 

Still, the main challenge seemed to me to be the novelty of these measures. Wondering how “property tax gap” relates to “demand score” is not exactly like looking for similarities between rates of smoking, drinking and early death in UK cities. 

I'm not sure presenting the statistics in isolation like this would be meaningful to anyone. My hope for the charts I've built below is that they might someday be incorporated into a post on the data behind the measures. They could help give some life to the explanation.

**Conclusion: Gone But Not Forgotten**

Needless to say, this demo hit the reject pile. I still include it in my collection of work because I think it's an interesting riff on the work already done by the UK Office for National Statistics. With more familiar measures or better explanation of the ones that are there, I think the approach could work.



{% raw %}
  <div class="wrapper">
    <div id="iframe-here"></div>
  </div>
  <script src="https://pym.nprapps.org/pym.v1.js" type="text/javascript"></script>
  <script>
      var pymParent = new pym.Parent("iframe-here", "https://s3.amazonaws.com/fiscaldashboard/index.html", {});
  </script>
{% endraw %}



