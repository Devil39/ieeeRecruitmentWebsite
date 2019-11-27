import React from 'react';

import './LandingPage.css';
import ieeeLogo from '../assets/IEEE new white.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';
import mainLandingText from '../assets/mainLandingText.svg';
import clickHere from '../assets/click here.svg';

class LandingPage extends React.Component{
    constructor(){
        super();
        this.state={
            showClick: false
        };
    }
    onHoverClick=()=>{
        //console.log("Clicked!");
        this.props.pageChange("form");
    }
    showClick=(a)=>{
        console.log(a);
        this.setState({showClick: a});
    }
    render(){
        return(
            <div>
                <div className="upperBox">
                    <div className="textInUpperBox">RECRUITMENTS</div>
                    <div className="ieeeLogoContainer">
                        <img id="ieeeLogo" src={ieeeLogo} alt="IEEE_LOGO"/>
                    </div>
                    <div className="sharingContainer">
                        <img id="facebookLogo" src={facebook} alt="FACEBOOK_LOGO"/>
                        <img id="instaLogo" src={insta} alt="INSTA_LOGO"/>
                    </div>
                </div>
                <div className="mainText" >
                    <div className="hoverBuddy" onClick={this.onHoverClick}>
                        <img id="mainTextSVG" src={mainLandingText} alt="" />
                        <img id="clickHereSVG" src={clickHere} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
/*onMouseLeave={this.showClick(false)}*/
/*onMouseOver={this.showClick(true)}*/