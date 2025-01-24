import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Office Management System",
    description: "A simple offce management system implemented in C++ within Qt framework and MySql",
    technologies: ["c++", "MySql"],
    links: {
      github: "https://github.com/bijayy11/Office_Management_System.git"
    },
    details: []
  },
  {
    id: 2,
    title: "Perfect Hours",
    description: "A time management application developed using kotlin and Firebase",
    technologies: ["c++", "MySql"],
    links: {
      github: "https://github.com/bijayy11/perfect_hours.git"
    },
    details: []
  },
  {
    id: 3,
    title: "MediSync",
    description: "An Internet of Things (IoT) project designed to help elderly people. This system incorporates a pill dispenser, an RFID tag, an MPU6050 motion sensor, and an infrared (IR) drop counter.",
    technologies: ["c++", "MySql", "Arduino", "RFID", "MPU6050", "IR Sensor"],
    links: {
    },
    details: []
  },
  {
    id: 4,
    title: "Football Player Recommendation System",
    description: "A machine learning projects that recommends similar players based on their multivariable cosine similarities.",
    technologies: ["Python, Machine Learning"],
    links: {
      github: "https://github.com/bijayy11/Player_Recommendation.git"
    },
    details: []
  },
  {
    id: 5,
    title: "Artifynace",
    description: "A predictive tool to predict closing prices of a stock for next 30 days built trained on LSTM model",
    technologies: ["Python, Deep Learning"],
    links: {
      github: "https://github.com/bijayy11/ArtiFynance.git"
    },
    details: []
  },
  {
    id: 6,
    title: "Decent",
    description: "A browser extension that provides decentralized storage for private keys and an additional layer of offine encryption.",
    technologies: ["JavaScript, Blockchain,Cryptography"],
    links: {
      github: "https://github.com/bijayy11/decent-forked.git"
    },
    details: []
  },
  {
    id: 7,
    title: "Embedded Image Watermarking",
    description: "Image Watermarking Tool with Embedded Watermarking Using Fast Fourier Transform.",
    technologies: ["Python, Image Processing"],
    links: {
      github: "https://github.com/bijayy11/Image-Watermarking-using-DFT-and-FFT.git"
    },
    details: []
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      <ScrollArea className="h-[70vh] w-full rounded-md border p-4">
        <div className="grid grid-cols-1 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`
                border p-6 rounded-lg shadow-sm 
                hover-glow hover-lift
                transform transition-all duration-300
                cursor-pointer
                ${activeProject === project.id ? 'scale-105 border-secondary' : ''}
              `}
              onClick={() => setActiveProject(project.id === activeProject ? null : project.id)}
            >
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-muted-foreground mt-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-secondary/10 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {activeProject === project.id && (
                <div className="mt-6 space-y-4 section-enter">
                  <div className="space-y-2">
                    <ul className="list-disc list-inside space-y-1">
                      {project.details.map((detail, index) => (
                        <li key={index} className="text-muted-foreground">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Projects;
