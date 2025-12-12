document.getElementById("reviewForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("productName").value;
    let brand = document.getElementById("productBrand").value;
    let review = document.getElementById("productReview").value;
    let rating = document.getElementById("productRating").value;

    if (!name || !brand || !review || !rating) return;

    let reviewBox = document.createElement("div");
    reviewBox.className = "review-box";

    reviewBox.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Brand:</strong> ${brand}</p>
        <p>${review}</p>
        <p><strong>Rating:</strong> ${rating}</p>
    `;

    document.getElementById("reviewList").appendChild(reviewBox);

    document.getElementById("status").innerText = "Review added!";
    setTimeout(() => { document.getElementById("status").innerText = ""; }, 2000);

    document.getElementById("reviewForm").reset();
});
