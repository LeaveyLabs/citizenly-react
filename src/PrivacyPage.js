import './App.css';
import Privacy from './Privacy';
import { useEffect } from 'react';
import privacyicon from './privacy-policy.svg';
import { Link } from "react-router-dom";

function PrivacyPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
    <div className="Privacy-header">
      {/* <img src={privacyicon} alt="privacy" className='App-store-button' /> */}
      <Privacy/>
    </div>

    <header className="App-footer">
      <Link  to={{pathname: '/'}}>Home</Link>
      <Link  to={{pathname: '/faq'}}>FAQ</Link>
      <Link  to={{pathname: '/terms'}}>Terms</Link>
      <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" >Contact</a>
    </header>
  </div>
  );
}

export default PrivacyPage;