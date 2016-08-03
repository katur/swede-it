const BLUE = "#006aa7"
const YELLOW = "#fecc00"
const BLUE_SELECTOR = "body, div, table, ul, form";
const YELLOW_SELECTOR = "p, span, a, td, li, blockquote, pre, button, input, header, h1, h2, h3, h4";
const FLAG_SELECTOR = YELLOW_SELECTOR;


$(BLUE_SELECTOR).css("background", BLUE);
$(BLUE_SELECTOR).css("color", "black");
$(YELLOW_SELECTOR).css("background", YELLOW);
$(YELLOW_SELECTOR).css("color", "black");


flags = $(FLAG_SELECTOR).filter(function() {
  el = $(this);
  h = el.height();
  w = el.width();
  return (w > 40 && h > 25 &&   // not too small
          w < 400 && h < 250 && // not too big
          (w * 2) > h &&        // not too tall
          w < (3 * h))          // not too wide
});

flags.css("background-image", 'url("https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1600px-Flag_of_Sweden.svg.png")');
flags.css("background-size", "100% 100%");
flags.css("background-repeat", "no-repeat");
flags.css("background-color", "rgba(0, 0, 0, 0.5)");
