// Navigation data
const navigationData = [
    { title: '1.1 Introduction to Computer Systems', url: 'computer-system.html' },
    { title: '1.2 Input Devices', url: 'input-devices.html' },
    { title: '1.3 CPU', url: 'cpu.html' },
    { title: '1.4 Motherboard and Data Bus', url: 'motherboard.html' },
    { title: '1.5 Memory', url: 'memory.html' },
    { title: '1.6 Output Devices and Ports', url: 'output-devices.html' },
    { title: '1.7 Computer Software', url: 'software.html' }
];

// Function to create navigation HTML
function createNavigation(currentPage = '') {
    // Create main navigation
    const nav = document.createElement('nav');
    nav.className = 'container';
    
    // Logo
    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.innerHTML = '<i class="fas fa-laptop-code"></i><span>CS Explorer</span>';
    
    // Navigation links
    const navLinks = document.createElement('ul');
    navLinks.className = 'nav-links';
    
    const homeLink = document.createElement('li');
    homeLink.innerHTML = `<a href="index.html" ${currentPage === 'index' ? 'class="active"' : ''}>Home</a>`;
    navLinks.appendChild(homeLink);
    
    // Append elements to nav
    nav.appendChild(logo);
    nav.appendChild(navLinks);
    
    return nav;
}

// Function to create sidebar
function createSidebar(currentPage = '') {
    const sidebar = document.createElement('aside');
    sidebar.className = 'lesson-sidebar';
    
    const title = document.createElement('h3');
    title.textContent = 'Course Content';
    
    const menu = document.createElement('ul');
    menu.className = 'lesson-menu';
    
    navigationData.forEach(item => {
        const listItem = document.createElement('li');
        if (currentPage === item.url) {
            listItem.className = 'active';
        }
        listItem.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        menu.appendChild(listItem);
    });
    
    sidebar.appendChild(title);
    sidebar.appendChild(menu);
    
    return sidebar;
}

// Function to create navigation buttons
function createNavigationButtons(currentPage) {
    const currentIndex = navigationData.findIndex(item => item.url === currentPage);
    const navButtons = document.createElement('div');
    navButtons.className = 'navigation-buttons';
    
    // Previous button
    if (currentIndex > 0) {
        const prevLink = document.createElement('a');
        prevLink.href = navigationData[currentIndex - 1].url;
        prevLink.className = 'nav-button prev';
        prevLink.innerHTML = `<i class="fas fa-arrow-left"></i> Previous: ${navigationData[currentIndex - 1].title}`;
        navButtons.appendChild(prevLink);
    } else {
        navButtons.innerHTML = '<div></div>';
    }
    
    // Next button
    if (currentIndex < navigationData.length - 1) {
        const nextLink = document.createElement('a');
        nextLink.href = navigationData[currentIndex + 1].url;
        nextLink.className = 'nav-button next';
        nextLink.innerHTML = `Next: ${navigationData[currentIndex + 1].title} <i class="fas fa-arrow-right"></i>`;
        navButtons.appendChild(nextLink);
    }
    
    return navButtons;
}

// Function to initialize navigation
document.addEventListener('DOMContentLoaded', function() {
    // Get current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Add active class to current page in navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Add main navigation
    const header = document.querySelector('header');
    if (header) {
        header.prepend(createNavigation(currentPage));
    }
    
    // Add sidebar for lesson pages (not index)
    if (currentPage !== 'index.html' && !document.querySelector('.lesson-sidebar')) {
        const main = document.querySelector('main');
        if (main) {
            main.prepend(createSidebar(currentPage));
        }
    }
    
    // Add navigation buttons for lesson pages
    if (currentPage !== 'index.html' && !document.querySelector('.navigation-buttons')) {
        const main = document.querySelector('main');
        if (main) {
            main.appendChild(createNavigationButtons(currentPage));
        }
    }
});
