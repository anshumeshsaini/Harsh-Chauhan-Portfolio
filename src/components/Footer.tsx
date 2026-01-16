import { ArrowUp, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { href: "#proof", label: "Results" },
    { href: "#framework", label: "Method" },
    { href: "#services", label: "Services" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "www.linkedin.com/in/harsh-chauhan-digital", label: "LinkedIn" },

    { icon: Mail, href: "harshchauhan.official7@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground font-bold text-lg">
                HC
              </div>
              <span className="font-bold text-xl">Harsh Chauhan</span>
            </div>
            <p className="text-background/70 max-w-sm mb-6">
              The God of SEO & Digital Marketing Expert. SEO Manager at PingMedia, transforming brands into digital powerhouses with the revolutionary COCO Strategy.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3 text-background/70">
              <p>Ready to grow your organic traffic?</p>
              <a
  href="https://wa.me/917379340224"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 font-semibold border border-border hover:gap-3 transition-all"
>
  Request Free Consultation

</a>

                
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Harsh Chauhan. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
