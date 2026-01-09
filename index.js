const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const mainSection = document.getElementById("mainSection");

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase().trim();

    if (!query) return;

    // BEACH
    if (query.includes("beach")) {
    mainSection.className = "hero-section beach-theme";
    mainSection.innerHTML = `
        <div class="hero-content">
            <h1>Relaxing Beach Destinations</h1>
            <p>
                Explore world-famous beaches known for their beauty, calm waters,
                and unforgettable coastal experiences.
            </p>

            <div class="results-container">
                <div class="card">
                    <img src="https://maldives-magazine.com/pictures/baglioni-restort-maldives-pool-beach.jpg">
                    <p>Maldives Beach — Maldives</p>
                </div>

                <div class="card">
                    <img src="https://www.adotrip.com/public/images/areas/master_images/60d0813807aff-Baga_Beach_In_Goa.jpg">
                    <p>Baga Beach — India</p>
                </div>

                <div class="card">
                    <img src="https://www.bing.com/th/id/OIP.Uy_yrJBBo7VznVghGFXaegHaEZ?w=240&h=211&c=8&rs=1&qlt=90&o=6&cb=defcachec1&pid=3.1&rm=2">
                    <p>Bondi Beach — Australia</p>
                </div>

                <div class="card">
                    <img src="https://www.thedailymeal.com/sites/default/files/2018/01/17/Copacabana%20Beach.Dreamstime.jpg">
                    <p>Copacabana Beach — Brazil</p>
                </div>
            </div>
        </div>
    `;
}
else if (query.includes("country")) {
    mainSection.className = "hero-section country-theme";
    mainSection.innerHTML = `
        <div class="hero-content">
            <h1>Beautiful Countries to Explore</h1>
            <p>
                Discover diverse cultures, breathtaking landscapes,
                and unique traditions across the world.
            </p>

            <div class="results-container">
                <div class="card">
                    <img src="https://wallpaperaccess.com/full/1455073.jpg">
                    <p>Switzerland</p>
                </div>

                <div class="card">
                    <img src="https://th.bing.com/th/id/OIP.3fNCxl9G245KgHiUbPC51QHaE8?w=320&h=180&c=7&r=0&o=7&cb=defcachec2&pid=1.7&rm=3">
                    <p>Japan</p>
                </div>

                <div class="card">
                    <img src="https://www.bing.com/th/id/OIP.y_l2lm510yM5dUbkMuls0QHaE7?w=237&h=211&c=8&rs=1&qlt=90&o=6&cb=defcachec1&pid=3.1&rm=2">
                    <p>India</p>
                </div>

                <div class="card">
                    <img src="https://th.bing.com/th/id/OIP.FWv5huAUErHra-OJHsLGwwHaEK?w=331&h=180&c=7&r=0&o=7&cb=defcachec2&pid=1.7&rm=3">
                    <p>New Zealand</p>
                </div>
            </div>
        </div>
    `;
}


    else if (query.includes("temple")) {
    mainSection.className = "hero-section temple-theme";
mainSection.innerHTML = `
    <div class="hero-content">
        <h1>Spiritual Temples</h1>
        <p>
            Uttarakhand, known as Devbhoomi, is home to sacred temples nestled
            in the Himalayas, offering peace, spirituality, and divine energy.
        </p>

        <div class="results-container">
            <div class="card">
                <img src="https://th.bing.com/th/id/R.e87a0facfb064e02d4693c2af9393b28?rik=4xZV7MIOG9hn6A&riu=http%3a%2f%2fbontravelindia.com%2fwp-content%2fuploads%2f2021%2f10%2fKedarnath-Temple-Uttarakhand.jpg&ehk=dp3z53tRguJAd37gcVV9MmDdeZ%2fkm%2f1tBDgVYl3hkcg%3d&risl=&pid=ImgRaw&r=0">
                <p>Kedarnath Temple</p>
            </div>

            <div class="card">
                <img src="https://majesticjourney.in/wp-content/uploads/2020/05/badrinath-temple.jpg">
                <p>Badrinath Temple</p>
            </div>

            <div class="card">
                <img src="https://www.templepurohit.com/wp-content/uploads/2016/10/Gangotri-Temple-Gangotri-Dham-Travel-Info-Photos-History-e1476332078425.jpg">
                <p>Gangotri Temple</p>
            </div>

            <div class="card">
                <img src="https://1.bp.blogspot.com/-xs6z8TayJtY/Xyq8qfj4rOI/AAAAAAAAAus/66oQ9FL6ItwY2OVNPiL0qE3KorlRLb4DACLcBGAsYHQ/s1600/yamunotri-yamunotri-temple-149442069564-orijgp.jpg">
                <p>Yamunotri Temple</p>
            </div>
        </div>
    </div>
`;
    }
    // NO RESULT
    else {
        mainSection.className = "hero-section no-result-theme";
        mainSection.innerHTML = `
            <div class="hero-content">
                <h1>No Results Found</h1>
                <p>Please search for <strong>beach</strong> or <strong>country</strong>.</p>
            </div>
        `;
    }
});

clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    location.reload();
});
