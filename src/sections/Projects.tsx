import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import shopImage from "@/assets/images/shop.jpeg";
import KanbasImage from "@/assets/images/Kanbas.png";
import KVStorage from "@/assets/images/kvstorage.jpeg";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Full-Stack Project",
    year: "2024",
    title: "High Performance Gaming Platform",
    introduction:
      "A robust gaming platform built with Spring Boot, showcasing scalability and high performance. This project demonstrates my ability to develop complex systems that can handle significant user loads while maintaining speed and efficiency. It incorporates modern technologies and best practices in backend development, database management, and frontend optimization.",
    technology: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Redis",
      "Message Queues",
      "AWS",
      "Webpack",
      "Distributed Transactions",
    ],
    results: [
      { title: "Scaled to support 10,000 concurrent users" },
      { title: "Achieved 3,000 transactions per second" },
      { title: "Reduced P99 latency to under 1 second" },
      { title: "Implemented multi-method secure authentication" },
      { title: "Optimized data storage with sharding and partitioning" },
      { title: "Improved data retrieval speed with Redis caching" },
      { title: "Enabled seamless distributed session management" },
      { title: "Enhanced frontend performance with Webpack" },
      { title: "Implemented dynamic resource loading" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: shopImage,
  },
  {
    company: "Distributed System",
    year: "2024",
    title: "Distributed KV Storage System",
    introduction:
      "A high-performance distributed Key-Value storage system built in Java, leveraging the Raft consensus algorithm to achieve strong consistency and high availability. This project demonstrates advanced distributed systems concepts, optimizations, and my ability to design scalable, fault-tolerant systems that maintain data integrity even in challenging network conditions.",
    technology: [
      "Java",
      "Raft Consensus Algorithm",
      "Distributed Systems",
      "WriteAhead Log",
      "Consistent Hashing",
      "RPC",
      "Docker",
      "Kubernetes",
    ],
    results: [
      { title: "Achieved 20,000 QPS for 4KB mixed read/write operations" },
      { title: "Maintained P99 latency of 800ms" },
      { title: "Implemented Raft consensus for strong consistency" },
      { title: "Enabled seamless horizontal scaling with consistent hashing" },
      {
        title:
          "Optimized read performance with asynchronous Apply, ReadIndex, and FollowerRead. ",
      },
      {
        title:
          "Reduced unnecessary leader elections by 80% by implememting Prevote mechanisms",
      },
      { title: "Decreased deployment time by 95% with containerization" },
      { title: "Reduced system downtime by 90% through automated failover" },
      { title: "Engineered dynamic data partitioning for load balancing" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: KVStorage,
  },
  {
    company: "Mern Stack Project",
    year: "2024",
    title: "Kanbas Course Management System",
    introduction:
      "A comprehensive educational platform built with React, Redux, and MongoDB, designed to streamline course management and registration for students and faculty. This project showcases my full-stack development skills, focusing on creating a scalable, user-friendly system with robust backend functionality.",
    technology: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Material-UI",
    ],
    results: [
      {
        title:
          "Developed a seamless course management interface with React and Redux",
      },
      {
        title:
          "Engineered a scalable multi-session backend using Node.js and Express.js",
      },
      {
        title: "Created automatic grading functionality to enhance efficiency",
      },
      { title: "Designed and implemented RESTful APIs for data management" },
      { title: "Optimized for real-time course creation and updates" },
      {
        title: "Deployed application across Netlify, Render, and MongoDB Atlas",
      },
      {
        title:
          "Streamlined course registration process for students and faculty",
      },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: KanbasImage,
  },
];

export const ProjectsSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="pb-16 lg:py-24">
      <div className="container max-w-[1500px] mx-auto">
        <SectionHeader
          title=""
          eyebrow="Feature Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        {/* <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p> */}
        <div className="flex flex-col mt-8 md:mt-14 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16 lg:min-h-[600px]"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="boarder-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    <li className="text-white/80 text-semibold font-serif text-base md:text-lg lg:text-lg ">
                      {project.introduction}
                    </li>
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      {/* <span>Technology Stack</span> */}
                      <div>{project.technology.join(" • ")}</div>
                    </div>
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/100 font-serif"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                    <button className="bg-white text-gray-950 ml-5 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300">
                      <span>Github Repo</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div >
                <div className="flex justify-center items-center mt-10 lg:mt-2 lg:mb-8">
                <div className="relative w-full h-0 pb-[139%] rounded-3xl overflow-hidden">
                    {/* Fixed size container */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-3xl"
                    />
                  </div>
                  </div>
                </div>
              
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
