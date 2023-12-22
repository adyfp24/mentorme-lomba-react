import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from '../includes/Navbar';
import Footer from '../includes/Footer';

function Register() {
  const [username, usernamechange] = useState("");
  const [nama, namachange] = useState("");
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");
  
  const navigate = useNavigate();

  const validasi = () => {
    let isProses = true;
    let pesanError = 'Masukkan data dong!';
    if (id == null || id == '') {
      isProses = false;
      pesanError += 'Username Anda'
    }
    if (username == null || username == '') {
      isProses = false;
      pesanError += 'username Anda'
    }
    if (email == null || email == '') {
      isProses = false;
      pesanError += 'Email Anda'
    }
    if (password == null || password == '') {
      isProses = false;
      pesanError += 'Password Anda'
    }

    if (!isProses) {
      toast.warning(pesanError);
    }
    return isProses;
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      let regobj = {
        username,
        nama,
        email,
        password
      };
      console.log(regobj);
      fetch(`http://localhost:8083/akunuser`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(regobj)
      }). then((res) => {
        alert('Pendaftaran Berhasil')
        navigate('/login');
      }). catch((err) => {
        console.log(err.message);
        toast.error ('Gagal: '+err.message);
      })
  }

  return (
    <div>
      <Navbar/>
    <div className=' w-1/2 mx-auto p-5 mt-10 mb-10 rounded-xl shadow-xl'>
      <form className='container' onSubmit={handleSubmit}>
        <div className='card-body'>
          <div className='card-header mb-5'>
            <h1 className='font-Epilogue font-semibold text-3xl'>Yuk, bikin akunmu 🤗</h1>
          </div>
          <div className='card-body'>
            <div className='mb-4'>
              <p className='font-Montserrat mb-2'>Username</p>
              <input required value={username} onChange={e => usernamechange(e.target.value)} type="text" className='border w-full rounded-md px-2 h-10 border-blue-200'/>
            </div>
            <div className='mb-4'>
              <p className='font-Montserrat mb-2'>Nama Lengkap</p>
              <input required value={nama} onChange={e => namachange(e.target.value)} type="text" className='border w-full rounded-md px-2 h-10 border-blue-200'/>
            </div>
            <div className='mb-4'>
              <p className='font-Montserrat mb-2'>Email</p>
              <input required value={email} onChange={e => emailchange(e.target.value)} type="email" className='border w-full rounded-md px-2 h-10 border-blue-200'/>
            </div>
            <div className='mb-4'>
              <p className='font-Montserrat mb-2'>Password</p>
              <input required value={password} onChange={e => passwordchange(e.target.value)} type="password" className='border w-full rounded-md px-2 h-10 border-blue-200'/>
            </div>
            <div className='mb-4'>
              <p className='font-Montserrat mb-2'>Confirm Password</p>
              <input required type="password" className='border w-full rounded-md px-2 h-10 border-blue-200'/>
            </div>
          </div>
          <div className='card-footer mt-10'>
            <button type='submit' className='w-full bg-blue-700 h-10 rounded-lg font-semibold text-white'>Bikin akunmu!</button>
            <div className="">
            <p className='text-center mt-2 text-sm'>Sudah punya akun? <Link to='/login'><span className='text-blue-700 font-semibold'>Yuk, login!</span></Link></p>
            </div>
          </div>
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Register;