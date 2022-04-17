import styled from '@emotion/styled'


const Texto = styled.div`
background-color: #b7322c;
color: #FFF;
padding: 15px;
font-size: 20px;
text-transform: inherit;
font-family: Arial, Helvetica, sans-serif;
border-bottom-right-radius: 40px;
border-top-left-radius: 40px;
text-align: center;

`



const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error