import React, { useState } from "react";
import ProductService, { Product } from "../servises/ProductService.ts";
import '../components/product-list-item.css'
import ConfirmationModal from "./ConfirmationModal.tsx";
import { useDispatch } from "react-redux";
import { removeProduct } from "../productSlice.tsx";


type Props = {
    product: Product
}

function ProductListItem({ product }: Props) {
    const [showRemoveModal, setShowRemoveModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <div className="container">
            <h1>
                {product.name}
            </h1>
            <div>
                {product.description}
            </div>
            <div className="product-info">
                <div className="padding-style"> {"$" + (product.price / 100).toFixed(2)} </div>
                <div className="padding-style"> {"Count: " + product.count} </div>
            </div>
            <div className="buttons-info">
                <button title="remove" className="padding-style" onClick={() => setShowRemoveModal(true)}>Remove</button>
            </div>
            {showRemoveModal && <ConfirmationModal
                text={"Do you want to remove " + product.name + "?"}
                onYes={() => {
                    ProductService.removeProduct(product.id!)
                    dispatch(removeProduct(product.id!))
                }}
                onClose={() => setShowRemoveModal(false)} />}
        </div>
    )
}

export default ProductListItem;