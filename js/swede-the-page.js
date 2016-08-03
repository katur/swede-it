// Official colors listed here:
// http://www.norden.org/en/fakta-om-norden-1/the-nordic-flags/the-swedish-flag
const BLUE = "#00559b";
const YELLOW = "#fecc00";
const BLACK = "fff";

const BLUE_SELECTOR = "html, body, section, div, article, table, ul, ol, form";
const YELLOW_SELECTOR = "p, blockquote, span, a, pre, " +
                        "td, th, li, hr, button, input, select, " +
                        "h1, h2, h3, h4, header, footer";
const FLAG_SELECTOR = YELLOW_SELECTOR;

const VECTOR_FLAG = chrome.extension.getURL("/images/SEvektor.svg");


$(BLUE_SELECTOR).css({
  "background": BLUE,
  "border": BLUE,
  "color": BLACK,
});


$(YELLOW_SELECTOR).css({
  "background": YELLOW,
  "border": YELLOW,
  "color": BLACK,
});


$(FLAG_SELECTOR).filter(function() {
  el = $(this);
  h = el.height();
  w = el.width();
  return (w > 40 && h > 25 &&   // not too small
          w < 800 && h < 500 && // not too big
          (w * 2) > h &&        // not too tall
          w < (3 * h));         // not too wide
}).css({
  "background-size": "100% 100%",
  "background-repeat": "no-repeat",
	"background-image": "url(" + VECTOR_FLAG + ")",
});
