import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from '../includes/Navbar';
import Footer from '../includes/Footer';

function Login() {
  const [token, setToken] = useState('');

  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');

  const usenavigate = useNavigate();

  const prosesLogin = (e) => {
    e.preventDefault();
    
    if (validasi()) {
      fetch(`http://localhost:8083/akunuser/${username}`).then((res) => {
        console.log("Database Password:", res.password);
        console.log("Entered Password:", password);
        return res.json();
      }).then((resp) => {
        alert(`Selamat datang ${username}, anda berhasil masuk!`)
        usenavigate('/jadwal');
      }).catch((err) => {
        toast.error('Login Failed due to :' + err.message);
      }); 
    }
  }

  const validasi = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      alert('Isi username')
    }
    if (password === '' || password === null) {
      result = false;
      alert('Isi password')
    }
    return result;

  }

  return (
    <div>
      <Navbar/>
    <div className=' w-1/2 mx-auto p-5 mt-10 mb-10 rounded-xl shadow-xl'>
      <form className='container' onSubmit={prosesLogin} >
        <div className='card-body'>
          <div className='card-header mb-5'>
            <h1 className='font-Epilogue font-semibold text-3xl'>Halo, Yuk login 😁</h1>
          </div>
          <div className='card-body'>
            <div className='mb-4'>
              <p className='font-Montserrat mb-2'>Username</p>
              <input  required type="text" value={username} onChange={e => usernameupdate(e.target.value)} className='border w-full rounded-md px-2 h-10 border-blue-200'/>
            </div>
            <div className='mb-4'>
              <div className='mb-2 flex flex-wrap justify-between'>
              <p className=''>Password</p>
              <p className='text-blue-500'>Lupa Sandi?</p>
              </div>
              <input required type="password" value={password} onChange={e => passwordupdate(e.target.value)} className='border w-full rounded-md px-2 h-10 border-blue-200'/>
            </div>
          </div>
          <div className='card-footer mt-10'>
            <button type='submit' className='w-full bg-blue-700 h-10 rounded-lg font-semibold text-white'>Login</button>
          <div className='flex justify-center p-5'>
            <p className='text-center mt-2 text-sm'>Belum Punya Akun? <Link to='/register'><a className='font-semibold text-blue-700'>Yuk Daftar! 🥶</a></Link></p>
          </div>
          </div>
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Login