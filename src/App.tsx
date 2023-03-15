import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Date from './Pages/Date'
import Navbar from './components/Navbar'
import Convert from './Pages/Convert'

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
    <Router basename="/currency-rates">
      <div>
        <Navbar />
        <div className="flex flex-col items-center min-h-screen w-full bg-cardBG">
          <Routes>
            <Route path={'/currency-rates'} element={<Convert />}/>
            <Route path={'/currency-rates/date'} element={<Date />}/>
            
            <Route path={'*'} element={<h1 className='text-black mt-24 text-center font-bold text-3xl'>Page not Found</h1>}/>
          </Routes>
        </div>
      </div>
    </Router>
    </QueryClientProvider>
  )
}

export default App