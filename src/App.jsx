// import Home from './pages/Home'
// import Services from './pages/Services'
// import Contact from './pages/Contact'

import Header from './Header.jsx';
// import Card from './Card.jsx';
import Footer from './Footer.jsx';
import Cards from './Cards.jsx';
import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  
  // Example 4
    // return(
    //   <>
    //     <h1>My Website Pages</h1>
    //     <BrowserRouter>


    //     <header>
    //       <ul>
    //         <li> <Link to="/">Home</Link></li>
    //         <li> <Link to="/Services">Services</Link></li>
    //         <li> <Link to="/Contact">Contact</Link></li>
    //       </ul>
    //     </header>

    //       <Routes>
    //         <Route path='/' element={<Home />}></Route>
    //         <Route path='/Services' element={<Services />}></Route>
    //         <Route path='/Contact' element={<Contact />}></Route>
    //       </Routes>
          
    //     </BrowserRouter>
    //   </>
    // )

  // Example 3
  return (
    <>
      <Header title="Card Details" />
      <Cards />
      <Footer />
    </>
    // Heirarchy
    // Main --> App --> Cards --> Card
  )
  
  // Example 2
  // const cardValues = [
  //   {id:1,
  //     picture:"https://via.placeholder.com/150",
  //     title:"Card Title 1",
  //     detail:"Card Details 1"},
  //   {id:2,
  //     picture:"https://via.placeholder.com/150",
  //     title:"Card Title 2",
  //     detail:"Card Details 2"},
  //   {id:3,
  //     picture:"https://via.placeholder.com/150",
  //     title:"Card Title 2",
  //     detail:"Card Details 2"}
  // ]

  // return (

  //   cardValues.map( value => {
  //       return (
  //           <Card key={value.key} picture={value.picture} title={value.title} detail={value.detail}
  //           />
  //       )    
  //   })
  // )

  // Example 1
  // return (
  //   <>
  //     <body className="body">
  //       <Header title="Main Page"/>

  //       <Card picture="https://via.placeholder.com/150" title="Card Title 1" detail="Card Details 1" />
  //       <Card picture="https://via.placeholder.com/150" title="Card Title 2" detail="Card Details 2" />
  //       <Card picture="https://via.placeholder.com/150" title="Card Title 3" detail="Card Details 3" />

  //       <Footer />
  //     </body>
      
  //   </>
  // )
  
}

export default App