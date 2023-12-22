import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function batasankata(kata, batas) {
  const katakata = kata.split(" ");
  if (katakata.length > batas) {
    return katakata.slice(0, batas).join(" ") + "...";
  }
  return kata;
}

function Mentoring() {
  const [dashboardmentor, setDashboardMentor] = useState([]);
  
  useEffect(() => {
    ReadDatabase();
  }, []);

  const ReadDatabase = () => {
    axios.get("http://localhost:8083/dashboardmentor")
      .then((res) => {
        setDashboardMentor(res.data);
      })
  }

  return (
    <div>
      <Navbar />
      <main className=" bg-white">
        <div className="mt-7 mb-3 flex p-6">
          <h3 className=" font-bold mx-auto text-4xl rounded inline-block bg-contain">
            Temukan mentor Anda 🤗
          </h3>
        </div>
        <div className="flex flex-wrap justify-center py-10">
          {dashboardmentor.map((data, id) => (
            <div key={id} className="lg:w-96 md:w-1/2 sm:w-full xs:w-full w-1/3 p-4">
              <div className="p-8 rounded-xl border-2 bg-gray-50 hover:shadow-lg transition-transform transition-ease-in-out hover:transform hover:scale-[102%] border-gray-200">
                <h4 className="mb-2 text-lg font-semibold mt-4">
                  {data.namamentor}
                </h4>
                <p className="text-base">
                {batasankata(data.deskripsimentor, 15)}
                </p>
                <h3 className="mt-2 text-sm font-medium text-blue-700">
                  {data.minatpenelitian}
                </h3>

                <p className="mt-1.5 text-sm text-gray-500">
                  {data.fee}
                </p>

                <form className="mt-4 justify-center md:flex-row gap-2">
                <Link to={`/booking/${data.id}`}>
                  <button className="text-blue-700 block mb-4 w-full md:w-1/2 md:ml-1 rounded border-blue-700 border p-4 text-sm font-semibold transition hover:scale-105">
                    Booking
                  </button>
                  </Link>
                  <Link to={`/detailmentor/${data.id}`}>
                  <button className="text-white block w-full md:w-1/2 md:ml-1 rounded bg-blue-700 p-4 text-sm font-semibold transition ease-in-out hover:scale-105">
                    Details
                  </button>
                  </Link>
                </form>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Mentoring;
