import { createContext, useEffect, useReducer } from 'react';

// 建立環境
const productContext = createContext();

// 建立 reducer 控制器環境
const initialValues = {
    cart: [],
    cartTotal: 0,
};

const reducer = (state, action) => {
    const cartList = [...state.cart];
    const index = cartList.findIndex((item) => item.id === action.payload.id); // 判斷傳入的 id 是否已經加入購物車過，回傳 index 位置，存在回傳 index ，沒有則回傳 -1
    switch (action.type) {
        case 'ADD_CART_ITEMS':
            // 當 index 等於 -1，代表商品未存在，新增商品
            if (index === -1) {
                cartList.push(action.payload);
            } else {
                // 當不等於 -1 時，代表商品已存在 所以將指定 index 位置的 qty 數量 +1
                cartList[index].qty += +1;
            }
            return {
                ...state,
                cart: cartList,
            };

        default:
            return state;
    }
};

// 使用環境
export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues);

    const handleAddCartItems = (value) => {
        dispatch({
            type: 'ADD_CART_ITEMS',
            payload: value,
        });
    };

    useEffect(() => {
        console.log(state);
    }, [state]);

    const value = {
        state,
        handleAddCartItems,
    };
    return <productContext.Provider value={value}>{children}</productContext.Provider>;
};

export default productContext;
