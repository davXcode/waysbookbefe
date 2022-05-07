import React from 'react';
import { Link } from 'react-router-dom';
import Rectangle from '../../images/Rectangle.png';
import styles from './CardBook.module.css';
import { Col } from 'react-bootstrap';
import convertRupiah from 'rupiah-format';

export default function CardBook({ item, index }) {
  return (
    <Col className="mb-3">
      <Link
        to={'/detail/' + item.id}
        key={index}
        className="text-decoration-none"
      >
        <img
          src={item.bookImg}
          alt="Thumbnail"
          className={`${styles.thumbnail}`}
        />
        <h4 className={`text-dark ellipsis`}>{item.title}</h4>
        <p className={styles.author}>{item.author}</p>
        <h5 className={`${styles.price} mt-2`}>
          {convertRupiah.convert(item.price)}
        </h5>
      </Link>
    </Col>
  );
}
