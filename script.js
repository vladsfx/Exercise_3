let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц', '');
    }
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let article = prompt('Введите обязательную статью расходов в этом месяце', ''),
            amount = prompt('Во сколько обойдётся?', '');

        if ((typeof (article)) === 'string' && (typeof (article)) != null && (typeof (amount)) != null &&
            article != '' && amount != '' && article.length < 50) {
            console.log('done');
            appData.expenses[article] = amount;
        } else {
            console.log("bad result");
            i--;
        }
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = +(appData.budget / 30).toFixed();

    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');

        appData.monthIncome = +(save / 100 / 12 * percent).toFixed();
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        appData.optionalExpenses[i] = prompt('Статья необязательных расходов?', '');
    }
}

chooseOptExpenses();