import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.2.min.js"

const { div, button, h1, p } = van.tags;

const Counter = () => {
  const count = van.state(0);

  return div(
    h1(() => `Count: ${count.val}`),
    button({ onclick: () => count.val-- }, "Decrement"),
    button({ onclick: () => (count.val = 0) }, "Reset"),
    button({ onclick: () => count.val++ }, "Increment"),
    p("This is VanJS - nta45")
  );
};

van.add(document.getElementById("app"), Counter());
