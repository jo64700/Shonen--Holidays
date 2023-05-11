import React from 'react'
import NavBar from '../components/NavBar'
import './Home.css'
import FilteredList from '../components/FilteredList'
const Home = () => {
  return (
    <div className='Home'>
      <NavBar />
      <FilteredList />

    </div>
  )
}

export default Home