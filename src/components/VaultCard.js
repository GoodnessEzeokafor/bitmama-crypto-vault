function VaultCard(){
    return(
        <>
            <div className="container ">
      <div class="row h-100">
        <div class="col-sm-6 mx-auto mt-5">
          <div class="card">
            <div class="card-body mx-auto">
              <h5 class="card-title text-center" style={{
                color:"rgba(177, 231, 101, 1)"
              }}>Personal Crypto Vault</h5>
              <div className="div mx-auto mt-2 mr-4" style={{marginLeft:"500px"}}>
              <p>Vault Name: <span><b>{localStorage.getItem("label")}</b></span></p>
                <p>Btc Address: <span><b>{localStorage.getItem("address")}</b></span></p> 
                <p>QR Code: <span>

                   <img src={localStorage.getItem("qrCode")} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />
                </span></p> 
                <p>Balance:</p>

              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

        </>
    );
}

export default VaultCard