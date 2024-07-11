"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const afterMovies = [
    "https://www.youtube.com/embed/ZRo4waTsl2w",
    "https://www.youtube.com/embed/0zNJlenMJpQ",
    "https://www.youtube.com/embed/wDlAw1O6NfM",
];

export const AfterMovies = () => {
    return (
        <section className="max-w-6xl pt-12 md:pt-24 lg:pt-32">
            <div className="container space-y-10 xl:space-y-16">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="heading">After Movies</h1>
                        <p className="subheading">Check out our past events and relive the highlights.</p>
                    </div>
                </div>
                <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {afterMovies.map((src) => (
                        <iframe
                            key={src}
                            className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 ease-in-out duration-300"
                            src={src}
                            width={300}
                            height={200}
                            allowFullScreen
                        />
                    ))}
                </div>
                <Carousel className="max-w-sm md:hidden mx-auto">
                    <CarouselContent>
                        {afterMovies.map((src, id) => (
                            <CarouselItem key={id}>
                                <iframe
                                    key={src}
                                    className="shadow-lg mx-auto"
                                    src={src}
                                    width={300}
                                    height={200}
                                    allowFullScreen
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="ml-14" />
                    <CarouselNext className="mr-14" />
                </Carousel>
            </div>
        </section>
    );
};
