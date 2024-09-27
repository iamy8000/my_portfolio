"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book_cover.png";
import Image from "next/image";
import MyPhoto from "@/assets/images/myPhoto.jpeg";
import JavaIcon from "@/assets/icons/java.svg";
import Python from "@/assets/icons/python.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextJsIcon from "@/assets/icons/next-js.svg";
import Redux from "@/assets/icons/redux.svg";
import MongoDbIcon from "@/assets/icons/mongodb.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import AwsIcon from "@/assets/icons/aws.svg";
import GCPIcon from "@/assets/icons/google-cloud.svg";
import JenkinsIcon from "@/assets/icons/jenkins.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import K8sIcon from "@/assets/icons/kubernetes.svg";
import Redis from "@/assets/icons/redis.svg";
import Kafka from "@/assets/icons/kafka.svg";
import RocketMQ from "@/assets/icons/rocketmq.svg";
import Git from "@/assets/icons/git.svg";
import Maven from "@/assets/icons/maven.svg";
import Mysql from "@/assets/icons/mysql.svg";
import Linux from "@/assets/icons/linux.svg";
import Spring from "@/assets/icons/spring.svg";
import mapImage from "@/assets/images/mymap.png";
import smileMemoji from "@/assets/images/memoji_me.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import { EducationAndExperienceSection } from "./Experiences";

const toolboxItems = [
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "Python",
    iconType: Python,
  },
  {
    title: "Linux",
    iconType: Linux,
  },
  {
    title: "Javascript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: NextJsIcon,
  },
  {
    title: "Redux",
    iconType: Redux,
  },
  {
    title: "MongoDB",
    iconType: MongoDbIcon,
  },
  {
    title: "Spring",
    iconType: Spring,
  },

  {
    title: "AWS",
    iconType: AwsIcon,
  },
  {
    title: "GCP",
    iconType: GCPIcon,
  },
  {
    title: "Jenkins",
    iconType: JenkinsIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "Kubernetes",
    iconType: K8sIcon,
  },
  {
    title: "Redis",
    iconType: Redis,
  },
  {
    title: "Kafka",
    iconType: Kafka,
  },
  {
    title: "RocketMQ",
    iconType: RocketMQ,
  },
  {
    title: "Git",
    iconType: Git,
  },
  {
    title: "Maven",
    iconType: Maven,
  },
  {
    title: "MySQL",
    iconType: Mysql,
  },
];

const hobbies = [
  {
    title: "Travel",
    emoji: "🗿",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "⛰️",
    left: "10%",
    top: "35%",
  },
  {
    title: "Cooking",
    emoji: "🥘",
    left: "35%",
    top: "40%",
  },
  {
    title: "Tennis",
    emoji: "🎾",
    left: "70%",
    top: "45%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "5%",
    top: "65%",
  },
  {
    title: "Coffee",
    emoji: "☕️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = ({ id }: { id: string }) => {
  const constraintsRef = useRef(null);

  return (
    <div id={id} className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title=""
          eyebrow="About Me"
          description="Know about me, my skills, interests, and what inspires me."
        />

        <div className="mt-14 flex flex-col gap-8 ">
        <Card className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 relative h-[300px] md:h-auto">
              <Image
                src={MyPhoto}
                alt="My photo"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
              />
            </div>
            <div className="md:w-2/3 p-6 md:p-8">
              <h2 className="text-2xl font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text mb-2 ">About Me</h2>
              <div className="space-y-4 text-gray-200 font-semibold">
                <p>
                  I am a Master's student in Computer Science at Northeastern University, Class of 2025, actively
                  seeking a junior software engineer position. I am passionate about building robust, scalable, high-
                  performance distributed systems. Currently, as a Software Engineer Intern at AI Roboto Edu, I
                  develop and optimize scalable frontend and backend systems to enhance performance, security,
                  and efficiency for an online educational platform.
                </p>
                <p>
                  Driven by a fascination with creating efficient systems, I have hands-on experience with distributed
                  systems, leveraging CI/CD pipelines and cloud technologies. I developed a high-performance
                  online gaming platform using Spring Boot and Webpack, optimizing for concurrent processing and caching.
                  I created a distributed key-value storage system, achieving 20,000 QPS with Raft
                  consensus and consistent hashing.
                </p>
                <p>
                  Outside of work, I am an avid traveler, tennis lover, and photographer, having backpacked to 22 countries,
                  immersing myself in diverse cultures and cuisines. I am proficient in Mandarin, with conversational skills
                  in Spanish and Japanese.
                </p>
              </div>
            </div>
          </div>
        </Card>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div
                className="w-40 mx-auto mt-2 md:mt-0"
                style={{ width: "280px", height: "200px" }}
              >
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintsRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300  to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintsRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 
                rounded-full  after:content-[''] 
                after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30 "
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10">
                  {" "}
                </div>
                <Image
                  src={smileMemoji}
                  alt="smiling emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
