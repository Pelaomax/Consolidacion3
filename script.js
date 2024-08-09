const contactItems = document.querySelectorAll('.block');
const chatSection = document.getElementById('chat');
const contactsSection = document.getElementById('contacts');
const back = document.getElementById('back');
const media = window.matchMedia('(max-width: 768px)');

function setupListeners() {
    if (media.matches) {
        // chatSection.style.visibility = 'hidden';
        contactsSection.style.display = 'block';
        contactItems.forEach(item => {
            item.addEventListener('click', handleContactClick);
        });
        back.addEventListener('click', handleBackClick);
    } else {
        chatSection.style.visibility = 'visible';
        contactsSection.style.display = 'block';
        contactItems.forEach(item => {
            item.removeEventListener('click', handleContactClick);
        });
        back.removeEventListener('click', handleBackClick);
    }
}

function handleContactClick() {
    
    // chatSection.style.display = 'block';
    contactsSection.style.display = 'none';
    // document.querySelector('.rightSide').style.visibility="visible"
    document.querySelector('.rightSide').style.display="flex"
}

function handleBackClick() {
    // alert('regreso')
    chatSection.style.display = 'none';
    contactsSection.style.display = 'block';
}

// Initialize listeners on page load
setupListeners();

// Update listeners when screen size changes
media.addListener(setupListeners);
