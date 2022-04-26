import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

export const PreView = () => {
  return (
    <SearchBar Medicine={Medicine} Keyword={Keyword} updateField={updateField}/>
  )
}
