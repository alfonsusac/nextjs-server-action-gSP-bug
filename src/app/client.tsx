'use client'

import { useEffect, useState } from "react"
import { GetNumber } from "./server"

export function CC() {
  
  const [num, setNum] = useState(0)


  useEffect(() => {
    
    GetNumber().then(
      setNum
    )

  },[])

  return <div>
    Hello Clients! <br />
    Num: {num}
  </div>
}