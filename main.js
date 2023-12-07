// Variables
let imgs = Array.from(document.querySelectorAll(".slider-container img"));
let imgsLength = imgs.length;
let currentImg = 1;
let imgNumber = document.getElementById("slide-number");
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
// Creat List
let paganationElement = document.createElement("ul");
paganationElement.setAttribute("id", "paganation-ul");
for (i = 1; i <= imgsLength; i++) {
  let paganationItem = document.createElement("li");
  paganationItem.setAttribute("data-index", i);
  paganationItem.appendChild(document.createTextNode(i));
  paganationElement.appendChild(paganationItem);
}
document.querySelector(".indicators").appendChild(paganationElement);
// Handel Prev And Next Btn On Click
nextBtn.onclick = nextFunc;
prevBtn.onclick = prevFunc;
let paganationCreatedElement = document.querySelector("ul");
let paganationBullets = Array.from(
  document.querySelectorAll("#paganation-ul li")
);
checker();
function nextFunc() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentImg++;
    checker();
  }
}
function prevFunc() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentImg--;
    checker();
  }
}
paganationBullets.forEach(b => {
  b.addEventListener("click", () => {
    currentImg = b.textContent
    checker()
  })
})
function checker() {
  imgNumber.textContent = `Slide #${currentImg} Of ${imgsLength}`;
  removeActive();
  imgs[currentImg - 1].classList.add("active");
  paganationCreatedElement.children[currentImg - 1].classList.add("active");
  if (currentImg == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  if (currentImg == imgsLength) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}
function removeActive() {
  imgs.forEach((img) => {
    img.classList.remove("active");
  });
  paganationBullets.forEach((bull) => {
    bull.classList.remove("active");
  });
}
