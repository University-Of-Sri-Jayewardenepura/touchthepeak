"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Youtube, Sun, Moon, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes"

export const Footer = () => {
  const { setTheme } = useTheme()

  return (
    <footer className="px-8 mt-36 mb-24 mx-auto max-w-4xl text-sm">
      <div className="sm:flex space-y-8 sm:space-y-0">
         <div className="flex-1 grid grid-cols-2 gap-8 sm:flex sm:flex-col">
          <Link href="/"><Image src="/logo.png" width={80} height={80} alt="Touch The Peak"/></Link>
          <div className="flex  flex-1 space-x-4 sm:items-end">
              <Link href="https://www.facebook.com/touchthepeakcsds/"><Facebook /></Link>
              <Separator orientation="vertical" className="h-6" />
              <Link href="https://www.youtube.com/@csdsofusj1969"><Youtube /></Link>
              <Separator orientation="vertical" className="h-6" />
              <Link href="/"><Linkedin /></Link>
          </div>
         </div>
         <div className="flex-1 grid grid-cols-2 gap-8">
          <div><label className="font-semibold">Products</label>
           <ul className="mt-5 space-y-3.5">
             <li>Search Job</li>
             <li>Post Job</li>
             <li>CV Clinique</li>
            </ul> 
          </div>
          <div><label className="font-semibold">Products</label>
           <ul className="mt-5 space-y-3.5">
             <li>Search Job</li>
             <li>Post Job</li>
             <li>CV Clinique</li>
            </ul> 
          </div>
         </div>
      </div>
      <div className="mt-16 pt-16 flex items-center">
        <div className="flex-1"> &copy; 2024 Touch the Peak</div>
        <div className="hidden sm:block flex-1 text-center">All Rights Reserved</div>
        <div className="flex-1 flex justify-end items-center space-x-3">
          <Monitor onClick={() => setTheme("system")} className="h-4 w-4 text-muted-foreground"/>
          <Sun onClick={() => setTheme("light")} className="h-4 w-4 text-muted-foreground"/>
          <Moon onClick={() => setTheme("dark")} className="h-4 w-4 text-muted-foreground"/>
        </div>
      </div>
    </footer>
  );
};
