import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Jadwal() {
  const [dashboardmentor, setDashboardMentor] = useState([]);
  
  useEffect(() => {
    ReadDatabase();
  }, []);

  const ReadDatabase = () => {
    axios.get("http://localhost:8083/datajadwal")
      .then((res) => {
        setDashboardMentor(res.data);
      })
  }

  return (
    <div>
      <Navbar />
      <div className="container bg-white p-3">
      <div className="mt-7 mb-3 flex">
          <h3 className=" font-bold p-2 mx-auto text-4xl inline-block bg-contain">
            Jadwal Mentoring Anda 👋
          </h3>
        </div>
        {dashboardmentor.map((data, id) => (
        <div key={id} className=" w-full p-4">
          <div className="flex flex-col justify-start p-5 h-auto rounded-xl border-2 bg-gray-50 border-gray-200">
            <h6 className="font-semibold mb-5 text-lg">
              {data.judulmentoring}
            </h6>
            <div className="md:flex ">
              <div className=" w-full p-4 mb-3 md:mr-3 rounded border-2 border-gray-200">
                <h1 className="font-semibold">Waktu :</h1>
                <h1>{data.jadwal}</h1>
              </div>
              <div className=" w-full p-4 mb-3 md:mr-3 rounded border-2 border-gray-200">
                <h1 className="font-semibold">Mentor : </h1>
                <h3>{data.namamentor}</h3>
              </div>
              <div className="w-full p-4 mb-3 md:mr-3 rounded border-2 border-gray-200">
                <h1 className="font-semibold">Fee Mentoring : </h1>
                <h3>{data.fee}</h3>
              </div>
              <div className="md:w-1/4 xs:mt-3 items-center md:mr-3 flex justify-end ">
              <a href={data.tempat} target="_blank">
                <button className="bg-blue-700 h-[6.6rem] -mt-2 text-white hover:bg-blue-800 font-semibold p-2 rounded">
                  Tautan Zoom
                </button>
                </a>
              </div>
            </div>
            <h6 className="font-semibold p-2 mb-5 text-lg">
            <h1 className="font-semibold">Request :</h1>
              <p className="font-medium">{data.request}</p>
            </h6>
          </div>
        </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Jadwal;
