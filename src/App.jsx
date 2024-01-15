import './App.css'
import Card from './components/Card'
import vehicles from './data/vehicle'
function App() {

  const vehicleList=vehicles.map(v =>{
  return <Card   title={v.name} description={v.description}/>
})

return (
    <div className='App'> 
    <h1>Hola react</h1>
    <div className='container'>
    {vehicleList}
    </div>
    </div>
  )
}

export default App
