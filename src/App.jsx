
import CartHistory from './CartHistory/CartHistory'
import CourseList from './CourseList/CourseList'
import Header from './Header/Header'

function App() {


  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className='flex'>
        <div className='basis-4/5'>
         <CourseList></CourseList>
        </div>
        <div>
          <CartHistory></CartHistory>
        </div>
      </div>
    </>
  )
}

export default App
