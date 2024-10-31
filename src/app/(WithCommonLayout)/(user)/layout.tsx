import Continar from "@/src/components/ui/Continar";
import Sidebar from "@/src/components/ui/Sidebar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <Continar>
      <div className="my-3 flex w-full gap-12">
        <div className="w-2/5">
          <Sidebar />
        </div>
        <div className="w-4/5">{children}</div>
      </div>
    </Continar>
  );
}
