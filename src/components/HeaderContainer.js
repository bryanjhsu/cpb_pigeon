
import React from 'react';

class HeaderContainer extends React.Component {

  render() {   

    return(
      //after turning md into ll, go through ll and turn to messages
      <div className = 'header'>
      	<div className = 'pageHeader' id = "topHeader" > 
      		<img id="app_logo" src = "./assets/misc/pigeon.png" alt="Pigeon"/>
      		<p id="app_title"> PIGEON</p>
      		<span id="headerButtons">
	      		<img id="settings" className = "headerButton" src ="./assets/icons/settings.png" alt="Settings"/>
	      		<img id="user" className = "headerButton" src ="./assets/icons/user.png" alt="User Profile"/>
      		</span>
      	</div>

      	<div className = 'pageHeader' id = "bottomHeader">
      	 	<p className = 'headerTxt'>HOME</p> <p className="carrot">></p>
      	 	<img id="brand_logo" src = "./assets/dominos/logo_dominos.png" width="20" alt="Domino's"/>
      	 	 DOMINO'S <p className="carrot">></p> 
           FULL ORDERING <p className="carrot">></p>
           GOOGLE HOME
      	 </div>

      	 <hr className = 'headerSeparator'/>
      </div>
    );
  }
}

export default HeaderContainer;

