// TALL SECTION

const inputTall = document.getElementById('tall-input');
const imgTall1 = document.getElementById('tall-1');
const imgTall2 = document.getElementById('tall-2');
const imgTall3 = document.getElementById('tall-3');
const imgTall4 = document.getElementById('tall-4');
const imgTall5 = document.getElementById('tall-5');

const submitBtn = document.getElementById('submit-btn');



function createTall(input){
    if (input.value == 1){
        imgTall2.classList.remove('show-img');
        imgTall3.classList.remove('show-img');
        imgTall4.classList.remove('show-img');
        imgTall5.classList.remove('show-img');
        return imgTall1.classList.add('show-img');
    } if (input.value == 2){
        imgTall1.classList.remove('show-img');
        imgTall3.classList.remove('show-img');
        imgTall4.classList.remove('show-img');
        imgTall5.classList.remove('show-img');
        return imgTall2.classList.add('show-img');
    } if (input.value == 3){
        imgTall1.classList.remove('show-img');
        imgTall2.classList.remove('show-img');
        imgTall4.classList.remove('show-img');
        imgTall5.classList.remove('show-img');
        return imgTall3.classList.add('show-img');
    } if (input.value == 4){
        imgTall1.classList.remove('show-img');
        imgTall2.classList.remove('show-img');
        imgTall3.classList.remove('show-img');
        imgTall5.classList.remove('show-img');
        return imgTall4.classList.add('show-img');
    } if (input.value == 5){
        imgTall1.classList.remove('show-img');
        imgTall2.classList.remove('show-img');
        imgTall3.classList.remove('show-img');
        imgTall4.classList.remove('show-img');
        return imgTall5.classList.add('show-img');
    } 
}

// STRONG SECTION
const strongInput = document.getElementById('strong-input');
const imgStrong1 = document.getElementById('strong-1');
const imgStrong2 = document.getElementById('strong-2');
const imgStrong3 = document.getElementById('strong-3');
const imgStrong4 = document.getElementById('strong-4');
const imgStrong5 = document.getElementById('strong-5');

function createStrong (input){
    if (input.value == 1){
        imgStrong2.classList.remove('show-img');
        imgStrong3.classList.remove('show-img');
        imgStrong4.classList.remove('show-img');
        imgStrong5.classList.remove('show-img');
        return imgStrong1.classList.add('show-img');
    } if (input.value == 2){
        imgStrong1.classList.remove('show-img');
        imgStrong3.classList.remove('show-img');
        imgStrong4.classList.remove('show-img');
        imgStrong5.classList.remove('show-img');
        return imgStrong2.classList.add('show-img');
    } if (input.value == 3){
        imgStrong1.classList.remove('show-img');
        imgStrong2.classList.remove('show-img');
        imgStrong4.classList.remove('show-img');
        imgStrong5.classList.remove('show-img');
        return imgStrong3.classList.add('show-img');
    } if (input.value == 4){
        imgStrong1.classList.remove('show-img');
        imgStrong2.classList.remove('show-img');
        imgStrong3.classList.remove('show-img');
        imgStrong5.classList.remove('show-img');
        return imgStrong4.classList.add('show-img');
    } if (input.value == 5){
        imgStrong1.classList.remove('show-img');
        imgStrong2.classList.remove('show-img');
        imgStrong3.classList.remove('show-img');
        imgStrong4.classList.remove('show-img');
        return imgStrong5.classList.add('show-img');
    } 
}



// HAPPY SECTION
const happyInput = document.getElementById('happy-input');
const imgHappy1 = document.getElementById('happy-1');
const imgHappy2 = document.getElementById('happy-2');
const imgHappy3 = document.getElementById('happy-3');
const imgHappy4 = document.getElementById('happy-4');
const imgHappy5 = document.getElementById('happy-5');


function createHappy (input){
    if (input.value == 1){
        imgHappy2.classList.remove('show-img');
        imgHappy3.classList.remove('show-img');
        imgHappy4.classList.remove('show-img');
        imgHappy5.classList.remove('show-img');
        return imgHappy1.classList.add('show-img');
    } if (input.value == 2){
        imgHappy1.classList.remove('show-img');
        imgHappy3.classList.remove('show-img');
        imgHappy4.classList.remove('show-img');
        imgHappy5.classList.remove('show-img');
        return imgHappy2.classList.add('show-img');
    } if (input.value == 3){
        imgHappy1.classList.remove('show-img');
        imgHappy2.classList.remove('show-img');
        imgHappy4.classList.remove('show-img');
        imgHappy5.classList.remove('show-img');
        return imgHappy3.classList.add('show-img');
    } if (input.value == 4){
        imgHappy1.classList.remove('show-img');
        imgHappy2.classList.remove('show-img');
        imgHappy3.classList.remove('show-img');
        imgHappy5.classList.remove('show-img');
        return imgHappy4.classList.add('show-img');
    } if (input.value == 5){
        imgHappy1.classList.remove('show-img');
        imgHappy2.classList.remove('show-img');
        imgHappy3.classList.remove('show-img');
        imgHappy4.classList.remove('show-img');
        return imgHappy5.classList.add('show-img');
    } 
}

// EVENT LISTENER
submitBtn.addEventListener('click', () => {
    createTall(inputTall);
    createStrong(strongInput);
    createHappy(happyInput);
});