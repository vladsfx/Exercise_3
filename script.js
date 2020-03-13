'use strict';

let money = +prompt('Ваш бюджет на месяц', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let article = prompt('Введите обязательную статью расходов в этом месяце', ''),
        amount = prompt('Во сколько обойдётся?', '');

    if ((typeof (article)) === 'string' && (typeof (article)) != null && (typeof (amount)) != null &&
        article != '' && amount != '' && article.length < 50) {
        console.log('done');
        appData.expenses[article] = amount;
    } else {
        console.log ("bad result");
        i--;
    }
}

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}