import axios from "axios"

// axios.defaults.baseURL="https://enterprise-api-staging.bitmama.io"
export const createBtcAddress =async() => {
    try{
        return await axios.post("/v1/address",{
          "label":"Vault_Btc",
          "coin":"tbtc"
        },{
            headers: {
                'Content-Type': 'application/json',
                'token': `e660e9ac4fceb613e9da51052`
              },      
        }).then(async(res) => {
            console.log("endpoint data", res.data)
            localStorage.setItem("address", res.data.message.address)
            localStorage.setItem("label", res.data.message.address)
            localStorage.setItem("coin", res.data.message.address)
            localStorage.setItem("qrCode", res.data.message.qrCode)
            return Promise.resolve(res.data)
          }).catch(async(e) => {
            console.log("@err", e)
            console.log("@errMessage", e.message)
            return Promise.reject(e);
          })
    }catch(err){
        console.log(err)
    }
}

export const listAddresses = () => {

}

export const saveLocalStorage=(data) => {
    
}