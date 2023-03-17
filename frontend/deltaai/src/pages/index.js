import { Inter } from 'next/font/google'
import Header from './components/Header'
import Nav from './components/Nav'
// import Home from './mainPages/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>    
      <Nav/>  
      <main className="h-screen pt-24">
        {/* <Home/> */}
      </main>
        
    </>
  )
}
