import React from 'react';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

const educationData = [
  {
    degree: "Master of Information Management",
    institution: "University of Maryland",
    location: "College Park, MD",
    year: "2022 - 2024",
    details: [
      "Relevant coursework: Web Development, Database Design, Data Science, Machine Learning, Natural Language Processing",
    ]
  },
  {
    degree: "Bachelor of Arts in Advertising and Public Relations",
    institution: "Fu Jen Catholic University",
    location: "Taipei, Taiwan",
    year: "2013 - 2017",
    details: [
      // "GPA: 3.2/4.0",
    ]
  },
];

const experienceData = [
  {
    position: "Frontend Engineer Intern",
    company: "Tymeline",
    location: "Remote",
    period: "Aug 2024 – Present",
    responsibilities: [
      "Built and styled dynamic UI components for an AI-powered performance and project management platform using React.js and MUI.",
      "Integrated React Hook Form and Playwright to enhance form handling and test automation across features.",
      "Created CI/CD workflows via GitHub Actions for end-to-end deployment automation.",
      "Collaborated with product and backend teams to ensure seamless integration and delivery of platform features."
    ]
  },
  {
    position: "Software Engineer Intern",
    company: "IpserLab",
    location: "Remote",
    period: "Jul 2024 – Present",
    responsibilities: [
      "Developed responsive UI for a video conferencing platform, ensuring cross-browser compatibility and performance optimization.",
      "Created and enhanced key features such as the enrich conversation page and image update logic within conversation details.",
      "Worked with Redux to manage complex application state and integrated APIs for real-time updates."
    ]
  },
  {
    position: "Teaching Assistant",
    company: "University of Maryland",
    location: "College Park, MD",
    period: "Sep 2023 – May 2024",
    responsibilities: [
      "Assisted in teaching undergraduate-level courses on python programming and object-oriented programming.",
      "Hosted office hours, reviewed student assignments, and provided detailed feedback to reinforce learning outcomes.",
      "Collaborated with professors to refine course content and grading rubrics, enhancing clarity and alignment with course objectives."
    ]
  },
  {
    position: "Frontend Engineer",
    company: "Tagnology",
    location: "Remote",
    period: "Aug 2021 – Feb 2023",
    responsibilities: [
      "Led front-end development for Taiwan’s first blockchain marketplace using React.js and Next.js, improving transaction speed by 90%.",
      "Created an interactive product customization canvas using Konva.js, enhancing UI flexibility for end users.",
      "Implemented NFT trading features with Ethereum Web3 and Ethers.js, and managed multilingual content with i18next."
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

export const EducationAndExperienceSection: React.FC<EducationAndExperienceSectionProps> = ({ id }) => {
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