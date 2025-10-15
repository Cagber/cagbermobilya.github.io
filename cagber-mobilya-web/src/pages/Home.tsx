import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Hoşgeldiniz Cagber Mobilya</h1>
                <p>En kaliteli mobilyaları burada bulabilirsiniz.</p>
            </main>
        </div>
    );
};

export default Home;