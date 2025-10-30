// ✨ ADD YOUR LETTERS HERE ✨
// Each letter should have: date, title, and content
const letters = [
    {
        date: "October 26, 2025",
        title: "Day One — The Beginning",
        content: `Dear Honey ko,

Today marks my first day of courting you, and honestly, I still can’t believe this is really happening. I prayed for this moment for the chance to show you how much you mean to me.

Parang panaginip lang na I'm here already, finally taking this step towards you. I’ve admired you, and now that I get to express it, I promise I won’t waste this chance.

Every time I see your smile, it feels like the world softens like roses blooming in spring. And when I see your pretty face? It reminds me of daisies dancing in the sun.

I hope, as you read this, you feel how genuine my intentions are. You’re really special to me, and this, right here, is the start of something I’ll always treasure.

With all my heart,  
Your Hon :))`
  },
    {
       date: "October 27, 2025",
        title: "Day Two - A Lovely day ahead",
        content: `Dear Honey ko,

I just wanted to remind you how special you are to me. Every day that I get to talk to you or even think of you feels like a blessing I’ll never get tired of thanking God for.

I hope today brings you nothing but peace, happiness, and smiles the kind that light up your face and make my heart skip a beat. May your day be filled with good vibes, laughter, and the warmth of people who love you… especially me.

Enjoy every moment, my Honey. Kahit gaano ka-busy or pagod today, please remember that someone out here is always cheering for you, thinking of you, and wishing you the best.

You make my world brighter just by being you.  
Have a wonderful day. 🌹

Yours truly,
Honnnn`
    },
    {
          date: "October 28, 2025",
          title: "Day Three — Last Night’s Smile",
          content: `Dear my pretty Honey,

I just want to say na I really enjoyed po our lambingan last night. Ang saya lang ng mga moments na ganon po. Every time we laugh or tease each other, it feels like I’m getting even closer to you.

Sorry pala sa mga pang-iinis ko hehe 😅 alam mo namang ang kulit ko po minsan. Pero to be honest, I just love seeing you smile especially when it’s because of me.

I hope today treats you gently, Honey. May your day be filled with warmth, peace, and little moments that make you smile again. Always remember, I’m just here thinking of you, praying for you, and feeling grateful that I get to do this.

You make my every day something worth looking forward to. ❤️  

With love,  
Your makulit na Honn 😛`
},
{
  date: "October 29, 2025",
  title: "Day Four — A Brand New Day",
  content: `Dear Honey ko,

Good morning cutie 

I’m so happy knowing you had such a productive day kahapon. I’m always proud of how dedicated and hardworking you are. You make everything you do look so effortless, and it inspires me more than you know.

Pero sana this time, may pahinga ka rin kahit konti po ha? You deserve to rest and enjoy every little thing around you.

I’ve been thinking about you a lot, your smile, your voice, the way you tell stories about your day. It already makes my day complete.

Keep shining, my Honey. I’ll always be here, cheering for you quietly and praying for more good days ahead. You’re doing amazing po and I’m just so lucky I get to witness it.

With all my love,  
Honnn`
},{
  date: "October 30, 2025",
  title: "Day Five — You’re Beautiful",
  content: `Dear Honey ko,

I just want to say na superrr ganda mo talaga. As in, pretty ka, cute pa, and you have a good heart po. Hindi lang sa itsura, pero sa kung paano ka makitungo, mag-alaga, at magpahalaga sa mga tao sa paligid mo.

You make things feel lighter just by being yourself.

So today, sana good mood ka lang ha? Smile ka palagi, kahit pagod ka or stress. You deserve all the good things in the world, and I’ll keep reminding you of that.

Ingat ka palagi, Honey. I’m always proud of you. 💖

(PS. Sorry po pala kagabi honeyyy, nainis ka tuloy sa akin. I'm really sorry po talaga, bati na tayo okay?)

– Your Honnn`
},
{
  date: "October 31, 2025",
  title: "Day Six — Your Rest Day",
  content: `Dear Honey ko,

Wala ka palang pasok today, lucky you! Sana you really take this time to rest and enjoy your day. You’ve been working so hard lately, kaya deserve mo talaga ‘tong pahinga.

Spend the day doing things that make you happy kahit mag sleep ka, watch a movie, or just chill quietly. Gusto ko lang na makapag-relax ka, walang stress, walang pressure.

And syempre, kahit wala kang pasok, gusto ko pa rin sabihin… ang ganda mo po pa rin. 

Enjoy your rest day, Honey. You deserve every bit of peace and comfort today. Miss you already. 💖

– Honnnn`
}
    // Add more letters here! Just copy the format above
];

// Current page state
let currentPage = 0;

// DOM elements
const leftDate = document.getElementById('leftDate');
const leftTitle = document.getElementById('leftTitle');
const leftText = document.getElementById('leftText');
const rightDate = document.getElementById('rightDate');
const rightTitle = document.getElementById('rightTitle');
const rightText = document.getElementById('rightText');
const pageNum = document.getElementById('pageNum');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Display current page
function displayPage() {
    const leftIndex = currentPage * 2;
    const rightIndex = leftIndex + 1;

    // Left page
    if (leftIndex < letters.length) {
        leftDate.textContent = letters[leftIndex].date;
        leftTitle.textContent = letters[leftIndex].title;
        leftText.textContent = letters[leftIndex].content;
    } else {
        leftDate.textContent = '';
        leftTitle.textContent = '';
        leftText.textContent = '';
    }

    // Right page
    if (rightIndex < letters.length) {
        rightDate.textContent = letters[rightIndex].date;
        rightTitle.textContent = letters[rightIndex].title;
        rightText.textContent = letters[rightIndex].content;
    } else {
        rightDate.textContent = '';
        rightTitle.textContent = '';
        rightText.textContent = '';
    }

    // Update page number and navigation
    const totalPages = Math.ceil(letters.length / 2);
    pageNum.textContent = `Page ${currentPage + 1} of ${totalPages}`;
    
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage >= totalPages - 1;
}

// Navigate to next page
function nextPage() {
    const totalPages = Math.ceil(letters.length / 2);
    if (currentPage < totalPages - 1) {
        currentPage++;
        displayPage();
    }
}

// Navigate to previous page
function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        displayPage();
    }
}

// Event listeners
prevBtn.addEventListener('click', previousPage);
nextBtn.addEventListener('click', nextPage);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextPage();
    if (e.key === 'ArrowLeft') previousPage();
});

// Initialize on page load
displayPage();