import { useContext, useEffect, useState } from 'react';
import productContext from '../components/ProudctContext';

const useProductContext = () => {
    const [forceUpdate, setForceUpdate] = useState(0); // 偵測 Context 是否被更新
    const state = useContext(productContext);

    useEffect(() => {
        setForceUpdate((prev) => prev + 1); // 在 useEffect 中更新 forceUpdate 狀態，強制重新渲染
    }, [state]); // 在 state 發生變化時重新渲染

    if (!state) {
        return '無效 useContext 需要搭配 ContextProvider';
    }
    return state;
};
export default useProductContext;
