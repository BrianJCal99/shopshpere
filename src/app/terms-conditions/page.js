import React from 'react';
import { Scale, FileCheck, ShoppingCart, UserCheck, AlertTriangle, ShieldCheck } from 'lucide-react';

const TermsConditionsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-6">
                        <Scale className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Terms & Conditions
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Effective Date: December 19, 2025
                    </p>
                </div>

                {/* Content */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-8 sm:p-12 space-y-12">

                        <section>
                            <div className="flex items-center mb-4">
                                <UserCheck className="w-6 h-6 text-indigo-500 mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Use of Website</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                By accessing and using WearCollective.store, you agree to comply with and be bound by these terms. If you do not agree, please do not use our services. You must be at least 18 years old or have parental consent to use this site.
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center mb-4">
                                <ShoppingCart className="w-6 h-6 text-indigo-500 mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Orders & Payments</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                All orders placed through the website are subject to acceptance. We reserve the right to refuse or cancel any order for reasons including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                                <li>Product unavailability or pricing errors</li>
                                <li>Suspected fraudulent activity</li>
                                <li>Incomplete or incorrect shipping information</li>
                            </ul>
                        </section>

                        <section>
                            <div className="flex items-center mb-4">
                                <ShieldCheck className="w-6 h-6 text-indigo-500 mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Intellectual Property</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                All content on this site, including text, graphics, logos, and images, is the property of WearCollective and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center mb-4">
                                <FileCheck className="w-6 h-6 text-indigo-500 mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Return & Refund Policy</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Our Return & Refund Policy is incorporated into these terms by reference. Please review our dedicated <a href="/refund-policy" className="text-indigo-600 font-semibold hover:underline">Refund Policy page</a> for detailed information on how to return items.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center mb-4">
                                <AlertTriangle className="w-6 h-6 text-orange-500 mr-3" />
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">5. Limitation of Liability</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                WearCollective shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our products or services, even if we have been advised of the possibility of such damages.
                            </p>
                        </section>

                    </div>
                </div>

                {/* Contact Footer */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 dark:text-gray-400">
                        Questions about these Terms? <br />
                        Reach out to our legal team at <a href="mailto:legal@wearcollective.store" className="text-indigo-600 font-semibold hover:underline">legal@wearcollective.store</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsConditionsPage;
