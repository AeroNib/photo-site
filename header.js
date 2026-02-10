// Generate and inject the shared header
(function () {
  // Determine the base path based on the script's location
  const scripts = document.getElementsByTagName("script");
  const currentScript = scripts[scripts.length - 1];
  const scriptSrc = currentScript.getAttribute("src");

  // If script is in a subdirectory (src contains '../'), we're in a subdirectory
  const basePath = scriptSrc && scriptSrc.startsWith("../") ? "../" : "";

  // Generate the header HTML directly
  const headerHTML = `
        <header>
            <div class="logo-container">
                <a href="${basePath}" class="menu-item"><img src="${basePath}logo.svg" alt="AeroNib Logo" class="logo" /></a>
            </div>
            <nav class="menu-bar">
                <a href="${basePath}walkabout" class="menu-item">Walkabout</a>
                <span class="menu-separator">|</span>
                <a href="${basePath}travel" class="menu-item">Travel</a>
                <span class="menu-separator">|</span>
                <a href="${basePath}nature" class="menu-item">Nature</a>
                <span class="menu-separator">|</span>
                <a href="${basePath}fandom" class="menu-item">Conventions & Furry</a>
                <span class="menu-separator">|</span>
                <a href="https://www.aeronib.com" class="menu-item mark">My Other Work</a>
            </nav>
        </header>
    `;

  // Insert the header at the beginning of the body
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
})();
