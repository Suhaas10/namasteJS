document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("grandparent clicked");
    e.stopPropagation();
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parent clicked");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("child clicked");
  },
  true
);
