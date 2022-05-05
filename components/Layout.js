import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
       {/** <Footer/>*/} 
       <div
       
       ></div>
    </>
  )
}

export default Layout