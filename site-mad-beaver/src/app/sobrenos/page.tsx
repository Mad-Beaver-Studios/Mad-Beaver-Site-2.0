"use client";

import Logo from "../../../public/logo.png";
import Image from "next/image";
import LuizPhoto from "../../../public/LuizPhoto.jpg";
import EricPhoto from "../../../public/EricPhoto.jpg";
import TiagoPhoto from "../../../public/TiagoPhoto.jpg";
import GuilhermePhoto from "../../../public/GuilhermePhoto.jpg";
import GustavoPhoto from "../../../public/GustavoPhoto.jpg";
import { motion } from "framer-motion";

export default function Sobrenos() {
  const teamMembers = [
    { nome: "Gustavo", cargo: "Front-end", src: GustavoPhoto },
    { nome: "Luiz", cargo: "Back-end", src: LuizPhoto },
    { nome: "Guilherme", cargo: "Designer", src: GuilhermePhoto },
    { nome: "Eric", cargo: "Product Manager", src: EricPhoto },
    { nome: "Tiago", cargo: "QA Engineer", src: TiagoPhoto },
  ];

  return (
    <div className=" bg-[url] min-h-screen w-screen flex flex-col bg-black text-white">
      {/* Quem Somos */}
      <main>
        <section className="bg-gray-900 flex justify-center  py-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=" flex flex-col  max-w-7xl  justify-center "
          >
            <div className="container mx-auto font-bold  px-4 py-1 text-center text-3xl mb-8 text-gray-100  drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)] transition-all duration-300">
              QUEM SOMOS
            </div>
            <div className=" mx-auto px-4 py-1   text-center text-xl font-bold mb-4 text-gray-100 sm:text-3xl">
              A MAD BEAVER TEM COMO OBJETIVO CRIAR JOGOS E EXPERIENCIAS QUE
              CONECTEM OS JOGADORES
            </div>
            <div className="container mx-auto px-4 py-1 text-center text-xl font-bold mb-8 text-gray-100">
              COM UM PEQUENO TIME NOS ACREDITAMOS SE CAPAZ DE MUDAR O SEU MUNDO
            </div>
          </motion.div>
        </section>

        {/* Nossos Valores */}
        <section className="container mx-auto px-4 py-20 text-center text-3xl font-bold mb-4 text-gray-100">
          NOSSOS VALORES
        </section>

        <motion.section
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto px-4 py-2 text-center text-3xl font-bold mb-8 text-gray-100"
        >
          <div className="mb-4">VOLTADO AO JOGADOR</div>
          <div className="container mx-auto px-4 py-0 text-center text-xl font-bold mb-8 text-gray-100">
            Nós acreditamos em sempre colocar a experiencia do jogador como
            prioridade e temos como objetivos cada vez mais atender as
            necessidades da nossa comunidade
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto px-4 py-2 text-center text-3xl font-bold mb-8 text-gray-100"
        >
          <div className="mb-4">DIVERSIDADE</div>
          <div className="container mx-auto px-4 py-0 text-center text-xl font-bold mb-8 text-gray-100">
            Nós tambem acreditamos que temos o dever de criar e manter uma
            comunidade diversa e respeitosa para todos os tipos de jogadores
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto px-4 py-2 text-center text-3xl font-bold mb-8 text-gray-100"
        >
          <div className="mb-4">COMUNICAÇÂO</div>
          <div className="container mx-auto px-4 py-0 text-center text-xl font-bold mb-8 text-gray-100">
            Nosso time tem como um de seus pilares a forte crenca que uma boa e
            clara comunicação com a comunidade é a chave pra projetos duradouros
            e de sucesso
          </div>
        </motion.section>

        {/* Nossos Time(DPS ALGUEM AQUI AJEITA ESSA BOSTA PQ PQP ESSA MERDA N TA PEGANDO A KEY E SIM FAZENDO LISTA PORRA É POR ISSO Q N DA PRA USAR IA) */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 ">
            <h2 className="text-4xl font-bold mb-12 text-center  drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)] transition-all duration-300 text-gray-100">
              NOSSA EQUIPE
            </h2>
            <div className="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index}>
                  <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center border border-gray-600 overflow-hidden">
                    <Image
                      src={member.src}
                      alt={member.nome}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">
                    {member.nome}
                  </h3>
                  <p className="text-gray-400">{member.cargo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
