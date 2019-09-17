const request = require("request")
const {promisify} = require('util')



//const apiCall = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoid29ydGhpbSIsImEiOiJjazBucWxhczMwMG1qM2duNmc0cW9yaDVyIn0.V0d0t3mCPqOeS3eplNVD_w"

const promisifiedRequest = promisify(request);

const getLocation = async (place) => {
    try {
        let data = await promisifiedRequest(
            {url:`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1Ijoid29ydGhpbSIsImEiOiJjazBucWxhczMwMG1qM2duNmc0cW9yaDVyIn0.V0d0t3mCPqOeS3eplNVD_w`,json:true})
        return({
            name: data.body.features[0].place_name,
            lat: data.body.features[0].center[0],
            lng: data.body.features[0].center[1]
        })
    
    } catch (error) {
        console.log("oops")
    }
    
};

module.exports = {
    getLocation
}
