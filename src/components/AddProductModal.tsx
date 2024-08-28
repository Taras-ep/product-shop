import React, { useState } from "react"
import ReactDOM from "react-dom"
import Modal from "./Modal.tsx"
import ProductService, { Product } from "../servises/ProductService.ts"
import { useDispatch } from "react-redux"

import { addProduct } from "../productSlice.tsx"

type Props = {
    onClose: () => void
}

function AddProductModal({ onClose }: Props) {
    const [isOpen, setIsOpen] = useState(true)

    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productCount, setProductCount] = useState("")

    const dispatch = useDispatch()

    if (!isOpen) {
        onClose()
        return null;
    }

    return <Modal>
        <div>
            Name:
            <input
                title="Product Name"
                type="text"
                id="name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />

            <div>
                Description:
                <input
                    title="Product Description"
                    type="text"
                    id="description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                />
            </div>

            <div>
                Price:
                <input
                    title="Product Description"
                    type="text"
                    id="price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                />
            </div>

            <div>
                Count:
                <input
                    title="Product Description"
                    type="text"
                    id="count"
                    value={productCount}
                    onChange={(e) => setProductCount(e.target.value)}
                />
            </div>



            <button title="Add Product" onClick={() => {
                let count = Number(productCount)
                let price = Number(productPrice)

                if (Number.isNaN(price)) {
                    alert("Incorrect price")
                } else  if (Number.isNaN(count)) {
                    alert("Incorrect count")
                } else {
                    let product: Product = {
                        name: productName,
                        count: count,
                        price: price,
                        description: productDescription,

                    }

                    ProductService.addProduct(product)
                    dispatch(addProduct(product))

                    setIsOpen(false)
                }
            }}>
                Add Product
            </button>

            <button title="Close" onClick={() => {
                setIsOpen(false)
                onClose()
            }}>
                Close
            </button>
        </div>
    </Modal>
}

export default AddProductModal