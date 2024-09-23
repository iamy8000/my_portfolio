import React from 'react';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

const educationData = [
  {
    degree: "Master in Computer Science",
    institution: "Northeastern University",
    location: "Boston, MA",
    year: "2022 - Present",
    details: [
      "GPA: 3.8/4.0",
      "Relevant coursework: Web Development, Data Structures, Algorithms, Database Systems"
    ]
  },
  {
    degree: "Master in Chemical Oceanography",
    institution: "National Taiwan University",
    location: "Taipei, Taiwan",
    year: "2019 - 2022",
    details: [
      "GPA: 3.9/4.0",
    ]
  },
  {
    degree: "Bachelor in Geosciences",
    institution: "National Taiwan University",
    location: "Taipei, Taiwan",
    year: "2013 - 2017",
    details: [
      "GPA: 3.7/4.0",
    ]
  },
  
];

const experienceData = [
  {
    position: "Full Stack Engineer Intern",
    company: "AI Roboto Edu",
    location: "Los Angeles, CA",
    period: "April 2024 - Present",
    responsibilities: [
      "Develop and maintain responsive web applications using React and Next.js",
      "Collaborate with UX designers to implement intuitive user interfaces",
      "Optimize application performance, resulting in a 40% improvement in load times",
      "Participate in code reviews and mentor junior developers"
    ]
  },
];

const SectionTitle = ({ title }) => (
  <h2 className="font-serif text-2xl md:text-3xl mb-6 pb-2 border-b-2 border-emerald-500">
    {title}
  </h2>
);

const EducationEntry = ({ degree, institution, location, year, details }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold">{degree}</h3>
    <p className="text-lg">{institution}, {location}</p>
    <p className="text-emerald-400">{year}</p>
    <ul className="space-y-1">
      {details.map((detail, index) => (
        <li key={index} className="text-white/70 pl-5 relative">
          <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
          {detail}
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceEntry = ({ position, company, location, period, responsibilities }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold">{position}</h3>
    <p className="text-lg">{company}, {location}</p>
    <p className="text-emerald-400">{period}</p>
    <ul className="space-y-1">
      {responsibilities.map((responsibility, index) => (
        <li key={index} className="text-white/70 pl-5 relative">
          <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
          {responsibility}
        </li>
      ))}
    </ul>
  </div>
);

export const EducationAndExperienceSection = ({id}:{id:string}) => {
  return (
    <section id={id} className="py-16 lg:py-24">
      <div className="container">
      <SectionHeader
          title=""
          eyebrow="Education & Experiences"
          description="A comprehensive overview of my academic background and professional journey."
        />
        
        <div className="text-center mb-12">
          
          {/* <h1 className="font-serif text-4xl md:text-5xl mb-4 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Education & Experiences
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A comprehensive overview of my academic background and professional journey.
          </p> */}
        </div>
        
        <Card className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionTitle title="Education" />
              {educationData.map((edu, index) => (
                <EducationEntry key={index} {...edu} />
              ))}
            </div>
            
            <div>
              <SectionTitle title="Professional Experiences" />
              {experienceData.map((exp, index) => (
                <ExperienceEntry key={index} {...exp} />
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};