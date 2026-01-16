import { Button } from "@/components/ui/button";
import { MapPin, FileSearch, BarChart3, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
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

      if (servicesRef.current) {
        gsap.fromTo(servicesRef.current.children,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15,
            scrollTrigger: { trigger: servicesRef.current, start: "top 85%" }
          }
        );
      }

      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6,
          scrollTrigger: { trigger: ctaRef.current, start: "top 90%" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: MapPin,
      title: "Rank-Ready SEO for Local & National Brands",
      description: "Complete SEO strategy and execution that gets your brand visible where it matters—whether you're targeting a city or the entire country.",
      whyDifferent: "Most agencies focus on vanity metrics. I focus on keywords that actually drive revenue.",
      outcomes: [
        "Page 1 rankings for buyer-intent keywords",
        "Local pack dominance for service areas",
        "Sustainable organic traffic growth",
      ],
    },
    {
      icon: FileSearch,
      title: "High-ROI Content & Keyword Strategy",
      description: "Strategic content planning based on search intent analysis, competitive gaps, and conversion potential—not just traffic volume.",
      whyDifferent: "Your content will be built for conversions, not just impressions.",
      outcomes: [
        "Content that ranks AND converts",
        "Topic cluster strategy for authority",
        "Editorial calendar aligned with buyer journey",
      ],
    },
    {
      icon: BarChart3,
      title: "SEO Audits That Actually Increase Revenue",
      description: "Deep technical and strategic audits that identify real opportunities—not a generic checklist with 100 low-priority items.",
      whyDifferent: "Every recommendation comes with projected impact and priority level.",
      outcomes: [
        "Prioritized action plan with ROI estimates",
        "Technical issues that affect rankings",
        "Quick wins identified for immediate results",
      ],
    },
    {
      icon: Target,
      title: "Google Ads + SEO Combined Growth",
      description: "Integrated paid and organic strategy that maximizes your total search visibility while reducing customer acquisition costs over time.",
      whyDifferent: "PPC data informs SEO, and SEO reduces PPC dependency. They work together.",
      outcomes: [
        "Unified search strategy across paid & organic",
        "Lower CAC as organic compounds",
        "Full funnel visibility optimization",
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-caption text-primary mb-4">What I Deliver</p>
          <h2 className="heading-section mb-6">
            Solutions, Not Services
          </h2>
          <p className="text-body">
            I don't sell SEO packages. I solve growth problems. Each engagement is custom-built around your business goals, market position, and revenue targets.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border p-8 transition-all duration-300 hover:shadow-xl hover:border-primary/30"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </div>

              {/* Why Different */}
              <div className="bg-accent/50 p-4 mb-6 border-l-4 border-primary">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Why it's different: </span>
                  {service.whyDifferent}
                </p>
              </div>

              {/* Outcomes */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">What you get:</p>
                {service.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
       
      </div>
    </section>
  );
};

export default Services;
