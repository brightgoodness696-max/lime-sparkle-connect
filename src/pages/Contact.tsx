import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageLayout from "@/components/PageLayout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="font-heading text-5xl font-bold text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for inquiries, quotes, or technical support
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant animate-slide-in-right">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-2" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company Name" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-elegant animate-fade-in">
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Corporate Headquarters</h3>
                        <p className="text-muted-foreground">
                          United Lime and Mineral Inc.<br />
                          123 Industrial Way<br />
                          Suite 100<br />
                          Houston, TX 77001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">
                          Toll Free: 1-800-LIME-INC<br />
                          Main: (713) 555-0100<br />
                          Fax: (713) 555-0101
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">
                          General: info@unitedlime.com<br />
                          Sales: sales@unitedlime.com<br />
                          Support: support@unitedlime.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 5:00 PM CST<br />
                          Saturday - Sunday: Closed<br />
                          24/7 Emergency Support Available
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-accent text-accent-foreground shadow-elegant animate-scale-in">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-6 opacity-95">
                    Our sales team is ready to help you find the right lime solution for your needs.
                  </p>
                  <Button variant="secondary" size="lg" className="w-full">
                    Call Sales Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
