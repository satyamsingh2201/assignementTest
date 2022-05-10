const BASE_URL = 'https://min-api.cryptocompare.com'

const getCoinList = () => {

    return new Promise((response, error) => {
        fetch(BASE_URL + "/data/all/coinlist", {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                "Cache-Control": "no-cache"
            },
        })
            .then(response => {
                console.log("URL : ", response.url)
                return response.json()
            })
            .then(responseJson => {
                console.log('response: ' + JSON.stringify(responseJson))
                response(responseJson)
            })
            .catch(errorResponse => {
                error(errorResponse)
            });
    })
}

const getCoinDetails = () => {

    return new Promise((response, error) => {
        fetch(BASE_URL + "/data/v2/histoday?fsym=BTC&tsym=USD&limit=10", {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                "Cache-Control": "no-cache"
            },
        })
            .then(response => {
                console.log("URL : ", response.url)
                return response.json()
            })
            .then(responseJson => {
                console.log('response: ' + JSON.stringify(responseJson))
                response(responseJson)
            })
            .catch(errorResponse => {
                error(errorResponse)
            });
    })
}


module.exports = {
    requestGetCoinList: getCoinList,
    requestGetCoinDetails: getCoinDetails,

}