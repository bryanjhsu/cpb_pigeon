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
		        	<Button id = "shareBtn" className = "button" bsStyle="primary" bsSize="small">
		        	Share
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
					  <li>Last Updated by: Bryan Hsu</li>
					  <li><br/></li>
					  <li>Last Comment: 7/2/2017</li>
					  <li>Last Comment by: Dana Buckhorn</li>
					  <li><br/></li>
					  <li>Approval Status: Pending </li>
					  <li>Approved on:  7/1/2017</li>
					  <li>Approved by: Steph Langan</li>
					</ul>
					<div id = "infoBtns">
						<Button id = "approveBtn" className = "button info" bsStyle="primary" bsSize="small">
			        	Approve Scenario
		       			 </Button>

		       			 <Button id = "exportBtn" className = "button info" bsStyle="primary" bsSize="small">
			        	Export File
		       			 </Button>

	       			 </div>
	        </div>

	        <hr/>

	        <div id = "adminContainer">
	        	<h1 className = "titleSmall">
	        	ADMIN
	        	</h1>

	        	Buttons

		    </div>

        </div>

        </div> 
      </div>
    );
  }
}

module.exports = InfoContainer;
