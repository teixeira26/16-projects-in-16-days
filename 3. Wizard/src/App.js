import { useState } from 'react';
import {Number, Button, Line, Container} from './styledComponents.js'

function App() {
  const [page,setPage] = useState(1);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false)
  const nextPage = ()=>{
    console.log(page)
    if(page === 3){
      setDisabledNext(true)
      setPage(page+1)
    }
    else if(page < 4) {
      setDisabledNext(false)
      setPage(page+1)
      setDisabledPrev(false)
    }
    else setDisabledNext(true)
  }
  const prevPage =()=>{
    console.log(page)
    if(page > 1) {
      setPage(page-1)
      setDisabledPrev(false)
      setDisabledNext(false)
      if(page === 2) setDisabledPrev(true)
    }

  }
  return (
    <div className="App">
      <Container direction={'column'} height={'100vh'} background='#F6F7FB'>
        <Container>
          <Number value = {1} active={page>=1}>1</Number>
          <Line active={page>1}></Line>
          <Number value = {2} active={page>=2}>2</Number>
          <Line active={page>2}></Line>
          <Number value = {3} active={page>=3}>3</Number>
          <Line active={page>3}></Line>
          <Number value = {4} active={page>=4}>4</Number>
        </Container>
        <Container>
          <Button onClick={prevPage} disabled={disabledPrev}>Prev</Button>
          <Button onClick={nextPage} disabled={disabledNext} >Next</Button>
        </Container>
      </Container>
    </div>
  );
}

export default App;
