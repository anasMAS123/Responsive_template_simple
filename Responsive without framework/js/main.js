let sections = document.querySelectorAll(".nav-bar ul li");
sections.forEach((sec) => {
  sec.addEventListener("click", (e) => {
    document.getElementsByClassName(`${e.target.id}`)[0].scrollIntoView();
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let listItems = document.querySelectorAll(".info .info-list li ");
let divs = document.querySelectorAll(".info .info-content div");
divs.forEach((dd) => {
  dd.classList.add("hide");
});
divs[0].classList.remove("hide");

listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log(e.target.getAttribute("data-show"));
    let atr = e.target.getAttribute("data-show");
    listItems.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");

    divs.forEach((item) => {
      item.classList.add("hide");
    });
    document.getElementsByClassName(`${atr}`)[0].classList.remove("hide");
    document.getElementsByClassName(`${atr}`)[0].classList.add("active");

    // let show = document.getElementsByClassName(`${e.target.data.show}`);
    // console.log(show);
  });
});
