const CONFIG = {
    BIN_ID: '69835fba43b1c97be9650fd5',
    ACCESS_KEY: '$2a$10$VITiVHTH9af1JVwha/.mN.7A5TpRiMk1syKsLeIALAv9oUul2CW6K'
};


let letters = [];

// Current page state
let currentPage = 0;

// DOM elements
let leftDate, leftTitle, leftText;
let rightDate, rightTitle, rightText;
let pageNum, prevBtn, nextBtn, firstBtn, lastBtn;
let loadingScreen;


async function fetchLetters() {
    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${CONFIG.BIN_ID}/latest`, {
            method: 'GET',
            headers: {
                'X-Access-Key': CONFIG.ACCESS_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch letters: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        letters = data.record.letters || [];
        
        console.log(`✅ Loaded ${letters.length} letters from JSONBin`);
        return true;
    } catch (error) {
        console.error('❌ Error fetching letters:', error);
        // Fallback: show error message
        letters = [{
            date: "Error",
            title: "Could not load letters",
            content: "Please check your internet connection and refresh the page.\n\nIf the problem persists, the letters database might be temporarily unavailable."
        }];
        return false;
    }
}

// ============================================
// 📖 DISPLAY FUNCTIONS
// ============================================
function displayPage() {
    if (letters.length === 0) {
        leftDate.textContent = '';
        leftTitle.textContent = 'No letters yet';
        leftText.textContent = 'Letters will appear here once they are added.';
        rightDate.textContent = '';
        rightTitle.textContent = '';
        rightText.textContent = '';
        pageNum.textContent = 'Page 0 of 0';
        return;
    }

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
    
    // Update button states
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage >= totalPages - 1;
    firstBtn.disabled = currentPage === 0;
    lastBtn.disabled = currentPage >= totalPages - 1;

    // Scroll pages to top when navigating
    document.querySelectorAll('.page').forEach(page => {
        page.scrollTop = 0;
    });
}

// ============================================
// 🧭 NAVIGATION FUNCTIONS
// ============================================
function nextPage() {
    const totalPages = Math.ceil(letters.length / 2);
    if (currentPage < totalPages - 1) {
        currentPage++;
        displayPage();
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        displayPage();
    }
}

function firstPage() {
    currentPage = 0;
    displayPage();
}

function lastPage() {
    const totalPages = Math.ceil(letters.length / 2);
    currentPage = totalPages - 1;
    displayPage();
}

// ============================================
// 🚀 INITIALIZATION
// ============================================
async function init() {
    // Get DOM elements
    leftDate = document.getElementById('leftDate');
    leftTitle = document.getElementById('leftTitle');
    leftText = document.getElementById('leftText');
    rightDate = document.getElementById('rightDate');
    rightTitle = document.getElementById('rightTitle');
    rightText = document.getElementById('rightText');
    pageNum = document.getElementById('pageNum');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    firstBtn = document.getElementById('firstBtn');
    lastBtn = document.getElementById('lastBtn');
    loadingScreen = document.getElementById('loadingScreen');

    // Event listeners
    prevBtn.addEventListener('click', previousPage);
    nextBtn.addEventListener('click', nextPage);
    firstBtn.addEventListener('click', firstPage);
    lastBtn.addEventListener('click', lastPage);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextPage();
        if (e.key === 'ArrowLeft') previousPage();
        if (e.key === 'Home') firstPage();
        if (e.key === 'End') lastPage();
    });

    // Fetch letters from JSONBin
    await fetchLetters();
    
    const totalPages = Math.ceil(letters.length / 2);
    currentPage = Math.max(totalPages - 1, 0);
    
    // Display first page
    displayPage();

    // Hide loading screen
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 500);
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);