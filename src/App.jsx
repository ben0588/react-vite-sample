import { useEffect, useState } from 'react';
import { ProductProvider } from './components/ProudctContext';
import useProductContext from './hooks/useProductContext';
import axios from 'axios';

function App() {
    useEffect(() => {
        (async () => {
            try {
                const result = await axios.get('/data.json');
                console.log(result.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return <div>測試中2</div>;
}

export default App;
