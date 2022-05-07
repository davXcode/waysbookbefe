import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Rectangles from '../images/Rectangles.png';
import buys from '../images/buys.svg';
import convertRupiah from 'rupiah-format';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { API } from '../config/api';

export default function DetailBook() {
  //fetching
  let navigate = useNavigate;
  let { id } = useParams();
  const [detailBook, setDetailBook] = useState({});

  //fetch data
  let { data: product } = useQuery('productCache', async () => {
    const response = await API.get('/book/' + id);
    console.log('fetching', response);
    return setDetailBook(response.data.data.book);
  });
  //end of fetching

  return (
    <div className="bg-home">
      <Navbar />
      <div className="container">
        <div className="row align-items-center">
          <div className=" col-lg-6 d-flex justify-content-end">
            <div style={{ width: '400px', height: '577px' }}>
              <img src={Rectangles} alt="" className="h-100 w-100" />
            </div>
          </div>
          <div className="col-lg-4">
            <h1 className="fw-bolder">{detailBook.title}</h1>
            <h3 className="fw-lighter fs-4 mb-5">{detailBook.author}</h3>
            <div className="mb-4">
              <p className="fs-4 fw-bold mb-1">Publication Date</p>
              <p className="fw-lighter">{detailBook.year}</p>
            </div>
            <div className="mb-4">
              <p className="fs-4 fw-bold mb-1">Pages</p>
              <p className="fw-lighter">{detailBook.pages}</p>
            </div>
            <div className="mb-4">
              <p className="fs-4 fw-bold mb-1 text-danger">ISBN</p>
              <p className="fw-lighter">{detailBook.ISBN}</p>
            </div>
            <div className="mb-4">
              <p className="fs-4 fw-bold mb-1">Price</p>
              <p className="fw-bold text-success">
                {convertRupiah.convert(detailBook.price)}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 w-75 m-auto py-3">
          <h1>About This Book</h1>
          <div className="aboutbook">
            <p className="fw-lighter">{detailBook.desc}</p>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-dark ">
              Add Cart{' '}
              <span className="ms-3">
                <img src={buys} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
