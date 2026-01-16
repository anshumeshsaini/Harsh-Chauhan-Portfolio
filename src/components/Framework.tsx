import { FileText, Globe, Target, Brain, ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import cocoImage from "@/assets/coco-strategy.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";

// Lottie Animation
import cocoAnimation from "@/assets/animations/SEOconsulting.json";

gsap.registerPlugin(ScrollTrigger);

const Framework = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" }
        }
      );

      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 0.8,
          scrollTrigger: { trigger: imageRef.current, start: "top 80%" }
        }
      );

      if (stepsRef.current) {
        gsap.fromTo(stepsRef.current.children,
          { opacity: 0, y: 40, rotateX: 10 },
          {
            opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.2,
            scrollTrigger: { trigger: stepsRef.current, start: "top 85%" }
          }
        );
      }

      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: ctaRef.current, start: "top 90%" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      letter: "C",
      icon: FileText,
      title: "Contextualized Content",
      description: "Moves from keyword targeting to mastery of user intention with psychological triggers. Delivers audience-centric content for AI-driven segmented audiences.",
      points: [
        "Follows Google E-E-A-T principles",
        "Integrates quizzes, polls, videos for engagement",
        "User intention > keyword stuffing",
      ],
    },
    {
      letter: "O",
      icon: Globe,
      title: "Omnichannel Optimization",
      description: "Broaden SEO beyond Google to YouTube, LinkedIn, Quora, and Reddit. Focuses on voice search and AI readability for content accessibility.",
      points: [
        "Zero-click SEO for featured snippets",
        "Social signals boost search ranking",
        "Multi-platform visibility strategy",
      ],
    },
    {
      letter: "C",
      icon: Target,
      title: "Conversion Focused SEO",
      description: "Concentrates on traffic that is actionable, not just figures. Integrates lead magnets and participatory elements to optimize engagement.",
      points: [
        "A/B testing in SEO processes",
        "Landing pages that convert",
        "Behavioral triggers for action",
      ],
    },
    {
      letter: "O",
      icon: Brain,
      title: "Ongoing AI-Led Adaptation",
      description: "Regular audits to refresh pages with high opportunities. Uses predictive analytics to foresee Google algorithm changes.",
      points: [
        "Real-time optimization",
        "Stay ahead of algorithm updates",
        "Test unfamiliar SEO strategies",
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="framework" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-caption text-primary mb-4">The Revolutionary Method</p>
          <h2 className="heading-section mb-6">
            The COCO Strategy
          </h2>
          <p className="text-body">
            Harsh Chauhan's revolutionary approach to SEO — Content Optimization & Conversion Optimization working together for maximum business impact.
          </p>
        </div>

        {/* COCO Image */}
        <div ref={imageRef} className="max-w-4xl mx-auto mb-16">
          <div className="overflow-hidden shadow-xl border border-border">
            <img 
              src={cocoImage} 
              alt="COCO Strategy - Harsh Chauhan" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Framework Steps */}
        <div ref={stepsRef} className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-card border border-border p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                {/* Letter Badge */}
                <div className="w-14 h-14 gradient-bg flex items-center justify-center flex-shrink-0 glow-cyan">
                  <span className="text-2xl font-bold text-primary-foreground">{step.letter}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  
                  {/* Points */}
                  <div className="space-y-2">
                    {step.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto mb-16">
          <div className="h-[360px] overflow-hidden shadow-xl border border-border bg-card flex items-center justify-center">
            <Lottie
              animationData={cocoAnimation}
              loop
              autoplay
              className="w-full h-full"
              rendererSettings={{
                preserveAspectRatio: "xMidYMid meet",
              }}
            />
          </div>
        </div>
        {/* How It Works */}
        <div ref={ctaRef} className="mt-16 p-8 gradient-dark-bg text-center">
          <p className="text-primary-foreground/80 text-sm font-medium mb-2">
            THE COCO DIFFERENCE
          </p>
          <p className="text-xl lg:text-2xl font-bold text-primary-foreground mb-4">
            "Unlike legacy SEO techniques, COCO utilizes real-time information, AI-based audits, and predictive analysis to stay ahead of Google's algorithm updates."
          </p>
          <a
             href="https://wa.me/917088717909"
  target="_blank"
            className="inline-flex items-center gap-2 text-primary-foreground font-semibold hover:gap-3 transition-all mt-4"
          >
            Apply COCO Strategy to Your Business
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Framework;
