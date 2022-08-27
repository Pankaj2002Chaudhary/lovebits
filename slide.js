

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}

console.log("Welcome to lovebits");
let songindex=0;
let audioElement=new Audio('daru_party.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');

let songs= [
  {songname:"love u",filepath:"song/.mp3",coverpath:"cover/.jpg"},
  {songname:"love u",filepath:"song/.mp3",coverpath:"cover/.jpg"},
  {songname:"love u",filepath:"song/.mp3",coverpath:"cover/.jpg"},
  {songname:"love u",filepath:"song/.mp3",coverpath:"cover/.jpg"},
  {songname:"love u",filepath:"song/.mp3",coverpath:"cover/.jpg"},
  {songname:"love u",filepath:"song/.mp3",coverpath:"cover/.jpg"},
  {songname:"love u",filepath:"song/.mp3",coverpath:"cover/.jpg"},
  {songname:"love u",filepath:"song/.mp3",coverpath:"cover/.jpg"},
  {songname:"love u",filepath:"song/.mp3",coverpath:"cover/.jpg"},
  {songname:"love u",filepath:"song/.mp3",coverpath:"cover/.jpg"},
  {songname:"love u",filepath:"song/.mp3",coverpath:"cover/.jpg"}
  
]


//play pause
masterplay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
  }
  else
  audioElement.pause();
  masterplay.classList.remove('fa-pause-circle');
  masterplay.classList.add('fa-play-circle');


})
myprogressbar.addEventListener('timeupdate',()=>{
  console.log('timeupdate');
})