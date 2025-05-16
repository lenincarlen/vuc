import Image from "next/image";
import OpcionesTramite from "./components/OpcionesTramite";

export default function Home() {
  return (
    <div className="grid  items-center justify-items-center h-[84vh] mt-10   font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <OpcionesTramite />
        
        
      </main>
      </div>
  );
}
