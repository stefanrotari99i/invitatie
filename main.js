const invitText = document.querySelector('.invitatie-text-final');
const borderTop = document.querySelector('.border-top');
const borderBottom = document.querySelector('.border-bottom');
const borderLeft = document.querySelector('.border-left');
const borderRight = document.querySelector('.border-right');
const dateMonth = document.querySelector('.date-month');
const dateDay = document.querySelector('.date-day');
const dateYear = document.querySelector('.date-year');
const text = document.querySelector('.invitatie-text');
const img1 = document.querySelector('.invitatie-img');
const img2 = document.querySelector('.invitatie-img2');


const tl = new TimelineMax();
const tlBorderBlock = new TimelineMax();
const tlBorderInline = new TimelineMax();




tl.fromTo(dateDay, 1.2, {opacity: 0, y: 30, scale: 0}, {opacity: 1, y: 0, scale: 1, ease: Power2.expo})
tl.fromTo(dateMonth, 1, {opacity: 0, x: -30,}, {opacity: 1, x: 0})
tl.fromTo(dateYear, 1, {opacity: 0, x: 30}, {opacity: 1, x: 0})
tl.fromTo(text, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0})
tl.fromTo(invitText, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0})

gsap.fromTo(borderTop, 1, {width: 0}, {width: '100%', ease: Power2.easeInOut})
gsap.fromTo(borderBottom, 1, {width: 0}, {width: '100%', ease: Power2.easeInOut})
gsap.fromTo(borderLeft, 1, {height: 0}, {height: '100%', ease: Power2.easeInOut})
gsap.fromTo(borderRight, 1, {height: 0}, {height: '100%', ease: Power2.easeInOut})
