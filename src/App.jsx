import { useEffect, useState } from 'react';
import { ProductProvider } from './components/ProudctContext';
import useProductContext from './hooks/useProductContext';
import axios from 'axios';

function App() {
    // const [count, setCount] = useState(0);
    const value = useProductContext();

    useEffect(() => {
        (async () => {
            try {
                const result = await axios.get('./src/data/data.json');
                console.log(result.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <ProductProvider>
            <div>測試中</div>
        </ProductProvider>
    );
}

export default App;
