const showCookieConsent = () => {
    if (localStorage.getItem("cookiesAccepted") === null) {
        const cookieConsentBanner = document.createElement('div');
        cookieConsentBanner.id = 'cookie-consent';
        cookieConsentBanner.innerHTML = `
        <img src="img/cookie.png" alt="cookie-banner" style="height:100px;">
        <p>We use cookies to improve your user experience.</p>
        <button id="accept-cookies">I like Cookies</button>`;
        document.body.appendChild(cookieConsentBanner);

        cookieConsentBanner.querySelector('#accept-cookies').addEventListener("click", (event) => {
        localStorage.setItem("cookiesAccepted", "true");
        cookieConsentBanner.remove();
    })
    }
}

document.addEventListener("DOMContentLoaded", showCookieConsent);