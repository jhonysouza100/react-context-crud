import { ContextWrapper } from '@/context'
import './globals.css'
import { Container } from '@/components/Container'

export const metadata = {
  title: 'React Context API',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextWrapper>
          <Container>
            {children}
          </Container>
        </ContextWrapper>
      </body>
    </html>
  )
}
