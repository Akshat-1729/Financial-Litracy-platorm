import { LeftMenu } from '@/components/leftMenu'
import React from 'react'

const page = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile"/>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[80%]">
        <p>hi</p>
        
      </div>
      


    </div>
  )
}
export default page
