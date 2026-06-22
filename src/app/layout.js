import './globals.css'

export const metadata = {
  title: 'Your Hotel Name',
  description: 'Experience the view',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}