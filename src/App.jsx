import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Content from './pages/Content'
import Users from './pages/Users'
import UserView from './pages/UserView'
import Faqs from './pages/Faqs'
import ContactUs from './pages/ContactUs'
import {  ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import EditUser from './pages/UserEdit'
import DataInsights from './pages/DataInsights'
import Subscriptions from './pages/Subscriptions'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />} >
          <Route index element={<Home />} />
          <Route path='faqs' element={<Faqs />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='content' element={<Content />} />
          <Route path='users' element={<Users />} />
          <Route path='subscriptions' element={<Subscriptions />} />
          <Route path='data-insights' element={<DataInsights  />} />
          <Route path='users/view' element={<UserView />} />
          <Route path='users/edit' element={<EditUser />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  )
}

export default App
