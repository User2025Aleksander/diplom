import React from 'react'
import { Header } from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom';
import { SvodContainer } from './Components/SVOD/SvodContainer.jsx';
import { OmsContainer } from './Components/OMS/OmsContainer.jsx';
import { DmsContainer } from './Components/DMS/DmsContainer.jsx';
import { OrgContainer } from './Components/ORG/OrgContainer.jsx';
import { FlContainer } from './Components/FL/FlContainer.jsx';
import { GzContainer } from './Components/GZ/GzContainer.jsx';
import { VmpContainer } from './Components/VMP/VmpContainer.jsx';
import { SportContainer } from './Components/SPORT/SportContainer.jsx';

export const App = () => {

  // ДЗ
  //  1.Дозаполнить Базу данных
  // - case_vmp
  

// 2. Добавить в postgress ФИО 2-х
//  Авторизация (watcher) - будет показываться все страницы
// Авторизация (administrator) - будет возможность заполнять ПЛАНЫ выполнения

// login
// Password
  
  
  
  
  
  // Читать 
  // CORS
  // express 
  // Routers
  //   Route
  // LocalStorage

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<SvodContainer />} />
        <Route path='oms' element={<OmsContainer />} />
        <Route path='/dms' element={<DmsContainer />} />
        <Route path='/org' element={<OrgContainer />} />
        <Route path='/fl' element={<FlContainer />} />
        <Route path='/gz' element={<GzContainer />} />
        <Route path='/vmp' element={<VmpContainer />} />
        <Route path='/sport' element={<SportContainer />} />
        <Route path='*' element={"404"} />
      </Routes>
    </>
  )
}