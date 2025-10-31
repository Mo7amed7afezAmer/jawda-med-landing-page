import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedBackground from "@/components/AnimatedBackground";
import FeatureCard from "@/components/FeatureCard";
import { Shield, Globe, Lock, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function Index() {
  return (
    <Layout>
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-float">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 glow-text7afez">
              Ethically Sourced. Diverse.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                De-identified Medical Data for AI
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Powering healthcare AI with trusted medical data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Work With Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Request Data</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="relative py-24 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Building the Foundation for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Trustworthy Medical AI
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Jawda Med, we believe trust starts with data integrity. We provide ethically sourced,
              diverse, and de-identified medical data that empowers AI companies, researchers, and
              hospitals to build reliable healthcare solutions.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Jawda Med Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Jawda Med?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Setting the standard for secure, ethical, and diverse medical data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Ethically Sourced"
              description="Every dataset is collected with the highest ethical standards and proper consent"
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="Diverse & Representative"
              description="Our datasets reflect the true diversity of global patient populations"
            />
            <FeatureCard
              icon={<Lock className="h-6 w-6" />}
              title="Fully De-identified"
              description="HIPAA/GDPR compliant with complete patient privacy protection"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm animate-pulse-glow7afez">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Power Your Healthcare AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get access to high-quality, ethically sourced medical data that you can trust
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
