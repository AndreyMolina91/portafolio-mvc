// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const btnSwitch = document.getElementById('btnSwitch');
const dark = document.getElementById('sidebar-container');
const darknav = document.getElementById('navbarDark');
/*const darkMainContainer = document.getElementById('mainContainer');*/
/*const darkSectionContainer = document.getElementById('sectionContainer');*/
const darkSectionContainerOne = document.getElementById('sectionContainerOne');
const darkSectionContainerTwo = document.getElementById('sectionContainerTwo');
const darkSectionContainerThree = document.getElementById('sectionContainerThree');
const darkSectionContainerFour = document.getElementById('sectionContainerFour');
const darkDropdown = document.getElementById('navbarDropdown');
const darkCards = document.getElementById('card');
const darkTitle = document.getElementById('title');

/*cards enumeradas*/
const darkCardOne = document.getElementById('card-one');
const darkCardTwo = document.getElementById('card-two');
const darkCardThree = document.getElementById('card-three');
const darkCardFour = document.getElementById('card-four');
const darkCardFive = document.getElementById('card-five');
const darkCardSix = document.getElementById('card-six');
const darkCardSeven = document.getElementById('card-seven');
const darkCardEight = document.getElementById('card-eight');




btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('darkGray'); //toggle the HTML body the class 'dark'
    btnSwitch.classList.toggle('activated');//toggle the HTML button with the id='switch' with the class 'active'
    dark.classList.toggle('darkTheme');
    darknav.classList.toggle('bg-dark');    
    /*darkMainContainer.classList.toggle('darkTheme');*/
    /*darkSectionContainer.classList.toggle('darkGray');*/
    darkSectionContainerOne.classList.toggle('darkGray');
    darkSectionContainerTwo.classList.toggle('darkGray');
    darkSectionContainerThree.classList.toggle('darkGray');
    darkSectionContainerFour.classList.toggle('darkGray');
    darkCards.classList.toggle('darkTheme');
    darkTitle.classList.toggle('darkGray');
    darkDropdown.classList.remove('btn-light');
    darkDropdown.classList.toggle('darkGray');

    /*estilos Darkmode para las cards*/
    darkCardOne.classList.toggle('darkGray');
    darkCardTwo.classList.toggle('darkGray');
    darkCardThree.classList.toggle('darkGray');
    darkCardFour.classList.toggle('darkGray');
    darkCardFive.classList.toggle('darkGray');
    darkCardSix.classList.toggle('darkGray');
    darkCardSeven.classList.toggle('darkGray');
    darkCardEight.classList.toggle('darkGray');
});
