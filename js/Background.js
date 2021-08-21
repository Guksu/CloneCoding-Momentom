const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const toDayImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //js에서 만든 요소를 html에 추가하기 위한 코드
bgImage.src = `image/${toDayImage}`; //출력되는 이미지의 src경로
document.body.appendChild(bgImage); // html의 body에 bgImage를 추가
