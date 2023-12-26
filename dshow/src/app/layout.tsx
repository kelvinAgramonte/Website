import type { Metadata } from 'next'
import './css/globals.css'
import "slick-carousel/slick/slick.css";
import Header from '@/components/Header'
import Layout from '@/components/Layout'

export const metadata: Metadata = {
  title: {
    template: "shopping_mart",
    default: "Shopping Mart - A for all!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-bodyFont w-full bg-main-bg text-darkText'>
        <Layout>
          <Header />
          {children}
        </Layout>
      </body>
    </html>
  )
}
