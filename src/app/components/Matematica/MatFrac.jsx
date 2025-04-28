import React from 'react'
import ReactPlayer from 'react-player'

function MatFrac() {
    return (
        <div className=''>
            <div className='max-w-7xl mx-auto m-4'>
                <div className='mx-auto p-4'>
                    <h1 className='font-bold text-3xl py-4 text-center text-slate-700'>Pesquisa censitária, planejamento de pesquisa, coleta e organização de dados </h1>
                    <p className='text-slate-700 py-4'>Nos vídeos abaixo, o professor Jorge Abreu fala um pouco sobre pesquisa censitária e pesquisa amostral e explica como fazer coleta e organização de dados.</p>
                </div>
                
                <div className="max-w-screen-xl mx-auto p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
                    
                    <div className="w-full lg:w-1/2 pb-4">
                    <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                        <ReactPlayer url='https://youtu.be/bl9i4fSwkaU' width="100%" />
                    </div>
                    
                    
                    </div>

                    <div className="w-full lg:w-1/2">
                    <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                        <ReactPlayer url='https://youtu.be/S_znN1HMxY0' width="100%" />
                    </div>
                    
                    
                    </div>

                </div>

        </div>
        </div>
      )
    }

export default MatFrac