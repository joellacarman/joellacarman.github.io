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

Instead, as a transitional approach to this new way of seeing, the research team suggested just surfacing the data points they'd created and allow viewers to draw their own conclusions.

**A Good Model**

I had recently seen an [interesting approach](https://visual.ons.gov.uk/what-affects-an-areas-healthy-life-expectancy/) for showing a data set's spread on the UK’s Office for National Statistics site and thought it might work as a model here. We could expand on the close-scoring cities to enable leaders to see how those cities did across all other measures. Perhaps they would notice patterns or find something unexpected. But this approach got scrapped as well in favor of something that simply allows the user to pick their set of typical comparison cities and see results only for them.

**Looking Forward**
The main challenge with this project seems to me to be novelty. Wondering how “property tax gap” relates to “demand score” is not exactly like looking for similarities between rates of smoking, drinking and early death in UK cities. I think any approach to visualizing this data needs to keep that in mind.

My hope for the charts I've built below is that they might someday be incorporated into a post on the thinking and data points behind these composite scores. The interactive charts could be used to facilitate explanation and help give some life to the explanation.

Though this work has not been "published" I still include it in my collection because I think it's an interesting riff on what the UK Office for National Statistics did. With more familiar measures or better explanation of the ones that are there, I think it could work.



{% raw %}
  <div class="wrapper">
    <div id="iframe-here"></div>
  </div>
  <script src="https://pym.nprapps.org/pym.v1.js" type="text/javascript"></script>
  <script>
      var pymParent = new pym.Parent("iframe-here", "https://s3.amazonaws.com/fiscaldashboard/index.html", {});
  </script>
{% endraw %}



