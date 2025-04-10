
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-urbango-400 flex items-center justify-center mr-2">
                <span className="text-white font-bold">U</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-urbango-500 to-urbango-400 bg-clip-text text-transparent">
                UrbanGo
              </span>
            </Link>
          </div>
          
          {!isMobile ? (
            <div className="flex items-center gap-6">
              <Link to="/" className="text-gray-700 hover:text-urbango-400 font-medium">Home</Link>
              <Link to="/" className="text-gray-700 hover:text-urbango-400 font-medium">About</Link>
              <Link to="/" className="text-gray-700 hover:text-urbango-400 font-medium">Contact</Link>
              <Button variant="outline" className="border-urbango-400 text-urbango-400 hover:bg-urbango-400 hover:text-white">
                Sign In
              </Button>
              <Button className="bg-urbango-400 hover:bg-urbango-500">Sign Up</Button>
            </div>
          ) : (
            <div>
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="bg-white px-4 py-2 shadow-md">
          <div className="flex flex-col space-y-3 pb-3">
            <Link 
              to="/" 
              className="px-3 py-2 text-gray-700 hover:bg-urbango-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/" 
              className="px-3 py-2 text-gray-700 hover:bg-urbango-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/" 
              className="px-3 py-2 text-gray-700 hover:bg-urbango-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-urbango-400 text-urbango-400 w-full">
                Sign In
              </Button>
              <Button className="bg-urbango-400 hover:bg-urbango-500 w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
