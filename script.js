var tl = gsap.timeline()

tl.from("#nav h1,#nav h4,#nav i,#nav h5",{
    delay:0.5,
    y:-30,
    stagger:0.1,
    opacity:0
})
.from("#center>h1",{
    opacity:0,
    y:40,
    scale:1.2,
    duration:0.6
})
.from("#center>p",{
    opacity:0,
    y:20,
    duration:0.3
})
.from("#page1 img",{
    scale:0.7,
    opacity:0,
    duration:0.8
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        // markers:true,
        start:"top 80%"
    }
})
tl2.from("#page2 h2",{
    y:30,
    opacity:0,
})
tl2.from("#page2 p",{
    y:30,
    opacity:0,
})
gsap.from(".elem",{
    opacity:0,
    y:100,
    scale:0.9,
    scrollTrigger:{
        trigger:".elem",
        scroller:"body",
        // markers:true,
        start:"top 70%"
    }
})