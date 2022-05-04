const arrPic = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg"];
let x = 0;

const changeBackgroundImage = () => {
  const middlePage = document.getElementById("mpage");
  middlePage.style.backgroundImage = "url(./img/worker/" + arrPic[(x++) % arrPic.length] + ")";
  console.log(middlePage.style.backgroundImage);
}

//set initial background after 10ms
setTimeout(changeBackgroundImage, 10);

//at every 10 seconds the background image changes by calling 
//changeBackgroundImage() function
setInterval(changeBackgroundImage, 10000);