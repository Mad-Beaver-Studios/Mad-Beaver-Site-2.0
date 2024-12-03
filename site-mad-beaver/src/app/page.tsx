"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Img1 from "../../public/img1.png";
import Img2 from "@/app/public/img2.jpeg";

export default function Home() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  function enviarEmail() {
    console.log("enviado");
  }
  return (
    <div className=" bg-[url] min-h-screen flex flex-col bg-black text-white">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4 text-white"
          >
            Bottomless Inferno
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 text-gray-300"
          >
            Adicione a lista de desejos!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-full transition duration-300"
          >
            JOGUE JÁ
          </motion.button>
        </section>

        {/* Game Showcase Section */}
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-6xl font-bold mb-12 text-center text-white">
              Jogos
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 mb-8 md:mb-0"
              >
                {imageError ? (
                  <div className="w-[450px] h-[300px] bg-black flex items-center justify-center rounded-lg border border-gray-700">
                    <p className="text-gray-300">Image not available</p>
                  </div>
                ) : (
                  <Image
                    src={Img1}
                    alt="BottomlessInferno Game"
                    width={450}
                    height={300}
                    className="rounded-lg border border-gray-700"
                    onError={handleImageError}
                  />
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:w-1/2 md:pl-8"
              >
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Bottomless Inferno
                </h3>
                <p className="mb-6 text-gray-300">
                  Apos anos de servidão como contador no nono circulo do inferno, Davy o esqueleto decide escalar pelos andares ate chegar na terra enfrentado diversos demonios e encontrado figuras historicas. Baseado no poema de Dante Allighieri Bottomless Inferno é um jogo de ação em primeira pessoa com elementos que misturam roguelike e combate baseado em horda. 
                </p>
                <button
                  onClick={enviarEmail}
                  className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300"
                >
                  JOGUE JÁ
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
