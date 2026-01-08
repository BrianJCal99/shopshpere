'use client'

import { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { signOutUser, resetError } from "@/app/features/user/userSlice"
import { removeItem, updateQuantity } from "@/app/features/cart/cartSlice"
import Link from 'next/link'
import toast from 'react-hot-toast'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

// Navigation data structure
const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '/products/women/new_arrivals',
          imageSrc: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/HighTidePant_Blue_Ecomm_Resort25_02.webp',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Seasonal Collections',
          href: '/products/women/seasonal_collections',
          imageSrc: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/SW121111_12854_main.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '/products/women' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '/products/men/new_arrivals',
          imageSrc: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/man-shirt-brown.webp',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Seasonal Collections',
          href: '/products/men/seasonal_collections',
          imageSrc: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/SSPC26-Men-Uncropped38.webp',
          imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '/products/men' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'kids',
      name: 'Kids',
      featured: [
        {
          name: 'New Arrivals',
          href: '/products/kids/new_arrivals',
          imageSrc: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/kids-fashion1.webp',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Seasonal Collections',
          href: '/products/kids/seasonal_collections',
          imageSrc: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/kids-fashion2.webp',
          imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Browse All', href: '/products/kids' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Hats', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'All Products', href: '/products' },
  ],
}

export default function AppNavbar() {
  const dispatch = useDispatch()
  const router = useRouter()

  // State management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Redux state
  const { user } = useSelector((state) => state.user)
  const { items, totalPrice, totalQuantity } = useSelector((state) => state.cart)

  // Client-side hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [router])

  // Handlers
  const handleSignOut = async () => {
    try {
      dispatch(resetError())
      const result = await dispatch(signOutUser())
      if (result.meta.requestStatus === "fulfilled") {
        router.push("/signin")
      }
    } catch (err) {
      console.error("Sign-out error: ", err)
    }
  }

  const handleCheckout = (e) => {
    if (totalQuantity === 0) {
      e.preventDefault()
    } else {
      setCartOpen(false)
      router.push("/cart")
    }
  }

  const closeMobileMenu = () => setMobileMenuOpen(false)
  const closeCart = () => setCartOpen(false)

  // Don't render on server
  if (!isClient) {
    return null
  }

  return (
    <div className="bg-white fixed w-full z-50 shadow-sm">
      {/* Mobile Menu Dialog */}
      <MobileMenu
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
        user={user}
        navigation={navigation}
        onSignOut={handleSignOut}
      />

      {/* Shopping Cart Dialog */}
      <ShoppingCart
        open={cartOpen}
        onClose={closeCart}
        items={items}
        totalPrice={totalPrice}
        totalQuantity={totalQuantity}
        onCheckout={handleCheckout}
        dispatch={dispatch}
      />

      {/* Main Header */}
      <header className="relative bg-white">
        {/* Promotional Banner */}
        <Link
          href="/promotions"
          className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white hover:bg-indigo-700 transition-colors sm:px-6 lg:px-8"
        >
          🎊 Hurry up grab these deals before the sale ends 🎊
        </Link>

        {/* Navigation */}
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="rounded-md p-2 text-gray-400 hover:text-gray-500 lg:hidden transition-colors"
                aria-label="Open menu"
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="flex lg:ml-0">
                <Link href="/" className="flex items-center">
                  <span className="sr-only">WEARCOLLECTIVE</span>
                  <div className="text-xl font-black tracking-tighter text-gray-900 sm:text-2xl">
                    WEAR<span className="text-indigo-600">COLLECTIVE</span>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <DesktopCategoryMenu key={category.name} category={category} />
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 transition-colors"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </PopoverGroup>

              {/* Right side actions */}
              <div className="flex items-center space-x-4 lg:space-x-6">
                {/* Auth Links - Desktop */}
                {user ? (
                  <div className="hidden lg:flex lg:items-center lg:space-x-6">
                    <span className="text-sm font-medium text-gray-700">
                      🎉 Welcome {user.user_metadata?.firstName}
                    </span>
                    <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                    <Link
                      href="/account/profile"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800 transition-colors"
                    >
                      My Account
                    </Link>
                    <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                    <button
                      onClick={handleSignOut}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800 transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <div className="hidden lg:flex lg:items-center lg:space-x-6">
                    <Link
                      href="/signin"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800 transition-colors"
                    >
                      Sign in
                    </Link>
                    <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                    <Link
                      href="/signup"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800 transition-colors"
                    >
                      Create account
                    </Link>
                  </div>
                )}

                {/* Search */}
                <Link
                  href="/search"
                  className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
                  aria-label="Search"
                >
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </Link>

                {/* Cart */}
                <button
                  onClick={() => setCartOpen(true)}
                  className="group flex items-center p-2"
                  aria-label={`Shopping cart with ${totalQuantity} items`}
                >
                  <ShoppingBagIcon
                    className="h-6 w-6 text-gray-400 group-hover:text-gray-500 transition-colors"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {totalQuantity}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

// Mobile Menu Component
function MobileMenu({ open, onClose, user, navigation, onSignOut }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-[60] lg:hidden">
      <DialogBackdrop
        className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 z-40 flex">
        <DialogPanel className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full">
          {/* Close button */}
          <div className="flex px-4 pb-2 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 transition-colors"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Welcome message */}
          {user && (
            <div className="px-4 pb-2">
              <span className="block font-medium text-gray-900 border-b border-gray-200 pb-2">
                🎉 Welcome {user.user_metadata?.firstName}
              </span>
            </div>
          )}

          {/* Category tabs */}
          <TabGroup className="mt-2">
            <div className="border-b border-gray-200">
              <TabList className="-mb-px flex space-x-8 px-4">
                {navigation.categories.map((category) => (
                  <Tab
                    key={category.name}
                    className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 transition-colors data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                  >
                    {category.name}
                  </Tab>
                ))}
              </TabList>
            </div>

            <TabPanels as={Fragment}>
              {navigation.categories.map((category) => (
                <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                  {/* Featured items */}
                  <div className="grid grid-cols-2 gap-x-4">
                    {category.featured.map((item) => (
                      <div key={item.name} className="group relative text-sm">
                        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                          />
                        </div>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="mt-6 block font-medium text-gray-900"
                        >
                          <span aria-hidden="true" className="absolute inset-0 z-10" />
                          {item.name}
                        </Link>
                        <p aria-hidden="true" className="mt-1 text-gray-500">
                          Shop now
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Category sections */}
                  {category.sections.map((section) => (
                    <div key={section.name}>
                      <p className="font-medium text-gray-900">
                        {section.name}
                      </p>
                      <ul role="list" className="mt-6 flex flex-col space-y-6">
                        {section.items.map((item) => (
                          <li key={item.name} className="flow-root">
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="-m-2 block p-2 text-gray-500 hover:text-gray-800 transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          {/* Additional pages */}
          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            {navigation.pages.map((page) => (
              <div key={page.name} className="flow-root">
                <Link
                  href={page.href}
                  onClick={onClose}
                  className="-m-2 block p-2 font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  {page.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Auth links */}
          {user ? (
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <Link
                  href="/account/profile"
                  onClick={onClose}
                  className="-m-2 block p-2 font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  My Account
                </Link>
              </div>
              <div className="flow-root">
                <button
                  onClick={() => {
                    onSignOut()
                    onClose()
                  }}
                  className="-m-2 block p-2 font-medium text-gray-900 hover:text-gray-700 transition-colors w-full text-left"
                >
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <Link
                  href="/signin"
                  onClick={onClose}
                  className="-m-2 block p-2 font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Sign in
                </Link>
              </div>
              <div className="flow-root">
                <Link
                  href="/signup"
                  onClick={onClose}
                  className="-m-2 block p-2 font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Create account
                </Link>
              </div>
            </div>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  )
}

// Desktop Category Menu Component
function DesktopCategoryMenu({ category }) {
  return (
    <Popover className="flex">
      {({ close }) => (
        <>
          <div className="relative flex">
            <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600 outline-none">
              {category.name}
            </PopoverButton>
          </div>

          <PopoverBackdrop className="fixed inset-0 z-40 bg-black/25" />

          <PopoverPanel className="absolute inset-x-0 top-full z-50 text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
            {/* Shadow element */}
            <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

            <div className="relative bg-white">
              <div className="mx-auto max-w-7xl px-8">
                {/* Close button */}
                <div className="absolute right-0 top-0 p-4">
                  <button
                    type="button"
                    onClick={() => close()}
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 transition-colors"
                    aria-label="Close menu"
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                  {/* Featured items */}
                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                    {category.featured.map((item) => (
                      <div key={item.name} className="group relative text-base sm:text-sm">
                        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                          />
                        </div>
                        <Link
                          href={item.href}
                          onClick={() => close()}
                          className="mt-6 block font-medium text-gray-900 hover:text-gray-700 transition-colors"
                        >
                          <span aria-hidden="true" className="absolute inset-0 z-10" />
                          {item.name}
                        </Link>
                        <p aria-hidden="true" className="mt-1 text-gray-500">
                          Shop now
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Category sections */}
                  <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul role="list" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                          {section.items.map((item) => (
                            <li key={item.name} className="flex">
                              <Link
                                href={item.href}
                                onClick={() => close()}
                                className="hover:text-gray-800 transition-colors"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  )
}

// Shopping Cart Component
function ShoppingCart({ open, onClose, items, totalPrice, totalQuantity, onCheckout, dispatch }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-[60]">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                {/* Header */}
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Shopping cart ({totalQuantity} items)
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={onClose}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 transition-colors"
                        aria-label="Close cart"
                      >
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  {/* Cart items */}
                  <div className="mt-8">
                    {totalQuantity === 0 ? (
                      <div className="text-sm text-gray-500">
                        Your cart is empty. Add items to checkout.
                      </div>
                    ) : (
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {items.map((product) => (
                            <CartItem
                              key={product.cartId}
                              product={product}
                              dispatch={dispatch}
                            />
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/cart"
                      className={`flex items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm transition-colors ${totalQuantity > 0
                        ? "bg-indigo-600 hover:bg-indigo-700"
                        : "bg-gray-400 cursor-not-allowed"
                        }`}
                      onClick={onCheckout}
                    >
                      Checkout
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={onClose}
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

// Cart Item Component
function CartItem({ product, dispatch }) {
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          alt={product.image.alt}
          src={product.image.src}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link href="#">{product.name}</Link>
            </h3>
            <p className="ml-4">${product.price.toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Color: {product.color}</p>
          <p className="mt-1 text-sm text-gray-500">Size: {product.size}</p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Qty {product.quantity}</span>
            <button
              onClick={() => dispatch(updateQuantity({ cartId: product.cartId, quantity: product.quantity - 1 }))}
              className="rounded border border-blue-500 bg-transparent px-3 py-1 font-semibold text-blue-700 transition-colors hover:border-transparent hover:bg-blue-500 hover:text-white"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <button
              onClick={() => dispatch(updateQuantity({ cartId: product.cartId, quantity: product.quantity + 1 }))}
              className="rounded border border-blue-500 bg-transparent px-3 py-1 font-semibold text-blue-700 transition-colors hover:border-transparent hover:bg-blue-500 hover:text-white"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <div className="flex">
            <button
              type="button"
              onClick={() => {
                dispatch(removeItem(product.cartId));
                toast.success("Item removed from the cart");
              }}
              className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}
