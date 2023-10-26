import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/providers/modal-provider'
import prismadb from '@/lib/prismadb'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-commerce Dashboard',
  description: 'E-commerce Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const store = prismadb.store

  return (
    <ClerkProvider>
       <html lang="en">
         <body className={inter.className}>
              <ModalProvider/>
              {children}
          </body>
      </html>
    </ClerkProvider>
   
  )
}
