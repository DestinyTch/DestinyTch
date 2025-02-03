// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu a');
    const menuToggle = document.getElementById('menu-toggle');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 950) {
                menuToggle.checked = false;
            }
        });
    });

    // Smooth scrolling
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
           

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

const deerunzText = document.getElementById('deerunz');
const letters = deerunzText.textContent.split('');

deerunzText.innerHTML = '';

letters.forEach((letter, index) => {
  const letterSpan = document.createElement('span');
  letterSpan.textContent = letter;
  letterSpan.classList.add('letter');
  deerunzText.appendChild(letterSpan);

  // Calculate random initial positions and animation delays
  const randomX = Math.random() * 100 - 50; // Random horizontal offset
  const randomY = Math.random() * 100 - 50; // Random vertical offset
  const randomDelay = Math.random() * 2; // Random animation delay

  letterSpan.style.left = `${index * 20 + randomX}px`; // Adjust spacing as needed
  letterSpan.style.top = `-${randomY}px`; // Start above the container

  // Add animation with delay
  letterSpan.style.animation = `fall 1s ${randomDelay}s ease-in-out`;

  // Add arranging animation after falling
  setTimeout(() => {
    letterSpan.style.animation = `arrange 3.5s ease-in-out`;
    letterSpan.style.left = `${index * 20}px`; // Final horizontal position
    letterSpan.style.top = '0'; // Final vertical position
    letterSpan.style.opacity = 1; // Make visible
  }, (randomDelay + 1) * 1000); // Delay based on fall animation
});
/*
const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent link from opening

                // Create overlay and popup elements
                const overlay = document.createElement('div');
                overlay.classList.add('overlay');

                const popup = document.createElement('div');
                popup.classList.add('popup');
                popup.textContent = 'Currently under developent';

                overlay.appendChild(popup);
                document.body.appendChild(overlay);

                // Close popup when clicking overlay
                overlay.addEventListener('click', () => {
                    document.body.removeChild(overlay);
                });
            });
        }); */

        // Function to check if the user is online
// Function to check if the user is online
// Function to check if the user is online
// Function to check if the user is online
function checkConnection() {
    if (!navigator.onLine) {
        // Store the current page URL in sessionStorage
        sessionStorage.setItem('lastPage', window.location.href);
        // Redirect to a custom 'no internet' page
        window.location.href = 'no-internet.html';
    }
}

// Request permission for notifications on page load, only once
function requestNotificationPermission() {
    // Check if permission is "default"
    if (Notification.permission === "default") {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                console.log("Notification permission granted");
            } else {
                console.log("Notification permission denied");
            }
        });
    }
}

// Event listener for when the user goes offline
window.addEventListener('offline', function() {
    checkConnection();
});

// Event listener for when the user comes online
window.addEventListener('online', function() {
    // Check if there's a saved last page
    const lastPage = sessionStorage.getItem('lastPage');
    
    // If we saved a page, show a notification and redirect
    if (lastPage) {
        // Check if notifications are granted
        if (Notification.permission === "granted") {
            // Show a notification when the internet is back
            const notification = new Notification("You are back online!", {
                body: "Click here to go back to the page you were on.",
                icon: "icon-url.png", // Optional: You can add an icon here
            });

            // Redirect on notification click
            notification.onclick = function() {
                window.location.href = lastPage;
            };
        } else {
            // If permission isn't granted, just redirect immediately without notification
            window.location.href = lastPage;
        }

        // Clear 'lastPage' from sessionStorage once the page is redirected
        sessionStorage.removeItem('lastPage');
    }
});

// Request notification permission only once on page load
requestNotificationPermission();

// Check the connection status immediately when the page loads
if (!navigator.onLine) {
    checkConnection();
}
