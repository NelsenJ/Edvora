import React from 'react';
import Home from '../../pages/Home';
import "../../pages/Home.css"
import Sidebar from '../Sidebar';
import 'boxicons';

export default function Testimoni(){
    return(
        <div className='mt-5'>
            <h1 className="sub-heading">What Student's Say</h1>
            <section className="testimoni mt-4">
                <div className="testimoni-card">
                    <p>“Belajar di Edvora bikin pelajaran jadi lebih mudah dan seru karena materinya jelas dan praktis. Sekarang saya lebih percaya diri menghadapi ujian sekolah.”
                    </p>
                    <div className="testimoni-giver">
                        <div className="profile-pict" id='kevin'>

                        </div>
                        <div className="name">
                            <h5>Kevin Wilbert Johan</h5>
                            <p>Student at SMA Ignatius Global School</p>
                        </div>
                    </div>
                </div>
                <div className="testimoni-card">
                    <p>“Edvora benar-benar membantu saya memahami pelajaran sekolah dengan cara yang menyenangkan dan interaktif. Berkat kursus ini, nilai matematika saya meningkat drastis!”
                    </p>
                    <div className="testimoni-giver">
                        <div className="profile-pict" id='nelsen'>

                        </div>
                        <div className="name">
                            <h5>Nelsen Johnathan</h5>
                            <p>Student at SMA Ignatius Global School</p>
                        </div>
                    </div>
                </div>
                <div className="testimoni-card">
                    <p>“Edvora adalah solusi terbaik untuk belajar mandiri di rumah! Saya berhasil memahami konsep fisika yang sebelumnya sulit berkat video dan latihan soal yang lengkap.”
                    </p>
                    <div className="testimoni-giver">
                        <div className="profile-pict" id='winson'>

                        </div>
                        <div className="name">
                            <h5>Winson</h5>
                            <p>Student at SMA Ignatius Global School</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}