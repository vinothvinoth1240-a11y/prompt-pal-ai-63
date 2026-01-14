import { Mail, Phone, MapPin, Linkedin, Send, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vinothvinoth1240@gmail.com",
    href: "mailto:vinothvinoth1240@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8072911240",
    href: "tel:+918072911240",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kondayampalli, Salem, Tamil Nadu, India",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "vinoth-gv",
    href: "https://www.linkedin.com/in/vinoth-gv",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "vinothvinoth1240-a11y",
    href: "https://github.com/vinothvinoth1240-a11y",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground font-medium hover:text-primary transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
