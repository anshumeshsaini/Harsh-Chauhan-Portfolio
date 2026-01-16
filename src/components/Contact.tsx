import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MessageSquare, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    goal: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftColRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.8,
          scrollTrigger: { trigger: leftColRef.current, start: "top 80%" }
        }
      );

      gsap.fromTo(formRef.current,
        { opacity: 0, x: 50, scale: 0.98 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.8,
          scrollTrigger: { trigger: formRef.current, start: "top 80%" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted!",
      description: "I'll get back to you within 24 hours with a custom growth plan.",
    });
    
    setFormData({ name: "", email: "", website: "", goal: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const features = [
    { icon: Zap, text: "Response within 24 hours" },
    { icon: MessageSquare, text: "Free initial consultation" },
    { icon: Mail, text: "No spam, just strategy" },
  ];

  return (
    <section ref={sectionRef} id="contact" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Content */}
            <div ref={leftColRef}>
              <p className="text-caption text-primary mb-4">Let's Talk Growth</p>
              <h2 className="heading-section mb-6">
                If You Want Traffic That Converts,{" "}
                <span className="gradient-text">Let's Talk.</span>
              </h2>
              <p className="text-body mb-8">
                Share your goals, and I'll respond with specific recommendations for your business. No generic templates—just actionable strategy.
              </p>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Trust Note */}
              <div className="mt-8 p-6 bg-card border border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">No pressure, no hard sells. </span>
                  This is a conversation about your goals and whether my approach is the right fit. If it's not, I'll tell you.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div ref={formRef} className="bg-card border border-border p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-foreground mb-2">
                    Website URL
                  </label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="goal" className="block text-sm font-medium text-foreground mb-2">
                    What's your main SEO goal?
                  </label>
                  <Textarea
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    placeholder="E.g., Increase organic traffic, rank for specific keywords, improve local visibility..."
                    rows={4}
                    required
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Request Growth Plan
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
