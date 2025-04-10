
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchForm from "@/components/SearchForm";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, Clock, MapPin, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-br from-urbango-50 via-white to-urbango-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-urbango-700 to-urbango-400 bg-clip-text text-transparent">
              Get Around Your City with Ease
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Find and compare all transport options in your city in one place. Save time and money with UrbanGo.
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <SearchForm isHomepage={true} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose UrbanGo?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring together all your transportation options to help you move around your city efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="bg-urbango-100 p-3 rounded-lg w-fit mb-4">
                <Clock className="h-6 w-6 text-urbango-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Time</h3>
              <p className="text-gray-600">
                Compare all transport options at once without switching between different apps.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="bg-urbango-100 p-3 rounded-lg w-fit mb-4">
                <BookOpen className="h-6 w-6 text-urbango-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Simple interface that shows you the most relevant options for your journey.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="bg-urbango-100 p-3 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-urbango-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Info</h3>
              <p className="text-gray-600">
                Get accurate, real-time information about all transport options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-urbango-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to simplify your daily commute?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Start using UrbanGo today and discover the fastest, cheapest, and most convenient way to get around your city.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              className="bg-urbango-400 hover:bg-urbango-500 text-lg px-8 py-6 h-auto"
              onClick={() => navigate('/results?from=Downtown&to=Airport')}
            >
              Try Demo Route
            </Button>
            <Button 
              variant="outline"
              className="border-urbango-400 text-urbango-500 hover:bg-urbango-400 hover:text-white text-lg px-8 py-6 h-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Map Teaser */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">All Your City's Transport in One App</h2>
              <p className="text-lg text-gray-600 mb-6">
                UrbanGo connects to multiple transport providers, giving you the most comprehensive view of your travel options.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-urbango-400 mr-3 mt-0.5" />
                  <span>Public transit including bus, subway, and train</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-urbango-400 mr-3 mt-0.5" />
                  <span>Ride-sharing services like Uber and Lyft</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-urbango-400 mr-3 mt-0.5" />
                  <span>Bike and scooter sharing options</span>
                </li>
              </ul>
              <Button className="bg-urbango-400 hover:bg-urbango-500">
                Explore All Features
              </Button>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl relative">
              <div className="aspect-video bg-gray-200 animate-pulse relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
