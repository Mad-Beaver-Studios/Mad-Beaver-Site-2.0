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

import { CgChevronDoubleDown } from "react-icons/cg";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image";
import { CgChevronDown } from "react-icons/cg";
import Logo from "../../../../public/logo.png"
import Img1 from "../../../../public/img1.png"
import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
  const [scroll, setscroll] = useState(true);

  const scrollhandler = () => {
    window.scrollY > 10 ? setscroll(false) : setscroll(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollhandler);

    return () => window.removeEventListener("scroll", scrollhandler);
  }, [scroll]);


  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  }
  const [show, setshow] = useState(false)
  const [show2, setshow2] = useState(false)
  const [show3, setshow3] = useState(false)
  const { width } = useWindowSize();
  const isMobile = width < 640;
  return (
    <header className=" w-full h-24 bg-black">
      <Breadcrumb
        className={` p-5  flex items-center justify-between  ${scroll ? "text-white" : " bg-black text-white   shadow-xl z-50"
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
            <PopoverContent className=" p-0 m-0 bg-white w-screen h-screen flex sm:h-2/6 flex-col  sm:flex-row">
              <div className="  flex flex-grow flex-col text-start sm:flex-row justify-start items-start sm:text-center">

                {!isMobile && (
                  <div className="  flex sm:grow-[2] flex-col sm:mx-2 ">
                    <span className="font-bold bg-slate-200 w-screen sm:w-full p-2 sm:p-0">jogos</span>
                    <div className=" flex flex-col ">
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                  </div>
                )}
                {isMobile && (
                  <div className="  flex sm:grow-[2] flex-col sm:mx-2 ">
                    <span className="font-bold bg-slate-200 w-screen sm:w-full p-2 sm:p-0 flex justify-between">
                      jogos
                      <button>
                        <CgChevronDoubleDown onClick={(() => setshow(!show))} size={24} />
                      </button>
                    </span>
                    {show && (
                      <div className=" flex flex-col ">
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="ghost">Ghost</Button>
                      </div>
                    )}

                  </div>
                )}

                {!isMobile && (
                  <div className="  flex sm:grow-[2] flex-col sm:mx-2 ">
                    <span className=" font-bold bg-slate-200 w-screen sm:w-full p-2 sm:p-0">sobre nós</span>
                    <div className=" flex flex-col ">
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                  </div>
                )}
                {isMobile && (
                  <div className="  flex sm:grow-[2] flex-col sm:mx-2 ">
                    <span className="font-bold bg-slate-200 w-screen sm:w-full p-2 sm:p-0 flex justify-between">
                      Sobre nós
                      <button>
                        <CgChevronDoubleDown onClick={(() => setshow2(!show2))} size={24} />
                      </button>
                    </span>
                    {show2 && (
                      <div className=" flex flex-col ">
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="ghost">Ghost</Button>
                      </div>
                    )}
                  </div>
                )}
                {!isMobile && (
                  <div className="  flex sm:grow-[2] flex-col sm:mx-2 ">
                    <span className=" font-bold w-screen sm:w-full bg-slate-200 p-2 sm:p-0 ">outro exemplo</span>
                    <div className=" flex flex-col ">
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                  </div>
                )}
                {isMobile && (
                  <div className="  flex sm:grow-[2] flex-col sm:mx-2 ">
                    <span className="font-bold bg-slate-200 w-screen sm:w-full p-2 sm:p-0 flex justify-between">
                      Sobre nós
                      <button>
                        <CgChevronDoubleDown onClick={(() => setshow3(!show3))} size={24} />
                      </button>
                    </span>
                    {show3 && (
                      <div className=" flex flex-col ">
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="ghost">Ghost</Button>
                      </div>
                    )}
                  </div>
                )}


              </div>

              <div className=" grow-[1] items-center sm:flex justify-center ">
                <Image src={Img1} alt="teste" quality={100} className="w-full object-contain sm:w-48 sm:h-48 " />
              </div>

            </PopoverContent>
          </Popover>
          <Link href="/">
            <Image alt="logo"
              className="ml-5 border-solid border-2 object-contain rounded-3xl border-gray-800 sm:w-9 sm:h-9"
              width={50}
              height={50}
              src={Logo} />
          </Link>

        </div>
        <BreadcrumbList>
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


