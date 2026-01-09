/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import NewsletterForm from "@/components/newsletter-form"
import NewsletterPopup from "@/components/newsletter-popup"

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
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl pt-6 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-5xl font-extrabold tracking-tighter text-gray-900 sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl leading-[0.9] text-center lg:text-left">
            WEAR<br className="sm:hidden" /><span className="text-indigo-600">COLLECTIVE</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-xl font-light leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
            Curating timeless elegance and modern trends. Our collection is designed for those who value quality and minimalist aesthetics.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="mb-10">
            <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-2">Explore</h2>
            <p className="text-4xl font-black text-gray-900 tracking-tighter sm:text-5xl">OUR COLLECTIONS</p>
          </div>

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
              <div key={stat.name} className="flex flex-col-reverse gap-2">
                <dt className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 text-center">{stat.name}</dt>
                <dd className="text-5xl font-black tracking-tighter text-gray-900 text-center">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <NewsletterForm />
      <NewsletterPopup />
    </div>
  )
}

