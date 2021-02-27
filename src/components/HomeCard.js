import {createBtcAddress} from "../api/apiCalls";
function HomeCard(){
    return(
        <>

            <div className="container ">
      <div class="row h-100">
        <div class="col-sm-6 mx-auto mt-5">
          <div class="card">
            <div class="card-body mx-auto">
              <h5 class="card-title text-center" style={{
                color:"rgba(177, 231, 101, 1)"
              }}>Bitmama Crypto Vault</h5>
              <img className="mt-2 mx-auto d-block" src="/img/google2.png" width="210px" alt=""/>
              <div className="div mx-auto mt-2 mr-4" style={{marginLeft:"500px"}}>
              <button 
                   class="btn btn-primary btn-lg" 
                   style={{
                    color: "#fff",
                    backgroundColor: "rgb(31 140 49)",
                    borderColor:"rgb(31 140 49)"
                  }}
                  onClick = {async(e) => {
                      e.preventDefault();
                      console.log("@creating value")
                      await createBtcAddress()
                  }}
              >Generate BTC Adress</button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
        </>
    );
}

export default HomeCard;