/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Header from './assets/components/BaiTapThucHanhLayout/Header'
import Body from './assets/components/BaiTapThucHanhLayout/Body'
import Footer from './assets/components/BaiTapThucHanhLayout/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
