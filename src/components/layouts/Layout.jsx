

const Layout = ({children}) => {
    return (
      <>
        <Navbar/>
          <div>
            {children}
          </div>
        <Footer/>
      </>
    )
  }
  
  export default Layout;