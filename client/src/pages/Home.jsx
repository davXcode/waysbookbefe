import React, { useState } from 'react';
import CardBook from '../components/cards/CardBook';
import CardPromo from '../components/cards/CardPromo';
import Navbar from '../components/navbar/Navbar';
import { Container, Row, Modal } from 'react-bootstrap';
import styles from './Home.module.css';
import { useQuery } from 'react-query';
import { API } from '../config/api';

export default function Home() {
  const [alert, setAllert] = useState(false);

  function handleOpen() {
    setAllert(true);
  }

  function handleClose() {
    setAllert(false);
  }

  //fetching data from database
  let { data: products } = useQuery('productCache', async () => {
    const response = await API.get('/books');
    // console.log('fetching', response);
    return response.data.data.books;
  });

  let { data: promo } = useQuery('promoCaches', async () => {
    const response = await API.get('/promo-books');
    // console.log('fetching', response);
    return response.data.data.promoBooks;
  });
  // const [product1, setProduct] = useState;
  //end of fetch data

  return (
    <div className="bg-home">
      <Navbar carthome={alert} />

      <div className="home-header container">
        <h1 className=" text-center fw-normal fs-1">
          With us, you can shop online & help save your high street at the same
          time
        </h1>
      </div>

      <div className="" style={{ height: '200px' }}></div>
      <div className={`${styles.promo} mt-5`}>
        {promo?.map((item, index) => (
          <CardPromo alertpromos={handleOpen} item={item} index={index} />
        ))}
      </div>

      <Container className="mt-5 mb-4">
        <h1>List Book</h1>

        <Row md={5} sm={2} xs={2}>
          {products?.map((item, index) => (
            <CardBook item={item} index={index} />
          ))}
        </Row>
      </Container>
      <Modal show={alert} onHide={handleClose}>
        add product success
      </Modal>
    </div>
  );
}
