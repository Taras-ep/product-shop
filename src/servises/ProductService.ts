

export interface Product {
    id?: number
    name: string
    description: string
    price: number // price in dolars cents
    count: number
}

class ProductService {

    private static readonly INIT_LOCAL_STORAGE_KEY = "ProductService.isDataInitialized"
    private static readonly PRODUCTS_LIST_LOCAL_STORAGE_KEY = "ProductService.productsList"

    constructor() {
        const isDataInitialized = localStorage.getItem(ProductService.INIT_LOCAL_STORAGE_KEY)

        if (isDataInitialized == null) {
            localStorage.setItem(ProductService.INIT_LOCAL_STORAGE_KEY, "true")

            this.addProduct({
                name: "IPhone 15 pro max",
                price: 1199 * 100,
                description: "best phonee1",
                count: 10
            })

            this.addProduct({
                name: "A IPhone 13 pro max",
                price: 799 * 100,
                description: "best phonee3",
                count: 19
            })

            this.addProduct({
                name: "X IPhone 14 pro max",
                price: 999 * 100,
                description: "best phonee2",
                count: 12
            })
        }
    }

    addProduct(product: Product) {
        if (product.id !== undefined) {
            throw new Error("Id shold be auto generated")
        }

        const productList = this.getProductList();

        product.id = productList.length

        productList.push(product)

        this.saveProductList(productList)
    }

    removeProduct(productId: number) {
        let productList = this.getProductList();

        productList = productList.filter(it => it.id !== productId)

        this.saveProductList(productList);
    }

    getProduct(productId: number): Product | null {
        return null
    }

    getAllProductsSortedByName(): Product[] {
        let productList = this.getProductList();

        productList = productList.sort((a, b) => a.name.localeCompare(b.name))
        return productList
    }

    getAllProductsSortedByCount(): Product[] {
        let productList = this.getProductList();

        productList = productList.sort((a, b) => a.count - b.count)
        return productList;
    }

    private getProductList(): Product[] {
        let productListString = localStorage.getItem(ProductService.PRODUCTS_LIST_LOCAL_STORAGE_KEY);

        if (productListString == null) {
            return [];
        }

        const productList = JSON.parse(productListString);

        return productList
    }

    private saveProductList(productList: Product[]) {
        localStorage.setItem(ProductService.PRODUCTS_LIST_LOCAL_STORAGE_KEY, JSON.stringify(productList))
    }

}

export default new ProductService()
