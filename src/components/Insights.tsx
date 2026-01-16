import { ArrowRight, Sparkles, Search, Brain, Zap, Globe, Eye } from "lucide-react";
import { useRef, useEffect } from "react";
import seoLordImage from "@/assets/seo-lord.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Insights = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lessonsRef = useRef<HTMLDivElement>(null);
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

      if (gridRef.current) {
        gsap.fromTo(gridRef.current.children,
          { opacity: 0, x: (i) => i === 0 ? -50 : 50 },
          {
            opacity: 1, x: 0, duration: 0.8, stagger: 0.2,
            scrollTrigger: { trigger: gridRef.current, start: "top 80%" }
          }
        );
      }

      if (lessonsRef.current) {
        gsap.fromTo(lessonsRef.current.querySelectorAll(":scope > div"),
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1,
            scrollTrigger: { trigger: lessonsRef.current, start: "top 85%" }
          }
        );
      }

      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8,
          scrollTrigger: { trigger: ctaRef.current, start: "top 90%" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const insights = [
    {
      icon: Brain,
      title: "AI-driven SEO is the Future",
      content: "Google, Bing, and modern search engines increasingly rely on machine learning and NLP. AI-aligned optimization is no longer optional.",
    },
    {
      icon: Eye,
      title: "Zero-Click Searches Will Reign",
      content: "Featured snippets, PAA boxes, and knowledge graphs are reducing clicks. Visibility now matters more than traffic.",
    },
    {
      icon: Search,
      title: "Search Intent > Keywords",
      content: "Google doesn't rank pages—it ranks answers. Understand intent, psychology, and context to win SEO.",
    },
    {
      icon: Sparkles,
      title: "E-E-A-T Is Non-Negotiable",
      content: "Experience, Expertise, Authority, and Trust define rankings. Generic content no longer survives.",
    },
    {
      icon: Globe,
      title: "Video SEO Is Exploding",
      content: "YouTube, Shorts, TikTok, and Reels are becoming search engines. Video-first SEO is the next frontier.",
    },
  ];

  const lessons = [
    {
      title: "Flexibility Is the Ultimate Skill",
      content: "Algorithms evolve constantly. Adaptability ensures longevity in SEO.",
    },
    {
      title: "Decisions Must Be Data-Driven",
      content: "Analytics, real-time monitoring, and AI insights outperform assumptions.",
    },
    {
      title: "Content Needs Engagement",
      content: "Content attracts. Engagement converts. Storytelling sustains growth.",
    },
    {
      title: "SEO Is Bigger Than Google",
      content: "True SEO success comes from omnichannel visibility and brand trust.",
    },
  ];

  return (
    <section ref={sectionRef} id="insights" className="section-padding bg-background">
      <div className="section-container">
        {/* HEADER */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-caption text-primary mb-4">Thought Leadership</p>
          <h2 className="heading-section mb-6">
            Industry Insights from the God of SEO
          </h2>
          <p className="text-body">
            Strategic perspectives that shape future-ready SEO systems and revenue-driven growth.
          </p>
        </div>

        {/* IMAGE + INSIGHTS */}
        <div ref={gridRef} className="grid lg:grid-cols-2 gap-10 mb-16">
          
          {/* IMAGE – SHARP + NO CUT */}
          <div className="border border-border shadow-xl bg-background">
            <img
              src={seoLordImage}
              alt="Harsh Chauhan - SEO Thought Leadership"
              className="w-full h-[520px] object-contain"
            />
          </div>

          {/* INSIGHTS LIST */}
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="group bg-card border border-border p-5 transition-all duration-300 hover:shadow-lg hover:border-primary/40"
              >
                <div className="flex items-start gap-4">
                  
                  {/* ICON */}
                  <div className="w-10 h-10 bg-accent border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <insight.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {insight.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LESSONS */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">
            Lessons from Harsh Chauhan's Journey
          </h3>

          <div ref={lessonsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lessons.map((lesson, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 transition-all hover:shadow-lg hover:border-primary/40"
              >
                {/* NUMBER */}
                <div className="w-8 h-8 gradient-bg border border-primary/40 flex items-center justify-center mb-4">
                  <span className="text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>

                <h4 className="font-bold mb-2">{lesson.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {lesson.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="bg-gradient-to-br from-primary to-primary/80 border border-primary/40 p-10 text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your SEO?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Get precise, revenue-focused SEO guidance directly from the God of SEO.
          </p>

          <a
  href="https://wa.me/917088717909"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 font-semibold border border-border hover:gap-3 transition-all"
>
  Request Free Consultation
  <ArrowRight className="w-4 h-4" />
</a>

        </div>
      </div>
    </section>
  );
};

export default Insights;