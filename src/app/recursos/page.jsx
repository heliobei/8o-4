'use client'

import { Divider } from '@nextui-org/react'
import RecHero from '../components/Recursos/RecHero'
import RecCriando from '../components/Recursos/RecCriando'
import RecLembre from '../components/Recursos/RecLembre'
import RecCards from '../components/Recursos/RecCards'
import RecCordel from '../components/Recursos/RecCordel'
import RecQuizMais from '../components/Recursos/RecQuizMais'
import RecRedesDD from '../components/Recursos/RecRedesDD'
import RecSaibaMais from '../components/Recursos/RecSaibaMais'
import RecRotacao from '../components/Recursos/RecRotacao'
import RecRota2 from '../components/Recursos/RecRota2'



function Recursos() {
  return (
    <>
        
        <RecHero />
        <RecCriando />
        <RecSaibaMais />
        <RecRedesDD />
        <RecLembre />
        <RecCordel />
        <RecRotacao />
        <RecRota2 />
        <RecCards />
    </>
    
  )
}

export default Recursos