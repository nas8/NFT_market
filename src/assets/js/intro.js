const intro = document.querySelector('.intro')
let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};


//action when website is opening on mobile devices
if(isMobile.any()) {
    document.body.classList.add('_touch');
    window.addEventListener('resize', () => {
        intro.style.height = `${document.documentElement.clientHeight}px`;
    });
    intro.style.height = `${document.documentElement.clientHeight}px`;
} else {
    document.body.classList.add('_pc');
};