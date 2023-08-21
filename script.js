const primary = document.querySelector('.primary');
const secondary = document.querySelector('.secondary');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const fifth = document.querySelector('.fifth');
const primary_gradient = document.querySelector('.g_1');
const secondary_gradient = document.querySelector('.g_2');
const third_gradient = document.querySelector('.g_3');
const fourth_gradient = document.querySelector('.g_4');
const fifth_gradient = document.querySelector('.g_5');


// all the color selectors
const colorElements = document.querySelectorAll('.color');

// all the names (p)
const name_one = document.querySelector('.name-color-one');
const name_two = document.querySelector('.name-color-two');
const name_three = document.querySelector('.name-color-three');
const name_four = document.querySelector('.name-color-four');
const name_five = document.querySelector('.name-color-five');

// all the names (p) for the gradients
const name_g_one = document.querySelector('.gradient-1');
const name_g_two = document.querySelector('.gradient-2');
const name_g_three = document.querySelector('.gradient-3');
const name_g_four = document.querySelector('.gradient-4');
const name_g_five = document.querySelector('.gradient-5');

// button
const btn = document.querySelector('.btn');

// functions
function getHue() {
    return Math.floor(Math.random() * 360);
}
function Percentage() {
    return Math.floor(Math.random() * 100) + '%';
}

//button HSL generator
btn.addEventListener('click', function () {

    let hue = getHue();
    let saturation = Percentage();
    let lightness = Percentage();

    let primaryColors = `hsl(${hue}, ${saturation}, ${lightness})`;

    let minTen = parseInt(lightness) - 10;
    let secondaryColors = `hsl(${hue}, ${saturation}, ${minTen}%)`;

    let minTenAgain = minTen - 10;
    let thirdColors = `hsl(${hue}, ${saturation}, ${minTenAgain}%)`;

    let plusTen = parseInt(lightness) + 10;
    let fourthColors = `hsl(${hue}, ${saturation}, ${plusTen}%)`;

    let plusTenAgain = plusTen + 10;
    let fifthColors = `hsl(${hue}, ${saturation}, ${plusTenAgain}%)`;

// Background change
    primary.style.backgroundColor = thirdColors;
    secondary.style.backgroundColor = secondaryColors;
    third.style.backgroundColor = primaryColors;
    fourth.style.backgroundColor = fourthColors;
    fifth.style.backgroundColor = fifthColors;

// Gradients
    const gradient_1 = `linear-gradient(to left, hsl(${hue}, ${saturation}, ${minTenAgain}%), hsl(${hue}, ${saturation}, ${plusTenAgain}%))`;
    primary_gradient.style.background = gradient_1;
    const gradient_2 = `linear-gradient(to left, hsl(${hue}, ${saturation}, ${minTen}%), hsl(${hue}, ${saturation}, ${plusTen}%))`;
    secondary_gradient.style.background = gradient_2;
    const gradient_3 = `linear-gradient(to left, hsl(${hue}, ${saturation}, ${lightness}), hsl(${hue}, ${saturation}, ${plusTenAgain}%))`;
    third_gradient.style.background = gradient_3;
    const gradient_4 = `linear-gradient(to left, hsl(${hue}, ${saturation}, ${plusTen}%), hsl(${hue}, ${saturation}, ${minTen}%))`;
    fourth_gradient.style.background = gradient_4;
    const gradient_5 = `linear-gradient(to left, hsl(${hue}, ${saturation}, ${plusTenAgain}%), hsl(${hue}, ${saturation}, ${minTenAgain}%))`;
    fifth_gradient.style.background = gradient_5;

// HSL names
    name_one.textContent = thirdColors;
    name_two.textContent = secondaryColors;
    name_three.textContent = primaryColors;
    name_four.textContent = fourthColors;
    name_five.textContent = fifthColors;

    name_g_one.textContent = `${thirdColors} - ${fifthColors}`;
    name_g_two.textContent = `${secondaryColors} - ${fourthColors}`;
    name_g_three.textContent = `${primaryColors} - ${fifthColors}`;
    name_g_four.textContent = `${fourthColors} - ${secondaryColors}`;
    name_g_five.textContent = `${fifthColors} - ${thirdColors}`;
});

