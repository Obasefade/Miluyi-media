const tabButtons = document.querySelectorAll(".tab-btn");
const blogItems = document.querySelectorAll(".blog-item");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        blogItems.forEach(item => {
            if (filter === "all" || item.dataset.category === filter) {
                item.classList.add("show");
            } else {
                item.classList.remove("show");
            }
        });
    });
});

window.addEventListener("DOMContentLoaded", () => {
    blogItems.forEach(item => item.classList.add("show"));
});

const contactForm = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    thankYouMessage.style.display = "block";

    setTimeout(() => {
        thankYouMessage.style.display = "none";
        contactForm.reset();
    }, 5000);
}); 


const galleryImages = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open Lightbox
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.classList.add('show');
  });
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('show');
});

// Show Selected Image
function showImage() {
  const src = galleryImages[currentIndex].getAttribute('src');
  const alt = galleryImages[currentIndex].getAttribute('alt');
  lightboxImg.setAttribute('src', src);
  lightboxImg.setAttribute('alt', alt);
}

// Navigation Buttons
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage();
});
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage();
});

// Close when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('show');
  }
});

const searchBox = document.getElementById('searchBox');
const postList = document.getElementById('postList');
const posts = document.querySelectorAll('#postList li');
const noResults = document.getElementById('noResults');

searchBox.addEventListener('input', function() {
  const query = this.value.toLowerCase().trim();
  let matches = 0;

  if (query.length > 0) {
    postList.style.display = 'block'; // Show list when typing
  } else {
    postList.style.display = 'none'; // Hide list when empty
    noResults.style.display = 'none';
    return;
  }

  posts.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(query)) {
      item.style.display = 'block';
      matches++;
    } else {
      item.style.display = 'none';
    }
  });

  // Show "no results" message if nothing matches
  noResults.style.display = matches === 0 ? 'block' : 'none';
});

