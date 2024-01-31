import React from "react";
import "./About.css";
import profilePic from "../../assets/images/About_my.jpg";
import Jump from 'react-reveal/Jump';

const About = () => {
    return (
        <>
            <Jump>
            <div class="container about">
                <div class="row about-box">
                    <div class="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                        <img className="" src={profilePic} alt="profile_pic" />
                    </div>
                    <div class="col-md-6 col-xl-7 col-lg-6 col-xs-12 about-content">
                        <h1>About Me</h1>
                        <p>
                            An enthusiastic and motivated fresher in Computer Science Engineering and wants to work in a firm with a professional work driven environment to utilize and apply my knowledge and skills which would enable me as a fresh graduate to grow while fulfilling organizational goals. </p>
                    </div>
                </div>
            </div>
            </Jump>
        </>
    )
}
export default About