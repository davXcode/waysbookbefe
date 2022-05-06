import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ic from '../images/ic_attach.png';
import add from '../images/addBtn.png';

export default function AddBook() {
  return (
    <div className="bg-homes">
      <Navbar />
      <form>
        <div className="container form-book">
          <h3 className="mb-4">Add Book</h3>
          <input
            type="text"
            placeholder="Title"
            className="form-control mb-3 "
          />
          <input
            type="text"
            placeholder="Author"
            className="form-control mb-3 "
          />
          <input
            type="text"
            placeholder="Publication Date"
            className="form-control mb-3"
          />
          <input
            type="text"
            placeholder="Pages"
            className="form-control mb-3"
          />
          <input type="text" placeholder="ISBN" className="form-control mb-3" />
          <input
            type="number"
            placeholder="Price"
            className="form-control mb-3"
          />
          <textarea
            name=""
            id=""
            className="w-100 px-2 py-2 rounded "
            placeholder="About This Book"
          ></textarea>
          <div className="form-group mt-3">
            <input
              type="file"
              id="actual-btn"
              name="bookAttachment"
              className="inputFile "
              hidden
            />
            <label htmlFor="actual-btn" className="btn border border-dark">
              Attache Pdf File
              <img className="float-right ml-3" src={ic} alt="" />
            </label>
          </div>
          <div className="form-group mt-3  ">
            <input
              type="file"
              id="actual-btn2"
              name="thumbnail"
              className="inputFile"
              hidden
            />
            <label htmlFor="actual-btn2" className="btn border border-dark">
              Attache Book File
              <img className="float-right ml-2" src={ic} alt="" />
            </label>
          </div>
          <div className="text-end pb-5">
            <button className="mt-3 btn btn-secondary  " type="submit">
              Add Book
              <img className="ms-2 " src={add} alt="" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
