---
layout: post
title:  "My Work On The European Commission Website"
date:   2016-05-10 22:00:00
categories: update
image: /assets/scorecard.png
---

When I started working at this organization last year, I began to see this table *a lot*. 

![Old scorecard]({{ site.url }}/assets/UnitedStates.PNG)
<figcaption>Is my country within the one average absolute deviation from the median??</figcaption>
<br />

It's almost standard in every presentation and report, but its Excel-ness made it exceedingly clunky to use and impossible to style with complete freedom. I knew what I wanted to do: recreate the "scorecard" for the web. I started in on the project with the goal of making it:

+ easy to load (Excel with its "1 processor(s)" sets a low bar here)
+ more legible/hierarchical
+ easy to swap out datasets from other index projects
+ downloadable as an image file for use in slides and reports

This is what I came up with:

[![Screenshot of scorecard](/assets/scorecard.png)](http://ec.europa.eu/regional_policy/en/information/maps/social_progress)
<figcaption>Be thankful for UTF-8 encoding</figcaption>

<br>
As it turned out, this project found an almost immediate use with the European Regional Social Project Index. The European Commission asked us to provide some visuals to go with the beta version's publication, and I was able to make some adjustments to fit their defined page widths and ship it out in a matter of days. Success! 

## What's It Made Out Of? ##
Even though the "visualization" piece of this project isn't that sophisticated, I built these scorecards using D3. D3 has a handy set of functions for stats-type math, and it also provides a [clean way to think about templating](http://www.macwright.org/2013/07/07/d3-for-html.html). It's in a different universe from Excel speed-wise, but there is still a ton of math happening under the hood, which makes it a tidge slow to load. Still not bad. It wasn't until I started testing on other browsers that I really started to wonder about my choice to put so much math in JavaScript -- who knew there were different ways to implement "sort"!! (Computer science grads, maybe?). The benefit is that we now have a one step process of bringing in a new datasheet to make scorecards for a different index project. Still, I'm not convinced this is a huge advantage over separating the process of defining the boundaries of "above average"/"below average" in an R script. I'm still working on that question.

## Update: Prying It Out Of The Browser ##
The project that went to the EC site missed one of the goals above: it can't be downloaded as an image. In this iteration you see a failed attempt to make that possible via SVG Crowbar. Every bit of the chart is actually SVG to allow the Crowbar to work, but in the end the project never came out of the page with all the CSS styles. Installing a Chrome extension to pry out images from a website is a bit of a big ask for most users anyway, so I abandoned this path.

Searching for another way, I looked into using html canvas and libraries that convert these into image files. Perfect, I thought, not using HTML/CSS for text layout sucks anyway! I ripped everything up and started over with a much more semantic approach, and found happily that [rasterizeHTML](http://cburgmer.github.io/rasterizeHTML.js/) does a great job of converting the screen graphics, even going between retina and non-retina displays. My design also got lighter and better once I had some of my old friends like "border" and "div" back in town. Everybody wins!

Here's an example I downloaded from the browser as a .png:

![New scorecard]({{ site.url }}/assets/mauritius.jpg)
<figcaption>Data embargoed! Can't wait to show you the real thing in about a month</figcaption>

<br>
In summary, everyone likes this scorecard better than the clunky old Excel file, and it meets all the objectives above. Still, the way it illustrates the concept of "relative performance" is unchanged. I wonder what I could do if I started from the ground up to make this rather complex idea a bit more intelligible. I hope to have an update on that process sometime soon.


