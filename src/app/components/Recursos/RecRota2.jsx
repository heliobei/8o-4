import React from 'react'

function RecRota2() {
    return (
        <div className="relative w-full">
          {/* Camada com gradiente e opacidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-focus opacity-40"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('images/teachs_cool.jpg')",
            }}
          ></div>
    
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-focus opacity-70"></div>
    
          {/* Conteúdo sobreposto */}
          <div className="relative z-10 text-white text-center py-20 max-w-3xl mx-auto">
            <div className='border-white border rounded-xl p-4'>
                <h1 className="text-4xl font-bold mb-4 pt-8 px-8">Boas práticas</h1>
                <p className=" font-semibold px-8 py-4">
                Pense em desenvolver essa atividade num dia em que você tenha duas horas-aula: assim haverá mais tempo para que os grupos possam executar sua estação e passar pelas demais. Após passarem pelas estações, os estudantes devem apresentar para a sala o que conseguiram apreender.
                </p>
                <p className=" font-semibold px-8 py-4">No momento de produção da atividade, o docente deve ficar atento aos indicadores do estudo realizado em casa e chamar a atenção do estudante caso ele tenha se confundido ou deixado de abordar algum conceito. A intenção é, por meio de perguntas, estimular os estudantes a refletir sobre suas ações, conduzindo-os ao sucesso do trabalho.
                </p>
            </div>
            
          </div>
        </div>
      );
    };

export default RecRota2