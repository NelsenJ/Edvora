import React from 'react';
import "../../pages/Home.css";

export default function Quotes() {
    return (
        <>
            <section className="quotes mt-5">
                <h1 className="quotes">
                    “Pendidikan bukan tentang mempelajari fakta, tetapi melatih pikiran untuk berpikir.”
                </h1>
                <div className="quotes-source">
                    <div className="source-text">
                        <h5>Albert Einstein</h5>
                        <p>Ilmuwan</p>
                    </div>
                    <img 
                        src="/Home/albert-enstein.png" 
                        alt="Albert Einstein" 
                        className="enstein-img" 
                    />
                </div>
            </section>
        </>
    );
}
