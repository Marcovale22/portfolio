function changeLanguage(lang) {
    document.querySelectorAll("[data-en]").forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
}

window.addEventListener("load", () => {

    const switchBtn = document.getElementById("langSwitch");

    if (switchBtn) {

        const savedLang = localStorage.getItem("language") || "en";

        switchBtn.checked = savedLang === "en";
        changeLanguage(savedLang);

        switchBtn.addEventListener("change", () => {

            const lang = switchBtn.checked ? "en" : "it";

            changeLanguage(lang);
            localStorage.setItem("language", lang);

        });
    }

    tsParticles.load("tsparticles", {
        particles: {
            number: {
                value: 200
            },
            color: {
                value: "#ffffff"
            },
            size: {
                value: 3
            },
            move: {
                enable: true,
                speed: 1
            },
            links: {
                enable: true,
                color: "#ffffff",
                distance: 100
            }
        }
    });

});