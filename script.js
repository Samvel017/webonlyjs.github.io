let desc = prompt('Insert your description:');
let bgCol = prompt('Insert background color:');
document.body.style.backgroundColor = bgCol;
document.body.style.padding = '121px 0 88px 0';
document.body.style.fontFamily = 'Poppins';
document.body.style.margin = '0';
let title = document.querySelector('.desc');
title.innerHTML = desc;
title.style.textAlign = 'center';
title.style.fontSize = '52px';
title.style.fontWeight = '500';
title.style.marginBottom = '101px';

let parent = document.querySelector('.parent');
parent.style.display = 'flex';
parent.style.justifyContent = 'center';
parent.style.gridGap = '20px';
parent.style.flexWrap = 'wrap';
parent.style.marginBottom = '87px';

let blocks = document.querySelectorAll('.block');
for (let i = 0; i < blocks.length; i++) {
  blocks[i].style.maxWidth = '357px';
  blocks[i].style.height = '264px';
  blocks[i].style.width = '100%';
  blocks[i].style.position = 'relative';
}

blocks[0].style.backgroundImage = 'url("./img/Rectangle 12.png")';
blocks[1].style.backgroundImage = 'url("./img/Rectangle 13.png")';
blocks[2].style.backgroundImage = 'url("./img/Rectangle 14.png")';

let blockBot = document.querySelectorAll('.block-bottom');
for (let i = 0; i < blockBot.length; i++) {
  blockBot[i].style.position = 'absolute';
  blockBot[i].style.bottom = '0';
  blockBot[i].style.left = '0';
  blockBot[i].style.right = '0';
  blockBot[i].style.maxWidth = '100%';
  blockBot[i].style.height = '55px';
  blockBot[i].style.backgroundColor = 'rgba(8, 60, 110, 0.9)';
  blockBot[i].style.display = 'flex';
  blockBot[i].style.justifyContent = 'space-between';
  blockBot[i].style.alignItems = 'center';
  blockBot[i].style.padding = '0 12px 0 12px';
  blockBot[i].firstElementChild.style.color = 'white';
  blockBot[i].firstElementChild.style.fontSize = '20px';
  blockBot[i].firstElementChild.style.fontWeight = '500';
  blockBot[i].lastElementChild.style.color = 'white';
  blockBot[i].lastElementChild.style.fontSize = '18px';
  blockBot[i].lastElementChild.style.width = '96px';
  blockBot[i].lastElementChild.style.height = '40px';
  blockBot[i].lastElementChild.style.border = '1.5px solid #fff';
  blockBot[i].lastElementChild.style.borderRadius = '5px';
  blockBot[i].lastElementChild.style.display = 'grid';
  blockBot[i].lastElementChild.style.placeItems = 'center';
}
blockBot[0].firstElementChild.innerHTML = 'White Swan Chair';
blockBot[1].firstElementChild.innerHTML = 'Urban sofa set';
blockBot[2].firstElementChild.innerHTML = 'Big  Mono • Kitchen set';
blockBot[0].lastElementChild.innerHTML = '$69.99';
blockBot[1].lastElementChild.innerHTML = '$569';
blockBot[2].lastElementChild.innerHTML = '$569';

let sale = document.querySelectorAll('.sale');
for (let i = 0; i < sale.length; i++) {
  sale[i].style.position = 'absolute';
  sale[i].style.width = '80px';
  sale[i].style.height = '32px';
  sale[i].style.display = 'grid';
  sale[i].style.placeItems = 'center';
  sale[i].style.backgroundColor = '#083C6E';
  sale[i].style.fontSize = '14px';
  sale[i].style.letterSpacing = '0.1em';
  sale[i].style.textTransform = 'uppercase';
  sale[i].style.color = 'white';
  sale[i].style.left = '13px';
  sale[i].style.top = '13px';
  sale[i].innerHTML = 'SALE';
}

let backImg = document.querySelector('.back-img');
backImg.style.width = '100%';
backImg.style.height = '447px';
backImg.style.position = 'relative';
backImg.style.backgroundImage = 'url("./img/Rectangle 16.png")';
backImg.firstElementChild.style.position = 'absolute';
backImg.firstElementChild.style.height = '100%';
backImg.firstElementChild.style.zIndex = '10';
backImg.firstElementChild.style.width = '100%';
backImg.firstElementChild.style.backgroundColor = 'rgba(21, 34, 66, 0.5)';
