class MyHeaderSmall extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class = "header-small" id= "headre-small-sticky">
                <div class="small-header-box">
                    <div class="logo-div">
                    
                    </div>
                    <div class="svg-btn" >
                        <svg viewBox="0 0 100 80" width="40" height="40" id ="svg-btn">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </div>
                </div>
            <div class="header-bar ">
                <div class="headre-left-colum">
                    <a href="index.html"> <img src="./images/logo copy.png" id="logo-header-small"></a>
                    <a href="./about.html" >About C.B.T</a><br>
                    <a href="./tests.html" >Test</a><br>
                    <a href="./games.html" />Games</a><br>
                    <a href="./aboutme.html" >About Me</a><br>
                </div>
            </div>
            </header>
       
        `
        }
    }


customElements.define(`my-header-small`, MyHeaderSmall);

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class = "header ">
               
                <div class="logo-div">
                <a href="index.html"> <img src="./images/logo copy.png" id="logo-small"></a>
            </div>
            <div class="header-bar ">
                <div class="headre-left">
                    <a href="./about.html" >About C.B.T</a>
                    <a href="./tests.html" >Test</a>
                    <a href="./games.html" />Games</a>
                </div>
                <div class="header-right">
                    <a href="./aboutme.html" >About Me</a>
                </div>
            </div>
            </header>
       
        `
        }
    }


customElements.define(`my-header`, MyHeader);




const currentDate = new Date();
const currentYear = currentDate.getFullYear();

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer">
                    <div class="features-container">
                        <div class="features">
                            <p>Features</p>
                            <a href="./about.html">About C.B.T</a>
                            <a href="./tests.html">Tests</a>
                            <a href="./games.html">Games</a>
                            <a href="./aboutme.html">About Me</a>
                        </div>
                        <div class="tests">
                            <p>Tests</p>
                            <a href="./test1.html" > Your Mental <br>Health test</a>
                            <a href="./test2.html">Emotional <br> StabilityTest </a>
                        </div>
                        <div class="games-footer">
                            <p>Games</p>
                            <a href="./river.html">River of <br>Thoughts</a>
                            <a href="./emotions.html">What's that<br> Emotion</a>
                            <a href="./wheel.html">Wheel of <br>Solutions</a>
                            <a href="calm.html">Calm Game</a>
                            <a href="rate.html">Let's Rate</a>
                        </div>
                    </div>
                    <div class="social-container">
                            <div class="facebook">
                                <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
                                <dotlottie-player src="https://lottie.host/777896c4-c562-4671-b26a-35719d31d7fb/HER4F9EBZm.json" background="transparent" speed="1" 
                                style="width: 70px; height: 70px;" playMode="normal" loop hover></dotlottie-player>
                            </div>
                            <div class="instegram">
                                <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
                                <dotlottie-player src="https://lottie.host/45b8c53b-854a-42f5-a08a-81f12d80c4ad/Cd556PSPHE.json" background="transparent" 
                                speed="1" style="width: 70px; height: 70px;"  playMode="normal" loop hover></dotlottie-player>
                            </div>
                                <div class="tiktok">
                                    <a href="#"><script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

                                    <dotlottie-player src="https://lottie.host/11136408-053f-4622-93d8-bb068f47502e/mKiGqXHh2Y.json" background="transparent" speed="1" 
                                    style="width: 70px; height: 70px;"playMode="normal" loop hover></dotlottie-player></a>
                            </div>

                        
                        </div>
                </div>
                    <div class="year"><p> All rights reserved ${currentYear}</p></div>
            </footer>
            `
            }
        }





customElements.define(`my-footer`, MyFooter);

class MyBackBtn extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`<div class="back-btn-div"><a class="back-btn" href="./index.html"><span>Back</span></a></div>` }};

customElements.define(`my-back-btn`, MyBackBtn);        



class MyBackPlayBtn extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`<div class="back-btn-div"><a class="back-btn" href="./games.html"><span>Play Menu</span></a></div>` }};

customElements.define(`my-back-play-btn`, MyBackPlayBtn);   


class MyBackTestBtn extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`<div class="back-btn-div"><a class="back-btn" href="./tests.html"><span>Test Menu</span></a></div>` }};

customElements.define(`my-back-test-btn`, MyBackTestBtn );  



// scroll and small logo shows indexedDB.html
const currntPathname = window.location.pathname;
const currntPathnameWithDot = `.` + currntPathname 
console.log(currntPathnameWithDot);

////where am i in the header
const currentPageA = document.querySelectorAll(`header [href = "${currntPathnameWithDot}"]`)
console.log(currentPageA)
currentPageA.forEach(a => {
    if(a) {
        a.classList.add("you-are-here");
    }

})




// id="header-underline"

addEventListener("scroll", () => {
    var addClass = document.getElementsByClassName("header-bar")[0];
    var addLogo = document.getElementById("logo-small");
    if (currntPathname == '/index.html') {
        var target = document.getElementById("big-logo").getBoundingClientRect();
        if (target.top < 54) {
            addClass.classList.add("box-header");
            addLogo.style.opacity = "1";
        
        } else if (target.top > 54) {
            addClass.classList.remove("box-header")
            addLogo.style.opacity = "0";
        }
    } else {
        addClass.classList.add("box-header");
        addLogo.style.opacity = "1";
        
    }

});



const svgBtn = document.getElementById(`svg-btn`);
let isSvgBtnPresses = false;
console.log(svgBtn)

function openHeaderMenu() {
        const menu = document.querySelector(`.headre-left-colum`);
        const menueDiv = document.querySelector(`.header-bar`);
        if (isSvgBtnPresses){
            menu.style.display = `none`;
            menueDiv.style.display = `none`;
            isSvgBtnPresses = false;
        
        } else {
            menu.style.display = `block`;
            menueDiv.style.display = `block`;
            isSvgBtnPresses = true;
        }
    }

svgBtn.addEventListener("click", openHeaderMenu);



// transform: scale(0);
// display: none;