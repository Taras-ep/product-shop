import React, { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem.tsx";
import ProductService, { Product } from "../servises/ProductService.ts";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, ProductState } from "../productSlice.tsx";
import { ProductRootState } from "../productStore.ts";

function ProductList() {
    const dispatch = useDispatch()

    const productList = useSelector((state: ProductRootState) => state.product.productList)

    useEffect(
        () => {
            const productList = ProductService.getAllProductsSortedByCount();
            dispatch(setProducts(productList))
        }
        , [])

    return (
        <div>
            {productList?.map(it => <ProductListItem product={it} />)}
        </div>
    )
}

export default ProductList;