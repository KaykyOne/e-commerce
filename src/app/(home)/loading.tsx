import Skeleton from '@/components/skeleton'
import React from 'react'

export default function Loading() {
  return (
    <div className="grid grid-cols-9 grid-rows-6 h-[860px] gap-6">
      <Skeleton className='col-span-6 row-span-6'/>
      <Skeleton className='col-span-3 row-span-3'/>
      <Skeleton className='col-span-3 row-span-3'/>
    </div>
  )
}
