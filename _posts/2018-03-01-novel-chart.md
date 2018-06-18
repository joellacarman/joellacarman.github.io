---
layout: post
title:  "How Not to Make a Chart: Fiscal Policy Space, Take 2"
date:   2018-03-01 12:54:02
image: /assets/fiscal-dashboard.png
---

**Role**: design, development

**Tech**: D3, Pym.js

[Skip Ahead to the Project](#the-project)


[Here](https://s3.amazonaws.com/fiscaldashboard/parent.html) is take two on the [Fiscal Policy Space](http://fiscalpolicyspace.greatcities.uic.edu/) interactive (take one [here](/2018/03/01/responsive-map.html)). 

This project, a collaboration between National League of Cities and the University of Illinois at Chicago, seeks to document what makes a city unique from a fiscal and policy perspective. Things like population or location might seem like an obvious way to define peers, but limitations on local taxes are more core to a city's identity. This way of defining “peer” could help leaders more easily find solutions for their own issues, since they would now know where to look for governments working within the same constraints.

**Defining Peers: Not So Easy**

The [original plan](/2018/03/01/responsive-map.html) for this project was to show peer groups among 100 cities, with a table of details about each. However, the “peer” formula yielded interesting results (Akron, OH was a peer with New York City), and our researchers decided instead they'd prefer a straight presentation of the data, allowing leaders to draw their own conclusions.

**Take Two: Simplifying Peers**

I had recently seen an [interesting approach](https://visual.ons.gov.uk/what-affects-an-areas-healthy-life-expectancy/) for showing the spread of observations on the UK’s Office for National Statistics site and thought it might work as a model here. We could enable leaders to see how cities performing similarly to their own on one measure performed across all measures and maybe there would be a pattern! 

I had a feeling the hardest thing to get over would be the novelty of these measures. Wondering how “property tax gap” relates to “demand score” or the number of taxes available to a municipality is not exactly like looking for similarities between rates of smoking, drinking and early death in UK cities.

In the end, after months of trying out different approaches, this demo hit the reject pile. I still include it in my collection of work because I think it's an interesting riff on the work already done by the UK Office for National Statistics by really focusing in on the observations closest to the selected. It could be a useful way to highlight one individual's closest competitors.



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



