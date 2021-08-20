import React from 'react';

function TicketInput () {
    return (<div/>);
  }

  export default TicketInput;

/*class App extends React.Component {
    // 1. Create some initial state
    constructor(props) {
      super(props);
  
      this.state = {
        titleNum: 1,
        renewNum: 1,
        otherNum: 1,
        total: [],
        manageState: false,
        manageMessage: ""
      };
    }
  // Logic for adding to queque
  
    titleCount = () => {
      //sets number
      this.setState({ titleNum: this.state.titleNum + 1 });
      if (this.state.titleNum === 100) {
        this.setState({ titleNum: (this.state.titleNum = 1) });
      }
      //creates string obj for print and stores to array
      var titleStr = "T" + this.state.titleNum;
      this.setState({ total: [...this.state.total, titleStr] });
    };
  
    renewCount = () => {
      this.setState({ renewNum: this.state.renewNum + 1 });
      if (this.state.renewNum === 100) {
        this.setState({ renewNum: (this.state.renewNum = 1) });
      }
      var renewStr = "R" + this.state.renewNum;
      this.setState({ total: [...this.state.total, renewStr] });
    };
  
    otherCount = () => {
      this.setState({ otherNum: this.state.otherNum + 1 });
      if (this.state.otherNum === 100) {
        this.setState({ otherNum: (this.state.otherNum = 1) });
      }
      var otherStr = "O" + this.state.otherNum;
      this.setState({ total: [...this.state.total, otherStr] });
    };
    resetCount = () => {
      this.setState({ total: [] });
      this.setState({ titleNum: (this.state.titleNum = 1) });
      this.setState({ renewNum: (this.state.renewNum = 1) });
      this.setState({ otherNum: (this.state.otherNum = 1) });
    };
  
  // logic for mananging queque
  // some form of even listener is needed to switch between waiting and next
    mangmentWaiting = () => {
      window.addEventListener(this.state.total.length > 1, (event) => {
  
      });
    }
    managmentNext = () => {
      this.state.total.length === 0 
          ? this.state.manageMessage = "waiting" 
          : this.state.manageMessage = "next";
      if (this.state.manageMessage === "next") {
          this.state.manageState = true;
          this.state.manageMessage = this.state.total[0];
      }
          
          
    };
  
    managmentState = () => {
  
    };
  
    render() {
      return (
        <div className="App-header">
          <h3>Welcome to the Wait Management kiosk</h3>
          <div>
            <button className="btn btn-circle btn-xl" onClick={this.titleCount}>
              Title
            </button>
            <button className="btn btn-circle btn-xl" onClick={this.renewCount}>
              Renew
            </button>
            <button className="btn btn-circle btn-xl" onClick={this.otherCount}>
              Other
            </button>
          </div>
          <div className="row">
            <button onClick={this.resetCount}>Reset</button>
            <p>title: {this.state.titleNum - 1} </p>
            <p>renew: {this.state.renewNum - 1} </p>
            <p>other: {this.state.otherNum - 1} </p>
            <p>total waiting: {this.state.total.length} </p>
          </div>
          <div className="row">
          
            <button
              className="btn btn-circle btn-xl"
              onClick={this.state.manageState ? this.managmentState : this.manageNext}>
              {this.state.total.length === 0 ? (
                <div>Waiting</div>
              ) : (
                <div>next</div>
              )}
            </button>
      
          </div>
          <div className="row">
            <p>{this.state.total}</p>
          </div>
        </div>
      );
    }
  }
  */