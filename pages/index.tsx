import type { NextPage } from 'next'
import '../styles/Home.module.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import Content from '../components/content/content'
import Title from '../components/title/title'
import { createContext, useState } from 'react'
import { ContextWrapper } from '../hooks/context'

const Home: NextPage = () => {
  const [Them, setThem] = useState('light')
  return (
    <ContextWrapper>
      <div className='content'>
        <Title />
        <Content />
      </div>
    </ContextWrapper>
  )
}
export default Home
