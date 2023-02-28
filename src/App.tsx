import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Game from "./components/Game"
import Navbar from './components/Navbar'
import Convert from './Pages/Convert'


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="flex flex-col items-center min-h-screen w-full">
          <Routes>
            <Route path={'/'} element={<Convert />}/>
            {/* <Game /> */}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App