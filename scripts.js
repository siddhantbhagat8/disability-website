const languageButton = document.querySelector('.language-button');
const dropdownContent = document.querySelector('.dropdown-content');

languageButton.addEventListener('click', () => {
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
});

const aboutUsBox = document.getElementById('aboutUsBox');

aboutUsBox.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();  // Prevents the default action of the anchor tag
    }

    if (aboutUsBox.style.transform === "rotateY(180deg)") {
        aboutUsBox.style.transform = "rotateY(0deg)";  // Flip back to the front side
    } else {
        aboutUsBox.style.transform = "rotateY(180deg)";  // Flip to show the back side
    }
});

const certificationBox = document.getElementById('certificationBox');

certificationBox.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();  // Prevents the default action of the anchor tag
    }

    if (certificationBox.style.transform === "rotateY(180deg)") {
        certificationBox.style.transform = "rotateY(0deg)";  // Flip back to the front side
    } else {
        certificationBox.style.transform = "rotateY(180deg)";  // Flip to show the back side
    }
});
