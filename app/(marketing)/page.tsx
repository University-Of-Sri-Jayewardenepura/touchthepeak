import { AfterMovies } from "@/components/after-movies";
import { Hero } from "@/components/hero";
import { Jobs } from "@/components/jobs";

export default function Home() {
  return (
     <main className="h-full mt-24">
       <Hero/>
       <Jobs/>
       <AfterMovies/>
     </main>
  );
}
