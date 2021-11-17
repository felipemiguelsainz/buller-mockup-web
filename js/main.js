const img1 = document.getElementById("img1"),
img2 = document.getElementById("img2"),
img3 = document.getElementById("img3"); 

img1.onclick = () => {document.querySelector(".carrousel").style.transform = 'translateX(-0%)'}
img2.onclick = () => {document.querySelector(".carrousel").style.transform = 'translateX(-84%)'}
img3.onclick = () => {document.querySelector(".carrousel").style.transform = 'translateX(-165%)'}
