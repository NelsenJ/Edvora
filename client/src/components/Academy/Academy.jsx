import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaClock, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

// Definisi warna kustom dengan gradien
const customStyles = {
  skyBlue: 'rgb(125, 175, 254)',
  darkBlue: 'rgb(31, 80, 154)',
  lightBlue: 'rgb(187, 230, 255)',
  white: '#ffffff',
  softGray: '#f8f9fa',
  gradientBackground: 'linear-gradient(135deg, rgb(125, 175, 254) 0%, rgb(31, 80, 154) 100%)'
};

const Academy = () => {
  const navigate = useNavigate();
  const [kelas, setKelas] = useState([]);
  const [activeTab, setActiveTab] = useState('dipelajari');
  const [loading, setLoading] = useState(true);

  // Simulasi pengambilan data kelas
  useEffect(() => {
    const fetchKelas = async () => {
      try {
        const initialKelas = [
          {
            id: '1',
            nama: 'Matematika Dasar',
            deskripsi: 'Kelas matematika untuk pemula',
            kategori: 'Matematika',
            instruktur: 'Dr. Matematika',
            statusSelesai: false,
            progress: 20,
            durasi: '4 Minggu',
            tingkatKesulitan: 'Pemula',
            image: 'https://via.placeholder.com/300x200?text=Matematika'
          },
          {
            id: '2',
            nama: 'Bahasa Inggris Pemula',
            deskripsi: 'Kelas bahasa Inggris untuk pemula',
            kategori: 'Bahasa',
            instruktur: 'Ms. English',
            statusSelesai: false,
            progress: 10,
            durasi: '6 Minggu',
            tingkatKesulitan: 'Pemula',
            image: 'https://via.placeholder.com/300x200?text=Bahasa+Inggris'
          },
          {
            id: '3',
            nama: 'Pemrograman Python',
            deskripsi: 'Kelas pemrograman Python untuk pemula',
            kategori: 'Teknologi',
            instruktur: 'Pak Programmer',
            statusSelesai: true,
            progress: 100,
            durasi: '8 Minggu',
            tingkatKesulitan: 'Menengah',
            image: 'https://via.placeholder.com/300x200?text=Python'
          }
        ];

        setKelas(initialKelas);
        setLoading(false);
      } catch (error) {
        console.error("Gagal mengambil data kelas:", error);
        setLoading(false);
      }
    };

    fetchKelas();
  }, []);

  // Fungsi untuk memulai kelas
  const mulaiKelas = (kelasId) => {
    navigate(`/academy/${kelasId}`);
  };

  // Komponen KartuKelas dengan hover detail
  const KartuKelas = ({ kelasItem, selesai = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="col-md-4 mb-4 position-relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden"
        >
          <img 
            src={kelasItem.image} 
            className="card-img-top" 
            alt={kelasItem.nama} 
            style={{ height: '200px', objectFit: 'cover' }} 
          />
          <div className="card-body">
            <h5 className="card-title">{kelasItem.nama}</h5>
            <p className="card-text text-muted">{kelasItem.deskripsi}</p>
            
            <div className="d-flex justify-content-between mb-3">
              <span><FaClock className="me-2" />{kelasItem.durasi}</span>
              <span><FaBook className="me-2" />{kelasItem.tingkatKesulitan}</span>
            </div>

            {selesai ? (
              <button 
                className="btn btn-secondary w-100" 
                disabled
              >
                Kelas Selesai
              </button>
            ) : (
              <button 
                className="btn btn-primary w-100" 
                onClick={(e) => {
                  e.stopPropagation();
                  mulaiKelas(kelasItem.id);
                }}
              >
                Mulai Kelas
              </button>
            )}
          </div>
        </div>

        {/* Modal Detail Kelas */}
        {isHovered && (
          <div 
            className="modal show position-absolute" 
            style={{ 
              display: 'block', 
              top: '45%', 
              left: '135%', 
              transform: 'translate(-50%, -50%)', 
              zIndex: 1050,
              width: '90%',
              maxWidth: '400px',
            }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {kelasItem.nama}
                  </h5>
                </div>
                <div className="modal-body">
                  <div className="d-flex align-items-center mb-3">
                    <FaChalkboardTeacher className="me-2 text-primary" size={24} />
                    <strong>Instruktur: {kelasItem.instruktur}</strong>
                  </div>
                  <p className="text-muted mb-2">{kelasItem.deskripsi}</p>
                  
                  <div className="row">
                    <div className="col-6">
                      <strong>Durasi:</strong> {kelasItem.durasi}
                    </div>
                    <div className="col-6">
                      <strong>Tingkat:</strong> {kelasItem.tingkatKesulitan}
                    </div>
                  </div>

                  {!selesai && (
                    <div className="mt-3">
                      <div className="progress" style={{ height: '5px' }}>
                        <div 
                          className="progress-bar" 
                          role="progressbar" 
                          style={{ 
                            width: `${kelasItem.progress}%`, 
                            backgroundColor: customStyles.darkBlue 
                          }}
                        />
                      </div>
                      <small className="text-muted">
                        Progress: {kelasItem.progress}%
                      </small>
                    </div>
                  )}
                </div>
                <div className="modal-footer">
                  {!selesai && (
                    <button 
                      className="btn btn-primary w-100" 
                      onClick={() => mulaiKelas(kelasItem.id)}
                    >
                      Lanjutkan Belajar
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div> )}
      </div>
    );
  };

  // Render loading
  if (loading) return <div className="text-center">
        <h2>Loading...</h2>
      </div>
    ;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Edvora Academy</h1>
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'dipelajari' ? 'active' : ''}`} 
            onClick={() => setActiveTab('dipelajari')}
          >
            Kelas yang Tersedia
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'selesai' ? 'active' : ''}`} 
            onClick={() => setActiveTab('selesai')}
          >
            Kelas yang Telah Diselesaikan
          </button>
        </li>
      </ul>
      <div className="row">
        {kelas.filter(kelasItem => activeTab === 'dipelajari' ? !kelasItem.statusSelesai : kelasItem.statusSelesai).map((kelasItem) => (
          <KartuKelas key={kelasItem.id} kelasItem={kelasItem} selesai={kelasItem.statusSelesai} />
        ))}
      </div>
    </div>
  );
};

export default Academy;