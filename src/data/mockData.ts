
export interface TransportOption {
  id: string;
  mode: 'bus' | 'bike' | 'walk' | 'rideshare' | 'train';
  startTime: string;
  endTime: string;
  duration: string;
  price: string;
  from: string;
  to: string;
  stops?: number;
}

export const generateMockRoutes = (from: string, to: string): TransportOption[] => {
  // Generate different mock routes based on the input
  const randomSeed = from.length + to.length;
  
  return [
    {
      id: `bus-${randomSeed}-1`,
      mode: 'bus',
      startTime: '08:30',
      endTime: '09:10',
      duration: '40 min',
      price: '$2.50',
      from,
      to,
      stops: 3
    },
    {
      id: `bike-${randomSeed}-2`,
      mode: 'bike',
      startTime: '08:30',
      endTime: '09:05',
      duration: '35 min',
      price: '$3.75',
      from,
      to
    },
    {
      id: `rideshare-${randomSeed}-3`,
      mode: 'rideshare',
      startTime: '08:30',
      endTime: '08:50',
      duration: '20 min',
      price: '$12.00',
      from,
      to
    },
    {
      id: `train-${randomSeed}-4`,
      mode: 'train',
      startTime: '08:35',
      endTime: '09:00',
      duration: '25 min',
      price: '$3.00',
      from,
      to,
      stops: 2
    },
    {
      id: `bus-${randomSeed}-5`,
      mode: 'bus',
      startTime: '08:45',
      endTime: '09:35',
      duration: '50 min',
      price: '$2.00',
      from,
      to,
      stops: 5
    },
    {
      id: `walk-${randomSeed}-6`,
      mode: 'walk',
      startTime: '08:30',
      endTime: '09:45',
      duration: '1h 15m',
      price: 'Free',
      from,
      to
    }
  ];
};
