import Head from 'next/head'
import Nav from './Nav'
export default function Layout({ children }) {
  return (
    <>
        
      <Head>
        <title>Layouts Example</title>
      </Head>
      
        <Nav/>
      <main className='px-4'>{children}
        <div className='
            flex
            justify-center
            item-center
            bg-white
            mx-auto
            w-2/4
            rounded-lg
            my-16
            p-16
        '>
            <div className='text_2xl font-medium'>{children}</div>

        </div>
      </main>
    </>
  )
}