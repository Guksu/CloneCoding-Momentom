const bgImgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const choseImg = bgImgs[Math.floor(Math.random() * bgImgs.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${choseImg}`;
document.body.appendChild(bgImg);
