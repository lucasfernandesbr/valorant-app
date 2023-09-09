import Image from 'next/image'

import {} from '@phosphor-icons/react'

export default function Menu() {
  return (
    <div className="h-screen flex flex-col">
      <Image src="/valorant-logo.png" alt="Valorant menu logo" />

      <nav>
        <a href="/teams"></a>

        <a href="/group-stage"></a>

        <a href="playoffs"></a>
      </nav>
    </div>
  )
}
