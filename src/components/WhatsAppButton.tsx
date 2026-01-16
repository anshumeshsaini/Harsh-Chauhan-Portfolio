import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "917088717909"; // Replace with actual WhatsApp number
  const message = "Hi Harsh! I'm interested in your SEO services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-green-500 animate-ping opacity-25" />
        
        {/* Main button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-green-500/30">
          <MessageCircle className="w-7 h-7" fill="currentColor" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-foreground text-background text-sm font-medium px-3 py-2 whitespace-nowrap shadow-lg">
            Chat with Harsh
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-foreground" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
