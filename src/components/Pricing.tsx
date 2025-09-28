import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals and small teams just getting started",
    features: [
      "Up to 3 team members",
      "5 projects",
      "Basic task management",
      "Mobile apps",
      "Community support"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Personal",
    price: "$12",
    period: "per month",
    description: "Great for growing teams who need more collaboration features",
    features: [
      "Up to 10 team members",
      "Unlimited projects",
      "Advanced task management",
      "Time tracking",
      "Email support",
      "File storage (10GB)"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Organization",
    price: "$49",
    period: "per month",
    description: "Perfect for larger teams and organizations with advanced needs",
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "Advanced analytics",
      "Custom workflows",
      "Priority support",
      "File storage (100GB)",
      "SSO & advanced security"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Your Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a small team or enterprise, we have the perfect plan to boost your productivity
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-2 ring-primary glow-effect' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 font-semibold ${
                    plan.popular ? 'glow-effect' : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;