import Layout from "@/components/Layout";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Shield, Heart, Users, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ethics First",
      description: "We never compromise on ethical standards. Every dataset is collected with proper consent and oversight.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Diversity",
      description: "Representative data leads to better AI. We ensure our datasets reflect global patient diversity.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Privacy",
      description: "Patient privacy is paramount. All data is thoroughly de-identified and compliant with regulations.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality",
      description: "Rigorous quality assurance processes ensure every dataset meets the highest standards.",
    },
  ];

  return (
    <Layout>
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-float">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Jawda Med
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building the foundation for trustworthy medical AI through ethical, diverse, and secure data
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 animate-pulse-glow7afez">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Jawda Med, our mission is to build the foundation for trustworthy medical AI by providing
                ethically sourced, diverse, and de-identified medical data. We understand that the future of
                healthcare depends on reliable AI systems, and reliable AI systems depend on high-quality data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]7afez"
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-16 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Why We Exist</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The healthcare industry is at a critical juncture. Artificial intelligence promises to
                revolutionize diagnosis, treatment, and patient care. But there's a problem: AI systems
                are only as good as the data they're trained on.
              </p>
              <p>
                Too many healthcare AI projects fail because they're built on unreliable, biased, or
                incomplete datasets. This doesn't just waste resources—it can lead to dangerous outcomes
                that affect real patients' lives.
              </p>
              <p>
                Jawda Med was founded to solve this critical challenge. We recognized the urgent need for
                a trusted source of high-quality medical data that meets the highest ethical standards.
                Our team of medical professionals, data scientists, and ethicists works tirelessly to
                ensure that every dataset we provide helps build AI systems that truly serve patients
                and healthcare providers.
              </p>
              <p className="text-foreground font-medium">
                We're not just providing data—we're building the foundation for a new era of trustworthy
                healthcare AI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
