document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const button = item.querySelector("button");

        question.addEventListener("click", () => {
            const isOpen = answer.classList.contains("show");
            // Close all answers
            document.querySelectorAll(".faq-answer").forEach(ans => {
                ans.classList.remove("show");
            });
            document.querySelectorAll(".faq-question button").forEach(btn => {
                btn.classList.remove("rotate");
            });
            // Open clicked answer if it was not already open
            if (!isOpen) {
                answer.classList.add("show");
                button.classList.add("rotate");
            }
        });
    });
});


function generateStars(targetElementId) {
    const starRatingDiv = document.getElementById(targetElementId);
    const rating = parseInt(starRatingDiv.getAttribute('data-rating'), 10);
    starRatingDiv.innerHTML = '';

    for (let i = 1; i <= 5; i++) {
        const starContainer = document.createElement('div');
        const starImage = document.createElement('img');
        
        if (i <= rating) {
            starImage.src = '/assets/icons/full-star.svg';
        } else {
            starImage.src = '/assets/icons/empty-star.svg';
        }
        
        starContainer.appendChild(starImage);
        starRatingDiv.appendChild(starContainer);
    }
}

document.querySelectorAll('.rating').forEach(element => {
    generateStars(element.id);
});
