import { AfterMovies } from "@/components/after-movies";
import { Hero } from "@/components/hero";
import { Jobs } from "@/components/jobs";
import { Waitlist } from "@/components/waitlist";

export default function Home() {
  return (
     <main className="h-full mt-24 scroll-smooth">
       <Hero/>
       <Jobs/>
       <AfterMovies/>
       <Waitlist/>
     </main>
  );
}
