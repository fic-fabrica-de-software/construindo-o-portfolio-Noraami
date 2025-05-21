document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        { icon: 'fa-brands fa-html5', name: 'HTML5' },
        { image: '../assets/valorant.svg', name: 'Valorant' },
        { icon: 'fa-brands fa-square-js', name: 'JavaScript' },
        { icon: 'fa-brands fa-figma', name: 'Figma' },
        { image: '../assets/genshin.svg', name: 'Genshin Impact' },
        { icon: 'fa-brands fa-bootstrap', name: 'Bootstrap' },
        { icon: 'fa-brands fa-vuejs', name: 'Vue' },
        { icon: 'fa-brands fa-git-alt', name: 'Git' },
        { image: '../assets/vsc.svg', name: 'Visual Studio Code' },
        { icon: 'fa-solid fa-mug-hot', name: 'Coffee' },
        { icon: 'fa-brands fa-css3-alt', name: 'CSS3' }
    ];

    const track = document.querySelector('.carousel-track');
    const cloneSkills = [...skills, ...skills]; 
    let currentIndex = 0;
    let itemsPerScreen = calculateItemsPerScreen();


    function initCarousel() {
    track.innerHTML = '';
    cloneSkills.forEach((skill, index) => {
        const skillElement = document.createElement('div');
        skillElement.className = `skill-icon ${skill.customClass || ''}`;
        

        if (skill.image) {
            skillElement.innerHTML = `
                <img src="${skill.image}" alt="${skill.name}">
                <span>${skill.name}</span>
            `;
        } else {
            skillElement.innerHTML = `<i class="${skill.icon}"></i><span>${skill.name}</span>`;
        }
        
        track.appendChild(skillElement);
    });
    updateCarousel();
};


    function updateCarousel() {
        const itemWidth = 100 / itemsPerScreen;
        track.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
    };


    function calculateItemsPerScreen() {
        const width = window.innerWidth;
        if (width <= 992) return 5;
        if (width <= 770 && width > 500) return 4;
        if (width <= 500 && width > 400) return 3;
        if (width <= 400) return 2;
    };

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % skills.length;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + skills.length) % skills.length;
        updateCarousel();
    });

    window.addEventListener('resize', () => {
        itemsPerScreen = calculateItemsPerScreen();
        document.documentElement.style.setProperty('--items-per-screen', itemsPerScreen);
        updateCarousel();
    });

    document.documentElement.style.setProperty('--items-per-screen', itemsPerScreen);
    initCarousel();
});


