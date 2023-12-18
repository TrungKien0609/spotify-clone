'use client'
import { Song } from '@/types'
import SongItem from '@/components/SongItem'
import React from 'react'

interface PageContentProp {
  songs: Song[]
}

const PageContent:React.FC<PageContentProp> = ({ songs }) => {
  if(!songs.length) {
    return (<div className='mt-4 text-neutral-400'>
      No songs available
    </div>)
  }
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8
    gap-4 mt-4
    '>
      {songs.map((item) => (<SongItem key="{item.id}" data={item} onClick={() => {}}/>))}
    </div>
  )
}

export default PageContent
