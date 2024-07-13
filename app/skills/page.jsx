"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCss3, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiDjango,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiNextdotjs,
} from "react-icons/si";

// about me data
const about = {
  title: "Data Scientist || Software Developer",
  description: [
    "Data Scientist during the day, software developer at night, I'm always basically on the computer.",
    "If you don't find me with my system, then I'm in a basketball court shooting for threes or going up agianst Steph Curry!",
    "I'm a lifelong learner and I'm always looking for new ways to grow and improve my skills.",
  ],
};

// skills data
const skills = {
  title: "Skills",
  description: "Some technolgies I've been working with recently",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiDjango />,
      name: "django",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiFirebase />,
      name: "firebase",
    },
    {
      icon: <SiFigma />,
      name: "figma",
    },
    {
      icon: <SiGithub />,
      name: "github",
    },
  ],
};

import {
  Tabs,
  TabsConcent,
  TabList,
  TabsTrigger,
  TabsList,
  TabsContent,
} from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* about me */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <div className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description.map((paragraph, index) => (
                    <p key={index} className="mb-6 text-[14px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-[14px]">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Skills;
