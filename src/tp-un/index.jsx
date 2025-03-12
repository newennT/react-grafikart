
import { Checkbox } from "./Components/Forms/Checkbox"
import { Input } from "./Components/Forms/input"
import { ProductRow } from "./Components/Product/ProductRow"
import { ProductCategoryRow } from "./Components/Product/ProductCategoryRow"
import { useState } from "react"


const PRODUCTS = [  
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

function TpUn(){

    const [showStockOnly, setShowStockOnly] = useState(false)
    const [search, setSearch ] = useState('')
    const [range, setRange ] = useState('')

    const visibleProducts = PRODUCTS.filter(product => {
        if (showStockOnly && !product.stocked){
            return false
        }

        if (search && !product.name.includes(search)){
            return false
        }

        if (range && product.price < range){
            return false
        }
        
        return true
    })

    return <>
        <SearchBar 
            range={range}
            onRangeChange={setRange}
            search={search}
            onSearchChange={setSearch}
            showStockOnly={showStockOnly} 
            onStockOnlyChange={setShowStockOnly} />
        <ProductTable products={visibleProducts} />
        
    </>
}

function SearchBar({showStockOnly, onStockOnlyChange, search, onSearchChange, range, onSetRange}){
    return <div className="container my-5">
        <div className="mb-3">
            <Input 
                value={search} 
                onChange={onSearchChange} 
                placeholder="Rechercher..."  
            />
            <Checkbox 
                id="stocked"
                checked={showStockOnly} 
                onChange={onStockOnlyChange} 
                label="N'afficher que les produits en stock" 
            />
            <input type="range" className="form-range" min={0} max={10} />
        </div>
    </div>
}

function ProductTable({products}){
    const rows = []
    let lastCategory = null

    for (let product of products){
        if (product.category !== lastCategory){
            rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
        }
        lastCategory = product.category
        rows.push(<ProductRow product={product} key={product.name} />)
    }

    return <table className="table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>

    </table>
}

export default TpUn