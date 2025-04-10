
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bus, Bike, Car, Timer, DollarSign, Clock } from "lucide-react";

type TransportMode = 'bus' | 'bike' | 'walk' | 'rideshare' | 'train';

interface TransportCardProps {
  id: string;
  mode: TransportMode;
  startTime: string;
  endTime: string;
  duration: string;
  price: string;
  from: string;
  to: string;
  stops?: number;
}

const TransportCard = ({
  id,
  mode,
  startTime,
  endTime,
  duration,
  price,
  from,
  to,
  stops = 0
}: TransportCardProps) => {
  // Get the appropriate icon and color based on the transport mode
  const getTransportIcon = () => {
    switch (mode) {
      case 'bus':
        return <Bus className="h-6 w-6 text-transport-bus" />;
      case 'bike':
        return <Bike className="h-6 w-6 text-transport-bike" />;
      case 'walk':
        return <Timer className="h-6 w-6 text-transport-walk" />;
      case 'rideshare':
        return <Car className="h-6 w-6 text-transport-rideshare" />;
      case 'train':
        return <Clock className="h-6 w-6 text-transport-train" />;
      default:
        return <Bus className="h-6 w-6 text-transport-bus" />;
    }
  };

  const getModeName = () => {
    return mode.charAt(0).toUpperCase() + mode.slice(1);
  };

  return (
    <Card className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="flex flex-col">
          {/* Header */}
          <div className={`p-4 flex items-center gap-3 border-b border-gray-100 bg-gray-50`}>
            {getTransportIcon()}
            <div>
              <Badge className={`bg-transport-${mode} hover:bg-transport-${mode}/80`}>{getModeName()}</Badge>
            </div>
            <div className="ml-auto flex gap-1 items-center">
              <DollarSign size={16} className="text-gray-500" />
              <span className="font-semibold">{price}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-2xl font-semibold">{startTime}</div>
                <div className="text-sm text-gray-500">{from}</div>
              </div>
              
              <div className="flex flex-col items-center px-2">
                <div className="text-sm text-gray-500">{duration}</div>
                <div className="relative w-20 h-[2px] bg-gray-300 my-1">
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight size={12} className="text-gray-500" />
                  </div>
                </div>
                {stops > 0 && (
                  <div className="text-xs text-gray-400">{stops} {stops === 1 ? 'stop' : 'stops'}</div>
                )}
              </div>
              
              <div>
                <div className="text-2xl font-semibold">{endTime}</div>
                <div className="text-sm text-gray-500">{to}</div>
              </div>
            </div>
            
            <Button 
              className={`w-full bg-transport-${mode} hover:bg-transport-${mode}/80`}
            >
              Select This Route
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransportCard;
