"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="bg-black/60 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center">
          <p className="text-white/80 font-medium text-center">
            Stay tuned, we will be releasing the first version in the summer 2025
          </p>
        </div>
      </div>
    </nav>
  );
} 