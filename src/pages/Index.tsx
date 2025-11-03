import { Link } from "react-router-dom";
import { ArrowRight, Factory, MapPin, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/PageLayout";
import heroImage from "@/assets/hero-industrial.jpg";

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="United Lime and Mineral industrial facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-primary-foreground">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Building America with Quality Lime Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Leading provider of high-calcium lime products serving industries across five states with excellence and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products/high-calcium-quicklime">
                <Button size="lg" variant="secondary" className="group">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Factory, label: "Production Facilities", value: "9+" },
              { icon: MapPin, label: "States Served", value: "5" },
              { icon: TrendingUp, label: "Years of Excellence", value: "50+" },
              { icon: Users, label: "Industries Served", value: "10+" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="font-heading text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                Your Trusted Partner in Lime Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                For over five decades, United Lime and Mineral Inc. has been at the forefront of lime production and distribution. Our commitment to quality, reliability, and customer service has made us a trusted partner across multiple industries.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From agriculture to steel production, environmental applications to construction, our high-quality lime products meet the diverse needs of modern industry. With strategically located facilities across Arkansas, Colorado, Louisiana, Oklahoma, and Texas, we ensure timely delivery and exceptional service.
              </p>
              <Link to="/locations/corporate-offices">
                <Button variant="default" size="lg">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="animate-scale-in">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-bold mb-6">Why Choose United Lime?</h3>
                  <ul className="space-y-4">
                    {[
                      "Premium quality high-calcium lime products",
                      "Strategic locations across five states",
                      "Dedicated transportation and logistics",
                      "Technical expertise and customer support",
                      "Commitment to environmental responsibility",
                      "Consistent supply and reliable delivery",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-accent" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Product Line
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of lime products tailored to meet your specific industry needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "High Calcium Quicklime",
                description: "High-purity quicklime for industrial applications requiring maximum reactivity and calcium content.",
                link: "/products/high-calcium-quicklime"
              },
              {
                title: "Hydrated Lime",
                description: "Versatile calcium hydroxide for water treatment, construction, and environmental applications.",
                link: "/products/hydrated-lime"
              },
              {
                title: "Lime Kiln Dust",
                description: "Cost-effective alternative for soil stabilization and agricultural applications.",
                link: "/products/lime-kiln-dust"
              },
              {
                title: "Lime Slurry",
                description: "Ready-to-use lime suspension for flue gas treatment and water purification.",
                link: "/products/lime-slurry"
              },
              {
                title: "High Calcium Limestone",
                description: "Premium crushed limestone for construction, agriculture, and industrial uses.",
                link: "/products/high-calcium-limestone"
              },
            ].map((product, index) => (
              <Card 
                key={index} 
                className="shadow-elegant hover:shadow-hover transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Link to={product.link}>
                    <Button variant="link" className="p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Providing tailored lime solutions across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Agriculture", link: "/markets/agriculture" },
              { name: "Construction", link: "/markets/construction" },
              { name: "Environmental", link: "/markets/environmental" },
              { name: "Flue Gas", link: "/markets/flue-gas" },
              { name: "Industrial", link: "/markets/industrial" },
              { name: "Metallurgical - Steel", link: "/markets/metallurgical-steel" },
              { name: "Metallurgical - Non-Steel", link: "/markets/metallurgical-non-steel" },
              { name: "Oil and Gas", link: "/markets/oil-and-gas" },
              { name: "Roofing", link: "/markets/roofing" },
            ].map((market, index) => (
              <Link 
                key={index} 
                to={market.link}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Card className="shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-primary hover:text-accent transition-colors">
                      {market.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95 animate-fade-in-up">
            Contact our sales team today to discuss your lime product needs and discover how we can support your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/sales/contact-salesperson">
              <Button size="lg" variant="secondary">
                Contact Sales Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/sales/service-areas">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Service Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
