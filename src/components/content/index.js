import React,{useState} from 'react';
import useStoreon from 'storeon/react';
import malala from '../../images/malala_yousafzai.png';
import likeIcon2 from '../../images/like_icon_2.png';
import likeIcon3 from '../../images/like_icon_3.png';
import likeIcon6 from '../../images/like_icon_6.png';
import likeIcon7 from '../../images/like_icon_7.png';
import unlikeIcon4 from '../../images/unlike_icon_4.png';
import unlikeIcon5 from '../../images/unlike_icon_5.png';
import './content.css';

const Content = () => {
  const { dispatch, peoples } = useStoreon('peoples');

  return (

    <div className="previous-rulings group">
    <p className="text-13">Votes</p>
    <div className="row-9 match-height group">
    {peoples && peoples.map((person) => (
    <div key={person.id} className="group-4" style={{ backgroundImage:`url(` + process.env.PUBLIC_URL + `${person.imageUrl})` }}>

        <div className="col-7">
        <div className="row-14 group">
            <div className="rectangle-2-copy-8-holder">
            <img className="rectangle-9-copy-17" src={likeIcon2} alt="" width="18" height="18"/>
            </div>
            <p className={ person.name.length < 20 ? 'text-14' : 'text-14 p-t-md' }>{person.name}</p>
        </div>
        <div className="row-14 group">
          <p className="text-16"><strong className="fw700">{person.ago} ago</strong> in {person.section}</p>
        </div>
        <p className="kanye-west-copy-2">{person.description}</p>
        
        <div className={person.voted == false ? 'row-18 group' : 'disabled'} >

        <div className={person.vote_indicator && person.vote_indicator.upvote  === true ? 'rectangle-2-copy-7-holder-v-blue pointer selected' : 'rectangle-2-copy-7-holder-v-blue pointer' } onClick={() => dispatch('peoples/votes', {id: person.id, upvote: true, downvote: false})}>
        <img className="rectangle-9-copy-17" src={likeIcon2} alt="" width="18" height="18"/>
        </div>
        <div className={ person.vote_indicator && person.vote_indicator.downvote === true ? 'rectangle-2-copy-7-holder-v-orange pointer selected' : 'rectangle-2-copy-7-holder-v-orange pointer' } onClick={() => dispatch('peoples/votes', {id: person.id, upvote: false, downvote: true})}>
            <img className="rectangle-9-copy-5" src={unlikeIcon5} alt="" width="18" height="18"/>
        </div>
        <div className={!person.vote_indicator || (person.vote_indicator.upvote == false && person.vote_indicator.downvote == false) ? 'path-copy-8-holder pointer-disabled' : 'path-copy-8-holder pointer' } onClick={() => dispatch('peoples/voted',{id:person.id, voted:true})}>
            Vote Now
        </div>            
        </div>

        <div className={person.voted == true ? 'row-18 group' : 'disabled'} >
            <div className="path-copy-8-holder-a pointer" onClick={() => dispatch('peoples/voted', {id:person.id,voted:false})}>
            Thanks for Voting!! - Click here to vote Again
            </div>
        </div>

        <div className="row-8 match-height group">
            <div className="rectangle-2-copy-holder group">
            <img className="rectangle-9-copy-3" src={likeIcon3} alt="" width="28" height="28"/>
            <p className="view-full-report-copy">{person.upVotes}<span className="text-style">%</span></p>
            </div>
            <div className="rectangle-2-copy-2-holder group">
            <img className="rectangle-9-copy-4" src={unlikeIcon4} alt="" width="28" height="28"/>
            <p className="view-full-report-copy-2">{person.downVotes}<span className="text-style">%</span></p>
            </div>
        </div>
        </div>
    </div>
    ))}
    {/* <div className="group-5">
        <div className="col-6">
        <div className="row-17 group">
            <div className="rectangle-2-copy-7-holder">
            <img className="rectangle-9-copy-5" src={unlikeIcon5} alt="" width="18" height="18"/>
            </div>
            <p className="kanye-west">Mark Zuckerberg</p>
        </div>
        <div className="row-14 group">
          <p className="text-16"><strong className="fw700">1 month ago</strong> in Entertainment</p>
        </div>
        <p className="text-17">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
        <div className="row-13 group">
            <div className="path-copy-10-holder">
            View Full Report
            </div>
        </div>
        <div className="row-7 match-height group">
            <div className="rectangle-2-copy-holder-2 group">
            <img className="rectangle-9-copy-3-2" src={likeIcon3} alt="" width="28" height="28"/>
            <p className="view-full-report-copy-3">36<span className="text-style">%</span></p>
            </div>
            <div className="rectangle-2-copy-2-holder-2 group">
            <img className="rectangle-9-copy-4-2" src={unlikeIcon4} alt="" width="28" height="28"/>
            <p className="view-full-report-copy-2-2">64<span className="text-style">%</span></p>
            </div>
        </div>
        </div>
    </div> */}
    </div>
    <div className="row-10 match-height group">
    {/* <div className="group-6">
        <div className="col-5">
        <div className="row-16 group">
            <div className="rectangle-2-copy-7-holder-2">
            <img className="rectangle-9-copy-5-2" src={unlikeIcon5} alt="" width="18" height="18"/>
            </div>
            <p className="kanye-west-2">Cristina Fernández de Kirchner</p>
        </div>
        <div className="row-14 group">
          <p className="text-16"><strong className="fw700">1 month ago</strong> in Entertainment</p>
        </div>
        <p className="text-20">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
        <div className="row-12 group">
            <div className="path-copy-11-holder">
            View Full Report
            </div>
        </div>
        <div className="row-6 match-height group">
            <div className="rectangle-2-copy-holder-3 group">
            <img className="rectangle-9-copy-3-3" src={likeIcon6} alt="" width="28" height="28"/>
            <p className="view-full-report-copy-4">36<span className="text-style">%</span></p>
            </div>
            <div className="rectangle-2-copy-2-holder-3 group">
            <img className="rectangle-9-copy-4-3" src={unlikeIcon4} alt="" width="28" height="28"/>
            <p className="view-full-report-copy-2-3">64<span className="text-style">%</span></p>
            </div>
        </div>
        </div>
    </div> */}
    {/* <div className="group-7">
        <div className="pics">
        <img className="layer-14" src={malala} alt="" width="492" height="550"/>
        </div>
        <div className="col-4">
        <div className="row-11 group">
            <div className="rectangle-2-copy-7-holder-3">
            <img className="rectangle-9-copy-5-3" src={likeIcon7} alt="" width="18" height="18"/>
            </div>
            <p className="kanye-west-3">Malala Yousafzai</p>
        </div>
        <div className="row-14 group">
          <p className="text-16"><strong className="fw700">1 month ago</strong> in Entertainment</p>
        </div>
        <p className="text-23">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
        <div className="row-15 group">
            <div className="path-copy-12-holder">
            View Full Report
            </div>
        </div>
        <div className="row-5 match-height group">
            <div className="rectangle-2-copy-holder-4 group">
            <img className="rectangle-9-copy-3-4" src={likeIcon3}alt="" width="28" height="28"/>
            <p className="view-full-report-copy-5">64<span className="text-style">%</span></p>
            </div>
            <div className="rectangle-2-copy-2-holder-4 group">
            <img className="rectangle-9-copy-4-4" src={unlikeIcon4} alt="" width="28" height="28"/>
            <p className="view-full-report-copy-2-4">36<span className="text-style">%</span></p>
            </div>
        </div>
        </div>
    </div> */}
    </div>
    <div className="add-a-name">
    <div className="row group">
        <p className="text-26">Is there anyone else you would want us to add?</p>
        <div className="path-copy-holder">
        Submit a Name
        </div>
    </div>
    </div>
</div>
    
  );
}

export default Content;
