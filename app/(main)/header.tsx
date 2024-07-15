"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="h-20 w-full px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center px-2 justify-between h-full">
        <Link href="/" className="pt-8 flex items-center gap-x-3">
          <Image
            src="/favicon.svg"
            height="24"
            width="24"
            alt="Touch The Peak"
            className="inline-flex"
          />
          <h1 className="text-color tracking-wide text-2xl font-semibold">
            Touch The Peak
          </h1>
        </Link>
        <div className="hidden md:block pt-8 space-x-6 text-color">
          <Link href="/companies">Companies</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="hidden md:block pt-8 space-x-4">
          <Button variant="outline" size="sm" className="rounded-full px-4" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button size="sm" className="rounded-full px-4">
            <Link href="/signin" className="flex items-center">
              Post Job <ChevronRight className="h-4" />
            </Link>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden mt-8" onClick={toggleMobileNav}>
          <Menu />
        </Button>
      </div>
      <MobileNav isOpen={isMobileNavOpen} onClose={toggleMobileNav} />
    </header>
  );
};

const MobileNav = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 pt-9">
      <div className="flex items-center justify-between">
        <div className="-m-1.5 p-1.5 flex gap-3">
          <span className="sr-only">Touch The Peak</span>
          <Image src="/favicon.svg" height="24" width="24" alt="Touch The Peak" />
          <h1 className="text-color tracking-wide text-2xl font-semibold">
            Touch The Peak
          </h1>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <span className="sr-only">Close menu</span>
          <X />
        </Button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10 pt-6 ">
          <div className="space-y-2 py-6 ">
            <Link href="/companies" className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 ">
              Companies
            </Link>
            <Separator />
            <Link href="/blog" className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 ">
              Blog
            </Link>
            <Separator />
            <Link href="/signup" className="-mx-3 block px-3 py-2.5 text-base font-semibold leading-7 ">
              Sign Up
            </Link>
            <Separator />
            <Link href="/post-job" className="-mx-3 block px-3 py-2.5 text-base font-semibold leading-7 ">
              Post Job
            </Link>
            <Separator />
          </div>
        </div>
      </div>
    </div>
  );
};