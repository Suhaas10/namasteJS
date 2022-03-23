// document.querySelector("#category").addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     console.log(e.target);
//     window.location.href = "/" + e.target.id;
//   }
// });

document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e);

  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
