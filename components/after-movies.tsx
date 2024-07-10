"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Link from "next/link";

export const AfterMovies = () => {
    return (
        <section className="max-w-6xl pt-12 md:pt-24 lg:pt-32">
            <div className="container space-y-10 xl:space-y-16">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="mx-auto max-w-[22rem] md:max-w-[40rem]  text-3xl font-semibold leading-tight md:text-5xl md:leading-[1.08] space-y-2">
                            After Movies
                        </h1>
                        <p className="mt-4 max-w-[26rem] mx-auto md:max-w-xl md:leading-loose">
                            Check out our past events and relive the highlights.
                        </p>
                    </div>
                </div>
                <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        "https://www.youtube.com/embed/ZRo4waTsl2w",
                        "https://www.youtube.com/embed/0zNJlenMJpQ",
                        "https://www.youtube.com/embed/wDlAw1O6NfM",
                    ].map((src) => (
                        <iframe
                            key={src}
                            className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 "
                            src={src}
                            width={300}
                            height={200}
                            allowFullScreen
                        />
                    ))}
                </div>
            </div>
        </section>
    );
  };