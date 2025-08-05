// This function is responsible for calculating the total height of an element including its margins.
function getTotalHeightWithMargin(el) {
    const style = window.getComputedStyle(el);
    const height = parseInt(el.getBoundingClientRect().height);
    const marginTop = parseInt(style.marginTop);
    const marginBottom = parseInt(style.marginBottom);
    return height + marginTop + marginBottom;
};

// This code block will place the spinner 
const spinner_container = document.querySelector('.spinner-container');
const container = document.querySelector('.container');
const spinner = document.getElementById('spinner');
const search_section = document.getElementById('search');
// Calculate the total height of the search section including margins
const search_section_height = getTotalHeightWithMargin(search_section);
// set the height of the spinner container by deducting the search section height from the container height
spinner_container.style.height = `${container.scrollHeight - search_section_height}px`;

// find the better way to put margin in the spinner container
spinner_container.style.marginTop = `${search_section_height * 0.45}px`;
spinner_container.style.top = `${search_section_height + parseInt(window.getComputedStyle(container).gap)}px`;