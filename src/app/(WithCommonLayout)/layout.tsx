import React from "react";

import { Navbar } from "@/src/components/navbar";
import { Providers } from "@/src/lib/Providers";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
        <div className="relative flex flex-col h-screen">
          <Navbar />
          <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
            {children}
          </main>
        </div>
      </Providers>
    </div>
  );
};

export default layout;
