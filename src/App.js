
import Button from "./components/button";
import { Container, Content, ButtonSpace, OperationContainer, InputSpace} from "./styles"
import Input from "./components/visor";
import Footer from "./components/footer";
function App() {
  return (
    <Container>
      <Content>
        <Input></Input>
        <InputSpace>

          <ButtonSpace>
            <Button title={7}></Button>
            <Button title={8}></Button>
            <Button title={9}></Button>
            <Button title={4}></Button>
            <Button title={5}></Button>
            <Button title={6}></Button>
            <Button title={1}></Button>
            <Button title={2}></Button>
            <Button title={3}></Button>
          </ButtonSpace>

          <OperationContainer>
            <Button title={'-'}></Button>
            <Button title={'+'}></Button>
            <Button title={'='}></Button>
          </OperationContainer>

        </InputSpace>
      
      </Content>

      <Footer></Footer>
    </Container>

  );
}

export default App;
