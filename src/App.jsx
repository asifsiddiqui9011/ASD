
import './App.css'
import Games from './Components/Games/Games'
import PlayerForm from './Components/PlayerForm/PlayerForm'
import Home from './Pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
import PlayersPage from './Pages/PlayersPage/PlayersPage'
import ReportsPage from './Pages/ReportsPage/ReportsPage'
function App() {
  
  return (
    <>
    <Routes>
      <Route
      path='/'
      element={<Home/>}
      />
      <Route
      path='/play/:id'
      element={<PlayerForm/>}
      />
      <Route
      path='/players'
      element={<PlayersPage/>}
      />
      <Route
      path='/reports'
      element={<ReportsPage/>}
      />
    </Routes>
    
      
    </>
  )
}

export default App
