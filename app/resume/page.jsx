"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget suscipit risus, vel semper nulla. Proin blandit sed diam sed interdum. Nullam finibus magna ipsum. Curabitur metus arcu",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Trust Adekoye",
    },
    {
      fieldName: "Phone",
      fieldValue: "+234 90 384 76802",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "trustadekoye@gmail.com",
    },
    {
      fieldName: "Skills",
      fieldValue:
        "Python, JavaScript, HTML, CSS, Tailwind CSS, React, Node.js, Next.js, Firebase",
    },
  ],
};

// experience data
const experience = {
  icon: "/",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget suscipit risus, vel semper nulla. Proin blandit sed diam sed interdum. Nullam finibus magna ipsum. Curabitur metus arcu",
  items: [
    {
      company: "Tech Solutions Inc.",
      potition: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Tech Solutions Inc.",
      potition: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Tech Solutions Inc.",
      potition: "Full Stack Developer",
      duration: "2022 - Present",
    },
  ],
};

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
