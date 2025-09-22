import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="professional-button bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 backdrop-blur-md"
    >
      {theme === 'light' ? (
        <>
          <Moon className="h-4 w-4 mr-2" />
          Dark Mode
        </>
      ) : (
        <>
          <Sun className="h-4 w-4 mr-2" />
          Light Mode
        </>
      )}
    </Button>
  );
}