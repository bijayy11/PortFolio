import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";
import { Trophy, Award, Bot } from "lucide-react";

const achievementsData = [
  {
    id: 1,
    title: "Winner of Ideation at Aawishkar, 2024",
    category: "Innovation",
    year: "2024",
    organization: "Kathmandu University Robotics Club",
    description: "Won Ideation Award at AAWISHKAR (annual festival of Kathmandu University Robotics Club) for the project MediSync",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    details: [
      "Developed innovative healthcare solution - MediSync",
      "Presented at annual robotics festival",
      "Recognized for creative problem-solving",
      "Project detailed in Projects section"
    ]
  },
  {
    id: 2,
    title: "DeerHack 2024 - Open Innovation Track Winner",
    category: "Hackathon",
    year: "2024",
    organization: "DeerHack",
    description: "Won Open Innovation track for our project 'Decent' mentioned in projects section.",
    icon: <Award className="w-8 h-8 text-blue-500" />,
    details: [
      "First place in Open Innovation category",
      "Developed 'Decent' project",
      "Demonstrated innovative problem-solving",
      "Successfully pitched to judges"
    ]
  },
  {
    id: 3,
    title: "IT Meet 2024 - AI Competition Winner",
    category: "Artificial Intelligence",
    year: "2024",
    organization: "IT Meet",
    description: "Won the AI Competition for developing AI-driven face tracking and firmware to align a robot with the dominant face.",
    icon: <Bot className="w-8 h-8 text-purple-500" />,
    details: [
      "Developed AI-driven face tracking system",
      "Created firmware for robot alignment",
      "Implemented real-time face detection",
      "Successfully demonstrated working prototype"
    ]
  }
];

const FloatingImage = ({ src, className }: { src: string; className: string }) => (
  <div className={`absolute opacity-5 pointer-events-none transition-all duration-1000 ${className}`}>
    <img 
      src={src} 
      alt="Achievement background" 
      className="w-[500px] h-[300px] object-cover rounded-lg"
    />
  </div>
);

const Achievements = () => {
  const [activeAchievement, setActiveAchievement] = useState<number | null>(null);
  const [visibleImage, setVisibleImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImage((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 relative min-h-[80vh] overflow-hidden">
      <FloatingImage 
        src="/images/f4fd680b-dc0e-4ba1-b42b-bc91229bb780.png"
        className={`top-10 -right-20 rotate-6 transform transition-opacity duration-1000 
          ${visibleImage === 0 ? 'opacity-10' : 'opacity-0'}`}
      />
      <FloatingImage 
        src="/images/4633fae6-c0f8-4030-8c7a-f6550eeed585.png"
        className={`top-40 -left-20 -rotate-6 transform transition-opacity duration-1000 
          ${visibleImage === 1 ? 'opacity-10' : 'opacity-0'}`}
      />
      <FloatingImage 
        src="/images/ea868514-480a-4360-9fa8-dcd32fb4c52c.png"
        className={`bottom-20 right-0 rotate-3 transform transition-opacity duration-1000 
          ${visibleImage === 2 ? 'opacity-10' : 'opacity-0'}`}
      />

      <ScrollArea className="h-[70vh] w-full rounded-md border p-4 bg-background/80 backdrop-blur-sm relative z-10">
        <div className="space-y-6">
          {achievementsData.map((achievement) => (
            <div
              key={achievement.id}
              className={`
                border p-6 rounded-lg shadow-sm 
                hover-glow hover-lift
                transform transition-all duration-300
                cursor-pointer
                backdrop-blur-sm
                ${activeAchievement === achievement.id ? 'scale-105 border-secondary' : ''}
              `}
              onClick={() => setActiveAchievement(achievement.id === activeAchievement ? null : achievement.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-4 items-start">
                  {achievement.icon}
                  <div>
                    <h2 className="text-2xl font-semibold">{achievement.title}</h2>
                    <p className="text-secondary-foreground">{achievement.organization}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-secondary/10 rounded-full text-sm">
                  {achievement.year}
                </span>
              </div>
              
              <p className="mt-4">{achievement.description}</p>
              
              {activeAchievement === achievement.id && (
                <div className="mt-6 space-y-2 section-enter">
                  <h3 className="font-semibold">Key Highlights:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {achievement.details.map((detail, index) => (
                      <li key={index} className="text-muted-foreground">
                        {detail}
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

export default Achievements;
