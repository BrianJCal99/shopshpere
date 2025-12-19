/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

const links = [
  { name: "Men's Collection", href: '/products/men' },
  { name: "Women's Collection", href: '/products/women' },
  { name: "Kid's Collection", href: '/products/kids' },
  { name: 'New Arrivals', href: '/products/new_arrivals' },
  { name: 'Seasonal Collections', href: '/products/seasonal_collections' },
]
const stats = [
  { name: 'Shops worldwide', value: '100' },
  { name: 'Customers', value: '1M+' },
  { name: 'Clothing & Accessories', value: '100k+' },
  { name: 'Orders', value: '1B+' },
  { name: 'Years', value: '25+' },
]

const callouts = [
  {
    name: "Men's Collection",
    description: "A great collection of men clothing",
    imageSrc: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/mens_fashion.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/products/men',
  },
  {
    name: "Women's Collection",
    description: "A great collection of women clothing",
    imageSrc: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/womens_fashion.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/products/women',
  },
  {
    name: "Kid's Collection",
    description: "A great collection of kids clothing",
    imageSrc: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/kids_fashion3.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/products/kids',
  },
  {
    name: "New Arrivals",
    description: "Latest fashion trends",
    imageSrc: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/new_arrivals.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/products/new_arrivals',
  },
  {
    name: "Seasonal Collections",
    description: 'Find your winter clothing',
    imageSrc: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/seasonal_collection.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/products/seasonal_collections',
  },
  {
    name: "Our Brands",
    description: 'Browse our partner brands',
    imageSrc: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/brands.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/brands',
  },
]

export default function Example() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl pt-6 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">Shop With Us</h2>
          <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8">
            Discover a world of fashion at your fingertips with our carefully curated collection of stylish, high-quality clothing, offering timeless elegance and on-trend designs to suit every occasion and personality.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Our Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6 lg:space-y-0">
            {callouts.map((callout) => (
              <Link key={callout.name} href={callout.href}>
                <div className="group">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="w-full rounded-lg bg-white object-cover max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
                  />
                  <h3 className="mt-6 text-sm text-gray-500">

                    {callout.name}
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-5 place-items-center">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-center">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-center">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="mt-32 sm:mt-48 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative isolate overflow-hidden bg-slate-50 px-6 py-24 shadow-sm rounded-3xl border border-gray-100 sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-4xl font-black tracking-tight text-gray-900 sm:text-6xl">
              Stay in the loop.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-8 text-gray-600">
              Subscribe to our newsletter for exclusive drops, seasonal previews, and sustainable fashion insights.
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-full border-0 bg-white px-6 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-full bg-gray-900 px-8 py-3 text-sm font-black text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-transform hover:scale-105"
              >
                Join Now
              </button>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            >
              <circle r={512} cx={512} cy={512} fill="url(#newsletter-gradient)" fillOpacity="0.3" />
              <defs>
                <radialGradient id="newsletter-gradient">
                  <stop stopColor="#5a67d8" />
                  <stop offset={1} stopColor="#5a67d8" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

