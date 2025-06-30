import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { motion } from "motion/react";
import { ImagesSlider } from "../ui/images-slider";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/24/solid'


const content = [
  {
    title: "Billing and Invoicing",
    description:
      "Invoicing simplified! Craft professional GST bills and cash memos in seconds with our software. Customize sale and purchase invoices, print them flawlessly, and share them with ease. Your customers will be impressed, and your cash flow will thank you.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">

        <img
          src="billing and invoicing ebiz-books pvt ltd.avif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),

  },

  {
    title: "Real time changes",
    description:
      "Tame the paperwork beast! Quik Books streamlines bookkeeping for your small business. Effortlessly record all transactions, from invoices to expenses, and generate insightful reports. Take control of your finances and unlock growth, stress-free.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-black">

        <img
          src="Ebiz-books Book keeping.avif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },

  {
    title: "GSTR Reports",
    description:
      "GSTR filing made effortless! Biz-eBooks generates all your GSTR reports (1, 2, & 3B) with a click. Download them in Excel or PDF directly within the software. Simplify tax compliance and save precious time.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src="gstr report ebiz-books pvt ltd.avif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Project Business accounting Reports",
    description:
      "Ditch spreadsheets, hello insights! Quik Books generates sales reports, daybooks, P&L statements, cash flow summaries, and inventory counts in a flash. Download and share these reports in Excel or PDF to make informed decisions and impress investors.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="gstr report ebizbook others small.avif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const images = [
  "HeroSection1.jpg",
  "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];



export function Banner() {

  return (
    <>
      <br />

<br/>
      <ImagesSlider className="h-[85vh]" images={images}>

        <motion.div
          initial={{ opacity: 0, y: -50, }}
          animate={{ opacity: 1, y: 0, }}
          transition={{ duration: 0.6, }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">

          </motion.p>
          {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            {/* <span>quik books</span> */}
            {/* <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button> */} 
        </motion.div>
      </ImagesSlider>


      <div className="flex  mx-auto px-4 py-8 gap-8">
        {/* Left: Image */}
        <div className="w-1/3  flex items-center justify-center">
          <img
            src="tax_front_feature.jpg"
            alt="Descriptive Alt Text"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Right: Sticky Scroll */}
        <div className="w-2/3">
          <StickyScroll content={content} />
        </div>
      </div>




      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base/7 font-semibold text-indigo-600">Conquer Complexity, Simplify Success</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  A better workflow
                </h1>
                <p className="mt-6 text-xl/8 text-gray-700">
                  Ditch the spreadsheets, embrace clarity. Biz-eBooks, your one-stop accounting solution, empowers you to manage your small business with ease.

                  Generate insightful reports effortlessly, from sales and daybooks to profit & loss, cash flows, and detailed stock inventories. Download and share reports in Excel or PDF formats for seamless collaboration.
                </p>
              </div>
            </div>
          </div>
          <div className=" p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src="homepageimg1.avif"
              className="w-full  rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                <p>
                  Go beyond the charts. Get instant contextualization of your data visualizations, revealing hidden trends and insights you might have missed.


                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                      <strong className="font-semibold text-gray-900">Taxation made simple</strong>
                      Generate all GSTR reports (GSTR 1, 2, and 3B) with ease, and access them in convenient Excel and PDF formats. Filing your GST returns has never been smoother.

                      Take control of your bookkeeping: Record all transactions, generate accurate reports, and gain complete visibility into your business finances.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                      <strong className="font-semibold text-gray-900">Effortless accounting.</strong> Handle all transactions – sales, purchases, payments, expenses, stock adjustments, and cash management. Create purchase orders and delivery challans with ease.

                      Masterful billing and invoicing: Generate GST bills and cash memos in professional formats.
                       Create and share sales invoices and purchase bills with customers.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                      <strong className="font-semibold text-gray-900">Inventory management at its finest: </strong>
                      Enjoy automatic inventory management, manual stock adjustments, and detailed reports. Say goodbye 
                      to inventory headaches!

                      Embrace Biz-eBooks and unlock a world of streamlined accounting, insightful reports, 
                      and simplified business management.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Say goodbye to spreadsheet hell! With 25+ pre-built reports (including GST, P&L, stock, and party ledgers), 
                  manage your business with ease. This best-in-class billing and inventory software boasts effortless data 
                  transfer, user-friendly interfaces, and multilingual support.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Simplify Your Business, Empower Your Growth:</h2>
                <p className="mt-6">
                  Gain valuable insights by analyzing detailed reports, and synchronize your data seamlessly between mobile
                   and desktop for ultimate convenience. Streamline your operations and empower your growth with this
                    all-in-one solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>



  );
}
