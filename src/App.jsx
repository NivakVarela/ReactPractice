import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div className='App'> 
    <h1>Hola react</h1>
    <div className='container'>

    <Card title="titulo" description="la descripcion"/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </div>
  )
}

export default App
