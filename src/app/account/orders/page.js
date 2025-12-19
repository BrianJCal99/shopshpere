'use client';

import React from 'react';
import { Package } from 'lucide-react';
import Link from 'next/link';

export default function OrdersPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Order History</h3>
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-full mb-6 text-gray-400">
                    <Package className="w-12 h-12" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No orders found</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xs">
                    When you shop with us, your orders will appear here for easy tracking.
                </p>
                <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-colors">
                    Start Shopping
                </Link>
            </div>
        </div>
    );
}
