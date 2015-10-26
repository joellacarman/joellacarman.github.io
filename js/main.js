
var pics = document.getElementsByTagName("img");

for (var i=0; i < pics.length; i++){
    pics[i].className = "grid-item";
}


var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 30%
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});
