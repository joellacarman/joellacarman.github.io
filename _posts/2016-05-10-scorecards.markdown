---
layout: post
title:  "Redesigning SPI Scorecards (Again)"
date:   2016-05-10 22:00:00
categories: update
image: /assets/SA-scorecard.png
---

**Role**: design & development

**Technology**: d3, Gulp, rasterizeHTML

When I started working at this organization last year, I began to see this table *a lot*.

![Old scorecard]({{ site.url }}/assets/UnitedStates.PNG)
<figcaption>Is my country within the one average absolute deviation from the median??</figcaption>
<br />

It's almost standard in every presentation and report, but it's nearly impossible to read. I set out to make this legible and professional looking, and to pry it out of Excel.

This was my initial remake:

[![Screenshot of scorecard](/assets/scorecard.png)](http://ec.europa.eu/regional_policy/en/information/maps/social_progress)
<figcaption>Scorecards displayed on European Commission website for the Beta version of the EU Regional Social Progress Index. (Be thankful for UTF-8 encoding)</figcaption>

<br>

##What's It Made Out Of?##
Even though the "visualization" piece of this project isn't that sophisticated, I built these scorecards using D3. I found D3's set of functions for stats-type math to be very handy, and D3 also provides a [clean way to think about templating](http://www.macwright.org/2013/07/07/d3-for-html.html). It's in a different universe from Excel speed-wise, but there is still a ton of math happening under the hood, which makes it a tidge slow to load, and also, vulnerable to crossbrowser weirdness.

##Getting Image Files##
As noted, images of these scorecards are everywhere and the team needs to get image files easily. My original thought was to use SVG Crowbar to pry these out of the browser, so I set about making them out of pure SVG. Unfortunately, the images never came out with their CSS styling attached. Installing a Chrome extension to pry out images from a website is a bit of a big ask for most users anyway, so I abandoned this path.

Searching for another way, I looked into using html canvas and libraries that convert these into image files. Perfect, I thought, not using HTML/CSS for text layout sucks anyway! I ripped everything up and started over with a much more semantic approach, and found happily that [rasterizeHTML](http://cburgmer.github.io/rasterizeHTML.js/) does a great job of converting the screen graphics, even going between retina and non-retina displays. My design also got lighter and better once I had some of my old friends like "border" and "div" back in town. Everybody wins!

Here's an example I downloaded from the browser as a .png:

![New scorecard]({{ site.url }}/assets/SA-scorecard.png)
<figcaption>Redesigned redesign of SPI scorecards.</figcaption>

<br>

Since I began working on these, a number of coworkers have gotten interested in using R for their work, so I've eliminated the calculations in JavaScript and have instead been working to port the code for generating strength/weaknesses values to R. Now a very large datasheet feeds the web app a straight value for the color of each dot. To make it so anyone at this organization can generate a new set of scorecards, I've also created an InDesign template and used data merge to create the full set of cards. The resulting images are much sharper (rasterizeHTML does a good job, but it's not a pro designer tool), and, in the end, I think this is a more flexible and smart arrangement, especially because the new site design doesn't include a natural home for these webified scorecards anyway. :(

![Scorecard for EU Regional Social Progress Index]({{ site.url }}/assets/EU-scorecards.jpg)
<figcaption>Redesigned redesigned redesign of SPI scorecards.</figcaption>
