import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Content } from '../pages/Content'
import { EndSubscription } from '../pages/EndSubscription'
import { Register } from '../pages/Register'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/enroll" element={<Register />} />
      <Route path="/finished" element={<EndSubscription />} />
    </Routes>
  )
}
