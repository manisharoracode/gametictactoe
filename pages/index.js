import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import IfseCode from './IfseCode'
import About from './About'
import HomeEmoji from './HomeEmoji'
import { Container, Row } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <About />

        </Row>
          <HomeEmoji />

      </Container>

      {/* <IfseCode /> */}
    </>
  )
}
