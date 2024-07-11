import React, { useState, useEffect } from 'react';
import '../styles/Main.css';

function Main({ currentSection }) {
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    if (currentSection !== 'table') {
      setShowTable(false);
    }
  }, [currentSection]);

  let content;

  if (showTable) {
    content = (
      <div>
        <Navbar />
        <Table />
      </div>
    );
  } else {
        content = (
          <div>
            <section id="home" className="main-section">
            <div className="main-content">
                <div className="button-container">
            <button className="button" onClick={() => setShowTable(true)}>Borrow</button>
            </div>
              <h2 className="typing-effect">Why use digital wallet?</h2>
              <p>Digital wallets are financial applications that allow you to store funds, make transactions, and track payment histories on devices like phones and tablets.</p>
              <p>You can store all of your financial information in a digital wallet; some even let you store identification cards and driver's licenses.</p>
              <p>Digital wallets may be included in a bank's mobile app or payment apps like PayPal or Alipay.</p>
              <p>Digital wallets allow people in financially underserved parts of the world to access financial services they may not have been able to before.</p>
            </div>
            </section>
            <section id="about" className="about-section">
            <h2>About Us</h2>
          <div className="about-box">
            <p><b>Yukta Kumawat</b>
              Worked on various projects, including AI model training with OpenCV, Keras, TensorFlow, and Python; a machine learning project for early tumor detection using R; and game development with Unity 3D in C#. Enjoys playing guitar, having learned for three years from a renowned musician, and painting landscapes.
            </p>
            </div>
            <div className="about-box">
            <p><b>Parth Sonu</b>
            content to be written.
            </p>
            </div>  
        </section>
      </div>
    );
  }

  return <main>{content}</main>;
}

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Navbar</h1>
    </nav>
  );
}

function Table() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Example Stock 1</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>Example Stock 2</td>
            <td>$200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Main;
