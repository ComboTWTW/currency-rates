import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chart from './Pages/Chart'
import Date from './Pages/Date'
import Navbar from './components/Navbar'
import Convert from './Pages/Convert'


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="flex flex-col items-center min-h-screen w-full bg-cardBG">
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