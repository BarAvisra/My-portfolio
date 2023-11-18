import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showButton && window.pageYOffset > 200) {
                setShowButton(true);
            } else if (showButton && window.pageYOffset <= 200) {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);

        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showButton]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`fixed bottom-5 right-5 bg-lightBlue  font-bold py-2 px-4 rounded-full ${showButton ? 'block' : 'hidden'}`}
            onClick={scrollToTop}
            title="Back to Top"
        >
            ↑
        </button>
    );
};

export default BackToTopButton;
