import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Booking() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [ReadData, setReadData] = useState({
    namamentor: "",
    judulmentoring: "",
    fee: "",
    tempat: "",
    jadwal: "",
    edit: "",
  });

  useEffect(() => {
  if (id) {
    axios
      .get(`http://localhost:8083/dashboardmentor/${id}`)
      .then((res) => {
        setReadData(res.data);
      })
      .catch((error) => {
        console.error("Gagal mengambil data:", error);
      });
  }
}, [id]);

const [request, requestchange] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = {
      judulmentoring: ReadData.judulmentoring,
      jadwal: ReadData.jadwal,
      tempat: ReadData.tempat,
      namamentor: ReadData.namamentor,
      fee: ReadData.fee,
      request
    };

    console.log(regobj);
    fetch("http://localhost:8083/datajadwal", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(regobj)
    }). then((res) => {
      alert('Booking Berhasil')
      navigate('/jadwal');
    }). catch((err) => {
      alert('Gagal')
    })
}
  

  return (
    <div>
      <Navbar />
      <main className="flex flex-col md:flex-row justify-center items-center md:mt-3 md:mb-24 p-5">
        <div className="md:w-1/2 ml-4 mt-4">
          <div className="md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl font-semibold mb-4 text-blue-700">{ReadData.judulmentoring}</h2>
              <h2 className="text-2xl font-semibold text-blue-700">{ReadData.namamentor}</h2>
              <hr className="bg-blue-700" />
              <p className="py-2 text-xl text-blue-700 font-semibold justify-center">Rp {ReadData.fee}</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-2">
            <div className="px-4 lg:px-0 mt-4 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <div>
                <h2 className="text-2xl text-blue-700 font-semibold mb-1 mt-1">Tempat</h2>
                <hr className="bg-blue-700" />
                <p className="pb-6 text-blue-700 font-semibold">{ReadData.tempat}</p>
              </div>
              <div>
                <h2 className="text-2xl text-blue-700 font-semibold mb-1 mt-1">Waktu</h2>
                <hr className="bg-blue-700" />
                <p className="pb-6 text-blue-700 font-semibold">{ReadData.jadwal}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 ml-4 mr-6">
          <div className="w-full lg:w-1/4 mt-4 m-auto max-w-screen-sm">
            <div className="p-4 border-blue-700 rounded-lg shadow-xl border-2 md:border md:rounded">
              <div className="flex py-2">
                <p className="font-semibold text-gray-700 text-lg">Request Topik Mentoring</p>
              </div>
              <p className="text-gray-700 py-3">Harap melakukan request yang sesuai dengan bidang, minat, dan penelitian ilmiah yang sedang kamu jalani</p>
              <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 ">
                <div className="py-2 px-4 bg-white rounded-b-lg ">
                  <textarea
                  value={request}
                  onChange={e => requestchange(e.target.value)}
                    id="editor"
                    rows="8"
                    className="block px-0 w-full text-sm text-gray-800 bg-white border-0  focus:ring-0"
                    placeholder="Masukkan request Anda 🤗..."
                    required
                  ></textarea>
                </div>
              </div>
              <button onClick={handleSubmit} type="submit" className="px-2 py-2 text-gray-100 bg-blue-700 hover:bg-blue-800 flex w-full items-center justify-center rounded">
                Checkout
                <i className="bx bx-user-plus ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Booking;
