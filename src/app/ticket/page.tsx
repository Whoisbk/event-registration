import React from 'react'
import TicketPage from './components/ticket-page'
import { Metadata } from 'next'
import Logo from "../../../public/images/logo.png"


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Ticket - Me Time",
    description: "Ticket - Inspiring Me",
    icons: Logo.src,
    openGraph: {
      title: "Ticket",
      description: "Ticket - Inspiring Me",
      images: Logo.src,
      
    },
  }
}
function Page() {
  return (
    <TicketPage />
  )
}

export default Page