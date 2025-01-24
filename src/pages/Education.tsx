import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const educationData = [
  {
    id: 1,
    degree: "Computer Engineering",
    university: "Kathmandu University",
    period: "Feb, 2020 - Present",
    location: "Dhulikhel, Bagmati, Nepal",
    description: "Bachelor's degree in Computer Engineering",
    achievements: [
      "Currently pursuing Computer Engineering",
      "Focus on software development and engineering principles",
      "Participating in university tech projects"
    ]
  },
  {
    id: 2,
    degree: "+2 Science",
    university: "Liverpool Secondary School",
    period: "Aug, 2018 - Jan, 2020",
    location: "Kathmandu, Bagmati, Nepal",
    description: "Higher Secondary Education in Science",
    achievements: [
      "Completed higher secondary education with science major",
      "Strong foundation in scientific principles",
      "Preparation for engineering studies"
    ]
  },
  {
    id: 3,
    degree: "Secondary Education Examination",
    university: "New Rising Secondary English Secondary School",
    period: "Apr, 2007 - Jul, 2018",
    location: "Panauti-1, Bagmati, Nepal",
    description: "Secondary Level Education",
    achievements: [
      "Completed secondary education",
      "Strong academic foundation",
      "Participated in various school activities"
    ]
  }
];

const Education = () => {
  const [activeEducation, setActiveEducation] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      <ScrollArea className="h-[70vh] w-full rounded-md border p-4">
        <div className="space-y-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className={`
                border p-6 rounded-lg shadow-sm 
                hover-glow hover-lift
                transform transition-all duration-300
                cursor-pointer
                ${activeEducation === edu.id ? 'scale-105 border-secondary' : ''}
              `}
              onClick={() => setActiveEducation(edu.id === activeEducation ? null : edu.id)}
            >
              <h2 className="text-2xl font-semibold text-primary">{edu.degree}</h2>
              <p className="text-secondary-foreground font-medium">{edu.university}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-muted-foreground">{edu.period}</p>
                <p className="text-muted-foreground">{edu.location}</p>
              </div>
              
              <p className="mt-4">{edu.description}</p>
              
              {activeEducation === edu.id && (
                <div className="mt-4 space-y-2 section-enter">
                  <h3 className="font-semibold">Key Achievements:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} className="text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
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

export default Education;
