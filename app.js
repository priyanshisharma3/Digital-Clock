const clock = document.querySelector('.clock')
const dateToday = document.querySelector('#date')
const day = document.querySelector('#day')



setInterval(function(){
    let date = new Date
    let dayToday = date.getDay()
    clock.innerHTML = date.toLocaleTimeString()
    dateToday.innerHTML = date.toLocaleDateString()
        if(dayToday === 1){
            day.innerHTML = "Monday"
        }
        else if(dayToday === 2){
            day.innerHTML = "Tuesday"
        }
        else if(dayToday === 3){
            day.innerHTML = "Wednesday"
        }
        else if(dayToday === 4){
            day.innerHTML = "Thursday"
        }
        else if(dayToday === 5){
            day.innerHTML = "Friday"
        }
        else if(dayToday === 6){
            day.innerHTML = "Saturday"
        }
        else{
            day.innerHTML = "Sunday"
        }
},1000)

