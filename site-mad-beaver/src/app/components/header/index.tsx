"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image";
import { CgChevronDown } from "react-icons/cg";
import Logo from "../../../../public/logo.png"
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
        className={` p-5  flex items-center justify-between  ${
          scroll ? "text-white" : " bg-black text-white   shadow-xl z-50"
        }
    fixed top-0 left-0 right-0 z-99`}
      >
        <div className=" flex justify-center items-center">
        <Popover>
          <PopoverTrigger className="hover:text-red-600 flex justify-center items-center"> 
          <h2 className="  font-bold text-xl sm:flex ">
            Mad<span>Beaver</span>
          </h2>
          <CgChevronDown size={24} />
          </PopoverTrigger>
       <PopoverContent className=" w-screen h-60 flex">
        <div className=" flex flex-grow ">
          <div className=" flex grow-[2] flex-col text-center mx-4">
             <span className="font-bold">jogos</span>
             <Button variant="ghost">Ghost</Button>
             <Button variant="ghost">Ghost</Button>
             <Button variant="ghost">Ghost</Button>
            </div>
          <div className="flex flex-col  grow-[2]  text-center">
            <span className=" font-bold">sobre nós</span>
            <Button variant="ghost">Ghost</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex flex-col  grow-[2]  text-center">
            <span className=" font-bold">outro exemplo</span>
            <Button variant="ghost">Ghost</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="ghost">Ghost</Button>
            </div>
        </div>

        <div className=" grow-[1] justify-center flex">
          <Image src={Logo} alt="teste " width={200} height={200}/>
        </div>

       </PopoverContent>
        </Popover>
        <Image alt="logo"
        className="ml-5 border-solid border-2 rounded-3xl border-gray-800 sm:w-9 sm:h-9"
        width={50}
        height={50}
        src={Logo}/> 
        </div>
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