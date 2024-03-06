import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
// import Development from './pages/services/DEvelopment'
import MarketingConsultancy from './pages/services/MarketingConsultancy'
import Ecommerce from './pages/services/Ecommerce'
import DesigningContent from './pages/services/DesigningContent'
import ManagedServiceBPO from './pages/services/MAnagedServiceBPO'
import DigitalMarketing from './pages/services/DigitalMarketing'
import SEO from './pages/services/digital Marketing/SEO'
import SMM from './pages/services/digital Marketing/SMM'
import LeadGeneration from './pages/services/digital Marketing/LeadGeneration'
import ContentMarketing from './pages/services/digital Marketing/ContentMarketing'
import Advertising from './pages/services/digital Marketing/Advertising'
import TermAndServices from './pages/termAndServices'
import Privacy from './pages/privacy&policy'
import WebDevelopment from './pages/services/webDevelopment'
// import SoftwareDevelopment from './pages/softwareDevelopment'
import AppDevelopment from './pages/services/appDevelopment'
import Disclaimer from './pages/disclaimer'
import GraphicDesigning from './pages/services/graphicDesigning'
import SoftwareDevelopment from './pages/services/softwareDevelopment'


const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/development' element={<Development/>}/> */}
        <Route path='/marketing-consultancy' element={<MarketingConsultancy/>}/>
        <Route path='/managed-service-BPO' element={<ManagedServiceBPO/>}/>
        <Route path='/ecommerce' element={<Ecommerce/>}/>
        <Route path='/designing-content' element={<DesigningContent/>}/>
        <Route path='/digital-marketing' element={<DigitalMarketing/>}/>
        <Route path='/seo' element={<SEO/>}/>
        <Route path='/smm' element={<SMM/>}/>
        <Route path='/termAndServices' element={<TermAndServices/>}/>
        <Route path='/lead-generation' element={<LeadGeneration/>}/>
        <Route path='/content-marketing' element={<ContentMarketing/>}/>
        <Route path='/advertising' element={<Advertising/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/web-development' element={<WebDevelopment/>}/>
        <Route path='/app-development' element={<AppDevelopment/>}/>
        <Route path='/software-development' element={<SoftwareDevelopment/>}/>
        {/* <Route path='/software-development' element={<SoftwareDevelopment/>}/> */}
        <Route path='/disclaimer' element={<Disclaimer/>}/>
        <Route path='/graphic-designing' element={<GraphicDesigning/>}/>
    </Routes>
    </>
  )
}

export default Router