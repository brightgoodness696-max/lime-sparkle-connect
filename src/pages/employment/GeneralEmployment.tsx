import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Briefcase, Heart, TrendingUp, Users } from "lucide-react";

const GeneralEmployment = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage for you and your family",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Training programs, tuition assistance, and advancement opportunities",
    },
    {
      icon: Briefcase,
      title: "Retirement",
      description: "401(k) with company match and pension plan options",
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Competitive PTO, paid holidays, and flexible scheduling options",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-8 animate-fade-in">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Employment / General Employment</span>
        </div>

        {/* Header */}
        <div className="mb-12 animate-fade-in-up text-center">
          <h1 className="font-heading text-5xl font-bold text-primary mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build your career with a company that values safety, excellence, and employee development
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Application Form */}
          <Card className="shadow-elegant animate-slide-in-right">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold mb-6">Submit Your Application</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" className="mt-2" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="position">Position of Interest</Label>
                  <Input id="position" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="location">Preferred Location</Label>
                  <Input id="location" placeholder="e.g., Houston, TX" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="resume">Resume/CV (URL or text)</Label>
                  <Textarea id="resume" rows={4} className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="cover">Cover Letter</Label>
                  <Textarea id="cover" rows={6} className="mt-2" />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="space-y-6">
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-4">Current Opportunities</h3>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented individuals to join our team. Current openings include:
                </p>
                <ul className="space-y-3">
                  {[
                    "Production Operators",
                    "Maintenance Technicians",
                    "Quality Control Specialists",
                    "Safety Coordinators",
                    "Administrative Staff",
                    "Sales Representatives",
                    "Engineering Positions",
                    "IT Support",
                  ].map((position, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                      <span>{position}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent text-accent-foreground shadow-elegant animate-scale-in">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-4">Equal Opportunity Employer</h3>
                <p className="mb-4 opacity-95">
                  United Lime and Mineral Inc. is committed to providing equal employment opportunities to all employees and applicants regardless of race, color, religion, sex, national origin, age, disability, or any other protected status.
                </p>
                <p className="opacity-95">
                  We maintain a drug-free workplace and conduct background checks as part of our hiring process.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-4">Driver Positions</h3>
                <p className="text-muted-foreground mb-4">
                  Looking for a driving career? Check out our specialized driver positions:
                </p>
                <div className="space-y-3">
                  <Link to="/employment/driver-houston">
                    <Button variant="outline" className="w-full">
                      Houston Terminal - Driver Position
                    </Button>
                  </Link>
                  <Link to="/employment/driver-dfw">
                    <Button variant="outline" className="w-full">
                      DFW Terminal - Driver Position
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GeneralEmployment;
