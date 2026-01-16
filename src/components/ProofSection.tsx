import { TrendingUp, Target, BarChart3, Zap, Users, Award } from "lucide-react";
import { useRef, useEffect } from "react";
import masterOfSeoImage from "@/assets/master-of-seo.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProofSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" }
        }
      );

      if (metricsRef.current) {
        gsap.fromTo(metricsRef.current.children,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15,
            scrollTrigger: { trigger: metricsRef.current, start: "top 85%" }
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(contentRef.current.children,
          { opacity: 0, x: (i) => i === 0 ? -50 : 50 },
          {
            opacity: 1, x: 0, duration: 0.8, stagger: 0.2,
            scrollTrigger: { trigger: contentRef.current, start: "top 80%" }
          }
        );
      }

      if (brandsRef.current) {
        gsap.fromTo(brandsRef.current.querySelectorAll("span"),
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1, scale: 1, duration: 0.4, stagger: 0.1,
            scrollTrigger: { trigger: brandsRef.current, start: "top 85%" }
          }
        );
      }

      gsap.fromTo(bannerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: bannerRef.current, start: "top 85%" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const proofMetrics = [
    {
      icon: TrendingUp,
      value: "300%+",
      label: "Organic Traffic Increase",
      detail: "Consistent growth across clients",
      graph: [15, 25, 35, 50, 70, 100],
    },
    {
      icon: Target,
      value: "Top 10",
      label: "Keyword Positions",
      detail: "For competitive terms",
      graph: [80, 60, 45, 30, 15, 5],
    },
    {
      icon: Users,
      value: "50+",
      label: "Professionals Trained",
      detail: "Now working in top companies",
      graph: [20, 35, 45, 60, 75, 90],
    },
    {
      icon: Award,
      value: "2+ Years",
      label: "At PingMedia",
      detail: "Transforming digital landscapes",
      graph: [92, 92, 92, 92, 92, 92],
    },
  ];

  const trustedBrands = [
    "HostGator.in",
    "LiveHindustan.com",
    "HindustanTimes.com",
    "EaseMyTrip.com",
    "ValentinoIndia.com",
  ];

  return (
    <section ref={sectionRef} id="proof" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-caption text-primary mb-4">Real Data. Real Results.</p>
          <h2 className="heading-section mb-6">
            SEO Is Not Magic.{" "}
            <span className="gradient-text">It's Systems + Execution.</span>
          </h2>
          <p className="text-body">
            Harsh Chauhan's data-driven optimization approach uses real-time analytics, user behavior tracking, and AI insights. No shortcuts. No tricks.
          </p>
        </div>

        {/* Proof Grid */}
        <div ref={metricsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {proofMetrics.map((metric, index) => (
            <div
              key={index}
              className="group bg-card border border-border p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <metric.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>

              {/* Value */}
              <p className="text-4xl font-bold text-foreground mb-1">{metric.value}</p>
              <p className="text-sm font-semibold text-foreground mb-1">{metric.label}</p>
              <p className="text-xs text-muted-foreground mb-4">{metric.detail}</p>

              {/* Mini Graph */}
              <div className="flex items-end gap-1 h-10">
                {metric.graph.map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/20 group-hover:bg-primary transition-all duration-500"
                    style={{
                      height: `${height}%`,
                      transitionDelay: `${i * 50}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Image + Content */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="overflow-hidden shadow-xl border border-border">
            <img 
              src={masterOfSeoImage} 
              alt="Harsh Chauhan - Master of SEO" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Power of Data-Driven SEO
            </h3>
            <p className="text-muted-foreground mb-6">
              One reason Harsh is very competitive in the SEO space, earning him the "God of SEO" title, is his data-driven optimization approach. Rather than using traditional methods, he utilizes modern-day tactics like real-time data analytics, user behavior tracking, and AI insights.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Expert in Google Analytics, Search Console, SEMrush & Ahrefs</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <BarChart3 className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Constant monitoring of trends and campaign adjustments</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Target className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Effective, sustainable, and profitable SEO approach</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Brands */}
        <div ref={brandsRef} className="mb-8">
          <p className="text-center text-sm text-muted-foreground mb-6">TRUSTED BY MAJOR BRANDS</p>
          <div className="flex flex-wrap justify-center gap-4">
            {trustedBrands.map((brand, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card border border-border text-sm font-medium text-foreground"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Trust Banner */}
        <div ref={bannerRef} className="p-8 gradient-dark-bg text-center">
          <p className="text-primary-foreground/80 text-sm font-medium mb-2">
            THE GOD OF SEO PROMISE
          </p>
          <p className="text-2xl lg:text-3xl font-bold text-primary-foreground">
            "SEO drives business growth, engagement, and long-term profitability—not just rankings."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
