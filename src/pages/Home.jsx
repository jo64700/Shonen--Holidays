import React from 'react'
import NavBar from '../components/NavBar'
import './Home.css'
import FilteredList from '../components/FilteredList'

import FiltreContainer from '../components/FiltreContainer'
const Home = () => {
  return (
    <div className='Home'>
      <NavBar />
      <FiltreContainer />
      <FilteredList />

    </div>
  )
}

export default Home