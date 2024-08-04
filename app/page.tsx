import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <FloatingNav
        navItems={[
          { name: "About", link: "/about" },
          { name: "Projects", link: "/projects" },
          { name: "⬆️", link: "/" },
          { name: "Resume", link: "/resume" },
          { name: "Contact", link: "/contact" },
        ]}
      />
      <Hero />
    </div>
  );
}
