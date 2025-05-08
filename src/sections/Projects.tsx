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
    company: "Augmented Reality App",
    year: "2024",
    title: "Unity-Based AR Productivity Companion",
    introduction:
      "An immersive productivity mobile application built with Unity, blending interactive 3D characters with real-world context. The app adapts to the user’s local time and environment while supporting focus features like countdown timers and distraction pop-ups.",
    technology: [
      "Unity",
      "C#",
      "TextMeshPro",
      "Spline",
      "Mixamo",
      "AR Foundation"
    ],
    results: [
      { title: "Created animated 3D scenes with dynamic lighting based on local time" },
      { title: "Implemented countdown timers and pop-up modals to enhance focus" },
      { title: "Built pinch-to-zoom and drag-to-position AR object functionality" },
      { title: "Integrated spline and Mixamo assets to enable character movement" },
      { title: "Designed flexible UI transitions with TextMeshPro and touch events" }
    ],
    link: "",
    image: lightSaasLandingPage,
  },
  {
    company: "Cloud Security Architecture",
    year: "2024",
    title: "AWS Healthcare Infrastructure Design",
    introduction:
      "Designed a secure, HIPAA-compliant infrastructure for healthcare systems using AWS, with a focus on zero-trust principles and secure inter-VPC communication.",
    technology: [
      "AWS",
      "IAM",
      "VPC Peering",
      "AWS WAF",
      "Amazon RDS",
      "Network Firewall"
    ],
    results: [
      { title: "Implemented VPC segmentation and peering for access control" },
      { title: "Integrated AWS WAF and Network Firewall for traffic inspection" },
      { title: "Achieved HIPAA-aligned design using zero-trust architecture" },
      { title: "Encrypted RDS data for secure transactional operations" }
    ],
    link: "",
    image: darkSaasLandingPage,
  },
  {
    company: "Android App Challenge",
    year: "2021",
    title: "AI-Powered Nutrition Tracker",
    introduction:
      "Built an Android app to track dietary intake with machine learning capabilities, enabling users to identify food and calculate nutrition on-the-go.",
    technology: [
      "Kotlin",
      "Firebase ML Kit",
      "Android Studio",
      "Google Cloud",
      "Machine Learning"
    ],
    results: [
      { title: "Recognized top 100 foods using pretrained Firebase ML Kit models" },
      { title: "Implemented calorie and macro tracking with custom logic" },
      { title: "Worked in a team of 5 for development and UI/UX" },
      { title: "Participated in Google’s 2021 Solution Challenge" }
    ],
    link: "",
    image: aiStartupLandingPage,
  },
  {
    company: "Business Intelligence",
    year: "2023",
    title: "Career Services BI Database",
    introduction:
      "Designed and built a relational database from the ground up for the Office of Career Services, transitioning from Excel-based reports to an optimized MySQL system.",
    technology: [
      "MySQL",
      "ER Modeling",
      "Normalization",
      "Database Design"
    ],
    results: [
      { title: "Reduced data query time from 10 to 2 minutes" },
      { title: "Normalized database to 3NF for data integrity and scalability" },
      { title: "Designed schema with over 25 interrelated tables" }
    ],
    link: "",
    image: grainImage,
  },
  {
    company: "Student Marketplace",
    year: "2022",
    title: "UMD Virtual Marketplace Platform",
    introduction:
      "Developed a responsive web application for UMD students to buy and sell furniture, improving student life through peer-to-peer commerce.",
    technology: [
      "React.js",
      "Flask",
      "MySQL",
      "JavaScript",
      "Figma",
      "RESTful APIs"
    ],
    results: [
      { title: "Decreased page load time by 20% with optimized RESTful APIs" },
      { title: "Improved search efficiency by 30% with refined filtering logic" },
      { title: "Engaged 500+ students within the first month of launch" }
    ],
    link: "",
    image: shopImage,
  }
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
                      <span>Learn More</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                    {/* <button className="bg-white text-gray-950 ml-5 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300">
                      <span>Github Repo</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button> */}
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
