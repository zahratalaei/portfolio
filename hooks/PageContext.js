const { createContext, useState } = require("react");

export const PageContext = createContext()
export const PageContextProvider = ({children}) =>{
     const [selectedPage, setSelectedPage] = useState('aboutme')

     return(
          <PageContext.Provider value={{selectedPage,setSelectedPage}}>
               {children}
          </PageContext.Provider>
     )
}
