import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-xl" />
      <div className="absolute top-32 right-20 w-32 h-32 bg-accent/30 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary-glow/40 rounded-full animate-float blur-xl" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Get More Done with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Whitepace
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Project management software that enables your teams to collaborate, 
            plan, analyze and manage everyday tasks
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold glow-effect">
              Try Whitepace free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="lg" className="px-8 py-4 text-lg font-semibold">
              <Play className="mr-2 h-5 w-5" />
              Watch the demo
            </Button>
          </div>
          
          <div className="mt-16">
            <p className="text-sm text-muted-foreground mb-4">Trusted by teams at</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Microsoft</div>
              <div className="text-2xl font-bold">Apple</div>
              <div className="text-2xl font-bold">Slack</div>
              <div className="text-2xl font-bold">Google</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;