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