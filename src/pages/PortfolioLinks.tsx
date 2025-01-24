import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Github, Linkedin, BookOpen, Facebook } from "lucide-react";

const portfolioLinksData = [
  {
    id: 1,
    platform: "GitHub",
    username: "@bijayy11",
    url: "https://github.com/bijayy11",
    icon: Github,
    description: "Open source contributions and personal projects",
    highlights: [
      "Personal projects",
      "Code repositories",
      "Contributions",
      "Development history"
    ]
  },
  {
    id: 2,
    platform: "LinkedIn",
    username: "bjsapkota",
    url: "https://www.linkedin.com/in/bjsapkota/",
    icon: Linkedin,
    description: "Professional network and career highlights",
  },
  {
    id: 3,
    platform: "Blog",
    username: "bjsapkota",
    url: "https://medium.com/@sap.bijayy",
    icon: BookOpen,
    description: "Technical writing and industry insights",
  },
  {
    id: 4,
    platform: "Facebook",
    username: "bijay.sapkota.71465",
    url: "https://www.facebook.com/bijay.sapkota.71465",
    icon: Facebook,
    description: "Social media presence and updates",
  }
];

const PortfolioLinks = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      <ScrollArea className="h-[70vh] w-full rounded-md border p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioLinksData.map((link) => {
            const Icon = link.icon;
            return (
              <div
                key={link.id}
                className={`
                  border p-6 rounded-lg shadow-sm 
                  hover-glow hover-lift
                  transform transition-all duration-300
                  cursor-pointer
                  ${activeLink === link.id ? 'scale-105 border-secondary' : ''}
                `}
                onClick={() => setActiveLink(link.id === activeLink ? null : link.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-6 w-6 text-secondary" />
                  <h2 className="text-2xl font-semibold">{link.platform}</h2>
                </div>
                <p className="text-secondary-foreground">{link.username}</p>
                
                <p className="mt-2 text-muted-foreground">
                  {link.description}
                </p>
                
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit Profile
                </a>
                
                {activeLink === link.id && (
                  <div className="mt-6 space-y-2 section-enter">
                    <h3 className="font-semibold">Highlights:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {link.highlights.map((highlight, index) => (
                        <li key={index} className="text-muted-foreground">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default PortfolioLinks;
