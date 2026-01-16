import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Users, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/SeoAnalytics.json";

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span id={`counter-${end}`} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const trustSignalsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(badgeRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(headlineRef.current, 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.7 }, 
        "-=0.3"
      )
      .fromTo(subheadlineRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6 }, 
        "-=0.4"
      )
      .fromTo(trustSignalsRef.current?.children || [], 
        { opacity: 0, x: -30 }, 
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }, 
        "-=0.3"
      )
      .fromTo(ctaRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5 }, 
        "-=0.2"
      )
      .fromTo(imageRef.current, 
        { opacity: 0, scale: 0.95, x: 50 }, 
        { opacity: 1, scale: 1, x: 0, duration: 0.8 }, 
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const trustSignals = [
    { icon: TrendingUp, text: "300%+ Organic Traffic Growth for Clients" },
    { icon: Target, text: "Millions of Organic Views Generated" },
    { icon: Users, text: "Trusted by HostGator, Hindustan Times, EaseMyTrip & More" },
    { icon: Award, text: "Crowned 'God of SEO' by Industry Peers" },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      
      {/* Gradient Orb */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] -z-10" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 bg-accent border border-primary/20 opacity-0">
              <span className="w-2 h-2 bg-primary animate-pulse" />
              <span className="text-sm font-medium text-accent-foreground">God of SEO | Lord of SEO</span>
            </div>

            {/* Headline */}
            <h1 ref={headlineRef} className="heading-display text-foreground opacity-0">
              The{" "}
              <span className="gradient-text">God of SEO</span>{" "}
              & Digital Marketing Expert
            </h1>

            {/* Sub-headline */}
            <p ref={subheadlineRef} className="text-body text-lg lg:text-xl max-w-xl opacity-0">
              Harsh Chauhan — SEO Manager at PingMedia, master of SEO, SMO, ORM, SEM & SMM. Transforming brands into digital powerhouses with the revolutionary COCO Strategy.
            </p>

            {/* Trust Signals */}
            <div ref={trustSignalsRef} className="space-y-3">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground opacity-0">
                  <signal.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{signal.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0">
            <Button variant="hero" size="xl" asChild className="rounded-none">
  <a  href="https://wa.me/917088717909"
  target="_blank" className="group">
    Get My SEO Strategy
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </a>
</Button>

<Button variant="heroOutline" size="xl" asChild className="rounded-none">
  <a href="#case-studies">View Real Results</a>
</Button>

            </div>
          </div>

          {/* Right - Hero Image */}
          <div ref={imageRef} className="relative opacity-0">
            <div className="relative">
              {/* Lottie Animation Container */}
              <div className="relative overflow-hidden shadow-2xl border border-border bg-background">
                <Lottie 
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-bg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold gradient-text">

                    </p>
                    <p className="text-xs text-muted-foreground">Organic Growth</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 shadow-lg flex items-center gap-2 pulse-glow">
                <Award className="w-5 h-5" />
                <span className="text-sm font-bold">Lord of SEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;