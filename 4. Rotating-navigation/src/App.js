import { useState } from "react";
import { Container, ContainerTrasero, DivFixed , Button, CirculoFixed, Navbar, GlobalStyle} from "./styles";


function App() {
  const [rotar, setRotar] = useState(false);

  const girar = ()=>{
    if(rotar)setRotar(false);
    else setRotar(true)
    }

  return (
    <ContainerTrasero>
      <GlobalStyle></GlobalStyle>
      <Container rotar={rotar}>
        <div>
        <h1>Mí bbtchitito</h1>
        <h5>Matheitison</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.</p>
        <h3>Mi Gatito</h3>
        <img src='./assets/darwin.jpg'/>
        <p> ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?</p>
        </div>
      </Container>

     <CirculoFixed></CirculoFixed>
      <DivFixed rotar={rotar}>
        <Button bajo onClick={girar}><i class="fa-solid fa-xmark"></i></Button>
        <Button alto onClick={girar}><i class="fa-solid fa-bars"></i></Button>
      </DivFixed>
      <Navbar appear = {rotar}>
      <i class="fa-solid fa-house"></i><p>
          Home
        </p><br/><br/><br/>
        <i class="fa-solid fa-user"></i><p>
          Contacto
        </p><br/><br/><br/>
        <i class="fa-solid fa-envelope"></i><p>
          Sobre
        </p>
      </Navbar>
    </ContainerTrasero>
  );
}

export default App;
