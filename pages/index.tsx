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
      <comp.comp_2 />
      <comp.comp_3 />
      {/* https://fintelegram.com/ico-more-than-1-6-billion-scammed/ */}

    </>

  )
}

export default Home
