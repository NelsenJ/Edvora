import React from 'react';
import Home from '../../pages/Home';
import "../../pages/Home.css"
import Sidebar from '../Sidebar';
import 'boxicons';

export default function Consultan(){
    return(
        <>
            <section className="consultan mt-5">
                <div className="consultan-image">

                </div>
                <div className="consultan-text mt-3">
                    <h2>Masih punya pertanyaan ?</h2>
                    <h1>
                        Tanya ke Konsultan Edvora aja yuk !  <a href="#"><button className='consultan-chat'>Chat Konsultan <i class='bx bx-message-rounded-dots'></i></button></a>
                    </h1>
                </div>
            </section>
        </>
    )
}