
import React from 'react';
import { Button } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip'

import {parseMarkdownToDialogue} from '../other/MessageList.js';

class InfoContainer extends React.Component {

  constructor() {
    super();
    this.onUploadMarkdown = this.onUploadMarkdown.bind(this);

  }

  onUploadMarkdown(event)
  {
    var file = event.target.files[0];

    var reader = new FileReader();


    function sendDialogueToParent(dialogue)
    {
       this.props.uploadCallback(dialogue);
    }
    sendDialogueToParent = sendDialogueToParent.bind(this);

    reader.onload = function(e) {
        var file = this.result;

        var dialogue = parseMarkdownToDialogue(file);
        //send dialogue to parent
        sendDialogueToParent(dialogue);

    }
    reader.readAsText(file);
  }

  uploadFile(){
  	let dialogue;
  	//file select -> turn markdown to dialogue var
  	this.props.uploadCallback(dialogue)
  }

  render() {   

  	let describeText = 
  	"A guest user invokes Domino's using Google Home. After proceeding through location services, they"
  	+" place a full order. Simple product and ingredient choices are used to streamline the ordering narrative."
  	let describeText2= "";
    return(
      //after turning md into ll, go through ll and turn to messages
      <div className = {"wrapper "+(this.props.isHideSides?" hiddenFade":" visibleFade")}>
	    <div id='leftContainer'>
	        <div id = "scenarioContainer">

	        	<div>
		        	<h1 className = "title">
		        	GOOGLE HOME
		        	</h1>
		        	<Button data-tip data-for='shareTip'id = "shareBtn" className = "button btnHover" bsStyle="primary" bsSize="small">
		        	Share
		        	<img id = "shareIcon" src="./assets/icons/share.png" width="12" /> 
	       			 </Button>
	       			 <ReactTooltip id='shareTip' place='right' effect='solid' type='info'>
					  <div className="tip">Distribute / share for review & approval </div>
					</ReactTooltip>
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
					  <img className = "userImg" src="./assets/misc/user1.png" width="20"/>
					  Bryan Hsu </li>
					  <li><br/></li>
					  <li>Last Comment: 7/2/2017</li>
					  <li>Last Comment by: 
					  <img className = "userImg" src="./assets/misc/user2.png" width="20"/>
					  Dana Buckhorn</li>
					  <li><br/></li>
					  <li>Approval Status: Pending </li>
					  <li>Approved on:  7/1/2017</li>
					  <li>Approved by: 
					  <img className = "userImg" src="./assets/misc/user4.png" width="20"/>
					  Emma Davis</li>
					</ul>
					<div id = "infoBtns">
						

		       			 <Button data-tip data-for='newTip' id = "exportBtn" className = "button btnHover info" bsStyle="primary" bsSize="small">
			        	Approve Scenario
		       			 </Button>
		       			  <ReactTooltip id='newTip' place='bottom' effect='solid' type='info'>
						  <div className="tip">Approve current scenario for production. </div>
						</ReactTooltip>

		       			 <Button data-tip data-for='exportTip' id = "exportBtn" className = "button btnHover info" bsStyle="primary" bsSize="small">
			        	Export File
		       			 </Button>
		       			 <ReactTooltip id='exportTip' place='bottom' effect='solid' type='info'>
						  <div className="tip">Download the conversation as a markdown file for editing. </div>
						</ReactTooltip>

	       			 </div>
		        </div>


	        </div>


		        <hr/>

	        <div id = "adminContainer"  data-tip data-for='adminTip'>
	        	<h1 className = "titleSmall">
	        	ADMIN
	        	</h1>

	        	<div id = "infoBtns">
	        		
						<span className ="adminBtn btnHover" >
						<label id="uploadLabel" htmlFor="file-input">
							Upload New File
							<img className = "adminIcon" src="./assets/icons/upload.png" width="8" /> 
							<input id="file-input" type="file" onChange={this.onUploadMarkdown}/>
						</label>
						</span>
					
					<span className ="adminBtn btnHover">
						New Scenario
						<img className = "adminIcon" src="./assets/icons/new.png" width="8" /> 
					</span>

					<span className ="adminBtn btnHover">
						Delete Scenario
						<img className = "adminIcon" src="./assets/icons/delete.png" width="8" /> 
					</span>
					

	       		</div>

	       		
		    </div>
		    <ReactTooltip id='adminTip' place='top' effect='solid' type='info'>
			  <div className="tipBig">Dialogue admin controls to upload, create, and delete scenarios. </div>
			</ReactTooltip>

        </div> 
      </div>
    );
  }
}

export default InfoContainer;
