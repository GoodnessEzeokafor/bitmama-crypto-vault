function AddressCard(){
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
              <div className="div mx-auto mt-2 mr-4" style={{marginLeft:"500px"}}>
              <a href="#" class="btn btn-primary btn-lg" style={{
                    color: "#fff",
                    backgroundColor: "rgb(31 140 49)",
                    borderColor:"rgb(31 140 49)"
              }}>Generate BTC Adress</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

        </>
    );
}

export default AddressCard