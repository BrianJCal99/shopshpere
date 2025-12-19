'use client';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter, usePathname } from 'next/navigation';
import { User, Package, MapPin, CreditCard, Settings, LogOut, ChevronRight, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { signOutUser } from "@/app/features/user/userSlice";

export default function AccountLayout({ children }) {
    const { user, status } = useSelector((state) => state.user);
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useDispatch();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && !user && status !== 'loading') {
            router.push('/signin');
        }
    }, [user, status, router, isClient]);

    const handleSignOut = async () => {
        await dispatch(signOutUser());
        router.push('/');
    };

    if (!isClient || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const tabs = [
        { id: 'profile', name: 'Profile', href: '/account/profile', icon: <User className="w-5 h-5" /> },
        { id: 'orders', name: 'Orders', href: '/account/orders', icon: <Package className="w-5 h-5" /> },
        { id: 'addresses', name: 'Addresses', href: '/account/addresses', icon: <MapPin className="w-5 h-5" /> },
        { id: 'payment', name: 'Payment', href: '/account/payment', icon: <CreditCard className="w-5 h-5" /> },
        { id: 'returns', name: 'Returns & Refunds', href: '/account/returns', icon: <RefreshCw className="w-5 h-5" /> },
        { id: 'settings', name: 'Settings', href: '/account/settings', icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full md:w-64 shrink-0">
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                                    {user.user_metadata?.firstName?.[0]}{user.user_metadata?.lastName?.[0]}
                                </div>
                                <div className="overflow-hidden">
                                    <h2 className="font-bold text-gray-900 dark:text-white truncate">
                                        {user.user_metadata?.firstName} {user.user_metadata?.lastName}
                                    </h2>
                                    <p className="text-sm text-gray-500 truncate">{user.email}</p>
                                </div>
                            </div>
                            <nav className="p-4 space-y-1">
                                {tabs.map((tab) => {
                                    const isActive = pathname === tab.href;
                                    return (
                                        <Link
                                            key={tab.id}
                                            href={tab.href}
                                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                                                }`}
                                        >
                                            {tab.icon}
                                            <span className="flex-1 text-left">{tab.name}</span>
                                            {isActive && <ChevronRight className="w-4 h-4" />}
                                        </Link>
                                    );
                                })}
                                <button
                                    onClick={handleSignOut}
                                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 mt-4"
                                >
                                    <LogOut className="w-5 h-5" />
                                    <span>Sign Out</span>
                                </button>
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
