import { ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export const Jobs = () => {
  return (
    <section className="max-w-6xl pt-12 md:pt-24 lg:pt-32">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* <div className="relative flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Job Title, Keyword"
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
        </div> */}
        <div className="flex flex-col items-center text-sm text-color-muted select-none">
          <p className="inline-flex items-center gap-2 ">
            <Image
              src="/usjp.jpg"
              width={25}
              height={25}
              quality={100}
              alt="University of Sri Jayewardenepura"
            />
            Powered by the University of Sri Jayewardenepura
          </p>
          <p>
            Students from other state universities are welcome to{" "}
            <Link href="#waitlist" className="underline inline-flex items-center">
              join the waitlist <ChevronRight className="h-3 w-4" />
            </Link>
          </p>
        </div>
         <div className="pt-12">
           <h3 className="text-color-muted md:flex justify-center space-x-1.5">
            <span>Top Companies Offering Job Opportunities.</span>
            <Link href="/companies" className="mt-3 md:mt-0 flex items-center justify-center font-medium hover:text-color"><span className="inline-flex  items-baseline">See Companies<ChevronRight className="h-3 w-5" /></span></Link>
           </h3>
           <div className="mt-16 grid grid-cols-2 sm:grid-cols-7 gap-10">
              <div className="flex items-center justify-center">
                <Image
                  src="/companies/99x.png"
                  width={99}
                  height={99}
                  quality={100}
                  alt="99X Technology"
                />
              </div>
           </div>
         </div>
      </div>

    </section>
  );
};