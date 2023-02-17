import React from 'react'
import {Routes, Route} from "react-router-dom"
import {AdminLayout} from "../layouts"
import { Auth, Users, Taxi, Menu} from "../pages/admin"
import {useAuth} from "../hooks"



export  function AdminRouter() {

  const {user} = useAuth();

  const loadLayout = (Layout,Page)=>{
    return <Layout>
      <Page/>
    </Layout>
  }
  return (
    <Routes>
      {
        !user? (
          <Route path="/admin/*" element= {<Auth/>}/>

        ) :(
          <>
          {
            ["/admin","/admin/taxis"].map((path)=>(
              <Route 
              key={path}
              path={path} 
              element= {loadLayout(AdminLayout,Taxi)}/>

            ))
          }
          
          <Route path="/admin/users" element= {loadLayout(AdminLayout,Users)}/>
          <Route path="/admin/menu" element= {loadLayout(AdminLayout,Menu)}/>
          </>       

        )
      }       
        
    </Routes>
  )
}
