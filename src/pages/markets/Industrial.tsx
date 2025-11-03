import PageTemplate from "@/components/PageTemplate";

const Industrial = () => {
  return (
    <PageTemplate
      title="Industrial Markets"
      breadcrumb="Markets / Industrial"
      description="Comprehensive lime solutions for diverse industrial applications"
      sections={[
        {
          title: "Industrial Applications",
          content: "United Lime serves a wide range of industrial sectors with tailored lime products and technical expertise. From chemical manufacturing to pulp and paper production, our high-quality lime products enhance processes, improve efficiency, and ensure consistent results.",
        },
        {
          title: "Key Industries Served",
          content: (
            <div className="grid md:grid-cols-2 gap-4 text-lg text-muted-foreground">
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Chemical manufacturing</span>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Pulp and paper production</span>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Sugar refining</span>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Food processing</span>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Mining and mineral processing</span>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Petrochemical refining</span>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Pharmaceutical manufacturing</span>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                <span>Water treatment facilities</span>
              </div>
            </div>
          ),
        },
        {
          title: "Our Solutions",
          content: "We provide comprehensive lime solutions including process optimization, technical support, quality assurance, and reliable supply chain management. Our team of technical experts works closely with customers to develop customized solutions that improve efficiency and reduce costs.",
        },
        {
          title: "Technical Support",
          content: "Our experienced technical team provides on-site support, process analysis, and continuous optimization to ensure you get maximum value from our lime products. We offer testing services, application engineering, and troubleshooting assistance.",
        },
      ]}
    />
  );
};

export default Industrial;
