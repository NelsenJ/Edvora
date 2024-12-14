import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AcademyIndex = () => {
  const [activeTab, setActiveTab] = useState('dipelajari');

  const customStyles = {
    skyBlue: 'rgb(125, 175, 254)',
    darkBlue: 'rgb(31, 80, 154)',
    lightBlue: 'rgb(187, 230, 255)',
  };

  return (
    <div className="container-fluid p-0">
      {/* Title Section */}
      <div 
        className="text-center py-4 mb-3" 
        style={{ 
          backgroundColor: customStyles.lightBlue, 
          color: customStyles.darkBlue 
        }}
      >
        <h2 className="fw-bold">Progress Belajar</h2>
      </div>

      {/* Navigation Tabs */}
      <div className="container mb-4">
        <div className="row">
          <div className="col-12">
            <ul className="nav nav-pills nav-fill mb-3">
              <li className="nav-item">
                <button 
                  className={`nav-link w-100 ${activeTab === 'dipelajari' ? 'active' : ''}`}
                  style={{
                    backgroundColor: activeTab === 'dipelajari' ? customStyles.darkBlue : 'transparent',
                    color: activeTab === 'dipelajari' ? 'white' : customStyles.darkBlue,
                    border: `2px solid ${customStyles.skyBlue}`
                  }}
                  onClick={() => setActiveTab('dipelajari')}
                >
                  Kelas yang Dipelajari
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link w-100 ${activeTab === 'diselesaikan' ? 'active' : ''}`}
                  style={{
                    backgroundColor: activeTab === 'diselesaikan' ? customStyles.darkBlue : 'transparent',
                    color: activeTab === 'diselesaikan' ? 'white' : customStyles.darkBlue,
                    border: `2px solid ${customStyles.skyBlue}`
                  }}
                  onClick={() => setActiveTab('diselesaikan')}
                >
                  Kelas yang Diselesaikan
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            {activeTab === 'dipelajari' && (
              <div 
                className="card shadow-sm"
                style={{ backgroundColor: 'rgb(247, 250, 252)' }}
              >
                <div className="card-body">
                  <h5 className="card-title">Kelas Sedang Dipelajari</h5>
                  {/* Daftar Kelas Dipelajari */}
                  <div className="row">
                    {/* Contoh Card Kelas */}
                    <div className="col-md-4 mb-3">
                      <div 
                        className="card h-100" 
                        style={{ borderColor: customStyles.skyBlue }}
                      >
                        <div className="card-body">
                          <h6 className="card-title">Nama Kelas</h6>
                          <p className="card-text text-muted">Deskripsi Singkat</p>
                          <div className="progress">
                            <div 
                              className="progress-bar" 
                              role="progressbar" 
                              style={{ 
                                width: '50%', 
                                backgroundColor: customStyles.darkBlue 
                              }}
                            >
                              50%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'diselesaikan' && (
              <div 
                className="card shadow-sm"
                style={{ backgroundColor: 'rgb(247, 250, 252)' }}
              >
                <div className="card-body">
                  <h5 className="card-title">Kelas Telah Diselesaikan</h5>
                  {/* Daftar Kelas Diselesaikan */}
                  <div className="row">
                    {/* Contoh Card Kelas */}
                    <div className="col-md-4 mb-3">
                      <div 
                        className="card h-100" 
                        style={{ borderColor: customStyles.skyBlue }}
                      >
                        <div className="card-body">
                          <h6 className="card-title">Nama Kelas</h6>
                          <p className="card-text text-muted">Deskripsi Singkat</p>
                          <span 
                            className="badge" 
                            style={{ 
                              backgroundColor: customStyles.darkBlue, 
                              color: 'white' 
                            }}
                          >
                            Selesai
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyIndex;