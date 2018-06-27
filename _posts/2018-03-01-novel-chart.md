---
layout: post
title:  "Fiscal Policy Space, Take 2"
date:   2018-03-01 12:54:02
image: /assets/fiscal-dashboard.png
---

**Role**: design, development

**Tech**: D3, Pym.js

[Here](https://s3.amazonaws.com/fiscaldashboard/parent.html) is take two on the [Fiscal Policy Space](http://fiscalpolicyspace.greatcities.uic.edu/) interactive (take one [here](/2018/03/01/responsive-map.html)). 

What does it mean for cities to be alike? Are they the same size, in the same region? Are there other identifiers that could help policy makers zero in on locations that have successfully faced issues similar to their own? 

The National League of Cities and the University of Illinois at Chicago are collaborating on a  project to do just that: define peer cities from a fiscal and policy perspective. And I got to work on some visuals to present the data.

**When Your Peer Doesn't Look Like You**
The original presentation requested by the team was a straightforward map and table. Click on a city and see its peers along with their data. Simple from a data-presentation perspective, but not simple in overall theory and we lost our audience with novel pairings such as New York City and Akron, OH. 

Instead, as a transitional approach to this new way of seeing, the research team suggested just surfacing the data points they'd created and allowing viewers to draw their own conclusions, rather than assigning peers.

**A Good Model for Presenting Observations**
I had recently seen an [interesting approach](https://visual.ons.gov.uk/what-affects-an-areas-healthy-life-expectancy/) for showing a data set's spread on the UK’s Office for National Statistics site and thought it might work as a model here. We could enable leaders to see how cities performing similarly to their own on one measure performed across all measures. 

**Looking Forward**
The main challenge seemed to me to be the novelty of these measures. Wondering how “property tax gap” relates to “demand score” is not exactly like looking for similarities between rates of smoking, drinking and early death in UK cities. 

I'm not sure presenting the statistics in isolation like this would be meaningful to anyone. My hope for the charts I've built below is that they might someday be incorporated into a post on the data behind the measures. They could help give some life to the explanation.

Though this work has not been "published" I still include it in my collection of work because I think it's an interesting riff on the work already done by the UK Office for National Statistics. With more familiar measures or better explanation of the ones that are there, I think it could work.



{% raw %}
  <div class="wrapper">
    <div id="iframe-here"></div>
  </div>
  <script src="https://pym.nprapps.org/pym.v1.js" type="text/javascript"></script>
  <script>
      var pymParent = new pym.Parent("iframe-here", "https://s3.amazonaws.com/fiscaldashboard/index.html", {});
  </script>
{% endraw %}



