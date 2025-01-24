import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const testimonialsData = [
  // {
  //   id: 1,
  //   name: "John Smith",
  //   position: "CTO, Tech Innovations Inc",
  //   company: "Tech Innovations Inc",
  //   testimonial: "An exceptional developer with a keen eye for detail. Their work on our AI project exceeded all expectations.",
  //   relationship: "Project Client",
  //   project: "AI Analytics Dashboard",
  //   date: "March 2024"
  // },
  // {
  //   id: 2,
  //   name: "Sarah Johnson",
  //   position: "Lead Developer",
  //   company: "Global Solutions Ltd",
  //   testimonial: "Outstanding team player and technical leader. Their contributions were instrumental to our project's success.",
  //   relationship: "Team Lead",
  //   project: "E-commerce Platform",
  //   date: "February 2024"
  // },
  // {
  //   id: 3,
  //   name: "Michael Chen",
  //   position: "Product Manager",
  //   company: "Innovation Labs",
  //   testimonial: "Brings both technical expertise and business acumen to every project. A pleasure to work with.",
  //   relationship: "Product Owner",
  //   project: "Mobile Banking App",
  //   date: "January 2024"
  // },
  // {
  //   id: 4,
  //   name: "Emily Brown",
  //   position: "CEO",
  //   company: "StartUp Ventures",
  //   testimonial: "Their technical insights and leadership helped transform our startup's vision into reality.",
  //   relationship: "Client",
  //   project: "Startup Platform",
  //   date: "December 2023"
  // }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      <ScrollArea className="h-[70vh] w-full rounded-md border p-4">
        <div className="grid grid-cols-1 gap-6">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`
                border p-6 rounded-lg shadow-sm 
                hover-glow hover-lift
                transform transition-all duration-300
                cursor-pointer
                ${activeTestimonial === testimonial.id ? 'scale-105 border-secondary' : ''}
              `}
              onClick={() => setActiveTestimonial(testimonial.id === activeTestimonial ? null : testimonial.id)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">{testimonial.name}</h2>
                  <p className="text-secondary-foreground">{testimonial.position}</p>
                  <p className="text-muted-foreground">{testimonial.company}</p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {testimonial.date}
                </span>
              </div>
              
              <blockquote className="mt-4 italic">
                "{testimonial.testimonial}"
              </blockquote>
              
              {activeTestimonial === testimonial.id && (
                <div className="mt-6 space-y-4 section-enter">
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Relationship:</span>{" "}
                      <span className="text-muted-foreground">{testimonial.relationship}</span>
                    </p>
                    <p>
                      <span className="font-semibold">Project:</span>{" "}
                      <span className="text-muted-foreground">{testimonial.project}</span>
                    </p>
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

export default Testimonials;
