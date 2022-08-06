import React from "react";
import { IoCodeWorking } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { bioData } from "../Data";

const Experience = () => {
  return (
    <section className="w-full flex items-center justify-center ">
      <VerticalTimeline>
        {bioData &&
          bioData.map((n) => (
            <VerticalTimelineElement
              key={n.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(21,24,31)", color: "#888" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(21,24,31)",
              }}
              date={n.date}
              iconStyle={{ background: "rgb(21,24,31)", color: "#888" }}
              icon={<IoCodeWorking />}
            >
              <h3 className="vertical-timeline-element-title">{n.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {n.location}
              </h4>
              <p>{n.description}</p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
