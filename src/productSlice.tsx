import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ProductList from './components/ProductList'
import { Product } from './servises/ProductService'

export type ProductState = {
    productList: Product[]
}

const initialState: ProductState = {
    productList: []
}

export const productSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    removeProduct: (state, action: PayloadAction<number>) => {
        const productId = action.payload

        state.productList = state.productList.filter(it => it.id !== productId)
    },
    addProduct: (state, action: PayloadAction<Product>) => {
        const product = action.payload

        state.productList.push(product)
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
        const product = action.payload

        state.productList = product
    },
  },
})


export const { removeProduct,  addProduct, setProducts} = productSlice.actions

export default productSlice.reducer