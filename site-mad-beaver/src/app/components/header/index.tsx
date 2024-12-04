"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";

import { CgChevronDoubleDown } from "react-icons/cg";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { CgChevronDown } from "react-icons/cg";
import Logo from "../../../../public/logo.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import MultiImageHover from "../imagemChange";

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
      width: typeof window !== "undefined" ? window.innerWidth : 0,
      height: typeof window !== "undefined" ? window.innerHeight : 0,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 640;
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
            <PopoverTrigger className="hover:text-red-600 flex justify-center items-center drop-shadow-[0_2px_3px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_10px_8px_rgba(220,38,38,0.5)] transition-all duration-300">
              <h2 className="  font-bold text-xl sm:flex   ">
                Mad
                <span className="drop-shadow-lg hover:shadow-yellow-100">
                  Beaver
                </span>
              </h2>
              <CgChevronDown size={24} />
            </PopoverTrigger>
            <PopoverContent className=" p-0 m-0 bg-white w-screen h-screen flex sm:h-2/6 flex-col  sm:flex-row">
              <div className="  flex flex-grow flex-col text-start sm:flex-row justify-start items-start sm:text-center">
                {!isMobile && (
                  <div className="  flex sm:grow-[2] flex-col sm:mx-2 ">
                    <MultiImageHover />
                  </div>
                )}
                {isMobile && (
                  <div className="  flex sm:grow-[2] flex-col sm:mx-2 ">
                    <span className="font-bold bg-slate-200 w-screen sm:w-full p-2 sm:p-0 flex justify-between">
                      jogos
                      <button>
                        <CgChevronDoubleDown
                          onClick={() => setshow(!show)}
                          size={24}
                        />
                      </button>
                    </span>
                    {show && (
                      <div className=" flex flex-col gap-3 mt-3  ">
                        <Button
                          variant="ghost"
                          className="bg-slate-400 rounded-xl mx-2"
                        >
                          <p className="font-bold">CHRONO LEAF</p>
                        </Button>
                        <Button
                          variant="ghost"
                          className="bg-slate-400 rounded-xl mx-2"
                        >
                          <p className="font-bold">BOTTEMLESS</p>
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </PopoverContent>
          </Popover>
          <div className=" flex items-center w-10 h-3 invisible text-center sm:visible ">
            <Link href="/">
              <Image
                alt="logo"
                className="ml-5  hover:border-red-900 border-solid border-[2px]  rounded-3xl border-gray-800 "
                objectFit="cover"
                src={Logo}
              />
            </Link>
          </div>
        </div>
        <BreadcrumbList>
          <BreadcrumbItem className=" hover:text-red-700 text-white hover:scale-110 transition-all duration-700">
            <BreadcrumbLink href="/jogos" className="font-bold">
              {isMobile && <p className="visible sm:invisible">Home</p>}
              {!isMobile && <p className="invisible sm:visible ">Jogos</p>}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="  hover:text-red-700 text-white hover:scale-110 transition-all duration-700">
            <BreadcrumbLink href="/sobrenos" className="font-bold">
              Sobre Nós
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
