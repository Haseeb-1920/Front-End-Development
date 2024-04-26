

document.addEventListener('DOMContentLoaded', function() {
    addDynamicContent();
});

// Function to update active navigation link based on current page
function updateActiveNav() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.href.includes(currentLocation)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// DOMContentLoaded to ensure the DOM is fully loaded before executing
document.addEventListener('DOMContentLoaded', function() {
    updateActiveNav();
});

// Example function to show more details on click in an article
function toggleDetails() {
    const readMoreLinks = document.querySelectorAll('article.review a');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action
            const content = link.previousElementSibling;
            const displayStatus = content.style.display;

            content.style.display = (displayStatus === 'none' || !displayStatus) ? 'block' : 'none';
        });
    });
}

const apiEndpoint = 'https://news.sky.com/story/australian-pm-calls-elon-musk-an-arrogant-billionaire-after-x-owner-says-government-wants-to-control-the-entire-internet-over-stabbing-videos-13121432';
const apiKey = '103a6714bf204f7dbb226ea21ab8a9a2';

// Function to fetch and display news
function fetchTechNews() {
    fetch(`${apiEndpoint}?apiKey=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`An error has occurred: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayNews(data.articles); // Assuming the response has an 'articles' property
        })
        .catch(error => {
            console.error('Error fetching tech news:', error);
        });
}

// Function to display news on the page
function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    
    // Clear out existing news
    newsContainer.innerHTML = '';
    
    // Iterate over the articles and create HTML for each article
    articles.forEach(article => {
        const articleHtml = `
            <div class="news-article">
                <h3>${article.title}</h3>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            </div>
        `;
        newsContainer.innerHTML += articleHtml;
    });
}

// Fetch news when the DOM is ready
document.addEventListener('DOMContentLoaded', fetchTechNews);





document.addEventListener('DOMContentLoaded', function() {
    var readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var reviewContent = this.parentElement;
            var fullText = reviewContent.querySelector('.full');
            var briefText = reviewContent.querySelector('.brief');

            // Toggle the display of the full and brief text
            if (fullText.style.display === 'none') {
                fullText.style.display = 'block';
                briefText.style.display = 'none';
                this.textContent = 'Read less';
            } else {
                fullText.style.display = 'none';
                briefText.style.display = 'block';
                this.textContent = 'Read more';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
  
    // Check if a theme is saved in localStorage.
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
      toggleButton.textContent = 'Light Mode';
    }
  
    toggleButton.addEventListener('click', () => {
      // Check the current theme and switch.
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        toggleButton.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light'); // Save theme to localStorage
      } else {
        document.body.classList.add('dark-theme');
        toggleButton.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark'); // Save theme to localStorage
      }
    });
  });
  
  