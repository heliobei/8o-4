import React from 'react';
import { GiShinyApple } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { IoRocket } from "react-icons/io5";

const RecCards = () => {
  return (
    <div className='bg-slate-200'>
      <div className='max-w-7xl mx-auto'>
          <div className="py-16 overflow-hidden">
            <div className="container m-auto px-6 space-y-8 text-slate-700 md:px-12">
              <div>
                
                <h2 className="mt-4 text-2xl text-slate-900 font-bold md:text-4xl text-center">Para saber mais: links úteis</h2>
              </div>
              <div className="pb-8 mt-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div className="relative p-8 space-y-8">
                      <p className='text-5xl '>🎒</p>
                    <div className="space-y-2">
                      <h5 className="text-xl pb-4 font-bold text-primary transition group-hover:text-primary">
                        Sala de Aula Invertida
                      </h5>
                      <p className="text-sm text-gray-600">
                        <a 
                          href="https://www.google.com/url?q=https%3A%2F%2Feducadordofuturo.com.br%2Fprofessor%2Fsala-de-aula-invertida%2F&sa=D&sntz=1&usg=AOvVaw1a4NY9M8UmbdUFQMRuyfNS" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='underline text-blue-700 hover:text-purple-900'>Sala de aula invertida: o que é e como funciona a metodologia?

                        </a>
                      </p>

                      <p className="text-sm text-gray-600">
                        <a 
                          href="https://www.google.com/url?q=https%3A%2F%2Fsae.digital%2Fsala-de-aula-invertida%2F&sa=D&sntz=1&usg=AOvVaw32GrAjfy4AeClw04DtKe1R" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='underline text-blue-700 hover:text-purple-900'>Sala de aula invertida: o que é, como funciona e seus principais benefícios.

                        </a>
                      </p>

                      <p className="text-sm text-slate-800">Imagem: {' '}
                        <a 
                          href="https://www.google.com/url?q=https%3A%2F%2Fwww.researchgate.net%2Fpublication%2F322567566%2Ffigure%2Ffig1%2FAS%3A583979224817664%401516242905964%2FFIGURA-1-Esquema-basico-da-sala-de-aula-invertida.png&sa=D&sntz=1&usg=AOvVaw1EWdZryEX_H2inRt2LNsuq" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='underline text-blue-700 hover:text-purple-900'>Sala de aula invertida

                        </a>{' '}(retirado de Schmitz, Elieser & Reis, Susana. (2018).
                      </p>
                    
                    </div>
                    
                  </div>
                </div>
                
                <div className="relative group pb-4 bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div className="relative p-8 space-y-8">
                      <p className='text-5xl'>👩🏾‍🏫</p>
                    <div className="space-y-2">
                      <h5 className="text-xl pb-4 font-bold text-primary transition group-hover:text-primary">
                      Rotação por Estações
                      </h5>
                    
                      <p className="text-sm text-gray-600">
                        <a 
                          href="https://www.google.com/url?q=https%3A%2F%2Fsilabe.com.br%2Fblog%2Frotacao-por-estacoes%2F&sa=D&sntz=1&usg=AOvVaw1fS-LmS85kH9c1R2KYtFpb" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='underline text-blue-700 hover:text-purple-900'>Rotação por estações: um guia completo por duas professoras.

                        </a>
                      </p>

                      <p className="text-sm text-gray-600">
                        <a 
                          href="https://www.google.com/url?q=https%3A%2F%2Feducacaocientifica.com%2Feducacao%2Fmetodologias-ativas-parte-ix-rotacao-por-estacoes%2F&sa=D&sntz=1&usg=AOvVaw0x9jq9S0X0zf_GPups9BAf" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='underline text-blue-700 hover:text-purple-900'>Metodologias ativas: rotação por estações.

                        </a>
                      </p>

                      <p className="text-sm text-gray-600">
                        <a 
                          href="https://www.google.com/url?q=https%3A%2F%2Fnova-escola-producao.s3.amazonaws.com%2Fa8hCUhYqmhNb8hbmYzHy5qSWgnXgVgpptaPzzbFMqRWdYtsNcFvUUsjXgJYF%2Finfo-rotacoesporaprendizagem.png&sa=D&sntz=1&usg=AOvVaw1bpwJX59v4qsOpwCOg_88n" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='underline text-blue-700 hover:text-purple-900'>O que é rotação por estações de aprendizagem e como ela pode transformar sua sala de aula.

                        </a>
                      </p>
                      
                    
                    </div>
                    
                  </div>
                </div>

                

               
                
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default RecCards;

