const BLUE_SELECTOR = "body, div, table, ul, form";
const YELLOW_SELECTOR = "p, header, h1, h2, h3, h4";
const FLAG_SELECTOR = "span, td, li, button, input";
const SKEW_SELECTOR = FLAG_SELECTOR

$(BLUE_SELECTOR).css("background", "#006aa7");
$(YELLOW_SELECTOR).css("background", "#fecc00");
$(SKEW_SELECTOR).css("transform", "rotate(1deg)");

flags = $(FLAG_SELECTOR);
flags.css("background-image", 'url("https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1600px-Flag_of_Sweden.svg.png")');
flags.css("background-size", "100% 100%");
flags.css("background-repeat", "no-repeat");
flags.css("background-color", "rgba(0, 0, 0, 0.5)");
