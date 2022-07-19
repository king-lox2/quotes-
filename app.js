const reviews = [
  
  {
    id:1,
    name:'Enemuoh Everist',
    job:'Frontend Web Developer',
    image:'https://pbs.twimg.com/profile_images/1525601970962178048/bCIZv7D-.jpg',
   quote:"God is Faithful, God is kind he does not envy he does not boast he's ways are higher than my own he's thoughts consume the great unknown of this alone i am sure my God is Love 🕊️",
  },
  
    {
    id:2,
    name:'Elon Musk',
    job:'CEO TELSA',
    image:'https://th.bing.com/th/id/R.9a0653f72ae2bab9fa500b69f4b5be9c?rik=IBAwkY1scSsSog&pid=ImgRaw&r=0',
    quote:'When something is important enough, you do it even if the odds are not in your favour'
  },
  
    {
    id:3,
    name:'Tony Elumelu',
    job:'CEO UBA',
    image:'https://th.bing.com/th/id/R.12da94c9f3cf59396403cb8ca0b8dd1a?rik=qAxDpZcP0igXVg&pid=ImgRaw&r=0',
    quote:'Never believe anything is impossible. Have an open mind. Find out what it takes to succeed. Chances are it will'
  },
  
    {
    id:4,
    name:'Mark Zuckerberg ',
    job:'CEO Meta Platform',
    image:'https://th.bing.com/th/id/R.31a3ce45a0b24e972bb40932dc48d75a?rik=lF2islfBg0uqbQ&riu=http%3a%2f%2ftechnology.inquirer.net%2ffiles%2f2017%2f02%2fFacebook-Zuckerberg.jpg&ehk=wc3X5rFOxnZ%2bkqls4%2bL3Nf7e24KkneMLv8WeRAWTBWY%3d&risl=&pid=ImgRaw&r=0',
    quote:'People can be really smart or have skills that are directly applicable, but if they don’t really believe in it, then they are not going to really work hard'
  },
  
      {
    id: 5,
    name:'Tobias Lütke',
    job:'CEO Shopify',
    image:'https://cdn.betakit.com/wp-content/uploads/2014/11/2012-01-31-04-04-57-Tobi1.jpg',
    quote:"Once you've made peace with the fact that you're hardly ever going to work on anything that you're actually good at, the only thing that you can do is get good very fast on everything you have to do."
  },
  
        {
    id:6,
    name:'Satya Narayana',
    job:'CEO Microsoft',
    image:'https://images.seattletimes.com/wp-content/uploads/2020/01/01212020_Microsoft-CEO-Satya-Nadella-_143423.jpg?d=2040x1703',
    quote:'The view you adopt for yourself profoundly affects the way you lead your life'
  },
  
        {
    id:7,
    name:'Lisa Su',
    job:'CEO AMD',
    image:'https://static.theceomagazine.net/wp-content/uploads/2020/03/06085216/lisa-su.jpg',
    quote:" People are really capable if you're able to give them the confidence to get something done and paint the picture of where we need to go. "
  },
  
        {
    id:8,
    name:' Mary Barra',
    job:'CEO General Motors',
    image:'https://static.theceomagazine.net/wp-content/uploads/2020/03/06085220/Mary-Barra.jpg',
    quote:"My definition of 'innovative' is providing value to the customer."
  },
  
        {
    id:9,
    name:'Lynsi Snyder',
    job:'Heiress of In-N-Out Burger',
    image:'https://static.theceomagazine.net/wp-content/uploads/2020/03/06085224/lynsi-snyder.jpg',
    quote:'I like to fly under the radar.'
  },
  
        {
    id:10,
    name:'Ginni Rometty',
    job:'American business executive',
    image:'https://static.theceomagazine.net/wp-content/uploads/2020/03/06085214/Ginni-Rometty.jpg',
    quote:"Clients say, 'What's your strategy,' and I say, 'Ask me what I believe first.' That's a far more enduring answer."
  },
  
  
  ];
  
  
  const img = document.querySelector('.img');
  
  const names = document.querySelector('.names');
  
  const job = document.querySelector('.job');
  
  const quote = document.querySelector('.quote');
  
  const left = document.querySelector('.left');
  
  const right = document.querySelector('.right');
  
  const random = document.querySelector('.random');

let itemArr = 0;  

window.addEventListener("DOMContentLoaded",() => {
showInfo();
});

const showInfo = () => {
let info = reviews[itemArr];
img.src = info.image;
names.textContent = info.name;
job.textContent = info.job;
quote.textContent = info.quote;
};


right.addEventListener("click",() => {
  itemArr++;
  if (itemArr >= reviews.length) {
    itemArr = 0;
  }
  showInfo() ;
});


left.addEventListener("click",() => {
  itemArr--;
  if (itemArr < 0) {
    itemArr = reviews.length -1 ;
  }
  showInfo() ;
  
});


random.addEventListener("click",() => {
  itemArr = getRandom();
  showInfo() ;
  
});

const getRandom = () => {
  const rand = Math.floor(Math.random() * reviews.length);
  return rand;
};