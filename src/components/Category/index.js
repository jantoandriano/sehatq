import React from 'react'
import { Image, CategoryTitle, Wrapper } from "./styles"

function Category({src, title}) {
    return (
        <Wrapper>
            <Image/>
            <CategoryTitle>{title}</CategoryTitle>
        </Wrapper>
    )
}

export default Category
