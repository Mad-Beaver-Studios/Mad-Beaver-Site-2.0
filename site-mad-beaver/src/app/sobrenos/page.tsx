import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";


export default function Sobrenos(){
    return(
        <div className=" bg-[url] min-h-screen flex flex-col bg-black text-white">
            <main className="flex-grow">
            <section className="bg-gray-900 py-20">
                <div className="container mx-auto px-4 py-1 text-center text-2xl mb-8 text-gray-100">
                    QUEM SOMOS
                </div>
                <div className="container mx-auto px-4 py-1 text-center text-6xl font-bold mb-4 text-gray-100">
                    A MAD BEAVER TEM COMO OBJETIVO CRIAR JOGOS E EXPERIENCIAS QUE CONECTEM OS JOGADORES
                </div>
                <div className="container mx-auto px-4 py-1 text-center text-xl font-bold mb-8 text-gray-100">
                    COM UM PEQUENO TIME NOS ACREDITAMOS SE CAPAZ DE MUDAR O SEU MUNDO
                </div>
            </section>

            <section className="container mx-auto px-4 py-20 text-center text-6xl font-bold mb-4 text-gray-100">
                NOSSOS VALORES
            </section>
            
            <section className="container mx-auto px-4 py-2 text-center text-3xl font-bold mb-8 text-gray-100">
                <div>
                    VOLTADO AO JOGADOR
                </div>
                <div className="container mx-auto px-4 py-0 text-center text-xl font-bold mb-8 text-gray-100">
                    Nós acreditamos em sempre colocar a experiencia do jogador como prioridade e temos como objetivos cada vez mais atender as necessidades da nossa comunidade
                </div>
            </section>

            <section className="container mx-auto px-4 py-2 text-center text-3xl font-bold mb-8 text-gray-100">
                <div>
                    DIVERSIDADE
                </div>
                <div className="container mx-auto px-4 py-0 text-center text-xl font-bold mb-8 text-gray-100">
                    Nós tambem acreditamos que temos o dever de criar e manter uma comunidade diversa e respeitosa para todos os tipos de jogadores
                </div>
            </section>

            <section className="container mx-auto px-4 py-2 text-center text-3xl font-bold mb-8 text-gray-100">
                <div>
                    COMUNICAÇÂO
                </div>
                <div className="container mx-auto px-4 py-0 text-center text-xl font-bold mb-8 text-gray-100">
                    Nosso time tem como um de seus pilares a forte crenca que uma boa e clara comunicação com a comunidade é a chave pra projetos duradouros e de sucesso 
                </div>
            </section>

            </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2 text-white">
                BottomlessInferno
              </h3>
              <p className="text-gray-400">© 2024 All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    ) 
}