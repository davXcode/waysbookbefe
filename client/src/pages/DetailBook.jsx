import React from "react";
import Navbar from "../components/navbar/Navbar";
import Rectangles from "../images/Rectangles.png";
import buys from "../images/buys.svg";

export default function DetailBook() {
  return (
    <div className="bg-home">
      <Navbar />
      <div className="container">
        <div className="row align-items-center">
          <div className=" col-lg-6 d-flex justify-content-end">
            <div style={{ width: "400px", height: "577px" }}>
              <img src={Rectangles} alt="" className="h-100 w-100" />
            </div>
          </div>
          <div className="col-lg-4">
            <h1 className="fw-bolder">My Own Private Mr Cool</h1>
            <h3 className="fw-lighter fs-4 mb-5">By. Indah Hanaco</h3>
            <div className="mb-4">
              <p className="fs-4 fw-bold mb-1">Publication Date</p>
              <p className="fw-lighter">Agustus 2007</p>
            </div>
            <div className="mb-4">
              <p className="fs-4 fw-bold mb-1">Pages</p>
              <p className="fw-lighter">200</p>
            </div>
            <div className="mb-4">
              <p className="fs-4 fw-bold mb-1 text-danger">ISBN</p>
              <p className="fw-lighter">1234567890</p>
            </div>
            <div className="mb-4">
              <p className="fs-4 fw-bold mb-1">Price</p>
              <p className="fw-bold text-success">Rp. 75.000</p>
            </div>
          </div>
        </div>
        <div className="mt-5 w-75 m-auto py-3">
          <h1>About This Book</h1>
          <div className="aboutbook">
            <p className="fw-lighter">
              Bagi Heidy Theapila, latar belakang keluarga membuatnya tak mudah
              menemukan pasangan sejiwa. Tapi, ceritanya berbeda dengan Mirza.
              Heidy meyakini lelaki itu mencintainya dengan tulus. Namun,
              keyakinannya tumbang. Pertemuan mereka bukan cuma karena campur
              tangan Allah semata. Melainkan karena skenario rapi yang berkaitan
              dengan materi. Marah sekaligus patah hati, Heidy membatalkan
              rencana masa depannya dan memilih kabur ke Italia. Langkahnya
              mungkin tak dewasa, tapi Heidy butuh ruang untuk meninjau ulang
              semua rencana dalam hidupnya. Lalu, Allah memberinya kejutan.
              Dalam pelayaran menyusuri Venesia, Heidy bertemu raksasa bermata
              biru. Graeme MacLeod, pria yang mencuri napasnya di pertemuan
              pertama mereka. Meski ketertarikan di antara mereka begitu besar,
              Heidy tidak berniat menjalin asmara singkat. Graeme harus
              dilupakan. Ketika apa yang terjadi di Venesia tidak bisa tetap
              ditinggal di Venesia, Heidy mulai goyah. Apalagi Graeme ternyata
              lelaki gigih yang mengejarnya hingga ke Jakarta dan tak putus asa
              tatkala ditolak. Meski akhirnya satu per satu rahasia kelam lelaki
              itu terbuka, Heidy justru kian jatuh cinta. Pertanyaannya, apakah
              cinta memang benar-benar mampu menyatukan mereka?
            </p>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-dark ">
              Add Cart{" "}
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
