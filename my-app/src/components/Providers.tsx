"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ThemeProviderProps } from "next-themes/dist/types";

const queryClient = new QueryClient();

export function Provider({ children, ...props }: ThemeProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider 
        attribute="class" 
        defaultTheme="system" 
        enableSystem 
        {...props}
      >
        {children}
      </NextThemesProvider>
    </QueryClientProvider>
  );
}
