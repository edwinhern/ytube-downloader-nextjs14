"use client";

import "@/app/globals.css";

import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper/maxWidthWrapper";
import { Navigation } from "@/components/common/Navigation/navigation";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ChildProp } from "@/types/common";

export const LayoutProvider: React.FC<ChildProp> = ({ children }) => {
  return (
    <>
      <div className={cn("font-sans ", fontSans.variable)}>
        <Navigation />
        <MaxWidthWrapper className="space-y-4 antialiased pb-8 pt-6 md:py-10">
          {children}
        </MaxWidthWrapper>
      </div>
    </>
  );
};
