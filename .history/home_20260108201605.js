// 1. Sample Data Source (In a real app, this would come from a database/API)
const destinations = [
    { name: "Bali, Indonesia", icon: "fa-umbrella-beach" },
    { name: "Kyoto, Japan", icon: "fa-torii-gate" },
    { name: "Santorini, Greece", icon: "fa-water" },
    { name: "Machu Picchu, Peru", icon: "fa-mountain" },
    { name: "Banff National Park, Canada", icon: "fa-tree" },
    { name: "Maui, Hawaii", icon: "fa-sun" },
    { name: "Rome, Italy", icon: "fa-landmark" },
    { name: "Cairo, Egypt", icon: "fa-gopuram" },
    { name: "Reykjavik, Iceland", icon: "fa-icicles" },
    { name: "Queenstown, New Zealand", icon: "fa-hiking" }
];

// 2. Get DOM Elements
const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('searchResultsList');

// 3. Event Listener for typing
searchInput.addEventListener('keyup', (e) => {
    // Get the current value and convert to lowercase for case-insensitive comparison
    const searchString = e.target.value.toLowerCase();

    // If input is empty, hide results and return
    if(searchString === "") {
       resultsList.style.display = "none";
       resultsList.innerHTML = "";
       return;
    }

    // 4. Filtering Logic based on name
    const filteredDestinations = destinations.filter( place => {
        return place.name.toLowerCase().includes(searchString);
    });

    // 5. Render Results based on filter
    displayResults(filteredDestinations);
});


// Function to generate HTML for suggestions
const displayResults = (results) => {
    // If no results match the typing
    if(results.length === 0) {
        resultsList.innerHTML = '<div class="result-item" style="pointer-events: none;">No destinations found.</div>';
    } else {
         // Map through results and create HTML list items with icons
        const htmlString = results.map( place => {
            return `
            <div class="result-item" onclick="selectDestination('${place.name}')">
                <i class="fas ${place.icon}" style="color: #ccc;"></i>
                <span>${place.name}</span>
            </div>
            `;
        }).join('');
        
        resultsList.innerHTML = htmlString;
    }

    // Make the dropdown visible
    resultsList.style.display = "block";
};

// Helper function when user clicks a result
function selectDestination(destinationName) {
    searchInput.value = destinationName;
    resultsList.style.display = "none";
    // In a real app, this would redirect to a results page
    console.log("User selected:", destinationName);
}


// Bonus: Hide dropdown if clicking outside the search area
document.addEventListener('click', (e) => {
    const searchContainer = document.querySelector('.search-container-main');
    // If the click happened outside the search container block
    if (!searchContainer.contains(e.target)) {
         resultsList.style.display = "none";
    }
});