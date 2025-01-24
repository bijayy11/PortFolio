import { useState } from "react";
import { Mail, GraduationCap, Code, Briefcase, Trophy, Link2, MessageSquare, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const navIcons = [
    { icon: GraduationCap, id: 'education', label: 'Education' },
    { icon: Brain, id: 'skills', label: 'Skills' },
    { icon: Code, id: 'projects', label: 'Projects' },
    { icon: Briefcase, id: 'experience', label: 'Experience' },
    { icon: Trophy, id: 'achievements', label: 'Achievements' },
    { icon: Link2, id: 'portfolio-links', label: 'Portfolio' },
    { icon: MessageSquare, id: 'testimonials', label: 'Testimonials' },
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:workwithbijaysapkota@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    toast({
      title: "Email client opened",
      description: "Your default email client has been opened with the message.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 p-4">
      {/* Profile Section */}
      <section className="flex items-center space-x-8">
        <div className="relative flex-shrink-0 w-40 h-40">
          <img 
            src="/images/BijaySapkota.jpg" 
            alt="Bijay Sapkota" 
            className="object-cover rounded-full w-full h-full" 
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-gradient">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-200">
            Hello, I'm Bijay Sapkota, a student programmer with a deep interest in Data Mining and Machine Learning. I enjoy exploring new ideas and building solutions that make a difference, always eager to learn and grow through collaboration and challenges.
          </p>
        </div>
      </section>

      {/* Floating Navigation Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {navIcons.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => navigate(`/${item.id}`)}
            >
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <Icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                <span className="text-sm font-medium text-gray-200 group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Form */}
      <section className="mt-12 p-6 bg-card/30 backdrop-blur-sm rounded-lg">
        <h2 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h2>
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/50 text-gray-200"
              required
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-background/50 text-gray-200"
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-background/50 text-gray-200 min-h-[150px]"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            <Mail className="mr-2 h-4 w-4" />
            Send Email
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Home;