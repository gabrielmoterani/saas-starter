import React from 'react'

export default function Sidebar() {
  return (
    <div className='drawer drawer-open w-fit'>
      <ul className='menu p-4 w-[300px] min-h-full bg-base-100 text-base-content !m-0'>
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  )
}
