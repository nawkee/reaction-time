const firstStage = document.querySelector('.first-stage');
const waitStage = document.querySelector('.wait');
const tooSoonStage = document.querySelector('.too-soon');
const clickStage  = document.querySelector('.click');
const continueStage = document.querySelector('.continue');
const resultStage = document.querySelector('.result');
const result = document.querySelector('#result');
const finalResult = document.querySelector('#final-result');

let start, end, myTimeout, results = [], len = 5;

function waitToClick() {
    myTimeout = setTimeout(() => {
        waitStage.classList.add('invisible');
        clickStage.classList.remove('invisible');
        start = +new Date();
    }, Math.floor(Math.random() * 3000 + 2000));
}

firstStage.addEventListener('click', () => {
    if (!firstStage.classList.contains('invisible')) {
        firstStage.classList.add('invisible');
        waitStage.classList.remove('invisible');
        waitToClick();
    } else alert('Error! Reload the page');
});

waitStage.addEventListener('click', () => {
    waitStage.classList.add('invisible');
    tooSoonStage.classList.remove('invisible');
    clearTimeout(myTimeout);
});

clickStage.addEventListener('click', () => {
    end = +new Date();
    clickStage.classList.add('invisible');
    result.innerHTML = (end - start - 100) + ' ms';
    results.push(end - start - 100);
    if (results.length === len) {
        let res = 0;
        for (let i = 0; i < len; i++) {
            res += results[i];
        }
        finalResult.innerHTML = Math.floor(res/len) + ' ms';
        resultStage.classList.remove('invisible');
    } else {
        continueStage.classList.remove('invisible');
    }
    end = 0;
    start = 0;
});

tooSoonStage.addEventListener('click', () => {
    tooSoonStage.classList.add('invisible');
    waitStage.classList.remove('invisible');
    waitToClick();
});

continueStage.addEventListener('click', () => {
    continueStage.classList.add('invisible');
    waitStage.classList.remove('invisible');
    waitToClick();
});

document.querySelector('.btn').addEventListener('click', () => {
    location.reload();
    /*resultStage.classList.add('invisible');
    firstStage.classList.remove('invisible');
    results = [];*/
});