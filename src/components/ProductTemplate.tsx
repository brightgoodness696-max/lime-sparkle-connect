import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/PageLayout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProductTemplateProps {
  title: string;
  description: string;
  overview: string;
  details: string;
  features: string[];
  applications: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  relatedProducts: {
    name: string;
    link: string;
  }[];
}

const ProductTemplate = ({
  title,
  description,
  overview,
  details,
  features,
  applications,
  specifications,
  relatedProducts,
}: ProductTemplateProps) => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-8 animate-fade-in">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/" className="hover:text-primary">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{title}</span>
        </div>

        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="font-heading text-5xl font-bold text-primary mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {description}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-elegant animate-slide-in-right">
              <CardContent className="p-8">
                <h2 className="font-heading text-3xl font-bold mb-6 text-primary">Product Overview</h2>
                <p className="text-lg mb-4">{overview}</p>
                <p className="text-lg mb-6">{details}</p>

                <h3 className="font-heading text-2xl font-bold mb-4 text-primary">Key Features</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
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
                  {applications.map((application, index) => (
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
                  {specifications.map((spec, index) => (
                    <div key={index}>
                      <dt className="font-semibold text-sm text-muted-foreground">{spec.label}</dt>
                      <dd className="text-lg">{spec.value}</dd>
                    </div>
                  ))}
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

            {relatedProducts.length > 0 && (
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-4">Related Products</h3>
                  <ul className="space-y-3">
                    {relatedProducts.map((product, index) => (
                      <li key={index}>
                        <Link to={product.link} className="text-accent hover:underline">
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductTemplate;
