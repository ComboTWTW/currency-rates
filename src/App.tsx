import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Date from './Pages/Date'
import Navbar from './components/Navbar'
import Convert from './Pages/Convert'
import { QueryClient, QueryClientProvider } from 'react-query'

const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        enabled: false,
        

      },

    },
  })

  return (
    <QueryClientProvider client={queryClient} >
    <Router>
      <div>
        <Navbar />
        <div className="flex flex-col items-center min-h-screen w-full bg-cardBG">
          <Routes>
            <Route path={'/'} element={<Convert />}/>
            <Route path={'/date'} element={<Date />}/>
            {/* <Game /> */}

            <Route path={'*'} element={<h1 className='mt-20'>404</h1>}/>
          </Routes>
        </div>
      </div>
    </Router>
    </QueryClientProvider>
  )
}

export default App