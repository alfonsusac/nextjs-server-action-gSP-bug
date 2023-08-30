import { CC } from "../client"

export function generateStaticParams(){ 
  return []
}

export default async function Page() {
  return (
    <main>
      Hello World
      <CC />
    </main>
  )
}

export const dynamic = 'error'