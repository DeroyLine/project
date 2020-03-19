let money = +prompt("Бюджет на месяц", '');//50k бюджет на месяц

let mouth = +prompt('месяц(дней)', ''); //Один месяц (в днях)

 let appData = {
 	budget: money,
 	expenses: {},
 optionalExpenses: {},
 income: [],
 timeData: [],
 savings: true
 };
 function start() {
 money = +prompt("Бюджет на месяц", '');
   mouth = +prompt('месяц(дней)', '');
      while(isNaN(money) || money == '' || money == null) {
   	     money = +prompt("Бюджет на месяц", '');
       }
 } 
 start();



function result() {
	if(appData.savings == true) {
		let money = +prompt("Бюджет на месяц", '');
		let mouth = +prompt('месяц(дней)', '');
		appData.mouthIncome = money/mouth;

		alert("Ваш доход на один день составляет: " + appData.mouthIncome);
	}
}
result();
//работает..
   //Все работает, только почему все хорошо, но вся функция в страничке самой по три раза идет..
   // Может потому-что у меня остального кода нету
