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
       /* date: "October 27, 2025",
        title: "Thinking of You",
        content: `My Dearest,

I woke up today with thoughts of you filling my mind. It's amazing how someone can become the first thought in the morning and the last before sleep.

You've brought color to my world in ways I never imagined possible.

Forever yours,
[Your Name]`*/
    },
    {
       /* date: "October 28, 2025",
        title: "A Simple Truth",
        content: `To the one who makes my heart skip,

There are moments when words fall short, when the depth of what I feel cannot be captured by mere sentences. But I'll try anyway.

You are my favorite notification, my favorite song, my favorite daydream.

Always,
[Your Name]`*/
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