// ====================================================================
// 💕 Md Abu Jayed's Love Proposal for Farzana Yeasmin 💕
// ====================================================================

// ====== Love Quotes Data ======
const loveQuotes = [
    { text: "I have found the one whom my soul loves.", author: "— Song of Solomon" },
    { text: "You are my sun, my moon, and all my stars.", author: "— E.E. Cummings" },
    { text: "In all the world, there is no heart for me like yours.", author: "— Maya Angelou" },
    { text: "I loved you yesterday, I love you still. I always have, I always will.", author: "— Elaine Davis" },
    { text: "You are my today and all of my tomorrows.", author: "— Leo Christopher" },
    { text: "I look at you and see the rest of my life in front of my eyes.", author: "— Unknown" },
    { text: "Every love story is beautiful, but ours is my favorite.", author: "— Unknown" },
    { text: "I fell in love the way you fall asleep: slowly, and then all at once.", author: "— John Green" },
    { text: "You are the finest, loveliest, tenderest person I have ever known.", author: "— F. Scott Fitzgerald" },
    { text: "To the world you may be one person, but to me you are the world.", author: "— Bill Wilson" },
];

// ====== State ======
let currentQuote = 0;
let heartsInterval = null;
let sparklesCreated = false;
let musicPlaying = false;

// ====== Initialize ======
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initQuoteCarousel();
    initStartButton();
    initYesButton();
    initMusicToggle();
    createSparkles();
    startFloatingHearts();
    startRosePetals();
    initTypewriter();
    initParallax();
    initCursorTrail();
});

// ====== Scroll Reveal Animation ======
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, parseInt(delay));
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    // Love letter text reveal
    const letterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const texts = entry.target.querySelectorAll('.love-text');
                texts.forEach(text => {
                    const delay = parseInt(text.dataset.delay) || 0;
                    setTimeout(() => {
                        text.classList.add('visible');
                    }, delay);
                });
            }
        });
    }, { threshold: 0.2 });

    const letterCard = document.querySelector('.love-letter-card');
    if (letterCard) letterObserver.observe(letterCard);
}

// ====== Quote Carousel ======
function initQuoteCarousel() {
    updateQuote();
    renderDots();

    document.getElementById('prev-quote').addEventListener('click', () => {
        currentQuote = (currentQuote - 1 + loveQuotes.length) % loveQuotes.length;
        updateQuote();
        renderDots();
    });

    document.getElementById('next-quote').addEventListener('click', () => {
        currentQuote = (currentQuote + 1) % loveQuotes.length;
        updateQuote();
        renderDots();
    });

    // Auto-advance every 5 seconds
    setInterval(() => {
        currentQuote = (currentQuote + 1) % loveQuotes.length;
        updateQuote();
        renderDots();
    }, 5000);
}

function updateQuote() {
    const textEl = document.getElementById('quote-text');
    const authorEl = document.getElementById('quote-author');

    textEl.style.opacity = '0';
    textEl.style.transform = 'translateY(20px)';
    authorEl.style.opacity = '0';

    setTimeout(() => {
        textEl.textContent = `"${loveQuotes[currentQuote].text}"`;
        authorEl.textContent = loveQuotes[currentQuote].author;

        textEl.style.transition = 'all 0.5s ease';
        textEl.style.opacity = '1';
        textEl.style.transform = 'translateY(0)';

        authorEl.style.transition = 'all 0.5s ease 0.2s';
        authorEl.style.opacity = '1';
    }, 300);
}

