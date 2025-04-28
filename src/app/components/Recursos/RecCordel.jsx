import React from 'react'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3} from "react-icons/tb";
import RecTabela from './RecTabela';

function RecCordel() {
    return (
        <div className=''>
            <div className='pt-8 pb-8 '>
                <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center p-8">
                    
                    <div className="px-4 md:w-1/2 md:ml-4">
                            <h1 className="text-slate-800 text-2xl md:text-4xl font-bold mb-4">Ferramenta 1: A sala de aula invertida</h1>
                            <p className="text-slate-800 py-2 pb-6">A sala de aula invertida é uma metodologia ativa com uma abordagem híbrida, cuja dinâmica consiste em elaborar uma pré-aula utilizando diversos recursos e mídias, contendo explicação dos conteúdos que serão desenvolvidos, para que estes conteúdos sejam mobilizados em atividades em uma aula posterior. Os recursos para a pré-aula podem ser de diversas natureza, inclusive podem ser criados pelo próprio professor.</p>
                            
                            <p className='py-2 text-slate-800'>Cabe reforçar que na sala de aula invertida os professores não devem re-apresentar os materiais de estudo para os alunos e sim propor atividades onde os estudantes devam mobilizar os saberes adquiridos através destes materiais.</p>
                    </div>
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <img
                        src="/images/invertida.jpg"
                        alt="Imagem"
                        className="w-full h-full object-cover rounded-md"
                        />
                    </div>
    
                    
                    
                </div>

                <div className='py-8 max-w-5xl mx-auto'>
                    <h1 className="text-slate-800 text-2xl md:text-3xl font-bold mb-4 text-center">Vantagens</h1>
                    <p className="text-slate-800 py-2 p-4">Essa metodologia permite aproveitar o tempo das aulas para atividades mais ativas, nas quais os educandos terão o educador como auxiliador e supervisor das práticas desenvolvidas. Existem diversas vantagens no uso da sala de aula invertida ao invés do modelo tradicional de aula, veja abaixo:</p>
                </div>
            <RecTabela />
             </div>  
        
        </div>
      )
    }

export default RecCordel