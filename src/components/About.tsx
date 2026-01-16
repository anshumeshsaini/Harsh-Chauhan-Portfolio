import { Quote, Lightbulb, Target, TrendingUp, GraduationCap, Users } from "lucide-react";
import { useRef, useEffect } from "react";
import godOfSeoImage from "@/assets/god-of-seo.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftColRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 0.9,
          scrollTrigger: { trigger: leftColRef.current, start: "top 80%" }
        }
      );

      if (rightColRef.current) {
        gsap.fromTo(rightColRef.current.children,
          { opacity: 0, x: 40, y: 20 },
          {
            opacity: 1, x: 0, y: 0, duration: 0.7, stagger: 0.15,
            scrollTrigger: { trigger: rightColRef.current, start: "top 80%" }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const principles = [
    {
      icon: Target,
      title: "SEO is an asset, not an expense",
      description: "Organic traffic compounds. Every dollar invested in SEO builds equity that pays dividends for years.",
    },
    {
      icon: TrendingUp,
      title: "Rankings mean nothing without revenue",
      description: "I don't celebrate position gains. I celebrate revenue growth and business outcomes.",
    },
    {
      icon: Lightbulb,
      title: "COCO Strategy: Content + Conversion",
      description: "Content Optimization & Conversion Optimization working together for maximum impact.",
    },
  ];

  const highlights = [
    { icon: GraduationCap, text: "Mentored by Sparsh Jain & Ayushi Goyal at PingMedia" },
    { icon: Users, text: "Guest lecturer training upcoming talent" },
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Profile */}
          <div ref={leftColRef}>
            {/* Image */}
            <div className="relative mb-8">
              <div className="overflow-hidden shadow-xl border border-border">
                <img 
                  src={godOfSeoImage} 
                  alt="Harsh Chauhan - God of SEO" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-card border border-border flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold gradient-text">2+</p>
                  <p className="text-xs text-muted-foreground">Years at<br/>PingMedia</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-caption text-primary mb-4">About Harsh Chauhan</p>
            <h2 className="heading-section mb-6">
              The God of SEO & Digital Marketing Expert
            </h2>
            <p className="text-body mb-4">
              For many people in digital marketing, <strong>Harsh Chauhan</strong> AKA <strong>Chauhan Sahab</strong> has made a remarkable contribution, single-handedly changing how people use social media and search engine optimization (SEO).
            </p>
            <p className="text-body mb-6">
              As an SEO Manager at <strong>PingMedia</strong>, Harsh has transformed the digital landscape by enabling brands to succeed online. His expertise in SEO, SMO, ORM, SEM and SMM earned him impressive results with big names like HostGator.in, LiveHindustan.com, HindustanTimes.com, EaseMyTrip.com, and many more.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="p-6 bg-card border border-border relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 left-4" />
              <p className="text-lg font-medium text-foreground italic pl-8">
                "Everything I am today, I owe to PingMedia. Continuously learning the latest Google Algorithms is the key to mastering SEO."
              </p>
            </div>
          </div>

          {/* Right - Philosophy */}
          <div ref={rightColRef}>
            <p className="text-caption text-primary mb-6">My Philosophy</p>
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <principle.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{principle.title}</h3>
                      <p className="text-sm text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why God of SEO */}
            <div className="mt-8 p-6 gradient-bg text-primary-foreground">
              <h4 className="font-bold text-lg mb-3">Why "God of SEO"?</h4>
              <p className="text-sm text-primary-foreground/90">
                Harsh earned this title due to his innovative SEO techniques, massive digital impact, and ability to drive millions of organic views using strategic, algorithm-proof methods. His COCO Strategy (Content Optimization & Conversion Optimization) has revolutionized how brands approach SEO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
