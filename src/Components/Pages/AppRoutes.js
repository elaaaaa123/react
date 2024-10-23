import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Sektoral from './Sektoral';
import BukuDigital from './BukuDigital';
import Dataset from './Dataset'; // Impor Dataset
import DetailDataset from './DetailDataset'; // Impor DetailDataset
import NotFound from './NotFound'; // Impor halaman 404

import { isAuthenticated } from './loginService'; // Impor isAuthenticated
import NavbarMenu from '../Molecules/Navbar/NavbarMenu';
import Footer from '../../Components/Organisms/Footer'; // Impor Footer

const AppRoutes = () => {
    const isUserAuthenticated = isAuthenticated();
    const navigate = useNavigate(); // Tambahkan ini

    const handleLogout = () => {
        console.log("User logged out");
        localStorage.removeItem('token'); // Contoh penghapusan token
        navigate('/login'); // Arahkan pengguna ke halaman login
    };

    const handleLogin = async (nip, password) => {
        // Logika autentikasi, misalnya memanggil API
        localStorage.setItem('token', 'dummy-token'); // Simulasi penyimpanan token
        navigate('/'); // Arahkan ke halaman utama setelah login
    };

    return (
        <>
            {/* Tampilkan Navbar di semua halaman kecuali Login */}
            {<NavbarMenu onLogout={handleLogout} />}

            <Routes>
                {/* Rute Login */}

                {/* Rute Autentikasi */}
                <Route path="/" element={ <Home onLogout={handleLogout} /> } />
                <Route path="/sektoral" element={ <Sektoral /> } />
                <Route path="/buku-digital" element={ <BukuDigital /> } />

                {/* Tambahkan rute Dataset */}
                <Route path="/dataset" element={ <Dataset /> } />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />


                {/* Tambahkan rute DetailDataset */}
                <Route path="/dataset/detail/:id" element={ <DetailDataset /> } />

                {/* Rute 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>

            {/* Tampilkan Footer di semua halaman kecuali Login */}
            { <Footer />}
        </>
    );
};

export default AppRoutes;
