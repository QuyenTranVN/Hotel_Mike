/** @format */

import { Menu } from '@headlessui/react'
import React, { useContext } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { RoomContext } from '../context/RoomContext'

const lis = [
  { name: '1 kid' },
  { name: '2 kids' },
  { name: '3 kids' },
  { name: '4 kids' },
  { name: '5 kids' },
]
const KidsDropdown = () => {
  const { kids, setKids } = useContext(RoomContext)
  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
        {kids === '0 Kids' ? 'No kids' : kids}
        <BsChevronDown className='text-base text-accent-hover' />
      </Menu.Button>
      <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40'>
        {lis.map((li, index) => {
          return (
            <Menu.Item
              onClick={() => setKids(li.name)}
              as='li'
              key={index}
              className='border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center item-center cursor-pointer items-center'
            >
              {li.name}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default KidsDropdown
