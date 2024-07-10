import { AfterMovies } from "@/components/after-movies";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
     <main className="h-screen mt-24">
       <Hero/>
       <AfterMovies/>
     </main>
  );
}
