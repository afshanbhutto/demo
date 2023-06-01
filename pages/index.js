import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Hero from '@/components/Hero';
import AboutInfo from '@/components/AboutInfo';
import EntryTickets from '@/components/EntryTickets';
import MySlider from '@/components/MySlider';
import LastSection from '@/components/LastSection';

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
  <div>
    <Head>
      <title>ZIMO Group task01</title>
      {/* for slider */}
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    <Hero/>
    <AboutInfo/>
    <EntryTickets/>
    <MySlider/>
    <LastSection/>
  </div>  
  )
}

export default Home;
