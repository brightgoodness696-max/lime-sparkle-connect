import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    { name: "High Calcium Quicklime", href: "/products/high-calcium-quicklime" },
    { name: "Hydrated Lime", href: "/products/hydrated-lime" },
    { name: "Lime Kiln Dust", href: "/products/lime-kiln-dust" },
    { name: "Lime Slurry", href: "/products/lime-slurry" },
    { name: "High Calcium Limestone", href: "/products/high-calcium-limestone" },
  ];

  const locations = [
    { name: "Arkansas", href: "/locations/arkansas" },
    { name: "Colorado", href: "/locations/colorado" },
    { name: "Louisiana", href: "/locations/louisiana" },
    { name: "Oklahoma", href: "/locations/oklahoma" },
    { name: "Texas - Cleburne", href: "/locations/texas-cleburne" },
    { name: "Texas - Houston", href: "/locations/texas-houston" },
    { name: "Texas - DFW Metroplex", href: "/locations/texas-dfw" },
    { name: "Transportation and Logistics", href: "/locations/transportation" },
    { name: "Corporate Offices", href: "/locations/corporate-offices" },
  ];

  const markets = [
    { name: "Agriculture", href: "/markets/agriculture" },
    { name: "Construction", href: "/markets/construction" },
    { name: "Environmental", href: "/markets/environmental" },
    { name: "Flue Gas", href: "/markets/flue-gas" },
    { name: "Industrial", href: "/markets/industrial" },
    { name: "Metallurgical - Steel", href: "/markets/metallurgical-steel" },
    { name: "Metallurgical - Non-Steel", href: "/markets/metallurgical-non-steel" },
    { name: "Oil and Gas", href: "/markets/oil-and-gas" },
    { name: "Roofing", href: "/markets/roofing" },
  ];

  const sales = [
    { name: "Contact Salesperson", href: "/sales/contact-salesperson" },
    { name: "Service Areas", href: "/sales/service-areas" },
  ];

  const shareholderInfo = [
    { name: "Corporate Governance", href: "/shareholders/corporate-governance" },
    { name: "Investor Relations", href: "/shareholders/investor-relations" },
    { name: "Annual Report and Fillings", href: "/shareholders/annual-report" },
    { name: "Stock Split - Form 8937", href: "/shareholders/stock-split" },
  ];

  const employment = [
    { name: "Driver Position - Houston Terminal", href: "/employment/driver-houston" },
    { name: "Driver Position - DFW Terminal", href: "/employment/driver-dfw" },
    { name: "General Employment", href: "/employment/general" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-heading text-2xl font-bold text-primary">
              United Lime & Mineral Inc.
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-popover">
                    {products.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-popover">
                    {locations.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Markets</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-popover">
                    {markets.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Sales</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-3 p-4 bg-popover">
                    {sales.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Shareholders</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 bg-popover">
                    {shareholderInfo.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Employment</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 bg-popover">
                    {employment.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="space-y-1">
              <Link
                to="/"
                className="block px-4 py-2 text-base font-medium hover:bg-accent rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <MobileDropdown title="Products" items={products} onClose={() => setMobileMenuOpen(false)} />
              <MobileDropdown title="Locations" items={locations} onClose={() => setMobileMenuOpen(false)} />
              <MobileDropdown title="Markets" items={markets} onClose={() => setMobileMenuOpen(false)} />
              <MobileDropdown title="Sales" items={sales} onClose={() => setMobileMenuOpen(false)} />
              <MobileDropdown title="Shareholders" items={shareholderInfo} onClose={() => setMobileMenuOpen(false)} />
              <MobileDropdown title="Employment" items={employment} onClose={() => setMobileMenuOpen(false)} />
              
              <Link
                to="/contact"
                className="block px-4 py-2 text-base font-medium hover:bg-accent rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const MobileDropdown = ({ title, items, onClose }: { title: string; items: { name: string; href: string }[]; onClose: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-2 text-base font-medium hover:bg-accent rounded-md transition-colors"
      >
        {title}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="pl-4 pb-2 animate-fade-in">
          <ul className="grid gap-3 p-2 sm:grid-cols-2 bg-popover rounded-md"> {/* Added grid like desktop */}
            {items.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  onClick={onClose}
                >
                  <div className="text-sm font-medium leading-none">{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
