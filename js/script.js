function locomotiveScroll() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locomotiveScroll();


function customCursor() {
    var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
    })
})

page1Content.addEventListener('mouseenter', function() {
    gsap.to(cursor, {
        scale: 1,
        opacity: 1
    })
})
page1Content.addEventListener('mouseleave', function() {
    gsap.to(cursor, {
        scale:0,
        opacity: 0
    })
})

}

customCursor();

function page2Animation() {
    gsap.from(".elem h1, #page2-top h3, #page2-top h4", {
        y:100,
        stagger: 0.2,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    })
}

page2Animation();

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true
        }
      });
}
swiperAnimation();

// loader
var tl = gsap.timeline();

tl.from("#loader h3", {
    x:40,
    opacity: 0,
    duration:1,
    stagger: 0.1
})

tl.to("#loader h3", {
    opacity:0,
    x: -40,
    duration: 1,
    stagger: 0.1
})

tl.to("#loader", {
    opacity: 0
})

tl.to("#loader", {
    display: "none"
})
tl.from("#page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5
})

function page3Animation() {
 gsap.from('#page3-top h2', {
    y: 100,
    stagger: 0.2,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 47%",
        end: "top 46%",
        scrub: 2
    }
 })
}

page3Animation();


function footerAnimation() {
    gsap.from("#footer-bottom h1 span", {
        y:-100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    })

    gsap.from("#left-content h3, #left-content button", {
        y: -100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    })

    gsap.from("#right-content .nav-links, #right-content .social-links", {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    })
}

footerAnimation();
