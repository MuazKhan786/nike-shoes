import { Footer } from './sections'
import Nav from './components/Nav';
import Home from './Pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginSignup from './Pages/LoginSignup';





const App = () => (
  <main className="relative">
   
    < Nav />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Login-SignUp' element={<LoginSignup />} />
   </Routes>
   
    <section className="bg-black padding-x padding-t pb-8">
      < Footer />
    </section>
    
   
  </main>

)

export default App;