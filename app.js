const {getWeather} = require('./getWeather')
const {getLocation} = require('./getLocation')
const colors = require('colors')
const figlet = require('figlet')
const {promisify} = require('util')

const promisifiedFiglet = promisify(figlet)


const main = async (place) => {
    const location = await getLocation(place)
    const weather = await getWeather(location)
    //console.log(weather)
    const temp = Math.floor((weather.temperature -32) * 5/9);
    const data = await promisifiedFiglet("Weather")
    console.log(data)
    
    console.log(`The temperature in ${location.name.green} is ${colors.red(temp)} ºC  and the probability of rain is ${weather.precipProbability}`)

}


main(process.argv[2])







//getWeather()











// request({url:`https://api.darksky.net/forecast/${apikey}/37.8267,-122.4233`,json:true},(error, response)=> {
//     if (error){
//         console.log(error)
//      } else {
//                 const data = response.body
//                 console.log({temp:data.currently.temperature})
                
            
//         }
// })