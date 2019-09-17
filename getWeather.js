const request = require("request")
const {promisify} = require('util')

const promisifiedRequest = promisify(request)

const apikey = "9f7f734a5de31e8c2a2bd89623ed33f9"


 
const getWeather = async (locationData)=> {
    try {
        let data = await promisifiedRequest(
            {url:`https://api.darksky.net/forecast/${apikey}/${locationData.lng},${locationData.lat}`,
            json:true})
        
        return(data.body.currently)
    } catch (error) {
        console.log("Oops, there has been a mistake")
    }

}

module.exports = {
    getWeather
}