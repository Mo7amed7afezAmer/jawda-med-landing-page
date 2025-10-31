import Layout from "@/components/Layout";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Tag, Sparkles, FileText } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Medical Data Collection",
      description:
        "We collect diverse medical data from trusted sources worldwide, ensuring proper consent and ethical standards at every step.",
      features: [
        "Multi-source data acquisition",
        "Ethical consent management",
        "Diverse patient demographics",
        "Quality verification",
      ],
    },
    {
      icon: <Tag className="h-8 w-8" />,
      title: "Data Annotation & Labeling",
      description:
        "Expert medical professionals annotate and label data with precision, creating training datasets that AI models can trust.",
      features: [
        "Medical expert annotation",
        "Multi-label classification",
        "Quality control processes",
        "Format standardization",
      ],
    }
  ];

  return (
    <Layout>
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-float">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive medical data solutions for AI healthcare applications
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm animate-pulse-glows">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Need a Custom Dataset?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can provide the exact medical data your AI project needs
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Request a Dataset</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
