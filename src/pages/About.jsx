import React from "react";
import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import { Link, useNavigate } from "react-router-dom";

function About() {
  return (
    <div>
      <Navbar />
      <section className="bg-white p-4 ">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 ">
              Teman Penelitian Ilmiah untuk Mahasiswa 📄
            </h2>
            <p className="mb-4">
            Sumber daya yang mendukung mahasiswa dalam mengembangkan penelitian ilmiah mereka dengan memberikan panduan, informasi, dan bantuan dalam berbagai bidang penelitian, memungkinkan mereka untuk mencapai kesuksesan akademik dan
              kontribusi yang berharga dalam ilmu pengetahuan
            </p>
            <p>
              Merancang, melaksanakan, mempublikasikan penelitian ilmiah, dan
              mendukung pencapaian kesuksesan akademik
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <section className="bg-white p-4  ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Dalam misi mendorong inovasi untuk{" "}
              <span className="font-extrabold">200,000+</span> Penelitian Ilmiah
              📌
            </h2>
            <p className="mb-4 font-light">
              Bersama mentorme yang mendukung pengguna dalam membuat penelitian
              ilmiah. Kumpulkan informasi penting dan hubungkan sumber daya dari
              berbagai alat penelitian untuk mempermudah pengembangan penelitian
            </p>
            <p className="mb-4 font-medium">
              Percepat langkah-langkah penting dalam penelitian, hilangkan
              hambatan, dan kembangkan penelitian dengan mudah
            </p>
            <Link to='/mentoring'>
            <a
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 "
            >
              Cari jadwal
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default About;
