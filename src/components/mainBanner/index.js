import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PastTrials from '../pages/past-trials/index';
import HowItWorks from '../pages/how-it-works/index';
import LogIn from '../pages/log-in/index';
import searchIcon from '../../images/search_icon.png';
import likeIcon from '../../images/like_icon.png';
import unlikeIcon from '../../images/unlike_icon.png';
import wikiIcon from '../../images/wiki.png';
import './main-banner.css';

function mainBanner() {
  return (

        <div className="pope">
        <Router>
        <div className="rectangle-8-holder">
        <div className="header group">
        <a href="/"><p className="text">Rule of Thumb.</p></a>
        <img className="composite-path" src={searchIcon} alt="" width="24" height="26"/>
        <Link to="/login"><p className="how-it-works">Log In / Sign Up</p></Link>
        <Link to="/works"><p className="past-trials">How It Works</p></Link>
        <Link to="/past"><p className="text-2">Past Trials</p></Link>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/past">
            <PastTrials />
          </Route>
          <Route path="/works">
            <HowItWorks />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
        </Switch>
        </div>
        </Router>
        <div className="l-constrained-2">
            <div className="group-3">
              <div className="col">
                <p className="text-3">What’s your opinion on</p>
                <p className="text-4">Pope Francis?</p>
                <p className="text-5">He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
                <div className="more-info group">
                  <img className="wiki" src={wikiIcon} alt="" width="16" height="12"/>
                  <p className="text-6"><a href="https://en.wikipedia.org/wiki/Pope_Francis">More information</a></p>
                </div>
                <p className="text-7">What’s Your Verdict?</p>
              </div>
            </div>
            <div className="wrapper-10">
              <div className="rectangle-1"></div>
              <div className="rectangle-1-copy"></div>
              <div className="thumbs-2 group">
                <img className="rectangle-9-copy" src={likeIcon} alt="" width="36" height="37"/>
                <img className="rectangle-9-copy-2" src={unlikeIcon} alt="" width="36" height="38"/>
              </div>
            </div>

          </div>
          <div className="closing">
            <div className="l-constrained-3 group">
              <p className="text-8">CLOSING IN</p>
              <div className="polygon-2-holder">
                <span className="fw400">22 </span>days
              </div>
            </div>
          </div>
        </div>
  );
}

export default mainBanner;
