/* ============================================
   SHIVANSH MAKWANA PORTFOLIO — JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ========== LOADER ==========
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hide');
        document.body.style.overflow = '';
        startTyping();
    }, 1800);
    document.body.style.overflow = 'hidden';


    // ========== CUSTOM CURSOR ==========
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    let cx = 0, cy = 0, fx = 0, fy = 0;

    document.addEventListener('mousemove', e => {
        cx = e.clientX; cy = e.clientY;
        cursor.style.left = cx + 'px';
        cursor.style.top = cy + 'px';
    });

    function animateCursor() {
        fx += (cx - fx) * 0.12;
        fy += (cy - fy) * 0.12;
        follower.style.left = fx + 'px';
        follower.style.top = fy + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll('a, button, .project-card, .skill-card, .tab-btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            cursor.style.background = 'rgba(79, 140, 255, 0.5)';
            follower.style.width = '50px';
            follower.style.height = '50px';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'var(--accent)';
            follower.style.width = '30px';
            follower.style.height = '30px';
        });
    });


    // ========== TYPING EFFECT ==========
    const phrases = [
        'Write Code.',
        'Solve Problems.',
        'Ship Products.',
        'Learn Fast.',
        'Build the Future.',
    ];
    let phraseIdx = 0, charIdx = 0, isDeleting = false;
    const typedEl = document.getElementById('typed-text');

    function startTyping() {
        if (!typedEl) return;
        typeLoop();
    }

    function typeLoop() {
        const current = phrases[phraseIdx];
        if (isDeleting) {
            typedEl.textContent = current.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typedEl.textContent = current.substring(0, charIdx + 1);
            charIdx++;
        }

        let delay = isDeleting ? 60 : 110;

        if (!isDeleting && charIdx === current.length) {
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            delay = 400;
        }

        setTimeout(typeLoop, delay);
    }


    // ========== NAVBAR SCROLL ==========
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = scrollY;
    });


    // ========== HAMBURGER MENU ==========
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });


    // ========== SCROLL REVEAL ==========
    const observerOpts = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // animate skill bars when visible
                if (entry.target.classList.contains('skills-grid')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOpts);

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
        revealObserver.observe(el);
    });


    // ========== PARTICLES ==========
    const particlesContainer = document.getElementById('particles');
    function createParticle() {
        if (!particlesContainer) return;
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 3 + 1;
        const colors = ['var(--accent)', 'var(--accent-cyan)', 'var(--accent-alt)', 'var(--accent-pink)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      bottom: ${Math.random() * 30}%;
      background: ${color};
      animation-duration: ${6 + Math.random() * 8}s;
      animation-delay: ${Math.random() * 4}s;
    `;
        particlesContainer.appendChild(p);
        setTimeout(() => p.remove(), 14000);
    }

    // Create particles periodically
    setInterval(createParticle, 600);
    for (let i = 0; i < 15; i++) {
        setTimeout(createParticle, i * 200);
    }


    // ========== SKILL TABS ==========
    const tabBtns = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.skills-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const activePanel = document.getElementById(`panel-${target}`);
            if (activePanel) {
                activePanel.classList.add('active');
                setTimeout(animateSkillBars, 100);
            }
        });
    });


    // ========== SKILL BAR ANIMATION ==========
    function animateSkillBars() {
        document.querySelectorAll('.skills-panel.active .skill-fill').forEach(fill => {
            const target = fill.style.getPropertyValue('--fill');
            fill.style.setProperty('--fill', '0%');
            setTimeout(() => {
                fill.style.setProperty('--fill', target);
            }, 50);
        });
    }


    // ========== PROJECT CARD GLOW ==========
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mx', x + '%');
            card.style.setProperty('--my', y + '%');
        });
    });


    // ========== SMOOTH ACTIVE NAV LINK ==========
    const sections = document.querySelectorAll('section[id]');
    const navLinkEls = document.querySelectorAll('.nav-link');

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinkEls.forEach(link => {
                    link.style.color = '';
                    if (link.getAttribute('href') === '#' + entry.target.id) {
                        link.style.color = 'var(--accent)';
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(s => sectionObserver.observe(s));


    // ========== CONTACT FORM ==========
    window.handleFormSubmit = function (e) {
        e.preventDefault();
        const btn = document.getElementById('btn-send');
        const success = document.getElementById('form-success');
        btn.querySelector('span').textContent = 'Sending... ⚡';
        btn.disabled = true;

        setTimeout(() => {
            btn.querySelector('span').textContent = 'Sent! ✅';
            success.style.display = 'block';
            e.target.reset();
            setTimeout(() => {
                btn.querySelector('span').textContent = 'Send It 🚀';
                btn.disabled = false;
                success.style.display = 'none';
            }, 5000);
        }, 1500);
    };


    // ========== INITIAL SKILL BAR ANIMATION ==========
    setTimeout(animateSkillBars, 2000);

}); // end DOMContentLoaded
