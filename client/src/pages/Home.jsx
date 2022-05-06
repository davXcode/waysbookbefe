import React from 'react';
import CardBook from '../components/cards/CardBook';
import CardPromo from '../components/cards/CardPromo';
import Navbar from '../components/navbar/Navbar';

export default function Home() {
  return (
    <div className="bg-home">
      <div className="fixed-top">
        <Navbar />
      </div>
      <div className="" style={{ height: '200px' }}></div>
      <div className="home-header container">
        <h1 className=" text-center fw-normal fs-1">
          With us, you can shop online & help save your high street at the same
          time
        </h1>
      </div>
      <div className="" style={{ height: '150px' }}></div>
      <div className="d-flex overflow-auto">
        <CardPromo />
        <CardPromo />
        <CardPromo />
        <CardPromo />
      </div>
      <div className="" style={{ height: '50px' }}></div>
      <div className="container">
        <h3>List Book</h3>
      </div>
      <div className="" style={{ height: '30px' }}></div>
      <div className="container">
        <div className="row ">
          <CardBook />
          <CardBook />
          <CardBook />
          <CardBook />
          <CardBook />
          <CardBook />
          <CardBook />
        </div>
      </div>
    </div>
  );
}
