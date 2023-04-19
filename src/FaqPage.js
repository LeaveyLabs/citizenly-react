import './App.css';
import Faq from './Faq';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

function FaqPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <div className="Privacy-header">
        {/* <img src={privacyicon} alt="privacy" className='App-store-button' /> */}
        <Faq/>
      </div>

      <header className="App-footer">
        <Link  to={{pathname: '/'}}>Home</Link>
        <Link  to={{pathname: '/terms'}}>Terms</Link>
        <Link  to={{pathname: '/privacy'}}>Privacy</Link>
        <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" >Contact</a>
      </header>
  </div>
  );
}

export default FaqPage;