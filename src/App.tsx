import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

// Products
import HighCalciumQuicklime from "./pages/products/HighCalciumQuicklime";
import HydratedLime from "./pages/products/HydratedLime";
import LimeKilnDust from "./pages/products/LimeKilnDust";
import LimeSlurry from "./pages/products/LimeSlurry";
import HighCalciumLimestone from "./pages/products/HighCalciumLimestone";

// Locations
import TexasHouston from "./pages/locations/TexasHouston";
import GenericLocationPage from "./pages/GenericLocationPage";

// Markets
import Industrial from "./pages/markets/Industrial";
import GenericMarketPage from "./pages/GenericMarketPage";

// Sales
import ContactSalesperson from "./pages/sales/ContactSalesperson";
import PageTemplate from "./components/PageTemplate";

// Shareholders
import InvestorRelations from "./pages/shareholders/InvestorRelations";

// Employment
import GeneralEmployment from "./pages/employment/GeneralEmployment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Products */}
          <Route path="/products/high-calcium-quicklime" element={<HighCalciumQuicklime />} />
          <Route path="/products/hydrated-lime" element={<HydratedLime />} />
          <Route path="/products/lime-kiln-dust" element={<LimeKilnDust />} />
          <Route path="/products/lime-slurry" element={<LimeSlurry />} />
          <Route path="/products/high-calcium-limestone" element={<HighCalciumLimestone />} />
          
          {/* Locations */}
          <Route path="/locations/arkansas" element={<GenericLocationPage locationName="Arkansas" stateName="Arkansas" description="Serving Arkansas and surrounding regions with quality lime products" />} />
          <Route path="/locations/colorado" element={<GenericLocationPage locationName="Colorado" stateName="Colorado" description="Providing lime solutions throughout Colorado and the Mountain West" />} />
          <Route path="/locations/louisiana" element={<GenericLocationPage locationName="Louisiana" stateName="Louisiana" description="Supporting Louisiana industries with comprehensive lime services" />} />
          <Route path="/locations/oklahoma" element={<GenericLocationPage locationName="Oklahoma" stateName="Oklahoma" description="Delivering reliable lime products across Oklahoma" />} />
          <Route path="/locations/texas-cleburne" element={<GenericLocationPage locationName="Texas - Cleburne" stateName="Texas" description="Serving North Central Texas from our Cleburne facility" />} />
          <Route path="/locations/texas-houston" element={<TexasHouston />} />
          <Route path="/locations/texas-dfw" element={<GenericLocationPage locationName="Texas - DFW Metroplex" stateName="Texas" description="Comprehensive lime services for the Dallas-Fort Worth area" />} />
          <Route path="/locations/transportation" element={
            <PageTemplate 
              title="Transportation and Logistics" 
              breadcrumb="Locations / Transportation and Logistics"
              description="Reliable delivery solutions across our service territory"
              sections={[
                {
                  title: "Fleet Capabilities",
                  content: "Our modern transportation fleet includes pneumatic trailers, dump trucks, and specialized equipment to ensure safe and efficient delivery of all lime products. We operate 24/7 to meet your scheduling needs."
                },
                {
                  title: "Logistics Services",
                  content: "We provide comprehensive logistics support including route optimization, just-in-time delivery, inventory management, and emergency service capabilities."
                }
              ]}
            />
          } />
          <Route path="/locations/corporate-offices" element={
            <PageTemplate 
              title="Corporate Offices" 
              breadcrumb="Locations / Corporate Offices"
              description="Headquarters of United Lime and Mineral Inc."
              sections={[
                {
                  title: "About Our Company",
                  content: "United Lime and Mineral Inc. has been a leader in lime production and distribution for over 50 years. Our headquarters in Houston, Texas coordinates operations across nine facilities in five states."
                },
                {
                  title: "Contact Us",
                  content: "123 Industrial Way, Suite 100, Houston, TX 77001 | Phone: 1-800-LIME-INC | Email: info@unitedlime.com"
                }
              ]}
            />
          } />
          
          {/* Markets */}
          <Route path="/markets/agriculture" element={<GenericMarketPage marketName="Agriculture" description="Lime solutions for soil amendment and crop production" applications={["Soil pH adjustment", "Nutrient availability enhancement", "Crop yield improvement", "Pasture management", "Fertilizer production", "Animal feed supplements"]} />} />
          <Route path="/markets/construction" element={<GenericMarketPage marketName="Construction" description="Quality lime products for construction applications" applications={["Soil stabilization", "Road base construction", "Asphalt production", "Concrete additives", "Mortar and plaster", "Building materials"]} />} />
          <Route path="/markets/environmental" element={<GenericMarketPage marketName="Environmental" description="Environmental solutions and remediation services" applications={["Water treatment", "Wastewater treatment", "Soil remediation", "Sludge stabilization", "Odor control", "Heavy metal precipitation"]} />} />
          <Route path="/markets/flue-gas" element={<GenericMarketPage marketName="Flue Gas" description="Flue gas desulfurization and emission control" applications={["SO2 removal", "Acid gas neutralization", "Scrubber systems", "Dry sorbent injection", "Circulating fluidized bed", "Spray dry absorbers"]} />} />
          <Route path="/markets/industrial" element={<Industrial />} />
          <Route path="/markets/metallurgical-steel" element={<GenericMarketPage marketName="Metallurgical - Steel" description="Lime products for steel manufacturing" applications={["Basic oxygen furnace flux", "Electric arc furnace", "Desulfurization", "Slag conditioning", "Ladle treatment", "Hot metal treatment"]} />} />
          <Route path="/markets/metallurgical-non-steel" element={<GenericMarketPage marketName="Metallurgical - Non-Steel" description="Lime solutions for non-ferrous metals production" applications={["Copper smelting", "Aluminum production", "Gold processing", "Zinc refining", "Precious metals recovery", "Slag processing"]} />} />
          <Route path="/markets/oil-and-gas" element={<GenericMarketPage marketName="Oil and Gas" description="Lime products for petroleum industry" applications={["Drilling fluids", "Well completion", "Gas sweetening", "Fracking fluids", "Produced water treatment", "Refinery processes"]} />} />
          <Route path="/markets/roofing" element={<GenericMarketPage marketName="Roofing" description="Lime products for roofing shingle production" applications={["Asphalt shingle manufacturing", "Filler material", "Fire resistance enhancement", "Product stabilization", "Quality improvement", "Cost reduction"]} />} />
          
          {/* Sales */}
          <Route path="/sales/contact-salesperson" element={<ContactSalesperson />} />
          <Route path="/sales/service-areas" element={
            <PageTemplate 
              title="Service Areas" 
              breadcrumb="Sales / Service Areas"
              description="Comprehensive coverage across five states"
              sections={[
                {
                  title: "Our Service Territory",
                  content: "United Lime serves customers across Arkansas, Colorado, Louisiana, Oklahoma, and Texas. With nine strategically located facilities, we provide reliable delivery and technical support throughout our service area."
                },
                {
                  title: "States Served",
                  content: "Arkansas • Colorado • Louisiana • Oklahoma • Texas"
                }
              ]}
            />
          } />
          
          {/* Shareholders */}
          <Route path="/shareholders/corporate-governance" element={
            <PageTemplate 
              title="Corporate Governance" 
              breadcrumb="Shareholders / Corporate Governance"
              sections={[
                {
                  title: "Board of Directors",
                  content: "Our Board of Directors brings extensive experience in manufacturing, finance, and industry operations. The Board meets quarterly and maintains committees for audit, compensation, and nominating functions."
                },
                {
                  title: "Corporate Policies",
                  content: "United Lime is committed to the highest standards of corporate governance, ethics, and transparency. Our policies ensure accountability to shareholders and compliance with all regulatory requirements."
                }
              ]}
            />
          } />
          <Route path="/shareholders/investor-relations" element={<InvestorRelations />} />
          <Route path="/shareholders/annual-report" element={
            <PageTemplate 
              title="Annual Report and Fillings" 
              breadcrumb="Shareholders / Annual Report and Fillings"
              sections={[
                {
                  title: "Financial Reports",
                  content: "Access our latest annual reports, 10-K filings, 10-Q quarterly reports, and proxy statements. All documents are available in PDF format."
                },
                {
                  title: "SEC Filings",
                  content: "United Lime and Mineral Inc. files regular reports with the Securities and Exchange Commission. All filings are available through the SEC EDGAR database."
                }
              ]}
            />
          } />
          <Route path="/shareholders/stock-split" element={
            <PageTemplate 
              title="Stock Split - Form 8937" 
              breadcrumb="Shareholders / Stock Split - Form 8937"
              sections={[
                {
                  title: "Stock Split Information",
                  content: "Information regarding historical stock splits and Form 8937 tax reporting documents are available for shareholders. Please contact Investor Relations for specific documentation."
                },
                {
                  title: "Contact Information",
                  content: "For questions about stock splits or tax reporting, contact our Investor Relations team at ir@unitedlime.com or (713) 555-0300."
                }
              ]}
            />
          } />
          
          {/* Employment */}
          <Route path="/employment/driver-houston" element={
            <PageTemplate 
              title="Driver Position - Houston Terminal" 
              breadcrumb="Employment / Driver Position - Houston"
              description="Join our professional driving team in Houston"
              sections={[
                {
                  title: "Position Overview",
                  content: "We are seeking experienced, safety-focused drivers for our Houston terminal. This position involves operating pneumatic and dump trailers to deliver lime products to customers throughout the Gulf Coast region."
                },
                {
                  title: "Requirements",
                  content: (
                    <ul className="space-y-2 text-lg text-muted-foreground">
                      <li className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                        <span>Valid CDL Class A license</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                        <span>Hazmat and Tanker endorsements preferred</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                        <span>Minimum 2 years driving experience</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                        <span>Clean driving record</span>
                      </li>
                    </ul>
                  )
                },
                {
                  title: "Benefits",
                  content: "Competitive pay, comprehensive benefits, paid time off, retirement plan, and career advancement opportunities."
                }
              ]}
            />
          } />
          <Route path="/employment/driver-dfw" element={
            <PageTemplate 
              title="Driver Position - DFW Terminal" 
              breadcrumb="Employment / Driver Position - DFW"
              description="Professional driving opportunities in the Dallas-Fort Worth area"
              sections={[
                {
                  title: "Position Overview",
                  content: "We are seeking experienced, safety-focused drivers for our DFW terminal. This position involves operating pneumatic and dump trailers to deliver lime products to customers throughout North Texas."
                },
                {
                  title: "Requirements",
                  content: (
                    <ul className="space-y-2 text-lg text-muted-foreground">
                      <li className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                        <span>Valid CDL Class A license</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                        <span>Hazmat and Tanker endorsements preferred</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                        <span>Minimum 2 years driving experience</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                        <span>Clean driving record</span>
                      </li>
                    </ul>
                  )
                },
                {
                  title: "Benefits",
                  content: "Competitive pay, comprehensive benefits, paid time off, retirement plan, and career advancement opportunities."
                }
              ]}
            />
          } />
          <Route path="/employment/general" element={<GeneralEmployment />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
