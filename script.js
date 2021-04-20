import cards from './cards.js';

const container =  document.querySelector(".container");
const toggler = document.querySelector('#switch');
const train = document.querySelector('.train');
const play = document.querySelector('.play');
const burger = document.querySelector('.menu-btn');
const nav = document.querySelector('.navigation');
const wordList = document.getElementById('wordsList');
const cat = document.querySelector("[data-id='cat']");
const cat0 =  document.querySelector("[data-id='cat0']");
const cat1 =  document.querySelector("[data-id='cat1']");
const cat2 =  document.querySelector("[data-id='cat2']");
const cat3 =  document.querySelector("[data-id='cat3']");
const cat4 =  document.querySelector("[data-id='cat4']");
const cat5 =  document.querySelector("[data-id='cat5']");
const cat6 =  document.querySelector("[data-id='cat6']");
const cat7 =  document.querySelector("[data-id='cat7']");
const btn = document.createElement('button');
const p = document.createElement('p');
p.innerHTML = "Start game";
btn.classList.add("start");
btn.appendChild(p);

burger.addEventListener("click", ()=> {
 burger.classList.toggle("menu-btn-activ");
 nav.classList.toggle("hidden");
});
nav.addEventListener("mouseleave", function(evt) {
  const elt = evt.target;
  burger.classList.toggle("menu-btn-activ");
  nav.classList.toggle("hidden");
});

toggler.addEventListener("click", switchGame);

class CardListMain {
  constructor(state){
    this.state = state;
    this.wordList = document.getElementById('wordsList');
    this.state.forEach(singleState => {
      const card = new CardMain(singleState);
      this.wordList.appendChild(card.createElement());
    })
  }
}



function onclick(){
  const wordList = document.getElementById('wordsList');
  // play Audio
  cards[1].forEach(function (card) {
    console.log(card);
      const audio = new Audio(); // Создаём новый элемент Audio
      audio.src = `assets/${card.audioSrc}`; // Указываем путь к звуку "клика"
      audio.play();// Автоматически запускаем
    //   audio.addEventListener('ended', (event) => {
    //   console.log('Video stopped  is available.');
    // });
      console.log(audio);
    });
};

function switchGame() {
  let content = document.querySelectorAll('.category-content');
  if (train.style.display !== 'none') {
    play.style.display = "block";
    train.style.display = "none";
    play.style.right = "50px";
    container.appendChild(btn);
    btn.onclick = onclick;

  } else {
    train.style.display = "block";
    play.style.display = "none";
  }
  for (let i = 0; i < 8 ; i++ ) {
    if (train.style.display !== 'none') {
      content[i].style.borderTop = "solid 7px #d70a80";
    } else {
      content[i].style.borderTop = "solid 7px #bada55";
    }
  }
}

class CardMain {
  constructor(state){
    this.state = state;
  }
  createElement() {
    const {image, word, id} = this.state;
    const cardElement = document.createElement('div');
    cardElement.classList.add("category");
    cardElement.innerHTML = `<div class="fontM" id="${id}">
        <div class="category-img-wrap"> <img src="assets/${image}" alt="${id}" > </div>
            <div class="category-content" style="display: block">
            ${word} 
            </div>
            </div>`;
    return cardElement;
  }
}
const cardList = new CardListMain(cards[0]);
class CardList {
  constructor(state){
    this.state = state;
    this.wordList = document.getElementById('wordsList');
    this.state.forEach(singleState => {
      const card = new Card(singleState);

      this.wordList.appendChild(card.createElement());
    })
  }
}

class Card {
  constructor(state){
    this.state = state;
  }
  createElement() {
    const {image, word, id, translation, audioSrc} = this.state;
    const cardElement = document.createElement('div');
    cardElement.classList.add("category");
    cardElement.innerHTML = `<div class="font" id="${id}" >
        <div class="category-img-wrap"> <img src="assets/${image}" alt="${id}" > </div>
            <div class="category-content">
            ${word} <div class="roll-button"><img src="assets/img/arrow.svg" alt="" ></div>
            </div>
            </div>
<div class="back" data-id="${id}" >
        <div class="category-img-wrap"> <img src="assets/${image}" alt="${id}" > </div>
            <div class="category-content">
            ${translation} 
            </div>`;
    return cardElement;
  }
}

wordList.addEventListener("click", function(evt) {
  const elt = evt.target;
  if((elt.className === "roll-button") || (elt.parentNode.className === "roll-button")) {
    const font = elt.closest(".font");
    const a = font.id;
    font.classList.add("font-rotate");
    const back = wordList.querySelector(`[data-id='${a}']`);
    console.log(back);
    back.classList.add("back-rotate");
    back.addEventListener("mouseleave", function(evt) {
        const elt = evt.target;
        elt.classList.toggle("back-rotate");
        font.classList.toggle("font-rotate");
    });
  }
}, false);

const catM0 =  document.querySelector("[id='cat0']");
const catM1 =  document.querySelector("[id='cat1']");
const catM2 =  document.querySelector("[id='cat2']");
const catM3 =  document.querySelector("[id='cat3']");
const catM4 =  document.querySelector("[id='cat4']");
const catM5 =  document.querySelector("[id='cat5']");
const catM6 =  document.querySelector("[id='cat6']");
const catM7 =  document.querySelector("[id='cat7']");

catM0.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[1]);
});
catM1.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[2]);
});
catM2.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[3]);
});
catM3.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[4]);
});
catM4.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[5]);
});
catM5.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[6]);
});
catM6.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[7]);
});
catM7.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[8]);
});

cat.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardListMain(cards[0]);
});
cat0.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[1]);
});
cat1.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[2]);
});
cat2.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[3]);
});
cat3.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[4]);
});
cat4.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[5]);
});
cat5.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[6]);
});
cat6.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[7]);
});
cat7.addEventListener("click", ()=> {
  window.wordsList.innerHTML = " ";
  const cardList = new CardList(cards[8]);
});
