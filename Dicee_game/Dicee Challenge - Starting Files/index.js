var randomNumber1=Math.floor(Math.random()*6)+1;
var randomimage="dice"+randomNumber1+".png";
var randomimagesource="images/"+randomimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimage1="dice"+randomNumber2+".png";
var randomimagesource1="images/"+randomimage1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource1);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}