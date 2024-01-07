import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {

}

function Footer() {
}