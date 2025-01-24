import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const experienceData = [
  {
    id: 1,
    title: "Marketing Lead",
    company: "KU Hackfest",
    period: "Jul 2023 - Nov 2023",
    location: "Kathmandu University",
    description: "Led the marketing team for KU Hackfest 2023, the then largest in-person hackathon ever held in Nepal.",
  },
  {
    id: 2,
    title: "Researcher and Writer",
    company: "The Nepali Comment (YouTube Channel)",
    period: "Sep 2023 - May 2024",
    location: "Kathmandu",
    description: "Conducted research and created engaging content for videos, contributing to the channel's informational and creative output.",
  },
  {
    id: 3,
    title: "Data Engineer Intern",
    company: "Maalexi Inc.",
    period: "May 2024 - Sep 2024",
    location: "Remote",
    description: "Collaborated in preprocessing data and automating and maintaining data pipelines.",
  },
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      <ScrollArea className="h-[70vh] w-full rounded-md border p-4">
        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className={`
                border p-6 rounded-lg shadow-sm 
                hover-glow hover-lift
                transform transition-all duration-300
                cursor-pointer
                ${activeExperience === exp.id ? 'scale-105 border-secondary' : ''}
              `}
              onClick={() => setActiveExperience(exp.id === activeExperience ? null : exp.id)}
            >
              <h2 className="text-2xl font-semibold">{exp.title}</h2>
              <p className="text-secondary-foreground">{exp.company}</p>
              <p className="text-muted-foreground">{exp.period}</p>
              <p className="text-muted-foreground">{exp.location}</p>
              
              <p className="mt-4">{exp.description}</p>
              
              {activeExperience === exp.id && (
                <div className="mt-6 space-y-2 section-enter">
                  <h3 className="font-semibold">Key Responsibilities:</h3>
                  <ul className="list-disc list-inside space-y-1">
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Experience;
