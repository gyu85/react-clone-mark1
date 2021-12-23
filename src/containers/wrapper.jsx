import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainContainer from './main';

const Wrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact elemet={<MainContainer />} />

        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Wrapper;
