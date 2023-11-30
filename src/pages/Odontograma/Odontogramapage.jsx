import React from 'react'

import OdontogramaMain from '../../components/odontograma/OdontogramaMain'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
const Odontogramapage = () => {
  return (
    <div> 
        <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar/>
      <main className="col-span-1 lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-full overflow-y-scroll">
        <Header/>

    
        <OdontogramaMain/>
    
        </main>
    </div>
        </div>
    </div>
  )
}

export default Odontogramapage