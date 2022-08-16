import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from "react-icons/io5";
import CoronaTracker from "./images/ProjectImages/CoronTracker.jpeg";
import Drumkit from "./images/ProjectImages/drumkit.png";
import KeepApp from "./images/ProjectImages/keepApp.png";
import Markdown from "./images/ProjectImages/markdown.png";
import QuizApp from "./images/ProjectImages/QuizApp.png";
import TweetApp from "./images/ProjectImages/TweetApp.png";

import Nsutlogo from "./images/nsutlogo.png";
import Schoollogo from "./images/download-modified.png";
import Internlogo from "./images/intern.jpg";

export const Experience = [
  {
    id: 1,
    date: "March 2022 - April 2022",
    iconsSrc: (
      <img
        className=" object-scale-down  bg-slate-50  rounded-full"
        src={Internlogo}
        alt="logo"
      />
    ),
    title: "The Sparks Foundation",
    field: "Web Developer Intern",
    description:
      "In this internship, I have made a project on the Basic Banking system using React JS,Bootstrap and Firebase.",
  },
  {
    id: 2,
    date: "2019-Present",
    iconsSrc: <img src={Nsutlogo} alt="logo" />,
    title: "NSUT EAST CAMPUS (AIACT&R)",
    field: "B.Tech in ECE",
    description:
      "I am currently in my fourth year pursuing B.tech in ECE from NSUT East Campus. I have overall 8.2 CGPA of seven semisters.",
  },
  {
    id: 3,
    date: "2017-2018",
    iconsSrc: <img src={Schoollogo} alt="logo" />,
    title: "Government Boy's Senior Secondary",
    field: "Higher Secondary(12th)",
    description:
      "I completed my 12th in 2018 from CBSE Board. I got overall 79%.",
  },
  {
    id: 4,
    date: "2015-2016",
    iconsSrc: <img src={Schoollogo} alt="logo" />,
    title: "Government Boy's Senior Secondary",
    field: "Secondary School(10th)",
    description:
      "I completed my 10th in 2016 from CBSE Board. I got overall 7.8 CGPA.",
  },
];

export const Gitprojects = [
  {
    id: 1,
    name: "Corona Virus Tracker",
    imageSrc: CoronaTracker,
    techs: "React Js, Bootstrap, CSS3",
    Deploy: "https://corona-virus-tracker-mauve.vercel.app",
    github: "https://github.com/jztlucky6264/CoronaVirusTracker",
  },
  {
    id: 2,
    name: "Quiz App",
    imageSrc: QuizApp,
    techs: "React Js, Bootstrap",
    Deploy: "https://quizapp-sigma.vercel.app/",
    github: "https://github.com/jztlucky6264/Quizapp",
  },
  {
    id: 3,
    name: "Tweet App",
    imageSrc: TweetApp,
    techs: "React Js, Google API",
    Deploy:
      "https://62fbe5bbe202a64278d78081--cheerful-monstera-0f3198.netlify.app/",
    github: "https://github.com/jztlucky6264/tweet_app",
  },
  {
    id: 4,
    name: "Mark Down Editor",
    imageSrc: Markdown,
    techs: "React Js, CSS3",
    Deploy: "https://mark-down-editor-beta.vercel.app/",
    github: "https://github.com/jztlucky6264/MarKdownEditor",
  },
  {
    id: 5,
    name: "Drum Kit Game",
    imageSrc: Drumkit,
    techs: "Javascript, Html, Css3",
    Deploy: "https://drumkitmusic.vercel.app/",
    github: "https://github.com/jztlucky6264/Drumkit",
  },
  {
    id: 6,
    name: "Keep App",
    imageSrc: KeepApp,
    techs: "React JS, Firebase ",
    Deploy: "https://keepapp.vercel.app",
    github: "https://github.com/jztlucky6264/keepapp",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "Github",
    link: "https://github.com/jztlucky6264",
  },
  {
    id: 2,
    iconSrc: (
      <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer " />
    ),
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCmA-y6wsBwBGDeBbFGlEIuw",
  },
  {
    id: 3,
    iconSrc: <IoLogoTwitter className="text-blue-500 text-3xl " />,
    name: "Twitter",
    link: "https://twitter.com/home",
  },
  {
    id: 4,
    iconSrc: <IoLogoLinkedin className="text-blue-800 text-3xl " />,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/durga-prasad-19b6851b7/",
  },
  {
    id: 5,
    iconSrc: <IoLogoWhatsapp className="text-green-500 text-3xl " />,
    name: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=918178872928&text=Hello Durga Prasad!",
  },
];
