import appstorebutton from './download-on-appstore-borderless.png';
import qrcode from './qrcode-round.png';
import logo from './logo.png';
import './App.css';
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} alt="logo" className='App-logo'/>
        <h2 style={{margin: 0}}>
          Citizenly
        </h2>
        <h2/>

        <h4></h4>
        <div className='linkcontainer'>
          <img src={qrcode} alt="qrcode" className='qrcode' />
          <Link to="/download">
            <img src={appstorebutton} alt="appstorebutton" className='App-store-button' />
          </Link>
        </div>
      </header>

      <header className="App-footer">
        <Link  to={{pathname: '/faq'}}>FAQ</Link>
        <Link  to={{pathname: '/terms'}}>Terms</Link>
        <Link  to={{pathname: '/privacy'}}>Privacy</Link>
        <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" >Contact</a>
      </header>
    </div>
  );
}

export default LandingPage;
