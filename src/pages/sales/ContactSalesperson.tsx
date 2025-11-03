import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSalesperson = () => {
  const salesTeam = [
    {
      name: "Michael Johnson",
      title: "Regional Sales Manager - Texas",
      region: "Houston, Cleburne, DFW Metroplex",
      phone: "(713) 555-0200",
      email: "mjohnson@unitedlime.com",
    },
    {
      name: "Sarah Williams",
      title: "Regional Sales Manager - Louisiana",
      region: "Louisiana",
      phone: "(504) 555-0201",
      email: "swilliams@unitedlime.com",
    },
    {
      name: "Robert Davis",
      title: "Regional Sales Manager - Arkansas & Oklahoma",
      region: "Arkansas, Oklahoma",
      phone: "(501) 555-0202",
      email: "rdavis@unitedlime.com",
    },
    {
      name: "Jennifer Martinez",
      title: "Regional Sales Manager - Colorado",
      region: "Colorado",
      phone: "(303) 555-0203",
      email: "jmartinez@unitedlime.com",
    },
    {
      name: "David Anderson",
      title: "National Accounts Manager",
      region: "Multi-state Operations",
      phone: "(713) 555-0210",
      email: "danderson@unitedlime.com",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-8 animate-fade-in">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Sales / Contact Salesperson</span>
        </div>

        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="font-heading text-5xl font-bold text-primary mb-6">
            Contact Our Sales Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Our experienced sales professionals are ready to help you find the right lime solution for your needs
          </p>
        </div>

        {/* Sales Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {salesTeam.map((person, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold text-accent mb-4">{person.title}</p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-muted-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{person.region}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
                    <a href={`tel:${person.phone}`} className="text-sm hover:text-accent transition-colors">
                      {person.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
                    <a href={`mailto:${person.email}`} className="text-sm hover:text-accent transition-colors break-all">
                      {person.email}
                    </a>
                  </div>
                </div>

                <Button className="w-full mt-6" size="sm">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* General Contact Card */}
        <Card className="shadow-elegant bg-gradient-accent text-accent-foreground max-w-2xl mx-auto animate-scale-in">
          <CardContent className="p-8 text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Not sure who to contact?
            </h3>
            <p className="mb-6 opacity-95">
              Reach out to our general sales line and we'll connect you with the right person for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Call: 1-800-LIME-INC
              </Button>
              <Button variant="secondary" size="lg">
                Email: sales@unitedlime.com
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default ContactSalesperson;
