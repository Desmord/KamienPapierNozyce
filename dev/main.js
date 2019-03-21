import css from "./mainCss.css";

const paperButton = document.querySelector(`#paper`),
    scissorsButton = document.querySelector(`#scissors`),
    rockButton = document.querySelector(`#rock`),
    resetButton = document.querySelector(`.reset-text`),
    playerPoints = document.querySelector(`.playerPoints`),
    oponentPoints = document.querySelector(`.oponentPoints`),
    enemySign = document.querySelector(`#enemySign`);

const symbolsUrl = {
    rock: `/icons/Rock.svg`,
    paper: `/icons/Paper.svg`,
    scissors: `/icons/Shears.svg`
}

let playerResult = 0,
    enemyResult = 0;


const resetGame = () => {

    playerPoints.innerHTML = `GRACZ &nbsp; - &nbsp; 0`;
    oponentPoints.innerHTML = `KOMPUTER &nbsp; - &nbsp; 0`;

    enemySign.style.backgroundImage = `url()`;
    enemySign.style.backgroundColor = `rgba(255, 255, 255, 0.1)`;

    playerResult = 0;
    enemyResult = 0;

}

const drawSybol = () => {

    let symbol = ((Math.random() * 3) + 1).toString().substring(0, 1);

    if (symbol == 1) return {
        number: 1,
        url: symbolsUrl.rock
    };
    else if (symbol == 2) return {
        number: 2,
        url: symbolsUrl.paper
    };
    else return {
        number: 3,
        url: symbolsUrl.scissors
    };

}

const changeSybolIcon = (symbolUrl) => {

    enemySign.style.backgroundImage = `url(${symbolUrl})`;

}

const updateEnemyIconBacgroundColor = (result) => {

    if (result == null) {
        enemySign.style.backgroundColor = `rgba(255, 255, 255, 0.1)`;
    } else if (result) {
        enemySign.style.backgroundColor = `rgba(47, 194, 59, 0.4)`;
    } else {
        enemySign.style.backgroundColor = `rgba(194, 47, 47, 0.4)`;
    }

}

const updateResult = (result) => {

    if (result) {
        playerResult++;
        playerPoints.innerHTML = `GRACZ &nbsp; - &nbsp; ${playerResult}`;
        updateEnemyIconBacgroundColor(result);
    } else {
        enemyResult++;
        oponentPoints.innerHTML = `KOMPUTER &nbsp; - &nbsp; ${enemyResult}`;
        updateEnemyIconBacgroundColor(result);
    }


}

const chooseRock = () => {

    let enemySybol = drawSybol();

    changeSybolIcon(enemySybol.url);

    if (enemySybol.number == 2) updateResult(false);
    else if (enemySybol.number == 3) updateResult(true);
    else { updateEnemyIconBacgroundColor(null); }

}

const choosePaper = () => {

    let enemySybol = drawSybol();

    changeSybolIcon(enemySybol.url);

    if (enemySybol.number == 3) updateResult(false);
    else if (enemySybol.number == 1) updateResult(true);
    else { updateEnemyIconBacgroundColor(null); }

}

const chooseScissors = () => {

    let enemySybol = drawSybol();

    changeSybolIcon(enemySybol.url);

    if (enemySybol.number == 1) updateResult(false);
    else if (enemySybol.number == 2) updateResult(true);
    else { updateEnemyIconBacgroundColor(null); }

}

resetButton.addEventListener(`click`, () => resetGame());

rockButton.addEventListener(`click`, chooseRock);
paperButton.addEventListener(`click`, choosePaper);
scissorsButton.addEventListener(`click`, chooseScissors);