function renderDots() {
    const dotsContainer = document.getElementById('quote-dots');
    dotsContainer.innerHTML = '';
    loveQuotes.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            i === currentQuote
                ? 'bg-rose-hot scale-125 shadow-lg shadow-rose-hot/50'
                : 'bg-white/20 hover:bg-white/40'
        }`;
        dot.addEventListener('click', () => {
            currentQuote = i;
            updateQuote();
            renderDots();
        });
        dotsContainer.appendChild(dot);
    });
}

// ====== Start Button ======
function initStartButton() {
    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', () => {
        // Burst of hearts
        burstHearts(30);

        // Smooth scroll to photos section
        document.getElementById('photos').scrollIntoView({ behavior: 'smooth' });
    });
}

// ====== Yes Button - The Big Moment! ======
function initYesButton() {
    const yesBtn = document.getElementById('yes-btn');

    yesBtn.addEventListener('click', () => {
        // Hide proposal, show celebration
        const celebration = document.getElementById('celebration');
        celebration.classList.remove('hidden');

        // Epic celebration sequence
        celebrationSequence();

        // Scroll to celebration
        setTimeout(() => {
            celebration.scrollIntoView({ behavior: 'smooth' });
        }, 500);
    });
}

function celebrationSequence() {
    // Massive heart burst
    burstHearts(100);

    // Fireworks
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            launchFirework(
                Math.random() * window.innerWidth,
                Math.random() * (window.innerHeight * 0.6)
            );
        }, i * 400);
    }

    // Confetti shower
    launchConfetti(200);

    // Rose petals rain
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            dropRosePetal();
        }, i * 100);
    }

    // Continue celebrations
    setInterval(() => {
        launchFirework(
            Math.random() * window.innerWidth,
            Math.random() * (window.innerHeight * 0.5)
        );
    }, 2000);

    setInterval(() => {
        launchConfetti(20);
    }, 3000);
}

// ====== Floating Hearts ======
function startFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '💘', '💓', '💞', '🌹', '✨'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

        const size = Math.random() * 24 + 12;
        const startX = Math.random() * window.innerWidth;
        const drift = (Math.random() - 0.5) * 200;
        const duration = Math.random() * 6 + 6;

        heart.style.cssText = `
            left: ${startX}px;
            font-size: ${size}px;
            --drift: ${drift}px;
            animation-duration: ${duration}s;
        `;

        container.appendChild(heart);

        setTimeout(() => heart.remove(), duration * 1000);
    }

    // Create hearts periodically
    heartsInterval = setInterval(createHeart, 800);
}

function burstHearts(count) {
    const container = document.getElementById('floating-hearts');
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '💘', '💓', '💞'];

    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

            const size = Math.random() * 30 + 16;
            const startX = Math.random() * window.innerWidth;
            const drift = (Math.random() - 0.5) * 300;
            const duration = Math.random() * 4 + 3;

            heart.style.cssText = `
                left: ${startX}px;
                font-size: ${size}px;
                --drift: ${drift}px;
                animation-duration: ${duration}s;
            `;

            container.appendChild(heart);
            setTimeout(() => heart.remove(), duration * 1000);
        }, i * 50);
    }
}

// ====== Sparkle Particles ======
function createSparkles() {
    const container = document.getElementById('sparkles');

    for (let i = 0; i < 40; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;

        sparkle.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            --duration: ${duration}s;
            animation-delay: ${delay}s;
        `;

        container.appendChild(sparkle);
    }
    sparklesCreated = true;
}

// ====== Fireworks ======
function launchFirework(x, y) {
    const container = document.createElement('div');
    container.className = 'firework';
    container.style.left = x + 'px';
    container.style.top = y + 'px';

    const colors = ['#FF1493', '#FF69B4', '#FF00FF', '#FFD700', '#FF6B6B', '#00FFFF', '#7B68EE', '#FF4500'];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';

        const angle = (360 / particleCount) * i;
        const velocity = Math.random() * 80 + 40;
        const tx = Math.cos(angle * Math.PI / 180) * velocity;
        const ty = Math.sin(angle * Math.PI / 180) * velocity;

        particle.style.cssText = `
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            --tx: ${tx}px;
            --ty: ${ty}px;
            animation-duration: ${Math.random() * 0.5 + 1}s;
        `;

        container.appendChild(particle);
    }

    document.body.appendChild(container);
    setTimeout(() => container.remove(), 2000);
}

// ====== Confetti ======
function launchConfetti(count) {
    const colors = ['#FF1493', '#FF69B4', '#FFD700', '#FF6B6B', '#FF00FF', '#00FFFF', '#7B68EE', '#FF4500', '#ADFF2F'];
    const shapes = ['■', '●', '▲', '★', '♦', '💕', '❤️'];

    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];

            const x = Math.random() * window.innerWidth;
            const drift = (Math.random() - 0.5) * 200;
            const duration = Math.random() * 3 + 2;
            const size = Math.random() * 16 + 8;

            confetti.style.cssText = `
                left: ${x}px;
                font-size: ${size}px;
                color: ${colors[Math.floor(Math.random() * colors.length)]};
                --drift: ${drift}px;
                --fall-duration: ${duration}s;
            `;

            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), duration * 1000);
        }, i * 30);
    }
}

