import React from 'react';
import Home from '../../pages/Home';
import "../../pages/Home.css"
import Sidebar from '../Sidebar';
import 'boxicons';

export default function Intro() {
    return(
        <>
            <section className="intro">
                <div className="intro-text mt-5 px-3">
                    <h1 className='heading'>
                        The <span className="blue-highlight">First Choice</span> To The Best <span className="blue-highlight">Future</   span>
                    </h1>
                    <p>
                        Edvora adalah platform nonprofit dengan     misi memberikan edukasi yang bermutu    untuk siapapun, dimanapun.
                    </p>

                    <a href="#" className=''>
                        <button className='btn text-dark'>
                            Daftar Sekarang
                        </button>
                    </a>
                </div>
                <div className="intro-image">
                    
                </div>
            </section>
            <section className="intro-box">
                <div className="box-card">
                    <div className="icon-wrap">
                        <i class='bx bx-brain' ></i>
                    </div>
                    <div className="box-card-desc">
                        <h1>Free Access All  Course</h1>
                        <p>Akses semua kursus gratis dan pelajari dengan mendalam, fokus pada pemahaman konsep, bukan sekadar hafalan atau cara instan.</p>
                    </div>
                </div>
                <div className="box-card">
                    <div className="icon-wrap">
                        <i class='bx bx-globe'></i>
                    </div>
                    <div className="box-card-desc">
                        <h1>Access for everyone 
                        and everywhere</h1>
                        <p>Belajar jadi lebih mudah dengan akses gratis untuk semua, kapan saja, dan di mana saja. Fokus pada pemahaman, bukan sekadar hafalan.</p>
                    </div>
                </div>
                <div className="box-card">
                    <div className="icon-wrap">
                        <i class='bx bx-smile' ></i>
                    </div>
                    <div className="box-card-desc">
                        <h1>Learning with game experience</h1>
                        <p>Rasakan belajar seru seperti bermain game, fokus pada pemahaman konsep sambil menikmati pengalaman interaktif dan menyenangkan.</p>
                    </div>
                </div>
            </section>
        </>
    )
}