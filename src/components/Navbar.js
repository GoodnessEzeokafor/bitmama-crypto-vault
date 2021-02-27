import { Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style={{
            backgroundColor:"#62904b"
          }}>
    <div className="container">
      <a  target="_blank" className="navbar-brand" href="https://bitmama.io/">Bitmama </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/vault">Personal Vault</Link>

          </li>
  
        </ul>
        <form className="d-flex">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link" to="/addresses">Addresses</Link>

          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">Addresses</a>
          </li> */}
        </ul>
        </form>
      </div>
    </div>
  </nav>
    );
}

export default Navbar;