
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, MapPin } from "lucide-react";
import { toast } from "sonner";

const SearchForm = ({ isHomepage = true }: { isHomepage?: boolean }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!from || !to) {
      toast.error("Please enter both origin and destination");
      return;
    }
    
    // Navigate to results page with query params
    navigate(`/results?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`w-full max-w-3xl mx-auto ${isHomepage ? 'space-y-6 md:space-y-8' : 'space-y-4'}`}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <MapPin size={20} className="text-urbango-400" />
          </div>
          <Input
            type="text"
            placeholder="From (e.g. Downtown)"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="pl-10 h-12 rounded-lg border-gray-300 focus-visible:ring-urbango-400"
          />
        </div>
        
        <div className="flex items-center justify-center">
          <div className="hidden md:flex bg-urbango-100 p-2 rounded-full">
            <ArrowRight size={20} className="text-urbango-400" />
          </div>
        </div>
        
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <MapPin size={20} className="text-urbango-600" />
          </div>
          <Input
            type="text"
            placeholder="To (e.g. Airport)"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="pl-10 h-12 rounded-lg border-gray-300 focus-visible:ring-urbango-400"
          />
        </div>
      </div>
      
      <Button 
        type="submit" 
        className={`bg-urbango-400 hover:bg-urbango-500 ${isHomepage ? 'h-12 text-base px-8 w-full md:w-auto' : 'w-full'}`}
      >
        Find Routes
      </Button>
    </form>
  );
};

export default SearchForm;
