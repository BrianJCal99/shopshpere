'use client';

import React from 'react';

export default function AddressesPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Shipping Addresses</h3>
                <button className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-4 py-2 rounded-xl text-sm font-bold">
                    Add New Address
                </button>
            </div>
            <div className="p-6 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-center">
                <p className="text-gray-500 dark:text-gray-400">Save your addresses for a faster checkout experience.</p>
            </div>
        </div>
    );
}
