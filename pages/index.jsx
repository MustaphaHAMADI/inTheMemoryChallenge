import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans ">
      <Head>
        <title>In the Memory dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex w-full flex-1 flex-col  p-12 ">
        <h2 className="text-2xl font-bold uppercase tracking-wide">
          DashBoard
        </h2>
        <div className="mt-4 flex justify-between gap-3">
          <Card color="green" />
          <Card color="blue" />
          <Card color="orange" />
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t bg-gray-200">
        <a
          className="flex items-center justify-center gap-2 "
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
