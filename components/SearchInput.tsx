"use client"
import qs from 'query-string'
import React, { useEffect, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import { useRouter } from 'next/navigation'
import Input from './Input'

const SearchInput = () => {
  const router = useRouter()
  const [value, setValue] = useState<string>("")
  const debounceValue = useDebounce<string>(value, 500)

  useEffect(() => {
    const query =  {
      title: debounceValue
    }
    const url = qs.stringifyUrl({
      url: '/search',
      query
    })
    router.push(url)
  },[debounceValue, router])

  return (
    <Input 
      placeholder="What do you want to list to ?" 
      value={value} 
      onChange={(event) => setValue(event.target.value)}
    />
  )
}

export default SearchInput
