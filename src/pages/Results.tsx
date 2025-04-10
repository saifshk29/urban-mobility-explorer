
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchForm from "@/components/SearchForm";
import TransportCard from "@/components/TransportCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateMockRoutes, TransportOption } from "@/data/mockData";
import { Bus, Bike, Timer, Car, Clock, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Results = () => {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from") || "Downtown";
  const to = searchParams.get("to") || "Airport";
  
  const [routes, setRoutes] = useState<TransportOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate API call to get routes
    setLoading(true);
    
    // Use timeout to simulate network request
    const timer = setTimeout(() => {
      const mockRoutes = generateMockRoutes(from, to);
      setRoutes(mockRoutes);
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [from, to]);
  
  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
  };
  
  const filteredRoutes = activeFilter === "all" 
    ? routes 
    : routes.filter(route => route.mode === activeFilter);
    
  const handleSelectRoute = (id: string) => {
    toast({
      title: "Route selected",
      description: "This feature is not available in the MVP",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Search Section */}
      <section className="pt-24 pb-6 px-4 bg-urbango-100">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Find Your Route</h1>
          
          {/* Search Form */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <SearchForm isHomepage={false} />
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-8 px-4 bg-white flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              Routes from <span className="text-urbango-500">{from}</span> to <span className="text-urbango-500">{to}</span>
            </h2>
            
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter size={16} />
              <span>Filter</span>
            </Button>
          </div>
          
          {/* Transport Mode Tabs */}
          <Tabs defaultValue="all" className="mb-8" onValueChange={handleFilterChange}>
            <TabsList className="grid grid-cols-6 mb-2">
              <TabsTrigger value="all" className="data-[state=active]:bg-gray-100">All</TabsTrigger>
              <TabsTrigger value="bus" className="data-[state=active]:bg-blue-100">
                <Bus size={16} className="mr-1" /> Bus
              </TabsTrigger>
              <TabsTrigger value="bike" className="data-[state=active]:bg-green-100">
                <Bike size={16} className="mr-1" /> Bike
              </TabsTrigger>
              <TabsTrigger value="walk" className="data-[state=active]:bg-purple-100">
                <Timer size={16} className="mr-1" /> Walk
              </TabsTrigger>
              <TabsTrigger value="rideshare" className="data-[state=active]:bg-orange-100">
                <Car size={16} className="mr-1" /> Ride
              </TabsTrigger>
              <TabsTrigger value="train" className="data-[state=active]:bg-red-100">
                <Clock size={16} className="mr-1" /> Train
              </TabsTrigger>
            </TabsList>
            
            <Separator className="my-4" />
            
            {loading ? (
              // Loading state
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-40 bg-gray-100 rounded-lg animate-pulse" />
                ))}
              </div>
            ) : (
              // Results
              <TabsContent value={activeFilter} className="mt-0">
                {filteredRoutes.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4">
                    {filteredRoutes.map((route) => (
                      <TransportCard 
                        key={route.id}
                        {...route}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-500">No routes found for this transport mode.</p>
                    <p className="text-sm text-gray-400 mt-2">Try another transport option.</p>
                  </div>
                )}
              </TabsContent>
            )}
          </Tabs>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Results;
