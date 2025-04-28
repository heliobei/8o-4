import React from 'react';
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";

const RecRotacao = () => {
  return (
    <div className='bg-slate-600 py-8'>
        <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center sm:p-8">

            <div className="p-8 md:w-1/2 mb-4 md:mb-0">
                <img
                className="w-full h-full object-cover rounded-md"
                src="/images/classgroup.jpg"  // Substitua pelo caminho da sua imagem
                alt="Descrição da Imagem"
                />
            </div>

            <div className="md:w-1/2 md:ml-4">
                <h2 className="mb-8 text-4xl text-white font-bold px-8 ">Ferramenta 2: Rotação por estações</h2>
                <p className='text-white px-8 mb-8'>
                A rotação por estações é um tipo de metodologia ativa em que a turma é dividida em grupos fixos (“estações”); cada estação trabalha com o tema central da aula, abordando-os de diferentes perspectivas e elaborando algo em grupo.
                </p>
                <h1 className="mb-4 text-3xl text-white font-bold px-8 ">Desenvolvimento da atividade</h1>
                <p className='text-white px-8'>Para esta atividade, os estudantes terão que realizar tarefas síncronas e assíncronas utilizando as metodologias descritas acima. Veja abaixo um resumo de como utilizá-las.</p>
            </div>

            
            
        </div>

        <div className='py-8'>
            <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-3">
                
                
                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <TbCircleNumber1 className="text-4xl text-primary mb-4" />
                    </div>
                    
                    <p className='text-sm text-slate-800 text-left pb-4'>Solicite que os estudantes, em casa, leiam e resumam o que aprenderam com o Livro do Estudante. Sinalize que eles devem relembrar as principais ideias da Educação Financeira e da Matemática. Se possível, e dentro de seu cronograma, dê o prazo de uma semana para que a turma realize essa atividade.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <TbCircleNumber2  className="text-4xl text-primary mb-4" />
                    </div>
                    
                    <p className='text-sm text-slate-800 text-left pb-4'>Para a atividade de rotação por estações, a turma deverá ser dividida por estação de trabalho. Em cada estação será desenvolvida uma atividade diferente. É importante explicar bem o que significa cada atividade: charge, mapa mental, quiz, podcast, entre outras.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <TbCircleNumber3 className="text-4xl text-primary mb-4" />
                    </div>
                    
                    <p className='text-sm text-slate-800 text-left'>O ideal é que cada grupo passe por todas as estações, porém, devido ao limite de tempo da aula, talvez não seja possível que todos os estudantes passem por todas as estações. No entanto, é importante que visitem pelo menos duas delas.</p>
                </div>

                
            </div>
        </div>
        <p className='text-white px-8 max-w-7xl mx-auto text-center font-semibold py-8'>A intenção desse movimento de visita às outras estações é que cada grupo receba contribuições dos colegas para a atividade proposta: pode ser uma pergunta ou alguma sugestão de melhoria. Veja abaixo uma sugestão de divisão da turma para criação de estações com suas respectivas atividades:</p>
        <img className='w-full h-full object-cover p-4 rounded-3xl max-w-5xl mx-auto' src="/images/rotacao.png" alt="Descrição da Imagem" />
    </div>
    
  );
};

export default RecRotacao;
