var React = require('react');
var ReactDOM = require('react-dom');

import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';

class InfoContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {   

  	let describeText = 
  	"Informed user asks for the $5.99 Mix & Match coupon before adding any food items." 
  	+" User Completes the coupon and immediately proceeds to checkout.";
  	let describeText2= 
  	"Alternate copy options included addressing varying levels of coupon guidance. A.1a, A.1b";

    return(
      //after turning md into ll, go through ll and turn to messages
      <div className = 'wrapper'>
	    <div id='leftContainer'>

	        <div id = "scenarioContainer">

	        	<div>
		        	<h1 className = "title">
		        	A.1 HAPPY PATH
		        	</h1>
		        	<Button id = "shareBtn" className = "button btnHover" bsStyle="primary" bsSize="small">
		        	Share
		        	<img id = "shareIcon" src="/public/assets/icons/share.png" width="12" /> 
	       			 </Button>
       			 </div>
		        <div className="describeText" id = "scenarioDescribe">
		        {describeText}<br/><br/>{describeText2}
		        </div>
		    </div>
		    <hr/>
	        <div id = "infoContainer">
			    <h1 className = "title">
		        	INFO
		        	</h1>
			    <div className="describeText" id = "infoDescribe"> 
				   	 <ul id="infoList">
					  <li>Last Updated: 7/1/2017</li>
					  <li>Last Updated by: 
					  <img className = "userImg" src="/public/assets/misc/user1.png" width="20"/>
					  Bryan Hsu </li>
					  <li><br/></li>
					  <li>Last Comment: 7/2/2017</li>
					  <li>Last Comment by: 
					  <img className = "userImg" src="/public/assets/misc/user2.png" width="20"/>
					  Dana Buckhorn</li>
					  <li><br/></li>
					  <li>Approval Status: Pending </li>
					  <li>Approved on:  7/1/2017</li>
					  <li>Approved by: 
					  <img className = "userImg" src="/public/assets/misc/user4.png" width="20"/>
					  Emma Davis</li>
					</ul>
					<div id = "infoBtns">
						<Button id = "approveBtn" className = "button btnHover info" bsStyle="primary" bsSize="small">
			        	Approve Scenario
		       			 </Button>

		       			 <Button id = "exportBtn" className = "button btnHover info" bsStyle="primary" bsSize="small">
			        	Export File
		       			 </Button>

	       			 </div>
	        </div>

	        <hr/>

	        <div id = "adminContainer">
	        	<h1 className = "titleSmall">
	        	ADMIN
	        	</h1>

	        	<div id = "infoBtns">
					<span className ="adminBtn btnHover">
						Upload New File
						<img className = "adminIcon" src="/public/assets/icons/upload.png" width="8" /> 
					</span>

					<span className ="adminBtn btnHover">
						New Scenario
						<img className = "adminIcon" src="/public/assets/icons/new.png" width="8" /> 
					</span>

					<span className ="adminBtn btnHover">
						Delete Scenario
						<img className = "adminIcon" src="/public/assets/icons/delete.png" width="8" /> 
					</span>
					

	       		</div>
		    </div>

        </div>

        </div> 
      </div>
    );
  }
}

module.exports = InfoContainer;
