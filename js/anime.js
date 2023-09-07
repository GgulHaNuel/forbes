gsap.registerPlugin(ScrollTrigger);

const select = (el) => document.querySelector(el);
const selectAll = (el) => document.querySelectorAll(el);
//CONTENTS
const SCINFO = select('.sc_info');
const SCHONOR = select('.sc_honorees');
const HONORLIST = select('.honor_listbox');
const SCABOUT = select('.sc_about');
//ANI
const AniYTop = selectAll('.aniYTop');
const AniYTop_2 = selectAll('.aniYTop_2');
const AniYBot = selectAll('.aniYBot');
const AniYTopD = selectAll('.aniYTopD');
const AniYTopD_2 = selectAll('.aniYTopD_2');
const AniYTopD_3 = selectAll('.aniYTopD_3');
const AniXLt = selectAll('.aniXLt');
const AniXGt = selectAll('.aniXGt');
const AniXLtD = selectAll('.aniXLtD');
const AniXLtD_2 = selectAll('.aniXLtD_2');
const AniRot = selectAll('.aniRot');

AniYTopD.forEach((content, index) => {
    gsap.from(content, {
        opacity: 0,
        y: 100,
        ease: 'power3.out',
        duration: 2,
        stagger: 0.2,
        delay: index * 0.5,
        scrollTrigger: {
            trigger: content,
            start: 'top 100%',
            end: 'bottom 20%',
            markers: false,
            toggleActions: 'play none none none',
            scrub: false,
        },
    });
});

AniYTopD_2.forEach((content, index) => {
    gsap.from(content, {
        opacity: 0,
        y: 100,
        ease: 'power3.out',
        duration: 2,
        stagger: 0.2,
        delay: index * 0.3,
        scrollTrigger: {
            trigger: content,
            start: 'top 100%',
            end: 'bottom 20%',
            markers: false,
            toggleActions: 'play none none none',
            scrub: false,
        },
    });
});

AniYTop.forEach((content) => {
    gsap.from(content, {
        opacity: 0,
        y: 100,
        ease: 'power3.out',
        duration: 2,
        scrollTrigger: {
            trigger: content,
            start: 'top 100%',
            end: 'bottom 20%',
            markers: false,
            toggleActions: 'play none none none',
            scrub: false,
        },
    });
});

AniXLt.forEach((content) => {
    gsap.from(content, {
        opacity: 0,
        x: -100,
        ease: 'power3.out',
        duration: 2,
        scrollTrigger: {
            trigger: content,
            start: 'top 100%',
            end: 'bottom 20%',
            markers: false,
            toggleActions: 'play none none none',
            scrub: false,
        },
    });
});

AniRot.forEach((content) => {
    gsap.from(content, {
        opacity: 1,
        rotation: 320,
        ease: 'power3.out',
        duration: 2,
        scrollTrigger: {
            trigger: SCABOUT,
            start: 'top 80%',
            end: 'bottom 20%',
            markers: false,
            toggleActions: 'play none none none',
            scrub: true,
        },
    });
});

