import React from 'react';

import NarrativeContainer from './components/NarrativeContainer';
import InfoContainer from './components/InfoContainer';
import FeedbackContainer from './components/FeedbackContainer';
import HeaderContainer from './components/HeaderContainer';

import {parseMarkdownToDialogue} from './other/MessageList.js';
import defaultMd from "./other/default.js";

class App extends React.Component {
  //onupload -> parse md to dialogue -> populate narrative with dialogue
  //onHighlightChanged-> singleton highlighted msg -> change active thread
  
  constructor(props){
    super(props);
    this.state = {
      dialogue: null,
      currentHighlightedIndex: 0,
      hideSides: false
    };

    this.uploadDialogue = this.uploadDialogue.bind(this);
    this.toggleHideSidesState = this.toggleHideSidesState.bind(this);
  }

  uploadDialogue(dialogueFromUpload){
    this.setState({dialogue: dialogueFromUpload});
  }

  toggleHideSidesState()
  {
    this.setState({hideSides: !this.state.hideSides})
  }

  render() {
    //on first launch, prepopulate with default narrative
    if(this.state.dialogue == null)
    {
        var d = parseMarkdownToDialogue(defaultMd);
        this.setState({dialogue:d});
    }

    return (
      <div id = 'content' className='container'>

        <HeaderContainer isHideSides = {this.state.hideSides}/>
        
        <section id='left' className = {this.state.hideSides?'hiddenFade':'visibleFade'}>
          <InfoContainer uploadCallback={this.uploadDialogue}/>
        </section>

        <div id='middle'>
          <NarrativeContainer isHideSides = {this.state.hideSides} dialogue={this.state.dialogue} hideSidesCallback={this.toggleHideSidesState}/>
        </div>

        <section id='right' className = {this.state.hideSides?'hiddenFade':'visibleFade'}>
          <FeedbackContainer activeTab={2}/>
        </section>

      </div>

    )
  }
}
export default App;
