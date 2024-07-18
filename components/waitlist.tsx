import { Calendar, Hand } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Waitlist = () => {
    return (
        <section id="waitlist" className="relative max-w-6xl isolate overflow-hidden bg-background/80 mt-12 md:mt-24 lg:mt-32 py-16 sm:py-24 lg:py-32 rounded-lg border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg text-color">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-center md:text-left">Subscribe for Waitlist</h2>
              <p className="subheading text-center md:text-left">Enter your email and subscribe for news about other state university availability and email updates.</p>
              <div className="mt-6 flex max-w-md  gap-x-4">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <Input name="email" type="email" placeholder="you@university.com" className=" rounded-lg bg-background  "/>
                <Button>Subscribe</Button>
              </div>
            </div>
            <dl className="hidden md:grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 text-color lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-background/5 p-2 ring-1 ring-secondary/50">
                 <Calendar className="h-6 w-6" />
                </div>
                <dt className="mt-4 font-semibold ">Weekly articles</dt>
                <dd className="mt-2 leading-relaxed text-color-muted">Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.</dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-background/5 p-2 ring-1 ring-secondary/50">
                  <Hand className="h-6 w-6" />
                </div>
                <dt className="mt-4 font-semibold">No spam</dt>
                <dd className="mt-2 leading-relaxed text-color-muted">Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-red-300 to-red-600 opacity-30" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
        </div>
      </section>
    );
  };


