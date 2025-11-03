import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/PageLayout";
import { ReactNode } from "react";

interface Section {
  title: string;
  content: string | ReactNode;
}

interface PageTemplateProps {
  title: string;
  breadcrumb: string;
  description?: string;
  sections: Section[];
}

const PageTemplate = ({ title, breadcrumb, description, sections }: PageTemplateProps) => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-8 animate-fade-in">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{breadcrumb}</span>
        </div>

        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="font-heading text-5xl font-bold text-primary mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-muted-foreground max-w-3xl">
              {description}
            </p>
          )}
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl space-y-8">
          {sections.map((section, index) => (
            <Card 
              key={index} 
              className="shadow-elegant animate-slide-in-right"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <h2 className="font-heading text-3xl font-bold mb-6 text-primary">
                  {section.title}
                </h2>
                {typeof section.content === 'string' ? (
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                ) : (
                  section.content
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default PageTemplate;
