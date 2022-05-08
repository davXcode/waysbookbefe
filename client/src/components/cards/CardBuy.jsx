import React from 'react';
import Rectangles from '../../images/Rectangles.png';
import { Link } from 'react-router-dom';

export default function CardBuy({ item, index }) {
  return (
    <div className="col mb-2">
      <div className="my-4" style={{ width: '200px', height: '395px' }}>
        <div className="" style={{ width: '200px', height: '270px' }}>
          <img src={item.book.bookImg} alt="" className="h-100 w-100" />
        </div>
        <div className="d-flex" style={{ height: '125px' }}>
          <div className="m-0">
            <p className="fs-4 lh-1 my-2 fw-bold">{item.book.title}</p>
            <p className="fw-lighter my-1">By: {item.book.author}</p>
            <Link
              to={item.book.bookPdf}
              className="nav-link bg-dark text-center text-light"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
