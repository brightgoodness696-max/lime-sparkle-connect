import PageTemplate from "@/components/PageTemplate";

const InvestorRelations = () => {
  return (
    <PageTemplate
      title="Investor Relations"
      breadcrumb="Shareholders / Investor Relations"
      description="Information for current and prospective shareholders of United Lime and Mineral Inc."
      sections={[
        {
          title: "Company Overview",
          content: "United Lime and Mineral Inc. is a leading provider of high-quality lime products serving diverse industries across five states. With over 50 years of operational excellence, we have established ourselves as a trusted partner for customers requiring reliable lime solutions.",
        },
        {
          title: "Financial Highlights",
          content: (
            <div className="text-lg text-muted-foreground space-y-4">
              <p>Our strong financial performance reflects our commitment to operational efficiency and customer service excellence. Key financial metrics include:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                  <span>Consistent revenue growth</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                  <span>Strong EBITDA margins</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                  <span>Investment in facility modernization</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                  <span>Sustainable dividend policy</span>
                </li>
              </ul>
            </div>
          ),
        },
        {
          title: "Stock Information",
          content: (
            <div className="text-lg text-muted-foreground space-y-2">
              <p><strong>Trading Symbol:</strong> ULMI</p>
              <p><strong>Exchange:</strong> NASDAQ</p>
              <p><strong>Fiscal Year End:</strong> December 31</p>
              <p><strong>Transfer Agent:</strong> Computershare Trust Company, N.A.</p>
              <p><strong>Independent Auditor:</strong> Ernst & Young LLP</p>
            </div>
          ),
        },
        {
          title: "Contact Investor Relations",
          content: (
            <div className="text-lg text-muted-foreground space-y-2">
              <p>For investor inquiries, please contact:</p>
              <p><strong>Email:</strong> ir@unitedlime.com</p>
              <p><strong>Phone:</strong> (713) 555-0300</p>
              <p><strong>Address:</strong> United Lime and Mineral Inc., 123 Industrial Way, Suite 100, Houston, TX 77001</p>
            </div>
          ),
        },
      ]}
    />
  );
};

export default InvestorRelations;
