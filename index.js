var  randmNum = Math.floor(Math.random()*6)+1;
var  randmNum1 = Math.floor(Math.random()*6)+1;
var  name= "images/"+"dice"+randmNum+".png";
var  name2= "images/"+"dice"+randmNum1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",name);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",name2);

if(randmNum>randmNum1)
{
    document.querySelector("h1").innerHTML ="🚩 Player1 wins ";
    
}

else if(randmNum<randmNum1)
{
    document.querySelector("h1").innerHTML ="Player2 wins🥳";
    
}
else
{
    document.querySelector("h1").innerHTML="Draw 🤜🤛";
    
}
