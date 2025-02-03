
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
  margin-right: 40px;   
  width: 25px;
`
const Icones = styled.li`
   display: flex;
   align-items: center;
`
const icones = [perfil, sacola]

function IconesHeader () {
    return (
        <Icones>
            {icones.map( (icones) => (
              <Icone>
                <img src={icones}></img>
              </Icone>
            ))}

          </Icones>
    )
}

export default IconesHeader