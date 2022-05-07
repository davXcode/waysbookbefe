import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Rectangles from '../images/Rectangles.png';
import buys from '../images/buys.svg';
import convertRupiah from 'rupiah-format';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { API } from '../config/api';
import { Modal } from 'react-bootstrap';

export default function DetailBook() {
  //fetching
  let navigate = useNavigate;
  let { id } = useParams();
  const [detailBook, setDetailBook] = useState({});

  const [trigger, setTrigger] = useState(false);
  const [carts, setCarts] = useState([]);
  const [alert, setAllert] = useState(false);
  function handleOpen() {
    setAllert(true);
  }

  function handleClose() {
    setAllert(false);
  }

  //fetch data
  let { data: product } = useQuery('productCache', async () => {
    const response = await API.get('/book/' + id);
    console.log('detailbook', response);
    return setDetailBook(response.data.data.book);
  });
  //end of fetching

  //add card
  const addCart = async () => {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    // insert to database
    await API.post(
      '/cart',
      {
        idProduct: id,
      },
      config
    ).catch((err) => console.log(err));
    handleOpen();
  };

  // useEffect(() => {
  //   API.get('/carts')
  //     .then((res) => {
  //       console.log('INI CART', res);
  //       setCarts(res.data.getCart);
  //     })
  //     .catch((err) => console.log(err));
  // }, [trigger, alert]);

  return (
    <div className="bg-home">
      <Navbar cartsss={alert} />
      <div className="container">
        <div className="row align-items-center">
          <div className=" col-lg-6 d-flex justify-content-end">
            <div style={{ width: '400px', height: '577px' }}>
              <img src={detailBook.bookImg} alt="" className="h-100 w-100" />
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
            <button className="btn btn-dark " onClick={() => addCart()}>
              Add Cart
              <span className="ms-3">
                <img src={buys} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <Modal show={alert} onHide={handleClose}>
        add product success
      </Modal>
    </div>
  );
}
