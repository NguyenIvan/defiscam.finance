import type { NextPage } from 'next'
import Head from 'next/head'
import * as comp from '../components/rows'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Defi Scam Buster</title>
        <meta name="description" content="We bust all scams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <comp.header />
      <comp.comp_1 />

    </>

  )
}

export default Home
