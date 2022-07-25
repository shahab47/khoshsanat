import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='h-14 bg-gradient-to-r from-cyan-500 to-blue-500'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}