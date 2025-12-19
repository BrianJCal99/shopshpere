import React from 'react';
import Link from 'next/link';
import { ChevronLeft, RefreshCw, Calendar, CheckCircle2, AlertCircle, CreditCard, Truck, MessageCircle } from 'lucide-react';

const RefundPolicyPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]">
            <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-6">
                        <RefreshCw className="w-8 h-8 text-green-600" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Returns & Refunds
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        We want you to love what you ordered. If it's not quite right, we've made the return process as simple as possible.
                    </p>
                </div>

                {/* Core Policy Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <Calendar className="w-6 h-6 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">30-Day Return Window</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            You have 30 days from the date of delivery to return your items for a full refund or exchange.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <CheckCircle2 className="w-6 h-6 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Condition for Return</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Items must be unworn, unwashed, and have all original tags attached. Hygiene seals must remain intact where applicable.
                        </p>
                    </div>
                </div>

                {/* Step-by-Step Process */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                        <Truck className="w-6 h-6 mr-3 text-gray-400" />
                        How to Make a Return
                    </h2>
                    <div className="space-y-6">
                        <ProcessStep
                            number="01"
                            title="Start your return"
                            description="Log in to your account, find your order, and select the items you wish to return."
                        />
                        <ProcessStep
                            number="02"
                            title="Pack your items"
                            description="Place the items in their original packaging or any secure mailer. Include the packing slip if possible."
                        />
                        <ProcessStep
                            number="03"
                            title="Drop it off"
                            description="Print the prepaid return label we provide and drop the package at any authorized carrier location."
                        />
                        <ProcessStep
                            number="04"
                            title="Get your refund"
                            description="Once received and inspected, we'll issue a refund to your original payment method within 5-7 business days."
                        />
                    </div>
                </section>

                {/* Refund Details */}
                <section className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-2xl mr-4">
                            <CreditCard className="w-6 h-6 text-purple-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Refund Details</h2>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Methods of Refund</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Refunds will be issued to the original payment method used during checkout. If you paid via Store Credit, the refund will be added back to your account balance.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Shipping Costs</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Original shipping costs are non-refundable. For returns due to change of mind, a $5 processing fee will be deducted from your refund.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 pt-10 border-t border-gray-100 dark:border-gray-700">
                                <div className="flex items-start">
                                    <AlertCircle className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Non-Returnable Items</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            The following items cannot be returned for hygiene and safety reasons: earrings, face masks, and opened beauty products. Final Sale items are also excluded from returns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support CTA */}
                <div className="p-8 rounded-3xl bg-gray-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h4 className="text-xl font-bold mb-2">Need more help?</h4>
                        <p className="text-gray-400">Our support team is happy to assist with your return.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-gray-900 bg-white hover:bg-gray-100 transition-colors">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Contact Us
                        </Link>
                        <Link href="/support" className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-semibold rounded-xl text-white hover:bg-white/10 transition-colors">
                            Support Center
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProcessStep = ({ number, title, description }) => (
    <div className="flex bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
        <div className="text-2xl font-black text-gray-200 dark:text-gray-700 mr-6 w-8 shrink-0">
            {number}
        </div>
        <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
        </div>
    </div>
);

export default RefundPolicyPage;
