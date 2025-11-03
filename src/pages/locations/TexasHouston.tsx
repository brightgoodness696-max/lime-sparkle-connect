import PageTemplate from "@/components/PageTemplate";

const TexasHouston = () => {
  return (
    <PageTemplate
      title="Texas - Houston Terminal"
      breadcrumb="Locations / Texas - Houston"
      description="Serving the greater Houston area and Gulf Coast region with comprehensive lime products and logistics support"
      sections={[
        {
          title: "Location Overview",
          content: "Our Houston terminal is strategically located to serve the petrochemical, refining, and industrial sectors throughout the Gulf Coast region. With excellent access to major highways and port facilities, we provide reliable delivery of high-quality lime products to customers across Southeast Texas and Louisiana.",
        },
        {
          title: "Facility Capabilities",
          content: (
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Bulk storage and handling facilities</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Fleet of pneumatic and dump trailers</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>24/7 loading and dispatch</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Technical support services</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Rail and truck receiving</span>
              </li>
            </ul>
          ),
        },
        {
          title: "Products Available",
          content: "All United Lime products are available at our Houston terminal, including High Calcium Quicklime, Hydrated Lime, Lime Slurry, and custom formulations. We maintain substantial inventory to ensure immediate availability.",
        },
        {
          title: "Contact Information",
          content: (
            <div className="text-lg text-muted-foreground space-y-2">
              <p><strong>Address:</strong> 5000 Industrial Parkway, Houston, TX 77032</p>
              <p><strong>Phone:</strong> (713) 555-0150</p>
              <p><strong>Email:</strong> houston@unitedlime.com</p>
              <p><strong>Terminal Manager:</strong> John Smith</p>
            </div>
          ),
        },
      ]}
    />
  );
};

export default TexasHouston;
