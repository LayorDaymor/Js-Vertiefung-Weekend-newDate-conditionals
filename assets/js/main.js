const checkWeekend=date =>date.getDay()==6||date.getDay()==0?"weekend" :"workday";
console.log(checkWeekend(new Date(2019,18,10)));

