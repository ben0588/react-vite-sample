import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const Home = () => {
    const [btnShow, setBtnShow] = useState(true);

    useEffect(() => {
        const showTopButton = () => (window.scrollY > 300 ? setBtnShow(true) : setBtnShow(false));
        window.addEventListener('scroll', showTopButton);

        return () => {
            window.removeEventListener('scroll', showTopButton);
        };
    }, []);

    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            Home
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button
                type='button'
                className='top-btn '
                style={{
                    display: btnShow ? 'flex' : 'none',
                }}
                title='回首頂端'
                onClick={() => handleGoToTop()}
            >
                <AiOutlineArrowUp style={{ width: '2rem', height: '2rem', fill: 'white' }} />
            </button>
        </div>
    );
};
export default Home;
