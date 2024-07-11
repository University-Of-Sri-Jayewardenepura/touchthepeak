import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-20 w-full px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center px-2 justify-between h-full">
        <Link href="/" className="pt-8 flex items-center gap-x-3">
          <Image src="/favicon.svg" height="24" width="24" alt="Touch The Peak" className="inline-flex" />
          <h1 className="tracking-wide text-2xl font-semibold">
            Touch The Peak
          </h1>
        </Link>
        <div className="pt-8 space-x-6">
          <Link href="/companies">Companies</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="pt-8 space-x-4">
          <Button variant="outline" size="sm" className="rounded-full px-4" asChild>
            <Link href="/signin">Sign Up</Link>
          </Button>
          <Button size="sm" className="rounded-full px-4">
            <Link href="/signin" className="flex items-center">Post Job <ChevronRight className="h-4" /></Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
