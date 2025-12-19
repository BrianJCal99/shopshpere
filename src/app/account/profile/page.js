'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { Edit2 } from 'lucide-react';

export default function ProfilePage() {
    const { user } = useSelector((state) => state.user);

    if (!user) return null;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Profile Information</h3>
                <button className="flex items-center space-x-2 text-sm text-blue-600 font-semibold hover:underline">
                    <Edit2 className="w-4 h-4" />
                    <span>Edit Profile</span>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl text-gray-900 dark:text-white border border-gray-100 dark:border-gray-800">
                        {user.user_metadata?.firstName}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl text-gray-900 dark:text-white border border-gray-100 dark:border-gray-800">
                        {user.user_metadata?.lastName}
                    </div>
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl text-gray-900 dark:text-white border border-gray-100 dark:border-gray-800">
                        {user.email}
                    </div>
                </div>
            </div>
        </div>
    );
}
