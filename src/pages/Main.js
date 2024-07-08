import React from "react";

function Main({ currentSection })
{
    const handleButtonClick = () => {
        alert("Button Clicked!");
    }
    let content;

    switch(currentSection){
        case 'home':
        content = (
            <div>
                <button onClick={handleButtonClick}>Borrow </button>
                <h2>Why use digital wallet?</h2>
                <p>Digital wallets are financial applications that allow you to store funds, make transactions, and track payment histories on devices like phones and tablets.</p>
                <p>You can store all of your financial information in a digital wallet; some even let you store identification cards and driver's licenses.</p>
                <p>Digital wallets may be included in a bank's mobile app or payment apps like PayPal or Alipay.</p>
                <p>Digital wallets allow people in financially underserved parts of the world to access financial services they may not have been able to before.
                </p>
            </div>
        );
        break;
        case 'about':
            content = <p> about section</p>;
            break;
        case 'contact':
                content = <p> Contact us section</p>;
                break;
        case 'reviews':
            content = <p> Reviews section</p>;
            break;
        default :
            content = <p> Welcome to the website.</p>;
    }
    return (
        <main>
            {content}
        </main>
    );
}
export default Main;