import axios from "axios"
import {NotificationManager} from 'react-notifications';

// axios.defaults.baseURL="https://enterprise-api-staging.bitmama.io"
export const createBtcAddress =async() => {
  const apiLink = process.env.NODE_ENV === "development" ? "/v1/address" : "https://enterprise-api-staging.bitmama.io/v1/address"
  const body = {
    label:"Vault_Btc",
    coin:"tbtc"
  }
    try{
        return await axios.post("/v1/address",body,{
            headers: {
                'Content-Type': 'application/json',
                'token': `e660e9ac4fceb613e9da51052`
              },      
        }).then(async(res) => {
            console.log("endpoint data", res.data)
            if(res.data.code === 201){
              // NotificationManager.success('Success message', 'Title here');
              NotificationManager.success("Btc address generated", "Success")
              localStorage.setItem("address", res.data.message.address)
              localStorage.setItem("label",body.label)
              localStorage.setItem("coin", res.data.message.address)
              localStorage.setItem("qrCode", res.data.message.qrCode)
              return Promise.resolve(res.data)
  
            }
          }).catch(async(e) => {
            console.log("@err", e)
            NotificationManager.error("An error occurred", "Error")
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