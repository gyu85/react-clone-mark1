import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainContainer from './main';

const Wrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<MainContainer />} />

        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Wrapper;