// Transform for every div
colorElements.forEach(color => {

    // all transform
    color.addEventListener('mouseover', function () {
        color.style.transform = 'scaleX(1.1)';
        color.style.transition = 'transform 500ms ease-in-out';
        color.style.boxShadow = '0 0 0 1px #B38B59';

    });
    color.addEventListener('mouseout', function () {
        color.style.margin = '10px 20px';
        color.style.transform = 'scaleX(1)';
        color.style.transition = 'transform 500ms ease-in-out';
        color.style.boxShadow = '0 0 0 0';
    });

    // primary 2 transform
    primary_gradient.addEventListener('mouseover',() => {
        primary.style.transform = 'scaleX(1.1)';
        primary.style.transition = 'transform 500ms ease-in-out';
        primary.style.boxShadow = '0 0 0 1px #B38B59';

        fifth.style.transform = 'scaleX(1.1)';
        fifth.style.transition = 'transform 500ms ease-in-out';
        fifth.style.boxShadow = '0 0 0 1px #B38B59';
    });
    primary_gradient.addEventListener('mouseout', () => {
        primary.style.margin = '10px 20px';
        primary.style.transform = 'scaleX(1)';
        primary.style.transition = 'transform 500ms ease-in-out';
        primary.style.boxShadow = '0 0 0 0';

        fifth.style.margin = '10px 20px';
        fifth.style.transform = 'scaleX(1)';
        fifth.style.transition = 'transform 500ms ease-in-out';
        fifth.style.boxShadow = '0 0 0 0';
    });

    // secondary 2 transform
    secondary_gradient.addEventListener('mouseover',() => {
        secondary.style.transform = 'scaleX(1.1)';
        secondary.style.transition = 'transform 500ms ease-in-out';
        secondary.style.boxShadow = '0 0 0 1px #B38B59';

        fourth.style.transform = 'scaleX(1.1)';
        fourth.style.transition = 'transform 500ms ease-in-out';
        fourth.style.boxShadow = '0 0 0 1px #B38B59';
    });
    secondary_gradient.addEventListener('mouseout', () => {
        secondary.style.margin = '10px 20px';
        secondary.style.transform = 'scaleX(1)';
        secondary.style.transition = 'transform 500ms ease-in-out';
        secondary.style.boxShadow = '0 0 0 0';

        fourth.style.margin = '10px 20px';
        fourth.style.transform = 'scaleX(1)';
        fourth.style.transition = 'transform 500ms ease-in-out';
        fourth.style.boxShadow = '0 0 0 0';
    });

    // third 2 transform
    third_gradient.addEventListener('mouseover',() => {
        third.style.transform = 'scaleX(1.1)';
        third.style.transition = 'transform 500ms ease-in-out';
        third.style.boxShadow = '0 0 0 1px #B38B59';

        fifth.style.transform = 'scaleX(1.1)';
        fifth.style.transition = 'transform 500ms ease-in-out';
        fifth.style.boxShadow = '0 0 0 1px #B38B59';
    });
    third_gradient.addEventListener('mouseout', () => {
        third.style.margin = '10px 20px';
        third.style.transform = 'scaleX(1)';
        third.style.transition = 'transform 500ms ease-in-out';
        third.style.boxShadow = '0 0 0 0';

        fifth.style.margin = '10px 20px';
        fifth.style.transform = 'scaleX(1)';
        fifth.style.transition = 'transform 500ms ease-in-out';
        fifth.style.boxShadow = '0 0 0 0';
    });

    // fourth 2 transform
    fourth_gradient.addEventListener('mouseover',() => {
        fourth.style.transform = 'scaleX(1.1)';
        fourth.style.transition = 'transform 500ms ease-in-out';
        fourth.style.boxShadow = '0 0 0 1px #B38B59';

        secondary.style.transform = 'scaleX(1.1)';
        secondary.style.transition = 'transform 500ms ease-in-out';
        secondary.style.boxShadow = '0 0 0 1px #B38B59';
    });
    fourth_gradient.addEventListener('mouseout', () => {
        fourth.style.margin = '10px 20px';
        fourth.style.transform = 'scaleX(1)';
        fourth.style.transition = 'transform 500ms ease-in-out';
        fourth.style.boxShadow = '0 0 0 0';

        secondary.style.margin = '10px 20px';
        secondary.style.transform = 'scaleX(1)';
        secondary.style.transition = 'transform 500ms ease-in-out';
        secondary.style.boxShadow = '0 0 0 0';
    });

    // fifth 2 transform
    fifth_gradient.addEventListener('mouseover',() => {
        fifth.style.transform = 'scaleX(1.1)';
        fifth.style.transition = 'transform 500ms ease-in-out';
        fifth.style.boxShadow = '0 0 0 1px #B38B59';

        primary.style.transform = 'scaleX(1.1)';
        primary.style.transition = 'transform 500ms ease-in-out';
        primary.style.boxShadow = '0 0 0 1px #B38B59';
    });
    fifth_gradient.addEventListener('mouseout', () => {
        fifth.style.margin = '10px 20px';
        fifth.style.transform = 'scaleX(1)';
        fifth.style.transition = 'transform 500ms ease-in-out';
        fifth.style.boxShadow = '0 0 0 0';

        primary.style.margin = '10px 20px';
        primary.style.transform = 'scaleX(1)';
        primary.style.transition = 'transform 500ms ease-in-out';
        primary.style.boxShadow = '0 0 0 0';
    });


})
