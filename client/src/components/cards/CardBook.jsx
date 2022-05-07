import React from 'react';
import { Link } from 'react-router-dom';
import Rectangle from '../../images/Rectangle.png';
import styles from './CardBook.module.css';
import { Col } from 'react-bootstrap';

export default function CardBook() {
  return (
    <Col className="mb-3">
      <Link to={'/'} className="text-decoration-none">
        <img
          src={Rectangle}
          alt="Thumbnail"
          className={`${styles.thumbnail}`}
        />
        <h4 className={`text-dark ellipsis`}>My Own Private Mr. Cool</h4>
        <p className={styles.author}>By. Indah Hanaco</p>
        <h5 className={`${styles.price} mt-2`}>Rp. 75.000</h5>
      </Link>
    </Col>
  );
}
