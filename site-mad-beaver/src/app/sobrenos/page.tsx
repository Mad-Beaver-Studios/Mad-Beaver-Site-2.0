import Logo from '../../../public/logo.png'
import Image from "next/image";
import Img1 from "../../../public/img1.png"

export default function Sobrenos(){
  const teamMembers = [
    { id: 1, nome: "Gustavo", cargo: "Front-end", src: Logo },
    { id: 2, nome: "Ana", cargo: "Back-end", src: Img1 },
    { id: 3, nome: "Carlos", cargo: "Designer", src: Logo },
    { id: 4, nome: "Mariana", cargo: "Product Manager", src: Logo },
    { id: 5, nome: "Rafael", cargo: "QA Engineer", src: Logo },
  ]
 
    return(
        <div className=" bg-[url] min-h-screen flex flex-col bg-black text-white">
            {/* Quem Somos */}
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

            {/* Nossos Valores */}
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

            {/* Nossos Time(DPS ALGUEM AQUI AJEITA ESSA BOSTA PQ PQP ESSA MERDA N TA PEGANDO A KEY E SIM FAZENDO LISTA PORRA É POR ISSO Q N DA PRA USAR IA) */}
            <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">NOSSA EQUIPE</h2>
            <div className="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {teamMembers.map((member) => (
                
                  <div>
                  <div      key={member.id} className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center border border-gray-600 overflow-hidden">
                    <Image src={member.src} alt={member.nome} width={96} height={96} className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{member.nome}</h3>
                  <p className="text-gray-400">{member.cargo}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>
    </main>
    </div>
    ) 
}