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
      "Developed APIs with Spring Boot and improved MySQL performance by refining queries and adding indexes, cutting response times by 15%.",
      "Integrated Redis for caching and Elasticsearch for course search, boosting performance and functionality.",
      "Designed a visually appealing and high-responsive front-end UI with Next.js and Material UI, enhancing user experience and engagement.",
      "Optimized state management using Redux, cutting API calls by 30% and boosting data retrieval speed by 20%",
      "Implemented a CI/CD pipeline with GitHub Actions, streamlining development and deployment efficiency.",
      "Enhanced data management using Amazon RDS for transactional data and S3 for course media, balancing performance requirements with cost-effectiveness."
    ]
  },
];


const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="font-serif text-2xl md:text-3xl mb-4 pb-2 border-b-2 border-sky-300">
    {title}
  </h2>
);

interface EducationEntryProps {
  degree: string;
  institution: string;
  location: string;
  year: string;
  details: string[];
}

const EducationEntry: React.FC<EducationEntryProps> = ({ degree, institution, location, year, details }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold">{degree}</h3>
    <p className="text-lg mb-1">{institution}, {location}</p>
    <p className="text-sky-300 mb-1">{year}</p>
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

interface ExperienceEntryProps {
  position: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({ position, company, location, period, responsibilities }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold">{position}</h3>
    <p className="text-lg mb-1">{company}, {location}</p>
    <p className="text-sky-300 mb-1">{period}</p>
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

interface EducationAndExperienceSectionProps {
  id: string;
}

export const EducationAndExperienceSection: React.FC<EducationAndExperienceSectionProps> = ({id}) => {
  return (
    <section id={id} className="py-16 lg:py-24">
      <div className="container">
      <SectionHeader
          title=""
          eyebrow="Education & Experiences"
          description="A comprehensive overview of my academic background and professional journey."
        />
        
        <Card className="p-8 md:p-12 mt-14">
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