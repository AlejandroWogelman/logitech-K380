const findId = (id) => document.getElementById(id);

const teclado = findId("teclado");
const acces = findId("acces");
const numbers = findId("numbers");
const three = findId("threeRow");
const four = findId("fourRow");
const five = findId("fiveRow");
const six = findId("sixRow");

const addClass = (node, classe) => node.classList.add(classe);
const createDiv = () => document.createElement("div");

const modifiqueBtns = (arr, node, className) => {
  arr.forEach((b) => {
    const div = createDiv();
    div.innerText = b;
    addClass(div, className);
    node.appendChild(div);
  });
};

const accesBtn = [
  "esc",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "f10",
  "f11",
  "f12",
  "inst",
  "sup",
];
modifiqueBtns(accesBtn, acces, "btn-acceso");

const numbersRow = [
  "|",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "?",
  "¿",
  "retroceso",
];

modifiqueBtns(numbersRow, numbers, "btn-numbers");

const threeRow = [
  "tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "''",
  "+",
  "enter",
];

modifiqueBtns(threeRow, three, "btn-numbers");

const fourRow = [
  "bloq mayús",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "ñ",
  "{",
  "}",
  "",
];

modifiqueBtns(fourRow, four, "btn-numbers");

const fiveBox = [
  "shift",
  " ",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "-",
  "shift",
];
fiveBox.forEach((n, i) => {
  const div = createDiv();
  div.textContent = n;
  addClass(div, "btn-numbers");
  i === 1 && addClass(div, "arrow");
  five.appendChild(div);
});

const sixBox = [
  "ctrl",
  "fn",
  "start",
  "alt",
  " ",
  "Alt Gr",
  "ctrl",
  "◀",
  "",
  "▶",
];
sixBox.forEach((b, i) => {
  const div = createDiv();
  addClass(div, "btn-numbers");
  i == 4 && addClass(div, "space");
  div.textContent = b;

  if (i == 5) {
    const p = document.createElement("p");
    p.textContent = b;
    addClass(p, "alt");
    div.textContent = "";
    div.appendChild(p);
  }

  [7, 8, 9].includes(i) && div.classList.replace("btn-numbers", "arrowBtn");
  six.appendChild(div);
});

const arrowButtons = document.querySelectorAll(".arrowBtn");
arrowButtons[1].setAttribute("id", "mid");

const midBtn = findId("mid");
midBtn.classList.replace("arrowBtn", "mid");

const topBtn = createDiv();
const downBtn = createDiv();

const arrowTop = createDiv();
const arrowDown = createDiv();

[arrowDown, arrowTop].forEach((el, i) => {
  el.innerText = "◀";

  i === 0
    ? arrowDown.classList.add("rotateDown")
    : arrowTop.classList.add("rotateTop");
});

topBtn.appendChild(arrowTop);
downBtn.appendChild(arrowDown);

midBtn.appendChild(topBtn);
midBtn.appendChild(downBtn);

const playMp3 = new Audio("./click.mp3");
const play = () => {
  playMp3.currentTime = 0;
  playMp3.play();
};

const class1 = document.querySelectorAll(".btn-numbers");
const class2 = document.querySelectorAll(".btn-acceso");
const class3 = document.querySelectorAll(".arrowBtn");
const class4 = document.querySelectorAll(".mid div");

const allButtons = [...class1, ...class2, ...class3, ...class4];

allButtons.forEach((el) => {
  el.addEventListener("click", (e) => {
    play();
  });
});

const list = document.querySelectorAll("li");
list.forEach((l) =>
  l.addEventListener("click", (e) => {
    teclado.className = `teclado ${e.target.textContent}`;
  })
);
