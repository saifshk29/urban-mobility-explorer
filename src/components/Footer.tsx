
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-urbango-400 flex items-center justify-center mr-2">
                <span className="text-white font-bold">U</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-urbango-500 to-urbango-400 bg-clip-text text-transparent">
                UrbanGo
              </span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Making urban mobility simple, affordable, and accessible for everyone.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-urbango-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-urbango-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-urbango-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-urbango-400">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-urbango-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-urbango-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-urbango-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-urbango-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-urbango-400">
                  Safety Center
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-urbango-400">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-urbango-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-urbango-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-urbango-400">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} UrbanGo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