// ====== Rose Petals ======
function startRosePetals() {
    setInterval(() => {
        if (Math.random() > 0.6) {
            dropRosePetal();
        }
    }, 2000);
}

function dropRosePetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.textContent = '🌸';

    const x = Math.random() * window.innerWidth;
    const drift = (Math.random() - 0.5) * 300;
    const duration = Math.random() * 5 + 4;

    petal.style.cssText = `
        left: ${x}px;
        top: -30px;
        --drift: ${drift}px;
        --duration: ${duration}s;
    `;

    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), duration * 1000);
}

// ====== Typewriter Effect for Hero ======
function initTypewriter() {
    // Already handled by CSS animations, but we add subtle effect
    const heroTitle = document.querySelector('#hero h1');
    if (heroTitle) {
        heroTitle.addEventListener('mouseenter', () => {
            heroTitle.style.textShadow = '0 0 20px #FF1493, 0 0 40px #FF69B4, 0 0 60px #FF00FF';
        });
        heroTitle.addEventListener('mouseleave', () => {
            heroTitle.style.textShadow = 'none';
        });
    }
}

// ====== Parallax Effect ======
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('#hero .hero-bg');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// ====== Cursor Love Trail ======
function initCursorTrail() {
    const trailEmojis = ['💕', '✨', '💖', '💗', '❤️'];
    let lastTrailTime = 0;

    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastTrailTime < 100) return;
        lastTrailTime = now;

        const trail = document.createElement('div');
        trail.textContent = trailEmojis[Math.floor(Math.random() * trailEmojis.length)];
        trail.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            pointer-events: none;
            z-index: 9999;
            font-size: ${Math.random() * 12 + 10}px;
            transition: all 1s ease;
            opacity: 1;
        `;

        document.body.appendChild(trail);

        requestAnimationFrame(() => {
            trail.style.opacity = '0';
            trail.style.transform = `translateY(-40px) scale(0)`;
        });

        setTimeout(() => trail.remove(), 1000);
    });
}

// ====== Music Toggle ======
function initMusicToggle() {
    const musicBtn = document.getElementById('music-toggle');

    // Create audio context for a simple love melody
    musicBtn.addEventListener('click', () => {
        if (!musicPlaying) {
            playLoveMelody();
            musicBtn.textContent = '🔊';
            musicPlaying = true;
        } else {
            stopMusic();
            musicBtn.textContent = '🎵';
            musicPlaying = false;
        }
    });
}

let bgAudio = null;

function playLoveMelody() {
    if (!bgAudio) {
        bgAudio = new Audio('tone.mp3');
        bgAudio.loop = true;
    }
    bgAudio.currentTime = 0;
    bgAudio.play();
}

function stopMusic() {
    if (bgAudio) {
        bgAudio.pause();
        bgAudio.currentTime = 0;
    }
}

// ====== Easter Egg: Konami Code unlocks extra celebration ======
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            konamiIndex = 0;
            // Secret celebration
            burstHearts(200);
            launchConfetti(300);
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    launchFirework(
                        Math.random() * window.innerWidth,
                        Math.random() * window.innerHeight * 0.6
                    );
                }, i * 200);
            }
        }
    } else {
        konamiIndex = 0;
    }
});

// ====== Love Counter - Days since a special date ======
function getLoveDays() {
    const specialDate = new Date('2026-02-19'); // Today - the day of the proposal!
    const today = new Date();
    const diff = Math.floor((today - specialDate) / (1000 * 60 * 60 * 24));
    return diff >= 0 ? diff : 0;
}

// ====== Console Love Message ======
console.log('%c💕 Md Abu Jayed Loves Farzana Yeasmin Forever 💕', 
    'font-size: 24px; color: #FF1493; font-weight: bold; text-shadow: 2px 2px 4px rgba(255,20,147,0.3);');
console.log('%cThis website was made with pure love ❤️', 
    'font-size: 14px; color: #FF69B4;');
