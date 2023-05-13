import { PageContext } from '@/hooks/PageContext'
import React, { useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const LinkNav = ({page}) => {
     const{setSelectedPage, selectedPage} = useContext(PageContext)
     const lowerCasePage = page.toLowerCase().replace(/ /g,'')
  return (
    <AnchorLink
     className={`${selectedPage === lowerCasePage ? "text-red-500" : ""} transition duration-500 hover:text-red-900`}
     href={`#${lowerCasePage}`}
     onClick={()=>setSelectedPage(lowerCasePage)}
    >
     {page}
    </AnchorLink>
  )
}

export default LinkNav