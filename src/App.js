import React, { Component} from 'react';
import Timer from './components/timer';
import Caller from './components/caller';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          inCall: false,
      }
  }
  
  handleCallRequest() {
      this.setState({
          inCall: true,
          callStartedDT: new Date().toISOString(),
      });
  }

  handleHangUpCall(event){
      this.setState({
          inCall: false,
          callStartedDT: null,
      });
  }

  render() {
      return (
        <div className="App">
          <Caller makeCall={() => this.handleCallRequest()} 
            inCall={this.state.inCall}
            hangUpCall={() => this.handleHangUpCall()}/>
          {this.state.inCall ? <Timer actuallyDate={this.state.callStartedDT}/>
            : null}
        </div>
      );
  };
}

export default App;
