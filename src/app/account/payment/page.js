'use client';

import React from 'react';

export default function PaymentPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Methods</h3>
            <div className="p-8 rounded-2xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-8 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                    <div className="w-12 h-8 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                    <div className="w-12 h-8 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-6">Securely save your payment details for your next purchase.</p>
                <button className="flex items-center space-x-2 text-blue-600 font-bold hover:underline">
                    <span>+ Link a new card</span>
                </button>
            </div>
        </div>
    );
}
