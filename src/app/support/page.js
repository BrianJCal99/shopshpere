import React from 'react'
import Link from 'next/link'
import { Search, Package, RefreshCw, HelpCircle, User, MessageCircle, ArrowRight } from 'lucide-react';

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Search Section */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            How can we help you?
          </h1>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 dark:border-gray-600 rounded-xl leading-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-lg shadow-sm"
              placeholder="Search for answers, e.g. 'Return policy'"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Support Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <TopicCard
            icon={<User className="w-8 h-8 text-purple-600" />}
            title="Account & Profile"
            description="Manage your account, preferences, and password."
            href="/account/profile"
          />
          <TopicCard
            icon={<Package className="w-8 h-8 text-blue-600" />}
            title="Orders & Shipping"
            description="Track packages, edit orders, and shipping info."
            href="/account/orders"
          />
          <TopicCard
            icon={<RefreshCw className="w-8 h-8 text-green-600" />}
            title="Returns & Refunds"
            description="Start a return, check status, or read our policy."
            href="/account/returns"
          />
          <TopicCard
            icon={<HelpCircle className="w-8 h-8 text-orange-600" />}
            title="Product & Sizing"
            description="Size guides, care instructions, and product details."
            href="/product-sizing"
          />
        </div>

        {/* Popular Questions Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Popular Questions</h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
            <FaqItem question="How do I track my order?" />
            <FaqItem question="What is your return policy?" />
            <FaqItem question="Do you ship internationally?" />
            <FaqItem question="How can I change my shipping address?" />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Still need help?</h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Our support team is available Mon-Fri, 9am - 5pm to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <Link href="/qa" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-800 bg-opacity-30 hover:bg-opacity-40 transition-colors duration-200 backdrop-blur-sm">
              Visit Q&A Center
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function TopicCard({ icon, title, description, href }) {
  return (
    <Link href={href} className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 group">
      <div className="mb-4 bg-gray-50 dark:bg-gray-700/50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
    </Link>
  )
}

function FaqItem({ question }) {
  return (
    <button className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150 group">
      <span className="text-gray-700 dark:text-gray-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">{question}</span>
      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform duration-200" />
    </button>
  )
}

export default SupportPage