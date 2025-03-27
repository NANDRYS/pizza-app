
import Button from './components/Button/Button'
import Input from './components/Input/Input';

function App() {

  return (
    <>
        <Button onClick={()=>{console.log();
        }} className="">кнопка</Button>
             <Button appearence="big" onClick={()=>{console.log();
        }} className="" >кнопка</Button>
        <Input  placeholder='Email'  />
    </>
  )
}

export default App
