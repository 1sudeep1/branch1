import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
// import AuthorProfile from './AuthorProfile'
import Authors from './Pages/Authors'
import SingleAuthor from './Pages/SingleAuthor'
import Contact from './Pages/Contact'
import Membership from './Pages/Membership'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Subscribe from './Pages/Subscribe'
import Posts from './Pages/Posts'
import Dashboard from './Pages/Dashboard'
import NewPost from './Pages/NewPost'
import AllPost from './Pages/AllPost'
import Sidebar from './Component/Sidebar'
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/author" element={<Authors />} />
        <Route path="/author/:aid" element={<SingleAuthor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/post/:pid" element={<Posts />} />
      </Routes>

      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/new-post" element={<NewPost />} />
          <Route path="/dashboard/all-post" element={<AllPost />} />
        </Routes>
      </Sidebar>
      <Footer />
    </div>
  )
}

export default App
