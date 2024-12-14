import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Warna kustom
const customStyles = {
  skyBlue: 'rgb(125, 175, 254)',
  darkBlue: 'rgb(31, 80, 154)',
  lightBlue: 'rgb(187, 230, 255)',
  white: '#ffffff',
  gradientBackground: 'linear-gradient(135deg, rgb(125, 175, 254) 0%, rgb(31, 80, 154) 100%)'
};

const KelasDetail = () => {
  const { id } = useParams();
  const [kelasData, setKelasData] = useState(null);
  const [activeSection, setActiveSection] = useState('materi');
  const [selectedMateri, setSelectedMateri] = useState(null);

  // Simulasi pengambilan data kelas
  useEffect(() => {
    // Dalam prakteknya, ganti dengan pemanggilan API sebenarnya
    const fetchKelasDetail = async () => {
      try {
        // Mock data kelas
        const mockKelasData = {
          id: id,
          nama: 'Matematika Dasar',
          materi: [
            {
              id: '1',
              judul: 'Pengenalan Matematika',
              deskripsi: 'Konsep dasar matematika',
              konten: [
                { 
                  tipe: 'teks', 
                  isi: 'Matematika adalah ilmu yang mempelajari pola dan struktur.' 
                },
                { 
                  tipe: 'gambar', 
                  url: 'https://via.placeholder.com/400x300?text=Matematika+Dasar' 
                }
              ]
            }
          ],
          latihan: [
            {
              id: '1',
              judul: 'Kuis Matematika',
              pertanyaan: 'Berapa hasil 5 + 3?',
              pilihan: [
                { id: 'a', teks: '7' },
                { id: 'b', teks: '8' },
                { id: 'c', teks: '9' },
                { id: 'd', teks: '10' }
              ]
            }
          ]
        };

        setKelasData(mockKelasData);
        // Set materi pertama sebagai default
        setSelectedMateri(mockKelasData.materi[0]);
      } catch (error) {
        console.error("Gagal mengambil detail kelas:", error);
      }
    };

    fetchKelasDetail();
  }, [id]);

  // Render loading jika data belum tersedia
  if (!kelasData) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="container-fluid p-0" 
      style={{ 
        background: customStyles.gradientBackground, 
        minHeight: '100vh' 
      }}
    >
      {/* Header Kelas */}
      <div 
        className="text-center py-4 mb-4 text-white" 
        style={{ 
          background: 'rgba(255,255,255,0.1)', 
          backdropFilter: 'blur(10px)' 
        }}
      >
        <h1 className="display-6">{kelasData.nama}</h1>
      </div>

      {/* Navigasi Konten */}
      <div className="container mb-4">
        <ul className="nav nav-pills nav-fill bg-white rounded-pill shadow-sm">
          <li className="nav-item">
            <button 
              className={`nav-link rounded-pill ${activeSection === 'materi' ? 'active' : ''}`}
              onClick={() => setActiveSection('materi')}
            >
              Materi
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link rounded-pill ${activeSection === 'latihan' ? 'active' : ''}`}
              onClick={() => setActiveSection('latihan')}
            >
              Latihan
            </button>
          </li>
        </ul>
      </div>

      {/* Konten Materi */}
      {activeSection === 'materi' && (
        <div className="container">
          <div className="row">
            {/* Daftar Materi */}
            <div className="col-md-3">
              {kelasData.materi.map(item => (
                <div 
                  key={item.id} 
                  className={`card mb-2 ${selectedMateri?.id === item.id ? 'border-primary' : ''}`}
                  onClick={() => setSelectedMateri(item)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-body">
                    <h6 className="card-title">{item.judul}</h6>
                  </div>
                </div>
              ))}
            </div>

            {/* Detail Materi */}
            <div className="col-md-9">
              {selectedMateri ? (
                <div className="card">
                  <div className="card-header">
                    <h4>{selectedMateri.judul}</h4>
                  </div>
                  <div className="card-body">
                    {selectedMateri.konten.map((kontenItem, index) => (
                      <div key={index}>
                        {kontenItem.tipe === 'teks' && (
                          <p>{kontenItem.isi}</p>
                        )}
                        {kontenItem.tipe === 'gambar' && (
                          <img 
                            src={kontenItem.url} 
                            alt="Materi Gambar" 
                            className="img-fluid mb-3" 
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="alert alert-info">
                  Pilih materi untuk melihat detail
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Konten Latihan */}
      {activeSection === 'latihan' && (
        <div className="container">
          <div className="row">
            {kelasData.latihan.map(soal => (
              <div key={soal.id} className="col-md-12 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{soal.judul}</h5>
                    <p>{soal.pertanyaan}</p>
                    <ul className="list-group">
                      {soal.pilihan.map(p => (
                        <li key={p.id} className="list-group-item">
                          {p.teks}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default KelasDetail;