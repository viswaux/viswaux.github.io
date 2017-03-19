// Sticky shadowy header
$( document ).ready(function() {
	$(document).scroll(function() {
	  $('.banner').toggleClass('shadowy', $(document).scrollTop() >0);
	});
});

//Fixing Sticky Header to work with keyboard controls
var stickyItem = 'newsletter-banner';   // the ID of the fixed-position element
var readAssistOffset = 75;          // screen height - this offset value = scroll distance
var duration = 250;                 // scroll speed in ms
var doc = document.documentElement;

keydown = function (e) {
    var curElement = document.activeElement.nodeName;
    if ((e.keyCode === 32 && curElement === "BODY") || (e.keyCode === 33 || e.keyCode === 34)) {
        var viewportHeight = window.innerHeight;
        var stickyHeaderHeight = document.getElementById(stickyItem).offsetHeight;
        var newViewportHeight = viewportHeight - stickyHeaderHeight - readAssistOffset;
        e.preventDefault();
        if(e) {
            isShift = e.shiftKey || e.keyCode === 33 ? true : false;
        } else {
            isShift = window.event.shiftKey || e.keyCode === 33 ? true : false;
        };
        currScrollPosition = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        scrollToHere = newViewportHeight + currScrollPosition;
        if (isShift) {
            scrollToHere = currScrollPosition - newViewportHeight;
        }
        smoothScrollTo(scrollToHere)
    }
}

window.smoothScrollTo = (function () {
    var timer, start, factor;
    return function (target) {
        var offset = window.pageYOffset,
            delta = target - window.pageYOffset;
        start = Date.now();
        factor = 0;
        if( timer ) {
            clearInterval(timer);
        }

        function step() {
            var y;
            factor = (Date.now() - start) / duration;
            if( factor >= 1 ) {
                clearInterval(timer);
                factor = 1;
            }
            y = factor * delta + offset;
            window.scrollBy(0, y - window.pageYOffset);
        }

        timer = setInterval(step, 10);
        return timer;
    };
}());

window.onkeydown = keydown;
//End Fixing Sticky Header

// Activate tooltips
$('.tipped').tooltip();

// Rotate words in Hero
var terms1 = ["codes", "cares", "listens"];
var terms2 = ["smiles", "insights", "outcomes", "innovation", "solutions", "results"];

function rotateTerm1() {
  var ct = $("#rotate-1").data("term") || 0;
  $("#rotate-1").data("term", ct === terms1.length -1 ? 0 : ct + 1).text(terms1[ct]).fadeIn()
              .delay(2000).fadeOut(250, rotateTerm1);
}
function rotateTerm2() {
  var ct = $("#rotate-2").data("term") || 0;
  $("#rotate-2").data("term", ct === terms2.length -1 ? 0 : ct + 1).text(terms2[ct]).fadeIn()
              .delay(4000).fadeOut(250, rotateTerm2);
}
$(rotateTerm1);
$(rotateTerm2);

// Animate 404 page image
$('.js--404').click(function() {
    $(this).addClass('animated hinge');
});

$( document ).ready(function() {
    var offset = 1000;
    var duration = 250;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

// Typeform embed code
(function() {
    var qs, js, q, s, d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = 'typef_orm',
        b = 'https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
    if (!gi.call(d, id)) {
        js = ce.call(d, 'script');
        js.id = id;
        js.src = b + 'share.js';
        q = gt.call(d, 'script')[0];
        q.parentNode.insertBefore(js, q);
    }
})();


////word rotate
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
//FOR LOOP TO FUNCTION SPLI LETTER WORKDS
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

//
function splitLetters(word) {
  var content = word.innerHTML;
  //spaces good at that point

//cleared it making it null
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
      //taking the input and splitting letter
    letter.innerHTML = content.charAt(i);

    //putting the word back together
    word.appendChild(letter);
    //problem with the space HERE
    letters.push(letter);
  }

  wordArray.push(letters);
  console.log(wordArray);
}

changeWord();
setInterval(changeWord, 4000);
