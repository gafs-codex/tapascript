import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import MovieApp from './Movie-app.jsx'
import ColorizerApp from './Colorize-app.jsx'
import SideApp from './SideEffect.jsx'
import MovieList from './MovieList.jsx'
import UserProfile from './UserProfile.jsx'
import Timer from './Timer.jsx'
import Storage from './Storage.jsx'

createRoot(document.getElementById('root')).render(
  // <App />
  // <MovieApp />
  // <ColorizerApp />
  // <SideApp />
  // <MovieList />
  // <UserProfile />
  // <Timer />
  <Storage />
)
