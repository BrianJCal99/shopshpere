'use client';

import React from 'react';
import { RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function ReturnsPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Returns & Refunds</h3>
                <Link href="/refund-policy" className="text-sm text-blue-600 font-semibold hover:underline">
                    View Refund Policy
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-3xl">
                <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-full mb-6 text-gray-400">
                    <RefreshCw className="w-12 h-12" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No active returns</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xs mx-auto">
                    You don't have any items currently being returned or refunded.
                </p>
                <button className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-8 py-3 rounded-xl font-bold transition-transform hover:scale-105">
                    Start a New Return
                </button>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50">
                <h4 className="text-blue-900 dark:text-blue-300 font-bold mb-2">Quick Return Tip</h4>
                <p className="text-blue-800/70 dark:text-blue-400/70 text-sm">
                    Most items can be returned within 30 days of delivery. Ensure tags are still attached and the item is in its original condition.
                </p>
            </div>
        </div>
    );
}
