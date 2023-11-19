import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun size={18} className="dark:hidden" />
      <Moon size={18} className="hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggleButton;
