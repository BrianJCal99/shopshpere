'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Account Settings</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all cursor-pointer">
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Password</h4>
                        <p className="text-sm text-gray-500">Change your account password securely</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all cursor-pointer">
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Notifications</h4>
                        <p className="text-sm text-gray-500">Manage your email and marketing preferences</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-transparent hover:border-red-100 dark:hover:border-red-900/20 transition-all cursor-pointer mt-12">
                    <div>
                        <h4 className="font-bold text-red-600">Delete Account</h4>
                        <p className="text-sm text-red-600/70">Permanently remove your account and data</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-red-400" />
                </div>
            </div>
        </div>
    );
}
