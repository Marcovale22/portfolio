window.addEventListener("load", () => {

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