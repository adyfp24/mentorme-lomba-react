import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function DetailMentor() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [ReadData, setReadData] = useState({
    namamentor: '',
    sertifikasi: '',
    spesialisasi: '',
    minatpenelitian: '',
    deskripsimentor: '',
    pendidikan: '',
    hasilpenelitian: '',
    fee: '',
    edit: ''
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8083/dashboardmentor/${id}`)
      .then((res) => {
        setReadData(res.data);
      })
      .catch((error) => {
        console.error("Gagal mengambil data:", error);
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      <main className="w-full mb-28">
        <div className="flex w-full py-5">
          <h2 className="text-4xl md:mt-6 md:mb-6 mx-auto font-semibold text-gray-800 leading-tight">Detail Mentor 👨‍💻</h2>
        </div>
        <div className="w-4/5 mx-auto p-5 border rounded-lg shadow-xl border-blue-500 transition-transform hover:transform transition-ease-in-out hover:shadow-2xl">
          <div className="">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 leading-tight">{ReadData.namamentor}</h2>
            <div className="w-full flex transition-transform transition-ease-in-out hover:transform hover:scale-[101%]">
              <p className="bg-blue-700 rounded-md p-2 text-white">{ReadData.deskripsimentor}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl my-5 font-semibold text-gray-800 leading-tight ">Spesialisasi Keilmuwan</h2>
            <div className="w-full flex">
              <p className="bg-blue-700 hover:transform hover:scale-[102%] transition-transform transition-ease-in-out rounded-md p-2 text-white">{ReadData.spesialisasi}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl my-5 font-semibold text-gray-800 leading-tight">Fee Mentoring</h2>
            <div className="w-full flex">
              <p className="bg-blue-700 rounded-md p-2 text-white hover:transform hover:scale-[102%] transition-transform transition-ease-in-out">{ReadData.fee}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl my-5 font-semibold text-gray-800 leading-tight">Pendidikan</h2>
            <div className="w-full flex">
              <p className="bg-blue-700 hover:transform hover:scale-[102%] transition-transform transition-ease-in-out rounded-md p-2 text-white">{ReadData.pendidikan}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl my-5 font-semibold text-gray-800 leading-tight">Hasil Penelitian</h2>
            <div className="w-full flex">
              <p className="bg-blue-700 hover:transform hover:scale-[102%] transition-transform transition-ease-in-out rounded-md p-2 text-white">{ReadData.hasilpenelitian}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl my-5 font-semibold text-gray-800 leading-tight">Sertifikasi</h2>
            <div className="w-full flex">
              <p className="bg-blue-700 hover:transform hover:scale-[102%] transition-transform transition-ease-in-out rounded-md p-2 text-white">{ReadData.sertifikasi}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DetailMentor;
