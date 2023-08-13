import { useEffect, useState } from 'react';
import { ProductProvider } from './components/ProudctContext';
import useProductContext from './hooks/useProductContext';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const result = await axios.get('/data.json');
                console.log(result.data);
                setData(result.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div>
            測試中2
            {data.length ? <img src={data[0].image} alt='' /> : null}
        </div>
    );
}

export default App;
