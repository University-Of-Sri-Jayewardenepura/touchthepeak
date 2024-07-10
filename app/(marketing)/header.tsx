
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center px-2 justify-between h-full">
        <div className="pt-8  flex items-center gap-x-3">
          <Image src="/logo.png" height="80" width="80" alt="Touch The Peak" className="inline-flex" />
          <h1 className="tracking-wide text-2xl font-semibold">
            Touch The Peak
          </h1>
        </div>
        <div className="pt-8 space-x-6">
           <Link href="/companies">Companies</Link>
           <Link href="/blog">Blog</Link>
        </div>
        <div className="pt-8 space-x-4">
        <Button variant="outline" className="rounded-full" >Sign In</Button>
        <Button className="rounded-full">Post Job</Button>
        </div>
      </div>
    </header>
  );
};
