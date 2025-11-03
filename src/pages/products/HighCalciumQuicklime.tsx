import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/PageLayout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HighCalciumQuicklime = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-8 animate-fade-in">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/" className="hover:text-primary">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">High Calcium Quicklime</span>
        </div>

        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="font-heading text-5xl font-bold text-primary mb-6">
            High Calcium Quicklime
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Premium quality calcium oxide with high purity and reactivity for demanding industrial applications
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-elegant animate-slide-in-right">
              <CardContent className="p-8">
                <h2 className="font-heading text-3xl font-bold mb-6 text-primary">Product Overview</h2>
                <p className="text-lg mb-4">
                  Our High Calcium Quicklime is produced from premium limestone deposits and processed in state-of-the-art kilns to ensure maximum calcium content and reactivity. This product is ideal for applications requiring high-purity calcium oxide with excellent performance characteristics.
                </p>
                <p className="text-lg mb-6">
                  With calcium oxide content typically exceeding 90%, our quicklime delivers superior results in steel production, chemical manufacturing, water treatment, and various other industrial processes.
                </p>

                <h3 className="font-heading text-2xl font-bold mb-4 text-primary">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "High calcium oxide content (>90% CaO)",
                    "Excellent reactivity and fast hydration",
                    "Low impurities for critical applications",
                    "Consistent particle size distribution",
                    "Available in bulk and packaged formats",
                    "Meets or exceeds industry standards",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-scale-in">
              <CardContent className="p-8">
                <h2 className="font-heading text-3xl font-bold mb-6 text-primary">Applications</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Steel manufacturing and refining",
                    "Chemical processing",
                    "Water and wastewater treatment",
                    "Flue gas desulfurization",
                    "Soil stabilization",
                    "Mining and mineral processing",
                    "Pulp and paper production",
                    "Sugar refining",
                  ].map((application, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                      <span>{application}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-4">Technical Specifications</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="font-semibold text-sm text-muted-foreground">CaO Content</dt>
                    <dd className="text-lg">90-95%</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-sm text-muted-foreground">Reactivity</dt>
                    <dd className="text-lg">High</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-sm text-muted-foreground">Available Sizes</dt>
                    <dd className="text-lg">0-4", pebble, crushed</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-sm text-muted-foreground">Packaging</dt>
                    <dd className="text-lg">Bulk, supersacks, bags</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent text-accent-foreground shadow-elegant">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-4">Need More Information?</h3>
                <p className="mb-6">
                  Contact our technical team for detailed specifications, pricing, or application guidance.
                </p>
                <Link to="/sales/contact-salesperson">
                  <Button variant="secondary" className="w-full">
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-4">Related Products</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/products/hydrated-lime" className="text-accent hover:underline">
                      Hydrated Lime
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/lime-slurry" className="text-accent hover:underline">
                      Lime Slurry
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/high-calcium-limestone" className="text-accent hover:underline">
                      High Calcium Limestone
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HighCalciumQuicklime;
