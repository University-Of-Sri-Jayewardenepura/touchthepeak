"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Separator } from "@/components/ui/separator";
import {  Sun, Moon, Monitor } from "lucide-react";


export const Footer = () => {
  const { theme, setTheme } = useTheme()

  return (
    <footer className="px-8 mt-36 mb-24 mx-auto max-w-4xl text-sm text-muted-foreground">
      <div className="sm:flex space-y-8 sm:space-y-0">
         <div className="flex-1 grid select-none grid-cols-2 gap-8 sm:flex sm:flex-col">
          <Link href="/"><Image src="/logo.png" width={80} height={80} alt="Touch The Peak"/></Link>
          <div className="flex  flex-1 space-x-4 sm:items-end">
              <Link href="https://www.facebook.com/touchthepeakcsds/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
</svg></Link>
              <Separator orientation="vertical" className="h-6" />
              <Link href="https://www.youtube.com/@csdsofusj1969"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
</svg></Link>
              <Separator orientation="vertical" className="h-6" />
              <Link href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg></Link>
          </div>
         </div>
         <div className="flex-1 grid grid-cols-2 gap-8">
          <div><label className="font-semibold text-white">Products</label>
           <ul className="mt-5 space-y-3.5">
             <li>Search Job</li>
             <li>Post Job</li>
             <li>CV Clinique</li>
            </ul> 
          </div>
          <div><label className="font-semibold text-white">Products</label>
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
          <Monitor onClick={() => setTheme("system")} className={`h-4 w-4 text-muted-foreground ${theme === "system" ? "text-white" : ""}`}/>
          <Sun onClick={() => setTheme("light")} className={`h-4 w-4 ${theme === "light" ? "text-neutral-950" : ""}`}/>
          <Moon onClick={() => setTheme("dark")} className={`h-4 w-4 ${theme === "dark" ? "text-white" : ""}`}/>
        </div>
      </div>
    </footer>
  );
};
