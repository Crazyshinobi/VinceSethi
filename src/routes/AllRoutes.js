import { Routes, Route } from "react-router-dom";

import { HomePage, About, ContactUs, PrivacyPolicy, PageNotFound } from '../pages';

export const AllRoutes = () => {
  return (
    <div>
       <Routes>
           <Route path="/" element={<HomePage />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/contact" element={<ContactUs />}/>
           <Route path="/privacy" element={<PrivacyPolicy />}/>
           <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </div>
  )
}

 
