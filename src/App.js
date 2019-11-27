import React from 'react';
import './App.css';
import Form from './Form.js';
import LandingPage from './LandingPage/LandingPage.js';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      page: "landing"
    };
  }
  pageChange=(a)=>{
    //console.log("Here! "+a);
    if(a==="landing"){
      this.setState({page: "landing"});
    }
    else if(a==="form"){
      this.setState({page: "form"});
    }
  }
  render(){
    return (
      <div className="mainPageContainer">
        {
          this.state.page==='landing'?
          <LandingPage pageChange={this.pageChange}/>
          :
          <Form />
        }
      </div>
    );
  }
}
export default App;
