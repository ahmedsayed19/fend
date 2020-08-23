/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
let sectionsPos = [];

const Sections = document.querySelectorAll(".landing__container");
const length = Sections.length;


// The names of the sections

let sectionName = [];
sectionName.length = length;
for(let i = 0; i < length; i++)
sectionName[i] = Sections[i].parentElement.getAttribute("data-nav");

// Building menu  
const fragment = document.createDocumentFragment();
for(let i = 0; i < length; i++){
    const li = document.createElement('li');
    if(!i)
        li.setAttribute("class","menu__link active__link");
    else
        li.setAttribute("class","menu__link");
    li.textContent = sectionName[i];
    fragment.appendChild(li);
}

const ul = document.querySelector("#navbar__list");
ul.appendChild(fragment);

// get sections positions 
sectionsPos.length = length + 1;
sectionsPos[Sections.length] = 999999;
for(let i = 0; i < sectionsPos.length - 1; i++){
    sectionsPos[i] = Sections[i].parentElement.offsetTop;
}

const nav_items = document.querySelectorAll(".menu__link");
// remove activation from sections and link items
function removeActivation(){
    for(let i = 0; i < length; i++){
        nav_items[i].classList.remove("active__link");
        Sections[i].parentElement.classList.remove("your-active-class");
    }
}


// this function scroll to the section that you clicked and activate it


const nav = document.querySelector("#navbar__list");
nav.addEventListener("click", function (e){
    if(e.target.nodeName === 'LI'){
        removeActivation();   
        for(let i = 0; i < length; i++){
            if(e.target.textContent == sectionName[i]){
                Sections[i].parentElement.scrollIntoView({behavior: "smooth"});
                Sections[i].parentElement.classList.add("your-active-class")
                e.target.classList.add("active__link");
                break;
            }
        }
    }
});
// this function activate the section you scrolled to 
let curActiveElem = 1;
window.addEventListener('scroll', function(){
    let pos = Math.floor(window.scrollY);
    for(let i = 0; i < length; i++){
        if(pos >= sectionsPos[i] && pos < sectionsPos[i + 1]){
            if (curActiveElem == i) break;
            removeActivation();
            Sections[i].parentElement.classList.add("your-active-class")
            nav_items[i].classList.add("active__link");
            curActiveElem = i;
        }
    }
} )
