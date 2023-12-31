import { DownloadCloud } from "lucide-react";
import Link from "next/link";
import React from "react";

import ThemeToggleButton from "../ThemeToggle/themeToggle";

export const Navigation = () => {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link
          className="flex items-center gap-2 text-lg font-semibold hover:underline"
          href="/"
        >
          <DownloadCloud />
          Hernandez Music Converter
        </Link>
        <ThemeToggleButton />
      </div>
    </header>
  );
};
