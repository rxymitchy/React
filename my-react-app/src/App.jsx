import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import UserCard from './UserCard';
import Counter from './Counter';
import NameInput from './NameInput';
import Profile from '../Profile';
import FetchData from './FetchData';

function App() {
  const name = "Mitchelle";

  return (
    <>
    <FetchData/>
    <UserCard name="Mitchelle" email="mitch@gmail.com" />
    <Counter />
    <NameInput />
    <Profile />
    <Header />
    <p>HellO Guys! Welcome to my Page</p>
    <Footer />
    <UserCard name="PLP" email="plp@gmail.com" />
    </>
  )
}

export default App