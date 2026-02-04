import './App.css'
import Banner from './components/Banner/Banner'
import Best from './components/Best/Best'
import Category from './components/Category/Category'
import Explore from './components/Explore/Explore'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import NewArrival from './components/NewArrival/NewArrival'

function App() {
  return (
    <>
      <Banner></Banner>
      <NewArrival></NewArrival>
      <Category></Category>
      <Best></Best>
      <Explore></Explore>
    </>
  )
}

export default App
