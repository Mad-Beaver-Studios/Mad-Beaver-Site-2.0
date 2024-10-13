"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";

export function Header() {
  const [scroll, setscroll] = useState(true);

  const scrollhandler = () => {
    window.scrollY > 10 ? setscroll(false) : setscroll(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollhandler);

    return () => window.removeEventListener("scroll", scrollhandler);
  }, [scroll]);

  return (
    <header className=" w-full h-24 bg-black">
      <Breadcrumb
        className={` p-5  flex items-center justify-center sm:justify-between  ${
          scroll ? "text-white" : " bg-black text-white   shadow-xl z-50"
        }
    fixed top-0 left-0 right-0 z-99`}
      >
        <h2 className=" hidden font-bold text-xl sm:flex ">
          BottomlessInferno
        </h2>
        <BreadcrumbList>
          <BreadcrumbItem className=" hover:text-red-700 text-white hover:scale-110 transition-all duration-700">
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className=" hover:text-red-700 text-white hover:scale-110 transition-all duration-700">
            <BreadcrumbLink href="/jogos">Jogos</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="  hover:text-red-700 text-white hover:scale-110 transition-all duration-700">
            <BreadcrumbLink href="/sobrenos">Sobre Nós</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}