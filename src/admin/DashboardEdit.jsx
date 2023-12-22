import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [dataToEdit, setDataToEdit] = useState({
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
    axios.get(`http://localhost:8083/dashboardmentor/${id}`)
      .then((res) => {
        setDataToEdit(res.data);
      })
      .catch((error) => {
        console.error('Gagal mengambil data:', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8083/dashboardmentor/${id}`, dataToEdit)
      .then((response) => {
        if (response.status === 200) {
          alert('Data berhasil diubah');
          navigate('/dashboardadmin');
        }
      })
      .catch((error) => {
        console.error('Terjadi kesalahan:', error);
      });
  };

  return (
    <div className='w-full mt-10'>
      <div className='px-2'>
        <h1 className='text-center font-Epilogue text-4xl font-bold'>Edit Data Mentor</h1>
      </div>
      <div className='w-1/2 mt-10 mx-auto justify-center px-10 py-5 rounded-xl bg-slate-100 shadow-lg mb-10'>
        <form action="" onSubmit={handleSubmit}>
          <div className='mt-2 justify-between'>
            <div className='px-2'>
              <p className='text-lg font-medium'>Nama Mentor</p>
              <input required type="text" value={dataToEdit.namamentor} onChange={(e) => setDataToEdit({ ...dataToEdit, namamentor: e.target.value })} className='border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200' />
            </div>
            <div className='px-2 mt-5'>
              <p className='text-lg font-medium'>Sertfikasi</p>
              <input required type="text" value={dataToEdit.sertifikasi} onChange={(e) => setDataToEdit({ ...dataToEdit, sertifikasi: e.target.value })} className='border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200' />
            </div>
            <div className='px-2 mt-5'>
              <p className='text-lg font-medium'>Spesialisasi</p>
              <input required type="text" value={dataToEdit.spesialisasi} onChange={(e) => setDataToEdit({ ...dataToEdit, spesialisasi: e.target.value })} className='border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200'/>
            </div>
            <div className='px-2 mt-5'>
              <p className='text-lg font-medium'>Minat Penelitian</p>
              <input required type="text" value={dataToEdit.minatpenelitian} onChange={(e) => setDataToEdit({ ...dataToEdit, minatpenelitian: e.target.value })} className='border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200' />
            </div>
            <div className='px-2 mt-5'>
              <p className='text-lg font-medium'>Deskripsi Mentor</p>
              <input required type="text" value={dataToEdit.deskripsimentor} onChange={(e) => setDataToEdit({ ...dataToEdit, deskripsimentor: e.target.value })} className='border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200' />
            </div>
            <div className='px-2 mt-5'>
              <p className='text-lg font-medium'>Pendidikan</p>
              <input required type="text" value={dataToEdit.pendidikan} onChange={(e) => setDataToEdit({ ...dataToEdit, pendidikan: e.target.value })} className='border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200' />
            </div>
            <div className='px-2 mt-5'>
              <p className='text-lg font-medium'>Hasil Peneliian</p>
              <input required type="text" value={dataToEdit.hasilpenelitian} onChange={(e) => setDataToEdit({ ...dataToEdit, hasilpenelitian: e.target.value })} className='border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200' />
            </div>
            <div className='px-2 mt-5'>
              <p className='text-lg font-medium'>Fee</p>
              <input required type="text" value={dataToEdit.fee} onChange={(e) => setDataToEdit({ ...dataToEdit, fee: e.target.value })} className='border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200' />
            </div>
          </div>
          <div className='px-2 items-center justify-between'>
            <p className='text-slate-500 text-sm font-medium pt-4 text-center'>*Data yang Anda inputkan akan masuk kedalam database kami!</p>
            <div className='pt-4 flex gap-2'>
              <button onClick={(e) => handleSubmit(e)} type='submit' className='bg-blue-900 h-10 w-full rounded-lg px-2 mr-2 text-sm font-semibold text-white'>Simpan</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
