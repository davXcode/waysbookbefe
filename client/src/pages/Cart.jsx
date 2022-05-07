import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import rupiahFormat from 'rupiah-format';
import CardCart from '../components/cards/CardCart';
import Navbar from '../components/navbar/Navbar';
import { API } from '../config/api';
import attach from '../images/AttacheTransaction.png';

export default function Cart() {
  const navigate = useNavigate;
  const [carts, setCarts] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [alert, setAllert] = useState(false);

  function handleOpen() {
    setAllert(true);
  }

  function handleClose() {
    setAllert(false);
  }

  useEffect(() => {
    API.get('/carts')
      .then((res) => {
        console.log('INI CART', res);
        setCarts(res.data.getCart);
      })
      .catch((err) => console.log(err));
  }, [trigger, alert]);

  return (
    <div className="bg-homes">
      <Navbar />
      <div className="container cart-bg ">
        <div className="col">
          <div>
            <h3 className="mb-lg-5 mb-2">My Cart</h3>
            <p>Review Your Order</p>
          </div>
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="border border-dark mb-2"></div>
              {carts.map((item, index) => (
                <CardCart anjay={handleOpen} item={item} index={index} />
              ))}
              <div className="border border-dark mb-2"></div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="border border-dark"></div>
              <div className="d-flex justify-content-between">
                <p className=" my-2 fw-bold">SubTotal</p>
                <p className=" my-2 fw-normal">
                  {rupiahFormat.convert(
                    carts
                      .map((item) => {
                        return item.total;
                      })
                      .reduce((a, b) => a + b, 0)
                  )}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className=" my-2 fw-bold">Qty</p>
                <p className=" my-2 fw-normal">
                  {carts
                    .map((item) => {
                      return item.qty;
                    })
                    .reduce((a, b) => a + b, 0)}
                </p>
              </div>

              <div className="border border-dark"></div>

              <div className="d-flex justify-content-between">
                <p className="text-success my-2 fw-bold">Total</p>
                <p className="text-success my-2 fw-bold">
                  {rupiahFormat.convert(
                    carts
                      .map((item) => {
                        return item.total;
                      })
                      .reduce((a, b) => a + b, 0)
                  )}
                </p>
              </div>

              <form className="">
                <button type="submit" className="btn btn-dark w-100">
                  Pay
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Modal show={alert} onHide={handleClose}>
        remove product success
      </Modal>
    </div>
  );
}
