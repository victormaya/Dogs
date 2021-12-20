import React from 'react';
import { Route, Routes } from 'react-router';
import Feed from '../Feed/Feed';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

function User() {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='postar' end element={<UserPhotoPost />} />
        <Route path='estatisticas' end element={<UserStats />} />
      </Routes>
    </section>
  );
}

export default User;
