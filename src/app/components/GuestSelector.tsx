import { useState } from 'react';
import { Users, Plus, Minus } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface GuestSelectorProps {
  rooms: number;
  guests: number;
  onUpdate: (rooms: number, guests: number) => void;
  compact?: boolean;
}

export function GuestSelector({ rooms, guests, onUpdate, compact = false }: GuestSelectorProps) {
  const [localRooms, setLocalRooms] = useState(rooms);
  const [localGuests, setLocalGuests] = useState(guests);

  const updateRooms = (delta: number) => {
    const newRooms = Math.max(1, Math.min(10, localRooms + delta));
    setLocalRooms(newRooms);
    onUpdate(newRooms, localGuests);
  };

  const updateGuests = (delta: number) => {
    const newGuests = Math.max(1, Math.min(20, localGuests + delta));
    setLocalGuests(newGuests);
    onUpdate(localRooms, newGuests);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        {compact ? (
          <button className="w-full text-left hover:bg-gray-50 transition-colors">
            <span className="text-sm" style={{ color: '#222222' }}>
              {localRooms} Room{localRooms > 1 ? 's' : ''}, {localGuests} Guest{localGuests > 1 ? 's' : ''}
            </span>
          </button>
        ) : (
          <button className="flex-1 flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-left">
            <Users className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <div className="text-xs text-gray-500">Rooms & Guests</div>
              <div className="text-sm" style={{ color: '#222222' }}>
                {localRooms} Room{localRooms > 1 ? 's' : ''}, {localGuests} Guest{localGuests > 1 ? 's' : ''}
              </div>
            </div>
          </button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <div className="space-y-4">
          {/* Rooms */}
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold" style={{ color: '#222222' }}>Rooms</div>
              <div className="text-xs text-gray-500">Max 10 rooms</div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateRooms(localRooms - 1)}
                disabled={localRooms <= 1}
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ borderColor: '#0EA5E9', color: '#0EA5E9' }}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-semibold">{localRooms}</span>
              <button
                onClick={() => updateRooms(1)}
                disabled={localRooms >= 10}
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ borderColor: '#0EA5E9', color: '#0EA5E9' }}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold" style={{ color: '#222222' }}>Guests</div>
              <div className="text-xs text-gray-500">Max 20 guests</div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateGuests(-1)}
                disabled={localGuests <= 1}
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ borderColor: '#0EA5E9', color: '#0EA5E9' }}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-semibold">{localGuests}</span>
              <button
                onClick={() => updateGuests(1)}
                disabled={localGuests >= 20}
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ borderColor: '#0EA5E9', color: '#0EA5E9' }}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}