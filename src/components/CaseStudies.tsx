import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Building2, Award, Users } from "lucide-react";
import { useRef, useEffect } from "react";
import lordOfSeoImage from "@/assets/lord-of-seo.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
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

      if (brandsRef.current) {
        gsap.fromTo(brandsRef.current.querySelectorAll("div"),
          { opacity: 0, scale: 0.9, y: 20 },
          {
            opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.05,
            scrollTrigger: { trigger: brandsRef.current, start: "top 85%" }
          }
        );
      }

      if (achievementsRef.current) {
        gsap.fromTo(achievementsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
            scrollTrigger: { trigger: achievementsRef.current, start: "top 85%" }
          }
        );
      }

      if (featureRef.current) {
        gsap.fromTo(featureRef.current.children,
          { opacity: 0, x: (i) => i === 0 ? -50 : 50 },
          {
            opacity: 1, x: 0, duration: 0.8, stagger: 0.2,
            scrollTrigger: { trigger: featureRef.current, start: "top 80%" }
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

  const brands = [
    { name: "HostGator.in", type: "Hosting" },
    { name: "LiveHindustan.com", type: "News" },
    { name: "HindustanTimes.com", type: "News" },
    { name: "EaseMyTrip.com", type: "Travel" },
    { name: "FabbathInteriors.com", type: "Interiors" },
    { name: "ValentinoIndia.com", type: "Fashion" },
    { name: "HolaIndia.com", type: "E-commerce" },
    { name: "CabexIndia.com", type: "Logistics" },
    { name: "OKEngineers.com", type: "Education" },
  ];

  const achievements = [
    {
      metric: "Organic Traffic Growth",
      value: "300%+",
      description: "Consistent organic traffic increase through strategic SEO implementation",
      icon: TrendingUp,
    },
    {
      metric: "Social Media Impressions",
      value: "Millions",
      description: "Views on PingMedia Instagram showcasing social media expertise",
      icon: Users,
    },
    {
      metric: "Competitive Keywords",
      value: "Top Rankings",
      description: "Successfully ranking high-competition keywords across industries",
      icon: Award,
    },
    {
      metric: "SEO Professionals Mentored",
      value: "50+",
      description: "Training aspiring SEO professionals who now work in top companies",
      icon: Target,
    },
  ];

  return (
    <section ref={sectionRef} id="case-studies" className="section-padding bg-background">
      <div className="section-container max-w-6xl mx-auto">
        {/* Section Header - Centered */}
        <div ref={headerRef} className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-caption text-primary mb-4">Proof of Performance</p>
          <h2 className="heading-section mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-body text-lg max-w-3xl mx-auto">
            From startups to enterprise brands, Harsh Chauhan's SEO expertise has transformed businesses across industries.
          </p>
        </div>

        {/* Brand Logos Section - Centered */}
        <div className="mb-20">
          <p className="text-center text-sm font-semibold text-foreground mb-8">BRANDS HARSH HAS WORKED WITH</p>
          <div ref={brandsRef} className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 px-4 py-3 bg-card border border-border hover:border-primary/30 transition-all hover:shadow-md"
              >
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{brand.name}</span>
                <span className="text-xs text-muted-foreground">({brand.type})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid - Centered */}
        <div ref={achievementsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card border border-border p-6 text-center hover:shadow-xl hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 mx-auto mb-4 gradient-bg flex items-center justify-center rounded-full">
                <achievement.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-3xl font-bold gradient-text mb-2">{achievement.value}</p>
              <p className="text-sm font-semibold text-foreground mb-2">{achievement.metric}</p>
              <p className="text-xs text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Image - Centered */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="overflow-hidden border border-border shadow-xl bg-card">
            <img
              src={lordOfSeoImage}
              alt="Harsh Chauhan - Lord of SEO Achievements"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Real results from real clients - The proof is in the performance
          </p>
        </div>

        {/* Lord of SEO Feature - Centered */}
        <div ref={featureRef} className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Why Harsh is the "Lord of SEO"
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              The "SEO Master" title is not just a name—it's the result of Harsh's mastery and creativity in revolutionizing the industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-primary mt-2 flex-shrink-0 rounded-full" />
                <div className="text-left">
                  <p className="text-lg font-semibold text-foreground mb-1">Innovative Strategies</p>
                  <p className="text-muted-foreground">COCO Strategy redefined SEO with user experience and AI-driven insights</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-primary mt-2 flex-shrink-0 rounded-full" />
                <div className="text-left">
                  <p className="text-lg font-semibold text-foreground mb-1">Proven Track Record</p>
                  <p className="text-muted-foreground">300% organic growth, competitive keywords ranked, millions of impressions</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-primary mt-2 flex-shrink-0 rounded-full" />
                <div className="text-left">
                  <p className="text-lg font-semibold text-foreground mb-1">Mentorship & Leadership</p>
                  <p className="text-muted-foreground">Training future SEO experts through workshops and coaching</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-primary mt-2 flex-shrink-0 rounded-full" />
                <div className="text-left">
                  <p className="text-lg font-semibold text-foreground mb-1">Ongoing Learning</p>
                  <p className="text-muted-foreground">Constantly tracking Google updates and AI technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Centered */}
        <div ref={ctaRef} className="max-w-4xl mx-auto text-center p-8 gradient-dark-bg border border-primary/30 rounded-lg">
          <p className="text-primary-foreground/80 text-sm font-medium mb-2">
            READY FOR TRANSFORMATIVE RESULTS?
          </p>
          <p className="text-xl lg:text-2xl font-bold text-primary-foreground mb-6">
            "Don't just rank—dominate. Let's apply the COCO Strategy to your business."
          </p>
          <Button variant="hero" size="xl" asChild className="group">
            <a href="https://wa.me/917088717909"
            target="_blank">
              Get Your Custom SEO Strategy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;