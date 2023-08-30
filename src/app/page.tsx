import { CC } from './client'

export default async function Home() {
  console.log("when am i run?")
  return (
    <main>
      Hello World
      <CC />
    </main>
  )
}

export const dynamic = "error"