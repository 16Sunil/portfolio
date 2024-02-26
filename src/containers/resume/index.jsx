import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { data } from "./utils"
import { VerticalTimeline } from "react-vertical-timeline-component";
const Resume = () => {
    return (
        <section id="resume" className="resume">

            <PageHeaderContent
                headerText="My Resume"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="timeline">
                <div className="timeline__project">
                    <h3 className="timeline__project__header-text">Project</h3>
                    <VerticalTimeline
                    layout={"1-column"}
                    lineColor="var(--yellow-theme-main-color)">
{
    data.project.map((item,i)=>{
        <VerticalTimeline>
            </VerticalTimeline>
    })
}
                    </VerticalTimeline>
                </div>
                <div className="timeline__education">
                    <h3 className="timeline__education__header-text">Education</h3>

                </div>
            </div>
        </section>
    )
}
export default Resume;