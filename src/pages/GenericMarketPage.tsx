import PageTemplate from "@/components/PageTemplate";

interface MarketPageProps {
  marketName: string;
  description: string;
  applications: string[];
}

const GenericMarketPage = ({ marketName, description, applications }: MarketPageProps) => {
  return (
    <PageTemplate
      title={`${marketName} Market`}
      breadcrumb={`Markets / ${marketName}`}
      description={description}
      sections={[
        {
          title: "Market Overview",
          content: `United Lime provides specialized lime solutions for the ${marketName.toLowerCase()} sector. Our high-quality products and technical expertise help customers achieve optimal results in their operations.`,
        },
        {
          title: "Applications",
          content: (
            <div className="grid md:grid-cols-2 gap-4 text-lg text-muted-foreground">
              {applications.map((app, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          ),
        },
        {
          title: "Our Solutions",
          content: "We provide comprehensive lime solutions including product selection, technical support, quality assurance, and reliable delivery. Our experienced team works closely with customers to optimize processes and ensure consistent results.",
        },
        {
          title: "Technical Support",
          content: "Our technical experts offer on-site support, process analysis, and application engineering to help you maximize the value of our lime products in your operations.",
        },
      ]}
    />
  );
};

export default GenericMarketPage;
