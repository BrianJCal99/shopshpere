
'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Search, Navigation } from 'lucide-react';

const stores = [
    {
        id: 1,
        name: 'Melbourne Flagship',
        address: '306 South Yarra, VIC, 3141',
        phone: '+61 3 9826 0000',
        hours: {
            monday: { open: "9:00 AM", close: "6:00 PM" },
            tuesday: { open: "9:00 AM", close: "6:00 PM" },
            wednesday: { open: "9:00 AM", close: "6:00 PM" },
            thursday: { open: "9:00 AM", close: "8:00 PM" },
            friday: { open: "9:00 AM", close: "8:00 PM" },
            saturday: { open: "10:00 AM", close: "4:00 PM" },
            sunday: { open: "Closed", close: "Closed" }
        },
        coordinates: { lat: -37.8398, lng: 144.9894 }
    },
    {
        id: 2,
        name: 'Sydney Boutique',
        address: '123 George St, The Rocks, NSW, 2000',
        phone: '+61 2 9251 0000',
        hours: {
            monday: { open: "9:00 AM", close: "6:00 PM" },
            tuesday: { open: "9:00 AM", close: "6:00 PM" },
            wednesday: { open: "9:00 AM", close: "6:00 PM" },
            thursday: { open: "9:00 AM", close: "8:00 PM" },
            friday: { open: "9:00 AM", close: "8:00 PM" },
            saturday: { open: "10:00 AM", close: "4:00 PM" },
            sunday: { open: "Closed", close: "Closed" }
        },
        coordinates: { lat: -33.8591, lng: 151.2092 }
    },
    {
        id: 3,
        name: 'Brisbane Quarter',
        address: '300 George St, Brisbane City, QLD, 4000',
        phone: '+61 7 3000 0000',
        hours: {
            monday: { open: "9:00 AM", close: "6:00 PM" },
            tuesday: { open: "9:00 AM", close: "6:00 PM" },
            wednesday: { open: "9:00 AM", close: "6:00 PM" },
            thursday: { open: "9:00 AM", close: "8:00 PM" },
            friday: { open: "9:00 AM", close: "8:00 PM" },
            saturday: { open: "10:00 AM", close: "4:00 PM" },
            sunday: { open: "Closed", close: "Closed" }
        },
        coordinates: { lat: -27.4698, lng: 153.0251 }
    },
    {
        id: 4,
        name: 'Perth Hub',
        address: 'Hay St Mall, Perth, WA, 6000',
        phone: '+61 8 9221 0000',
        hours: {
            monday: { open: "9:00 AM", close: "6:00 PM" },
            tuesday: { open: "9:00 AM", close: "6:00 PM" },
            wednesday: { open: "9:00 AM", close: "6:00 PM" },
            thursday: { open: "9:00 AM", close: "8:00 PM" },
            friday: { open: "9:00 AM", close: "8:00 PM" },
            saturday: { open: "10:00 AM", close: "4:00 PM" },
            sunday: { open: "Closed", close: "Closed" }
        },
        coordinates: { lat: -31.9535, lng: 115.8570 }
    }
];

export default function StoreLocatorPage() {
    const [selectedStore, setSelectedStore] = useState(stores[0]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const filteredStores = stores.filter(store =>
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const today = new Date()
        .toLocaleDateString("en-US", { weekday: "long" })
        .toLowerCase();

    const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${selectedStore.coordinates.lat},${selectedStore.coordinates.lng}&zoom=15`;

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Find A Store</h1>
                    <p className="text-lg text-slate-600">Locate a WearCollective boutique near you and experience our collections in person.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[700px]">
                    {/* Sidebar */}
                    <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-slate-100">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search by city or postcode"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {filteredStores.map((store) => (
                                <div
                                    key={store.id}
                                    onClick={() => setSelectedStore(store)}
                                    className={`group p-5 rounded-xl border transition-all cursor-pointer ${selectedStore?.id === store.id
                                        ? 'border-indigo-200 bg-indigo-50/50'
                                        : 'border-transparent hover:border-indigo-100 hover:bg-indigo-50/30'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className={`font-bold text-lg transition-colors ${selectedStore?.id === store.id ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-600'
                                            }`}>{store.name}</h3>
                                        <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full uppercase tracking-wider">Open Now</span>
                                    </div>
                                    <div className="space-y-2 text-sm text-slate-600">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-slate-400" />
                                            <span>{store.address}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-slate-400" />
                                            <span>{store.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-2 ">
                                            <Clock className="w-4 h-4 text-slate-400" />
                                            <span>{store.hours.monday.open} - {store.hours.monday.close}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(`https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}`, '_blank');
                                        }}
                                        className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-4 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                                    >
                                        <Navigation className="w-4 h-4" />
                                        Get Directions
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Map Area */}
                    <div className="lg:col-span-2 relative bg-slate-100 rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50 backdrop-blur-sm z-10 transition-opacity duration-300">
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                                    <p className="text-slate-500 font-medium">Loading Map...</p>
                                </div>
                            </div>
                        )}

                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            onLoad={() => setIsLoading(false)}
                            referrerPolicy="no-referrer-when-downgrade"
                            src={embedUrl}
                            className="bg-slate-200"
                        />

                        {selectedStore && (
                            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 m-8 rounded-2xl shadow-2xl border border-white/20 max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-500 z-20">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{selectedStore.name}</p>
                                <p className="text-sm font-semibold text-slate-900 leading-relaxed mb-2">{selectedStore.address}</p>
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Open until {selectedStore.hours[today].close}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

