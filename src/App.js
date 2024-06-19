
import Button from "./components/button";
import { Container, Content, ButtonSpace, ButtonSpaceColor, ButtonSpaceColorRed } from "./styles"
import Input from "./components/visor";
import Footer from "./components/footer";
import { useState } from "react";


function App() {

  const [currentNumber, setCurrentNumber] = useState('0')
  const [firtsNumber, setFirtsNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const addNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const clearNumber = () => {
    setCurrentNumber('0')
    setFirtsNumber('0')
    setOperation('')
  }

  const sumNumber = () => {
    if (firtsNumber === '0') {
      setFirtsNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firtsNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const subNumber = () => {
    if (firtsNumber === '0') {
      setFirtsNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(firtsNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const mulNumber = () => {
    if (firtsNumber === '0') {
      setFirtsNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('x')
    } else {
      const sum = Number(firtsNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const divisionNumber = () => {
    if (firtsNumber === '0') {
      setFirtsNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const sum = Number(firtsNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const equalNumber = () => {
    console.log(firtsNumber, operation, currentNumber);
    if (firtsNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          sumNumber();
          break;
        case '-':
          subNumber();
          break;
        case 'x':
          mulNumber();
          break;
        case '/':
          divisionNumber();
          break;
      
        default: 
          break
      }
    }
  }



  return (
    <Container>
      <Content>
        <Input value={currentNumber}></Input>

        <ButtonSpaceColor>
          <Button title={'x'} onClick={mulNumber}></Button>
          <Button title={'0'} onClick={() => addNumber('0')}></Button>
          <Button title={'/'} onClick={divisionNumber}></Button>
          <Button title={'c'} onClick={clearNumber}></Button>
        </ButtonSpaceColor>

        <ButtonSpace>
          <Button title={7} onClick={() => addNumber('7')}></Button>
          <Button title={8} onClick={() => addNumber('8')}></Button>
          <Button title={9} onClick={() => addNumber('9')}></Button>
          <Button title={'-'} onClick={subNumber}></Button>
        </ButtonSpace>

        <ButtonSpace>
          <Button title={4} onClick={() => addNumber('4')}></Button>
          <Button title={5} onClick={() => addNumber('5')}></Button>
          <Button title={6} onClick={() => addNumber('6')}></Button>
          <Button title={'+'} onClick={sumNumber}></Button>
        </ButtonSpace>

        <ButtonSpaceColor>
          <Button title={1} onClick={() => addNumber('1')}></Button>
          <Button title={2} onClick={() => addNumber('2')}></Button>
          <Button title={3} onClick={() => addNumber('3')}></Button>
          <Button title={'='} onClick={equalNumber}></Button>

        </ButtonSpaceColor>

      </Content>

      <Footer></Footer>
    </Container>

  );
}

export default App;
