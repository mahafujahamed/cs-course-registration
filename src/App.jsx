

import './App.css'
import CartHistory from './CartHistory/CartHistory'
import CourseCard from './CourseCard/CourseCard'
import Header from './Header/Header'

function App() {


  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className='flex'>
        <div className='basis-4/5'>
          <CourseCard></CourseCard>
        </div>
        <div>
          <CartHistory></CartHistory>
        </div>
      </div>
    </>
  )
}

export default App
