import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//------ Home Page ------//
import Flower from './components/Flower';

//------ Seller Page ------//



function App() {

  return (
    <>
       <Router>
        <Routes>

          {/* --------- Home Page ---------- */}
          <Route path="/flower" Component={Flower} />
        </Routes>
      </Router>
    </>
  )
}

export default App
