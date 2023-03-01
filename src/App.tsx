import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Chart from './components/Chart'
import Date from './components/Date'
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
            <Route path={'/chart'} element={<Chart/>}/>
            <Route path={'/date'} element={<Date />}/>
            {/* <Game /> */}

            <Route path={'*'} element={<h1 className='mt-20'>404</h1>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App