import React from 'react'
import NavBar from '../components/NavBar'
import './Home.css'
import FilteredList from '../components/FilteredList'
import Filtre from '../components/Filtre'
const Home = () => {
  return (
    <div className='Home'>
      <NavBar />
      <Filtre />
      <FilteredList />

    </div>
  )
}

export default Home