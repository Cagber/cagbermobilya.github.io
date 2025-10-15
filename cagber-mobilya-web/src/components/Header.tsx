import React from 'react';
import './Header.css'; // Assuming you will create a Header.css for specific styles

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Cagber Mobilya</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Ana Sayfa</a></li>
                    <li><a href="/about">Hakkında</a></li>
                    <li><a href="/products">Ürünler</a></li>
                    <li><a href="/contact">İletişim</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;