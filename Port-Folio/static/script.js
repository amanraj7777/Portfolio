// 1. Custom Glowing Cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. Smooth Scroll Reveal (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 3. Typing Effect for Tagline
const taglineElement = document.querySelector('.typing-text');
if (taglineElement) {
    const text = taglineElement.getAttribute('data-text');
    taglineElement.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            taglineElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 60); // Speed of typing
        }
    }
    setTimeout(typeWriter, 800); // Delay before typing starts
}
// 4. Neon Scroll Progress Bar & Hero Parallax
window.addEventListener('scroll', () => {
    // Progress Bar
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById('scroll-bar').style.width = scrollPercentage + '%';

    // Hero Parallax (fades and moves elements up at different speeds)
    const heroImage = document.querySelector('.profile-container');
    const heroText = document.querySelector('.hero h1');
    if (heroImage && heroText) {
        heroImage.style.transform = `translateY(${scrollTop * 0.3}px) scale(${1 - scrollTop * 0.0005})`;
        heroImage.style.opacity = 1 - scrollTop * 0.002;
        
        heroText.style.transform = `translateY(${scrollTop * 0.2}px)`;
        heroText.style.opacity = 1 - scrollTop * 0.0015;
    }
});

// 5. 3D Hover Tilt Effect for Project Cards
const cards = document.querySelectorAll('.neu-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element
        
        // Calculate rotation based on cursor position
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max tilt 10 degrees
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    // Reset card when mouse leaves
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        card.style.transition = `transform 0.5s ease`;
    });
    
    // Remove transition during hover for instant tracking
    card.addEventListener('mouseenter', () => {
        card.style.transition = `none`;
    });
});
// 6. Magnetic Profile Picture
const profileContainer = document.querySelector('.profile-container');
if (profileContainer) {
    profileContainer.addEventListener('mousemove', (e) => {
        const rect = profileContainer.getBoundingClientRect();
        // Calculate distance from center
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Move the image slightly towards the cursor (0.3 is the pull strength)
        profileContainer.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
        // Pause the parallax effect slightly while hovering
        profileContainer.style.transition = 'transform 0.1s ease-out, box-shadow 0.3s ease';
    });

    profileContainer.addEventListener('mouseleave', () => {
        // Snap back to center
        profileContainer.style.transform = 'translate(0px, 0px) scale(1)';
        profileContainer.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease';
    });
}
