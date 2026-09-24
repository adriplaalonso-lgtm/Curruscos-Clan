document.addEventListener("DOMContentLoaded", () => {
    loadStats();
    loadMembers();
    loadMemories();
    loadQuote();
    setupMobileMenu();
});


function loadStats() {
    const members = document.getElementById("membersCount");
    const memories = document.getElementById("memoriesCount");
    const events = document.getElementById("eventsCount");
    const quotes = document.getElementById("quotesCount");

    if (members) {
        members.textContent = CURRUSCOS_DATA.members.length;
    }

    if (memories) {
        memories.textContent = CURRUSCOS_DATA.memories.length;
    }

    if (events) {
        events.textContent = CURRUSCOS_DATA.events.length;
    }

    if (quotes) {
        quotes.textContent = CURRUSCOS_DATA.quotes.length;
    }
}
function loadMembers() {
    const previewContainer = document.getElementById("membersPreview");
    const gridContainer = document.getElementById("membersGrid");

    // Página principal: mostrar solo 4
    if (previewContainer) {
        const members = CURRUSCOS_DATA.members.slice(0, 4);

        previewContainer.innerHTML = members.map(member => `
            <article class="member-card">

                <div class="member-image">
                    <img
                        src="${member.image}"
                        alt="${member.name}"
                        loading="lazy"
                        onerror="this.style.display='none'"
                    >
                </div>

                <div class="member-info">
                    <span>${member.role}</span>
                    <h3>${member.name}</h3>
                    <p>@${member.username}</p>
                </div>

            </article>
        `).join("");
    }

    // Página de miembros: mostrar todos
    if (gridContainer) {
        gridContainer.innerHTML = CURRUSCOS_DATA.members.map(member => `
            <article class="member-card">

                <div class="member-image">
                    <img
                        src="${member.image}"
                        alt="${member.name}"
                        loading="lazy"
                        onerror="this.style.display='none'"
                    >
                </div>

                <div class="member-info">
                    <span>${member.role}</span>
                    <h3>${member.name}</h3>
                    <p>@${member.username}</p>
                </div>

            </article>
        `).join("");
    }
}

function loadMemories() {
    const container = document.getElementById("latestMemories");

    if (!container) return;

    const memories = CURRUSCOS_DATA.memories.slice(0, 3);

    container.innerHTML = memories.map(memory => `
        <article class="memory-card">

            <div class="memory-image">
                <img
                    src="${memory.image}"
                    alt="${memory.title}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >
            </div>

            <div class="memory-content">
                <span>${formatDate(memory.date)}</span>
                <h3>${memory.title}</h3>
                <p>${memory.description}</p>
            </div>

        </article>
    `).join("");
}


function loadQuote() {
    const quote = document.getElementById("featuredQuote");
    const author = document.getElementById("featuredQuoteAuthor");

    if (!quote || !author) return;

    const randomQuote =
        CURRUSCOS_DATA.quotes[
            Math.floor(Math.random() * CURRUSCOS_DATA.quotes.length)
        ];

    quote.textContent = `"${randomQuote.text}"`;
    author.textContent = `— ${randomQuote.author}`;
}


function formatDate(dateString) {
    const date = new Date(dateString);

    return date.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}


function setupMobileMenu() {
    const button = document.getElementById("menuButton");
    const nav = document.getElementById("mainNav");

    if (!button || !nav) return;

    button.addEventListener("click", () => {
        nav.classList.toggle("mobile-open");
    });
}
