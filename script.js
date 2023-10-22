

var tl = gsap.timeline()


tl.from(".nav img,h3,h4,button,i", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.1,

})

tl.from(".main h1", {
    y: 120,
    opacity: 0,
    stagger: 0.2,
})

tl.from(".main #left-img, #right-img", {

    opacity: 0,
    scale: 0,
    stagger: 0.3,
})

tl.from(" .main h5",{
    scale:0,
    opacity:0,
})

tl.to(" .main h5",{
    y:30,
    repeat:-1,
    duration:0.7,
    yoyo: true,
})