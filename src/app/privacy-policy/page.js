import React from 'react';
import { Shield, Lock, Eye, FileText, Globe, Bell } from 'lucide-react';

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-6">
                        <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Last Updated: December 19, 2025
                    </p>
                </div>

                {/* Content */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-8 sm:p-12 space-y-12">

                        <section>
                            <div className="flex items-center mb-4">
                                <Eye className="w-6 h-6 text-blue-500 mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Information We Collect</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                We collect information that you provide directly to us when you create an account, make a purchase, or communicate with us. This may include:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                                <li>Contact information (such as name, email address, and phone number)</li>
                                <li>Payment information (processed securely through our payment partners)</li>
                                <li>Shipping and billing addresses</li>
                                <li>Shopping preferences and history</li>
                            </ul>
                        </section>

                        <section>
                            <div className="flex items-center mb-4">
                                <Lock className="w-6 h-6 text-blue-500 mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. How We Use Your Information</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                Your information allows us to provide a seamless shopping experience. Specifically, we use it to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                                <li>Process and fulfill your orders</li>
                                <li>Communicate with you about products, services, and promotions</li>
                                <li>Improve our website and customer service</li>
                                <li>Protect against fraudulent transactions</li>
                            </ul>
                        </section>

                        <section>
                            <div className="flex items-center mb-4">
                                <Globe className="w-6 h-6 text-blue-500 mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Information Sharing</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                We do not sell your personal information. We only share data with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center mb-4">
                                <Bell className="w-6 h-6 text-blue-500 mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Your Data Rights</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                You have the right to access, correct, or delete your personal information at any time. You can manage your data settings through your account dashboard or by contacting our support team.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center mb-4">
                                <FileText className="w-6 h-6 text-gray-400 mr-3" />
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">5. Cookies & Tracking</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us analyze web traffic and remember your preferences. You can choose to disable cookies in your browser settings.
                            </p>
                        </section>

                    </div>
                </div>

                {/* Contact Footer */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 dark:text-gray-400">
                        Have questions about our Privacy Policy? <br />
                        Reach out to us at <a href="mailto:privacy@wearcollective.store" className="text-blue-600 font-semibold hover:underline">privacy@wearcollective.store</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
