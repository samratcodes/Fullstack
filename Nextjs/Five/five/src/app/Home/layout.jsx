import Link from 'next/link'
import React from 'react'

const layout = ({children , modal}) => {
  return (
    <div>
      <Link href="/Home">Home</Link>
      {modal}
      {children}
    </div>
  )
}

export default layout
