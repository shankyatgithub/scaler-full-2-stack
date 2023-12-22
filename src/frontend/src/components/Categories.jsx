import React from 'react'
import { usePaginationContext } from '../contexts/PaginationContext'

function Categories(props) {
    const { categories, setCurrCategory } = props
    const { setPageNum } = usePaginationContext();
    console.log("in categories", categories)
    return (
        <>
            <button className="category_option"
                onClick={() => {
                    setCurrCategory("All categories")
                    setPageNum(1);
                }}
            >All categories</button>
            {
                categories.map((category) => {
                    return <button className="category_option"
                        onClick={() => {
                            setCurrCategory(category.id);
                            console.log("category set -", category)
                            setPageNum(1);
                    }}
                > {category.name}
            </button>
            })}
        </>
    )
}

export default Categories