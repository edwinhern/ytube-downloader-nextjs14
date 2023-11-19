import { ChildProp } from "@/types/common";

import { LayoutProvider } from "./LayoutProvider";
import { ThemeProvider } from "./ThemeProvider";

const Providers: React.FC<ChildProp> = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <LayoutProvider>{children}</LayoutProvider>
      </ThemeProvider>
    </>
  );
};

export default Providers;
