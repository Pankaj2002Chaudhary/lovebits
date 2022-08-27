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
]


//play pause
masterplay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
  }
})
myprogressbar.addEventListener('timeupdate',()=>{
  console.log('timeupdate');
})