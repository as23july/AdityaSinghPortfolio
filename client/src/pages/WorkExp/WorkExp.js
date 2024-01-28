import React from 'react'
import "./WorkExp.css";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const WorkExp = () => {
    return (
        <>
            <div class="container work">
                <div class="work-exp">
                    <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">Work Experience</h1>
                    <hr />
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="June 2022 - August 2022"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<MdOutlineDeveloperMode />}
                        >
                            <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">Infinite Solar Power Solution</h4>
                            <ol>
                            <li><p>
                                Developed a website which show all the product of that company.
                            </p></li>
                            <li><p>Developed front-end components according to the User interface guidelines.</p></li>
                            <li><p>Anyone can inquire about the product with the help of javascript mail services.</p></li>
                            <li><p>It counts number of visit on site and it is hosted on Godaddy and Github.</p></li>
                            </ol>
                            <div class="project1-button text-center">
                                <a href="https://drive.google.com/file/d/1lwfNtNPuH6o0AFqd7lvj-vR4JOkUbsn1/view?usp=drive_link" class="ad-btn">Certificate</a>
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </>
    )
}

export default WorkExp