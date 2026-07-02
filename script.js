/* ==========================================================================
   MINIMALIST SYSTEMS ENGINE // SHIVANSH MAKWANA PORTFOLIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // TECHNICAL DATA SYSTEM
    // ==========================================
    const skillsData = {
        frontend: [
            { name: "Semantics & HTML5", level: 95, desc: "Building semantic, SEO-optimized structures for client accessibility and structural indexing." },
            { name: "Dynamic CSS / Layouts", level: 90, desc: "Creating responsive design systems, layout constraints, modern flex/grid models, and fluid transitions." },
            { name: "JavaScript Core (ES6+)", level: 88, desc: "Asynchronous task structures, promises, event loop delegation, and browser DOM pipeline controls." },
            { name: "React.js Framework", level: 82, desc: "Engineering modular component state controls, custom hooks, context stores, and virtual DOM architectures." },
            { name: "Tailwind CSS Node", level: 78, desc: "Sleek utility-first style assembly, custom configurations, and optimized design tokens compilation." },
            { name: "REST API Integration", level: 85, desc: "Establishing secure HTTP requests, parsing data payloads, custom promises structures, and fetch cycles." }
        ],
        backend: [
            { name: "NodeJS Server Runtime", level: 65, desc: "Configuring server runtime environments, asynchronous task loops, and event-driven architecture." },
            { name: "ExpressJS Framework", level: 60, desc: "Developing RESTful API endpoints, MVC route architectures, custom validations, and middleware pipelines." },
            { name: "MongoDB Core Database", level: 50, desc: "Designing NoSQL document schemas, database collections query filters, and collections indexes." },
            { name: "SQL Relational Matrices", level: 55, desc: "Defining schema relationships, structured query language commands, and database normalization rules." },
            { name: "Secure JWT Authentication", level: 45, desc: "Implementing JSON Web Token authentications, secure sign-in states, and route guard middleware." },
            { name: "API Synthesis", level: 85, desc: "Integrating third-party APIs (e.g. Visual Crossing weather services) and processing remote data feeds." }
        ],
        ai: [
            { name: "Cloud Deployments & Hosting", level: 80, desc: "Configuring production builds and CI/CD pipelines across Vercel, Netlify, Render, and cloud hosting." },
            { name: "Git & GitHub Orchestration", level: 85, desc: "Managing collaborative code repositories, pull requests, structured branching workflows, and version conflicts." },
            { name: "OpenAI GPT-4", level: 90, desc: "Designing system completion prompt maps, parsing chat payloads, and automating backend helper scripts." },
            { name: "Google Gemini Core API", level: 88, desc: "Integrating Gemini language models, custom AI automation agents, and semantic text analysis tasks." },
            { name: "Tools & Scripting", level: 85, desc: "Developing automated pipelines, terminal workflows execution, and digital conceptual design assets." },
            { name: "Visual Crossing weather node", level: 80, desc: "External meteorological API configurations, metrics mapping, and live data telemetry charts." }
        ],
        cs: [
            { name: "Data Structures & GFG", level: 70, desc: "Applying optimal search, sorting, arrays, trees, lists, and time complexity bounds." },
            { name: "C / C++ Infrastructure", level: 75, desc: "Structuring basic system scripts, dynamic allocations, and memory resource optimization logic." },
            { name: "Python Automation", level: 65, desc: "Writing utility scripts, files data parsers, and command line tools architectures." },
            { name: "Operating Systems", level: 70, desc: "Understanding memory resource management, process scheduling threads, and virtual systems." },
            { name: "Networking Matrices", level: 70, desc: "Client-server handshake protocols, TCP/IP layouts, CORS configurations, and web sockets." }
        ]
    };

    const projectsData = [
        {
            id: "portfolio-generator",
            title: "PORTFOLIO GENERATOR CORE",
            tag: "Featured System",
            desc: "A digital portfolio generator enabling builders to dynamically build custom layout templates according to their inputs.",
            stack: ["HTML", "CSS", "Vanilla JS", "Themes Engine"],
            github: "https://github.com/shivanshmakwana913-droid/Portfolio-Generator"
        },
        {
            id: "my-portfolio",
            title: "MY PORTFOLIO GATEWAY v1",
            tag: "Personal Site",
            desc: "The predecessor core: a sleek web portfolio detailing project schematics, skill catalogs, and direct contact uplinks.",
            stack: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/shivanshmakwana913-droid/My-Portfolio"
        },
        {
            id: "tic-tac-toe",
            title: "TIC-TAC-TOE NEON SYSTEM",
            tag: "Interactive Game",
            desc: "A neat Tic-Tac-Toe browser game designed with customized neon layout properties and responsive logic engines.",
            stack: ["HTML5", "CSS Glow-Warp", "JavaScript Logic"],
            github: "https://github.com/shivanshmakwana913-droid/tic-tac-toe-neon"
        },
        {
            id: "expense-tracker",
            title: "EXPENSE TRACKER TELEMETRY",
            tag: "Data Tracker App",
            desc: "A transaction log system displaying real-time balance calculations while locking data safely inside LocalStorage.",
            stack: ["HTML5", "CSS", "JS", "LocalStorage API"],
            github: "https://github.com/shivanshmakwana913-droid/expense-tracker"
        },
        {
            id: "prime-architect",
            title: "PRIME ARCHITECT WEBSITE",
            tag: "Client Production",
            desc: "A clean architectural portfolio page designed for an architectural design firm. Heavy utilization of grid models.",
            stack: ["HTML", "CSS Grid", "Responsive Design"],
            github: "https://github.com/shivanshmakwana913-droid/prime-architect-website"
        },
        {
            id: "art-delivery",
            title: "ART DELIVERY ARCHITECTURE",
            tag: "Transaction Engine",
            desc: "A design concept pipeline built to connect digital graphic artists with print art collectors.",
            stack: ["HTML Core", "CSS Cards", "Modular JS Flow"],
            github: "https://github.com/shivanshmakwana913-droid/art_delivery"
        }
    ];

    const journeyTimeline = [
        { title: "FRONTEND DEPLOYMENT CORE", badge: "Completed", desc: "Crafting fully-responsive front-ends using clean design layouts, semantic structures, and advanced page loading optimizations.", tags: ["HTML5", "CSS3 Grid", "Vanilla JS"] },
        { title: "MERN STACK ARCHITECTURE", badge: "Active Learning", desc: "Forging dynamic MERN applications combining React hook states with backend Express.js servers, custom database models setup, and MongoDB data loops.", tags: ["React JS", "Node.js", "Express.js", "MongoDB"] },
        { title: "GIT COLLABORATION / GITHUB", badge: "Active Practice", desc: "Establishing strict version control habits. Performing repository merges, managing branches, opening pull requests, and standardizing team documentation.", tags: ["Git CLI", "GitHub Repos", "Merge Workflows"] },
        { title: "CLOUD DEPLOYMENT PATHWAY", badge: "Active Sync", desc: "Hosting production-ready deployments on Vercel, Netlify, and Render, configuring custom environment configurations, and checking analytics metrics.", tags: ["Vercel Hosting", "Render Serves", "Netlify Builds"] },
        { title: "INTELLIGENT AI SYSTEM PIPELINES", badge: "Future Spec", desc: "Connecting advanced LLM capabilities directly inside development workflows (e.g. OpenAI GPT-4, Google Gemini APIs, auto-generation scripts).", tags: ["AI integrations", "Gemini API", "APIs Automation"] },
        { title: "COGNITIVE INTELLIGENT AGENT SYNCHRONIZER", badge: "Future Spec", desc: "Integrating advanced LLM routing logic directly into application loops. Shaping functional AI agents, vector databases, and real-time recommendations engines.", tags: ["AI APIs", "Vector Database", "Intelligent Automation Core"] }
    ];

    // ==========================================
    // SLEEK LAG CURSOR FOLLOW OBJECT
    // ==========================================
    const sCursor = document.getElementById('s-cursor');
    const sFollower = document.getElementById('s-follower');
    let mX = 0, mY = 0, fX = 0, fY = 0;

    document.addEventListener('mousemove', (e) => {
        mX = e.clientX;
        mY = e.clientY;
        sCursor.style.left = `${mX}px`;
        sCursor.style.top = `${mY}px`;
    });

    function renderFollower() {
        fX += (mX - fX) * 0.12;
        fY += (mY - fY) * 0.12;
        sFollower.style.left = `${fX}px`;
        sFollower.style.top = `${fY}px`;
        requestAnimationFrame(renderFollower);
    }
    renderFollower();

    // Scale cursor on hover
    document.querySelectorAll('a, button, .bento-item, .arsenal-tab, .project-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            sFollower.classList.add('hovering');
            sCursor.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            sFollower.classList.remove('hovering');
            sCursor.classList.remove('hovering');
        });
    });

    // ==========================================
    // FLOATING GRADIENT AMBIENT EFFECT
    // ==========================================
    const ambient = document.getElementById('ambient-glow');
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        // Quietly move ambient background glowing elements
        ambient.style.setProperty('--x', `${x}%`);
        ambient.style.setProperty('--y', `${y}%`);
    });

    // ==========================================
    // TECHNICAL ARSENAL: CARD LOGIC
    // ==========================================
    const arsenalGrid = document.getElementById('arsenal-grid');
    const arsenalTabs = document.querySelectorAll('.arsenal-tab');

    function renderArsenal(groupId) {
        if (!arsenalGrid) return;
        arsenalGrid.innerHTML = '';
        const data = skillsData[groupId];

        data.forEach((skill, idx) => {
            const card = document.createElement('div');
            card.className = 'arsenal-card';
            card.innerHTML = `
                <div class="arsenal-card-head">
                    <span class="a-title font-main">${skill.name}</span>
                    <span class="a-level mono">${skill.level}%</span>
                </div>
                <div class="a-bar">
                    <div class="a-bar-fill" style="width: 0%"></div>
                </div>
                <p class="a-desc font-main">${skill.desc}</p>
            `;
            arsenalGrid.appendChild(card);

            setTimeout(() => {
                const fill = card.querySelector('.a-bar-fill');
                if (fill) fill.style.width = `${skill.level}%`;
            }, idx * 40 + 50);
        });
    }

    renderArsenal('frontend');

    arsenalTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            arsenalTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderArsenal(tab.dataset.tab);
        });
    });

    // ==========================================
    // DYNAMIC PROJECT ARRAYS GENERATOR
    // ==========================================
    const projectsGrid = document.getElementById('projects-grid');

    function populateProjects() {
        if (!projectsGrid) return;
        projectsGrid.innerHTML = '';

        projectsData.forEach(proj => {
            const card = document.createElement('a');
            card.href = proj.github;
            card.target = "_blank";
            card.rel = "noopener";
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-card-header">
                    <span class="p-card-tag mono">${proj.tag}</span>
                    <svg class="p-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </div>
                <h3 class="project-card-title font-main">${proj.title}</h3>
                <p class="project-card-desc font-main">${proj.desc}</p>
                <div class="project-card-stack">
                    ${proj.stack.map(s => `<span class="p-tag mono">${s}</span>`).join('')}
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    }
    populateProjects();

    // ==========================================
    // DYNAMIC TIMELINE PROGRESSION VECTOR
    // ==========================================
    const timelineWrapper = document.getElementById('timeline-wrapper');

    function populateTimeline() {
        if (!timelineWrapper) return;
        timelineWrapper.innerHTML = '';

        journeyTimeline.forEach((point) => {
            const node = document.createElement('div');
            node.className = 'timeline-node';
            node.innerHTML = `
                <div class="node-marker"></div>
                <div class="node-content">
                    <div class="node-badge-wrap">
                        <span class="node-badge mono">${point.badge}</span>
                    </div>
                    <h3 class="node-title font-main">${point.title}</h3>
                    <p class="node-desc font-main">${point.desc}</p>
                    <div class="node-tags">
                        ${point.tags.map(t => `<span class="node-tag-item mono">${t}</span>`).join('')}
                    </div>
                </div>
            `;
            timelineWrapper.appendChild(node);

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        node.classList.add('focused');
                    }
                });
            }, { threshold: 0.25 });

            observer.observe(node);
        });
    }
    populateTimeline();

    // ==========================================
    // NAVIGATION BAR MATRIX TRANSITIONS
    // ==========================================
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const menuToggle = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    document.querySelectorAll('.nav-menu-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    // ==========================================
    // LIGHT THEME SWITCH DETECTOR
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');

    themeToggle.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-theme');
        if (isLight) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    });

    // ==========================================
    // REAL-TIME 3D PARALLAX RUNNER
    // ==========================================
    const avatarWrapper = document.querySelector('.mouse-parallax');
    if (avatarWrapper) {
        document.addEventListener('mousemove', (e) => {
            const ax = (window.innerWidth / 2 - e.clientX) * 0.05;
            const ay = (window.innerHeight / 2 - e.clientY) * 0.05;
            avatarWrapper.style.transform = `rotateY(${-ax}deg) rotateX(${ay}deg)`;
        });
    }

    // ==========================================
    // TRANSCEIVER FORM SUBMIT PAYLOADS
    // ==========================================
    window.handleFormSubmit = function (e) {
        e.preventDefault();
        const submitBtn = document.getElementById('btn-send');
        const successLog = document.getElementById('form-success');

        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = "Dispatching metrics...";

        setTimeout(() => {
            submitBtn.querySelector('span').textContent = "Message Dispatched";
            successLog.style.display = 'block';

            e.target.reset();
            setTimeout(() => {
                submitBtn.querySelector('span').textContent = "Send message";
                submitBtn.disabled = false;
                successLog.style.display = 'none';
            }, 6000);
        }, 1200);
    };

}); // end DOMContentLoaded
