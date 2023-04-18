import Head from 'next/head'
import { Inter } from 'next/font/google';
import axios from "axios";
import ListProducts from '@/components/products/ListProducts';
import Header from '@/components/layouts/Header';


const inter = Inter({ subsets: ['latin'] })

export default function Home({ productsData }) {
  return (
    <>
      <Head>
        <title>MaXter</title>
        <meta name="description" content="Buy in MaXter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Header/>
          <ListProducts data={productsData}/>
      </main>
    </>
  )
}

//-------------------{GetData}-------------------------------

export const getStaticProps = async () => {
  
  
  const res = await axios.get(`${process.env.API_URL}/api/products`);
  return {
    props: {
      productsData: res.data,
      revalidate: 60,
    }
  }
}

{/*}
const getProducts = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/products`)
  return data;
}
*/}