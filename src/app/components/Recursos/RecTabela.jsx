import React from 'react';

const GridCell = ({ customStyle, children }) => (
  <div className={` rounded-xl p-4 ${customStyle} `}>
    {children}
  </div>
);

const RecTabela = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-3 gap-4">
        
        <GridCell customStyle="text-red-500">
        </GridCell>

        <GridCell customStyle="text-primary bg-green-100">
          <h1 className="text-xl font-bold text-center">Sala de Aula</h1>
          
        </GridCell>

        <GridCell customStyle="text-primary bg-green-100">
          <h1 className="text-xl font-bold text-center">Outros Espaços</h1>
        </GridCell>
        
        <GridCell customStyle="text-primary flex items-center">  
        <h1 className="text-xl font-bold text-center">Modelo Tradicional</h1>
        </GridCell>
        
        <GridCell customStyle="text-slate-700 text-center py-2 bg-slate-100">
          <p className='py-2 text-sm'>• Transmissão de informação e conhecimento.</p>
            <p className='py-2 text-sm'>• Educador ministrante.</p>
            <p className='py-2 text-sm'>• Estudante passivo.</p>
        </GridCell>
        <GridCell customStyle="py-2 text-slate-700 text-center bg-slate-100">
          <p className='py-2 text-sm'>• Exercícios.</p>
          <p className='py-2 text-sm'>• Projetos.</p>
          <p className='py-2 text-sm'>• Trabalhos.</p>
          <p className='py-2 text-sm'>• Solução de problemas.</p>
        </GridCell>
        
        <GridCell customStyle="text-primary flex items-center"> 
        <h1 className="text-xl font-bold text-center ">Sala de Aula Invertida</h1>
        </GridCell>
        
        <GridCell customStyle="text-slate-700 text-center bg-slate-100">
          <p className='py-2 text-sm'>• Debates.</p>
          <p className='py-2 text-sm'>• Projetos.</p>
          <p className='py-2 text-sm'>• Vivências.</p>
          <p className='py-2 text-sm'>• Apresentação de seminários com o uso da informação.</p>
          <p className='py-2 text-sm'>• Uso de linguagens corporais (teatro, dança, jogos cooperativos, etc.).</p>
          <p className='py-2 text-sm'>• Simulação.</p>
          <p className='py-2 text-sm'>• Trabalhos em grupos.</p>
          <p className='py-2 text-sm'>• Solução de problemas.</p>
          <p className='py-2 text-sm'>• Educador mediador.</p>
          <p className='py-2 text-sm'>• Estudante ativo.</p>
          
        </GridCell>
        <GridCell customStyle="text-slate-700 text-center bg-slate-100">
          <p className='py-2 text-sm'>• Leituras.</p>
          <p className='py-2 text-sm'>• Vídeos.</p>
          <p className='py-2 text-sm'>• Pesquisas.</p>
          <p className='py-2 text-sm'>• Busca de materiais alternativos.</p>
        </GridCell>
        
      </div>
    </div>
  );
};

export default RecTabela;

