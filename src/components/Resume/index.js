import React from 'react'
import ResumeItem from '../ResumeItem'
import * as C from './styles'
import { 
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from 'react-icons/fa'

const Resume = () => {
  return (
    <>
        <C.Container>
          <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value='1000'></ResumeItem>
          <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value='400'></ResumeItem>
          <ResumeItem title="Total" Icon={FaDollarSign} value='600'></ResumeItem>
        </C.Container>
    </>

  )
}

export default Resume