import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Info, Thermometer, Droplets, Wind, Scissors, Ruler, Shirt, User } from 'lucide-react';

const ProductSizingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]">
            <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Quality you can feel, <br />
                        <span className="text-blue-600">fit you can trust.</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Everything you need to know about our products, from finding your perfect size to keeping your garments looking new for years.
                    </p>
                </div>

                {/* Section 1: Size Guides */}
                <section id="size-guides" className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-2xl mr-4">
                            <Ruler className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Size Guides</h3>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-8">
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                Use these charts to help determine your size. Because sizing and cut will vary between brands, please use the charts as a general guide to compare the various size scales.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                        <Shirt className="w-5 h-5 mr-2 text-gray-400" />
                                        Tops & Outerwear
                                    </h4>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th className="px-4 py-3">Size</th>
                                                    <th className="px-4 py-3">Chest (in)</th>
                                                    <th className="px-4 py-3">Waist (in)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                                <tr><td className="px-4 py-3 font-medium text-gray-900 dark:text-white">XS</td><td className="px-4 py-3">34-36</td><td className="px-4 py-3">28-30</td></tr>
                                                <tr><td className="px-4 py-3 font-medium text-gray-900 dark:text-white">S</td><td className="px-4 py-3">36-38</td><td className="px-4 py-3">30-32</td></tr>
                                                <tr><td className="px-4 py-3 font-medium text-gray-900 dark:text-white">M</td><td className="px-4 py-3">38-40</td><td className="px-4 py-3">32-34</td></tr>
                                                <tr><td className="px-4 py-3 font-medium text-gray-900 dark:text-white">L</td><td className="px-4 py-3">40-42</td><td className="px-4 py-3">34-36</td></tr>
                                                <tr><td className="px-4 py-3 font-medium text-gray-900 dark:text-white">XL</td><td className="px-4 py-3">42-45</td><td className="px-4 py-3">36-39</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                        <Scissors className="w-5 h-5 mr-2 text-gray-400" />
                                        Bottoms
                                    </h4>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th className="px-4 py-3">Size</th>
                                                    <th className="px-4 py-3">Waist (in)</th>
                                                    <th className="px-4 py-3">Hips (in)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                                <tr><td className="px-4 py-3 font-medium text-gray-900 dark:text-white">28</td><td className="px-4 py-3">28-29</td><td className="px-4 py-3">34-35</td></tr>
                                                <tr><td className="px-4 py-3 font-medium text-gray-900 dark:text-white">30</td><td className="px-4 py-3">30-31</td><td className="px-4 py-3">36-37</td></tr>
                                                <tr><td className="px-4 py-3 font-medium text-gray-900 dark:text-white">32</td><td className="px-4 py-3">32-33</td><td className="px-4 py-3">38-39</td></tr>
                                                <tr><td className="px-4 py-3 font-medium text-gray-900 dark:text-white">34</td><td className="px-4 py-3">34-35</td><td className="px-4 py-3">40-41</td></tr>
                                                <tr><td className="px-4 py-3 font-medium text-gray-900 dark:text-white">36</td><td className="px-4 py-3">36-37</td><td className="px-4 py-3">42-43</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800/50">
                                <div className="flex">
                                    <Info className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                                    <div>
                                        <h5 className="text-blue-900 dark:text-blue-300 font-semibold mb-1">How to measure yourself?</h5>
                                        <p className="text-blue-800/70 dark:text-blue-400/70 text-sm">
                                            Hold the tape measure firmly, but not tightly. Measure against your body (not over clothing) for the most accurate results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Care Instructions */}
                <section id="care-instructions" className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-2xl mr-4">
                            <Droplets className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Care Instructions</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <Thermometer className="w-8 h-8 text-blue-500 mb-6" />
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Washing</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Most of our garments should be washed at 30°C. This saves energy and protects the fibers and colors. Turn clothes inside out before washing.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <Wind className="w-8 h-8 text-orange-500 mb-6" />
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Drying</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                We recommend air-drying whenever possible. It's better for the environment and prolongs the life of your clothes. Skip the tumble dryer for knits.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <Scissors className="w-8 h-8 text-purple-500 mb-6" />
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Repairs</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Don't discard damaged items! A small stitch or a new button can extend the life of a garment by years. Check our sustainability blog for DIY tips.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Product Details */}
                <section id="product-details" className="mb-12">
                    <div className="flex items-center mb-8">
                        <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-2xl mr-4">
                            <Info className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Product Details</h3>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-8">
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Ethical Manufacturing</h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        We partner with factories that ensure fair wages, safe working conditions, and respect for human rights. Every product page features a 'Sustainability' tab with specific factory information.
                                    </p>
                                </div>
                                <div className="pt-8 border-t border-gray-100 dark:border-gray-700">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Our Materials</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 dark:text-gray-400">
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            100% Organic Cotton
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            Recycled Polyester (rPET)
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                            Responsible Wool Standard
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                            TENCEL™ Lyocell
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Expert Help CTA */}
                <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-blue-900 text-white shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h4 className="text-2xl font-bold mb-4">Unsure about your size?</h4>
                        <p className="text-blue-100 mb-8 max-w-xl">
                            Our personal stylists are here to help you find the perfect fit. Reach out for a consultation or message us for quick advice.
                        </p>
                        <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-blue-900 bg-white hover:bg-blue-50 transition-colors duration-200">
                            Get Expert Advice
                        </Link>
                    </div>
                    <User className="absolute -bottom-4 -right-4 w-48 h-48 text-white/5" />
                </div>
            </div>
        </div>
    );
};

export default ProductSizingPage;
