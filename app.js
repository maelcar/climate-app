window.addEventListener('load', ()=>{

    let lon
    let lat

    let temperatureValue = document.getElementById('temperatureValue')
    let temperatureDescription = document.getElementById('temperatureDescription')

    let location = document.getElementById('location')
    let animatedIcon = document.getElementById('animatedIcon')

    let windSpeed = document.getElementById('windSpeed')
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position => {

            lon = position.coords.longitude
            lat = position.coords.latitude

            const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=ae344f006c90952eb3f5c58455866798'

            //console.log(url)

            fetch(url)
                .then( response => { return response.json() })
                .then( data => {
                    console.log(data.main.temp)
                    let temp = Math.round(data.main.temp)
                        temperatureValue.textContent = `${temp} ºC`
                        console.log(data.weather[0].description)
                        let desc = data.weather[0].description
                         temperatureDescription.textContent = desc.toUpperCase()


                        location.textContent = data.name


                        windSpeed.textContent = `${data.wind.speed} m/s`
                        //console.log(data.wind.speed)

                        console.log(data.weather[0].main)
                        switch (data.weather[0].main) {
                            case 'Thunderstorm':
                            animatedIcon.src='icons/thunder.svg'
                            console.log('THUNDERSTORM');
                            break;
                            case 'Drizzle':
                            animatedIcon.src='icons/rainy-2.svg'
                            console.log('DRIZZLE');
                            break;
                            case 'Rain':
                            animatedIcon.src='icons/rainy-7.svg'
                            console.log('RAIN');
                            break;
                            case 'Snow':
                            animatedIcon.src='icons/snowy-6.svg'
                            console.log('SNOW');
                            break;                        
                            case 'Clear':
                            animatedIcon.src='icons/day.svg'
                            console.log('CLEAR');
                            break;
                            case 'Atmosphere':
                            animatedIcon.src='icons/weather.svg'
                            console.log('ATMOSPHERE');
                            break;  
                            case 'Clouds':
                            animatedIcon.src='icons/cloudy-day-1.svg'
                            console.log('CLOUDS');
                            break;  
                            default:
                            animatedIcon.src='icons/cloudy-day-1.svg'
                            console.log('default');
                                }


                })
                .catch( error =>{
                    console.log(error)
                })

        })
    }
})