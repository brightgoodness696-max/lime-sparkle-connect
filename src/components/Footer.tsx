import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold">United Lime & Mineral Inc.</h3>
            <p className="text-sm opacity-90">
              Leading provider of high-quality lime products and services across multiple states.
            </p>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Corporate Headquarters</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">1-800-LIME-INC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">info@unitedlime.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/high-calcium-quicklime" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/locations/corporate-offices" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/markets/industrial" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Markets We Serve
                </Link>
              </li>
              <li>
                <Link to="/sales/contact-salesperson" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Sales & Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Our Locations</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/locations/arkansas" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Arkansas
                </Link>
              </li>
              <li>
                <Link to="/locations/colorado" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Colorado
                </Link>
              </li>
              <li>
                <Link to="/locations/louisiana" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Louisiana
                </Link>
              </li>
              <li>
                <Link to="/locations/oklahoma" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Oklahoma
                </Link>
              </li>
              <li>
                <Link to="/locations/texas-houston" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Texas
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shareholders/investor-relations" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link to="/employment/general" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shareholders/corporate-governance" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Corporate Governance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} United Lime and Mineral Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
