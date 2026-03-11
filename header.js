// Generate and inject the website header
(function () {
  const headerHTML = `
        <header>
            <div class="logo-container">
                <a href="/" class="menu-item"><img src="/logo.svg" alt="AeroNib Logo" class="logo" /></a>
            </div>
            <nav class="menu-bar">
                <a href="/walkabout" class="menu-item">Walkabout</a>
                <span class="menu-separator">|</span>
                <a href="/travel" class="menu-item">Travel</a>
                <span class="menu-separator">|</span>
                <a href="/nature" class="menu-item">Nature</a>
                <span class="menu-separator">|</span>
                <a href="/fandom" class="menu-item">Conventions & Furry</a>
                <span class="menu-separator">|</span>
                <a href="https://www.aeronib.com" class="menu-item mark">My Other Work</a>
            </nav>
        </header>
    `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
})();
