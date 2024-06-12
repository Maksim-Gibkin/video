import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import VideoPage from './pages/VideoListPage/VideoPage'
import InfoPage from './pages/InfoPage/InfoPage'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<VideoPage />} />
      <Route path="/item/:id" element={<InfoPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
