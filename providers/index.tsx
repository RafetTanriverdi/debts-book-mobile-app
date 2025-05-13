import ReduxProvider from "@/providers/ReduxProviders";
import ThemeProviders from "@/providers/ThemeProvider"; // Ensure this path is correct
import React from "react";

export default function Providers({
  children,
}: React.PropsWithChildren) {
  return (
    <ReduxProvider>
      <ThemeProviders>{children}</ThemeProviders>
    </ReduxProvider>
  );
}
