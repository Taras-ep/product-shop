import React, { useState } from 'react';
import ProductService from '../servises/ProductService.ts'
import SortDropdown from './SortDropdown.tsx';
import ProductList from './ProductList.tsx';
import '../components/shop.css'
import AddProductModal from './AddProductModal.tsx';


function Shop() {
    const [showAddProductModal, setShowAddProductModal] = useState(false)
    ProductService.getProduct(44)
    return (
        <div className="Shop">
            <div className='flex-style'>
                <SortDropdown />
                <button title='Add product' onClick={() => setShowAddProductModal(true)}>Add</button>
            </div>

            <ProductList />

            {showAddProductModal && <AddProductModal onClose={() => setShowAddProductModal(false)}/> }
        </div>
    );
}

export default Shop;

