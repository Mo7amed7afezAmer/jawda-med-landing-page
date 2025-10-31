import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      message: "",
    });
  };

  return (
    <Layout>
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-float">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to power your healthcare AI with trusted medical data? Let's talk.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 animate-pulse-glow7afez">
              <h2 className="text-2xl font-bold mb-6">Request a Dataset</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    type="text"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-background/50 border-border/50 focus:border-primary min-h-[150px]"
                    placeholder="Tell us about your project and data requirements..."
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contact@jawdamed.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@jawdamed.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">LinkedIn</h3>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Connect with us
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Why Work With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Ethically sourced and diverse datasets
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      HIPAA/GDPR compliant de-identification
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Custom datasets for your specific needs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Expert support throughout your project
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
