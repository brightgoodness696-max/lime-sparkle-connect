import PageTemplate from "@/components/PageTemplate";

interface LocationPageProps {
  locationName: string;
  stateName: string;
  description: string;
}

const GenericLocationPage = ({ locationName, stateName, description }: LocationPageProps) => {
  return (
    <PageTemplate
      title={locationName}
      breadcrumb={`Locations / ${locationName}`}
      description={description}
      sections={[
        {
          title: "Location Overview",
          content: `Our ${stateName} facility serves the regional market with comprehensive lime products and logistics support. Strategically positioned to provide efficient delivery and excellent customer service throughout the area.`,
        },
        {
          title: "Facility Capabilities",
          content: (
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Modern storage and handling facilities</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Dedicated transportation fleet</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Quality control laboratory</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Technical support team</span>
              </li>
            </ul>
          ),
        },
        {
          title: "Products Available",
          content: "All United Lime products are available at this location, including High Calcium Quicklime, Hydrated Lime, Lime Kiln Dust, Lime Slurry, and High Calcium Limestone. We maintain substantial inventory to ensure product availability.",
        },
        {
          title: "Contact Information",
          content: (
            <div className="text-lg text-muted-foreground space-y-2">
              <p>For information about this location, please contact:</p>
              <p><strong>Phone:</strong> 1-800-LIME-INC</p>
              <p><strong>Email:</strong> info@unitedlime.com</p>
            </div>
          ),
        },
      ]}
    />
  );
};

export default GenericLocationPage;
