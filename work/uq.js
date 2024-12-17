const butt=document.getElementById("butt")
const qt=document.getElementById("head")
const prs=document.getElementById("para")

const quotes=[
      {quote:"“Be the change that you wish to see in the world.”",person:"― Mahatma Gandhi"},
      {quote:"“The strongest among you is the one who controls his anger.”",person:"― Prophet Muhammed"},
      {quote:"“Duniya is nothing but a beautiful lie”",person:"― Quran"},
      {quote:"“In the end we'll all become stories.”",person:"― Margaret Atwood"},
      {quote:"“To friendship every burden's light.”",person:"― Aesop"},
      {quote:"“I always like walking in the rain, so no one can see me crying.”",person:"― Charlie Chaplin"},
      {quote:"“If you want to shine like a sun,first burn like a sun.”",person:"― A.P.J. Abdul Kalam"},
      {quote:"“Hell is empty and all the devils are here.”",person:"― William Shakespear"},
      {quote:"“A friend to all is a friend to none.”",person:"― Aristotle"},
      {quote:"“The true sign of intelligence is not knowledge but imagination.”",person:"― Albert Einstein"},
      {quote:"“I want every girl to know that her voice can change the world.”",person:"― Malala Yousafzai"},
      {quote:"“Comparison destroys personality.”",person:"― Fathima Fidha"} 
]

let leth=quotes.length;
butt.addEventListener("click",function () {
      let a=Math.floor(Math.random()*leth);
      let b=quotes[a].quote;
      qt.innerHTML=b;
      let c=quotes[a].person
      prs.innerHTML=c
})