import styled from "@emotion/styled";

const Resultados = styled.div`
color: #FFF;
font-family: Arial, Helvetica, sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top: 30px;
`

const Text = styled.p`
font-size: 18px;

span{
    font-weight: 700;
    color: #e8aa14;
}
`
const Precio = styled.p`
font-size: 24px;

span{
    font-weight: 700;
    color:#80b918;
}

`
const Imagen = styled.img`
display: block;
width: 120px;
`


const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
  
  <Resultados>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto"/>
     <div>
     <Precio>El precio es de: <span>{PRICE}</span></Precio>
      <Text>Precio más alto del día: <span>{ HIGHDAY}</span></Text>
      <Text>Precio más bajo del día: <span>{LOWDAY}</span></Text>
      <Text>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Text>
      <Text>Última actualización: <span>{LASTUPDATE}</span></Text>
     </div>
  </Resultados>
  
  )
};

export default Resultado;
