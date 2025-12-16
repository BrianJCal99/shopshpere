'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { fetchItems } from '@/app/features/items/itemsSlice';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.items);

  const initialQuery = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Ensure products are loaded
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchItems());
    }
  }, [status, dispatch]);

  // Update local state if URL param changes
  useEffect(() => {
    setSearchTerm(initialQuery);
  }, [initialQuery]);

  // Filter products when items or searchTerm changes
  useEffect(() => {
    if (items.length > 0) {
      if (!searchTerm.trim()) {
        setFilteredProducts(items);
      } else {
        const lowerTerm = searchTerm.toLowerCase();
        const results = items.filter((product) =>
          product.name.toLowerCase().includes(lowerTerm)
        );
        setFilteredProducts(results);
      }
    }
  }, [items, searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Search Products</h1>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-10 max-w-lg">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search for clothes, accessories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>

        {/* Results */}
        {status === 'loading' ? (
           <div className="py-10 text-center">
             <p className="text-gray-500">Loading products...</p>
           </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-10 text-center">
            <p className="text-lg text-gray-900">No products found for "{searchTerm}"</p>
            <p className="text-gray-500">Try checking your spelling or using different keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}
