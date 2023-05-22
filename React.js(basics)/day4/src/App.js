 import {Routes,Route} from 'react-router-dom'
 import Products from"./components/Products"
 import PageNotFound from './pages/PageNotFound'
import Tabss from './components/tabs'
 const App = () => {

 
  return (
    <><Routes>
    <Route path='/' element={ <Products /> }/>
    <Route path='/tabs' element={ <Tabss /> }/>
    <Route path="*" element={<PageNotFound/>}/>
   </Routes>       
  </>
  )
}

export default App