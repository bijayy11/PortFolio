import { useState, useEffect } from "react";

const skillsData = {
  technical: [
    { name: "C", image: "/images/C_Programming_Language.svg.png" },
    { name: "C++", image: "/images/aaycsicwp.webp" },
    { name: "Python", image: "/images/Python-logo-notext.svg.png" },
    { name: "Git", image: "/images/git.png" },
    { name: "Github", image: "/images/github.png" },
    { name: "TensorFlow", image: "/images/tensorflow.png" },
    { name: "Machine Learning" },
    { name: "Deep Learning" },
    { name: "MySQL", image: "/images/mysql.png" },
    { name: "MongoDB", image: "/images/mongodb.png" },
    { name: "Data Science" },
    { name: "HTML", image: "/images/html.png" },
    { name: "CSS", image: "/images/css.png" }
  ]
};

const Skills = () => {
  const [skillsAnimation, setSkillsAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setSkillsAnimation(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {skillsData.technical.map((skill, index) => (
        <div
          key={index}
          className={`absolute transition-all duration-1000 ease-out ${
            skillsAnimation ? "animate-skill-move" : ""
          }`}
          style={{
            animationDelay: `${index * 0.2}s`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            transform: skillsAnimation
              ? "translate(-50%, -50%)"
              : `translate(0, 0) scale(0)`,
            animationFillMode: "forwards"
          }}
        >
          {skill.image ? (
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 object-contain"
            />
          ) : (
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white">
              {skill.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Skills;
