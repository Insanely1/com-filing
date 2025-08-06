"use client";
import React from 'react'
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "../utils/cn";



function Aboutus() {
    return (
        <div className='flex flex-col items-center justify-center bg-slate-100 min-h-screen'>
            <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                <Boxes />
                <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                    About Us
                </h1>


                <h1 className="text-center mt-2 text-neutral-300 relative z-20">
                    Data Powerhouse: Streamline Your Business with Quik Books
                </h1>
                <p className="text-center mt-2 text-neutral-300 relative z-20  w-3/4 md:w-1/2">
                    Drowning in data? We help startups and enterprises conquer chaos with powerful data
                    processing, accounting, and business reporting. Track sales, inventories, and stock with
                    laser focus. Share e-way bills, collect payments via UPI and online channels, and
                    effortlessly file GST returns – all in one intuitive platform.
                    Get insights, automate tasks, and fuel your growth with Quik Books.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center  mt-10">
                <h3 className={cn("md:text-4xl text-xl mt-10 text-black relative z-20")}>
                    Mission
                </h3>

                <p className="text-center mt-2 text-black relative z-20  w-3/4 md:w-1/2">
                    Imagine: business insights at your fingertips. That's what ' Quik Books ' delivers. We're your gateway to fast, reliable, and accurate business solutions, designed to streamline your daily operations and fuel your growth.
                    <br />
                    Say goodbye to cumbersome processes. With our intuitive mobile app and web platform, you can manage your books, access critical data, and apply for essential services in just a few clicks. No more scrambling through spreadsheets or waiting on hold for answers.
                    <br />
                    Unleash the power of instant insights. Get real-time reports on your financial health, identify trends, and make informed decisions with confidence. Whether you're a seasoned entrepreneur or a budding startup, ' Quik Books ' empowers you to see the bigger picture.
                    <br />
                    But it's not just about data. We connect you with the resources you need to thrive. Apply for licenses, permits, and other essential services directly through our platform. No more navigating complicated bureaucratic hurdles – we simplify the process, saving you time and money.

                    Join<br /> the thousands of businesses already embracing the ' Quik Books ' advantage. Experience the freedom of a streamlined, data-driven approach to business. Empower your team, achieve your goals, and watch your business soar.
                </p>

            </div>

        </div>
    )
}

export default Aboutus
