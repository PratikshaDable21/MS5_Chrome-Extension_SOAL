    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
           'August', 'September', 'Octoner', 'November', 'December'];

    days = ['Sunday', 'Monday','Tuesday', 
           'Wednesday', 'Thursday', 'Friday', 'Saturday'];

           date_data = new Date();
           //Get day
           current_day = date_data.getDay()
           document.getElementById('day').innerHTML = `${days[current_day]}`

           //Get Month date year
           current_month = date_data.getMonth()
           current_date = date_data.getDate()
           current_year = date_data.getFullYear()
           document.getElementById('month_date_year').innerHTML = 
           `${months[current_month]} ${current_date}, ${current_year}`

           //Get time
           current_hour = date_data.getHours()
           current_minute = date_data.getMinutes()
           am_pm = ''
            if(current_hour >=12){
                //It's pm
                current_hour = current_hour%12;
             am_pm = 'PM'
                //document.body.background = "night.jpg"; 
            }
            else{
            //It's am
            am_pm = `AM`
            //document.body.background = "morning.jpg";
            }
           document.getElementById('time').innerHTML = `${current_hour}:${current_minute} ${am_pm}`
           
        