document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const sections = document.querySelectorAll('.animate');
    const navToggleBtn = document.getElementById('nav-toggle');
    const nav = document.querySelector('nav ul');

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
    });

    const handleScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.getBoundingClientRect().height;
            if (sectionTop < window.innerHeight - sectionHeight / 4) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    navToggleBtn.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
            nav.classList.add('fade-out');
            nav.classList.remove('open');
            setTimeout(() => nav.classList.remove('fade-out'), 300); // match transition duration
        } else {
            nav.classList.add('open');
        }
    });

    // Add click event for skill photos
    const skillPhotos = document.querySelectorAll('.skill-photo img');
    skillPhotos.forEach(photo => {
        photo.addEventListener('click', () => {
            const parent = photo.closest('.roadmap-item');
            parent.classList.toggle('open');
        });
    });

    // Modal functionality for project images
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const projectImages = document.querySelectorAll('.project-gallery img');
    const closeBtn = document.getElementsByClassName('close')[0];

    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
